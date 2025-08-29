'use client';

import React, { useState, useEffect, ChangeEvent, useRef } from 'react';
import { FiPaperclip, FiSend } from 'react-icons/fi';
import Image from 'next/image';
import { Socket } from 'socket.io-client';
import { selectCurrentUser } from '../../../redux/features/auth/authSlice';
import { useAppSelector } from '../../../redux/hooks';
import {
  useGetMessagesQuery,
  useGetUsersForSidebarQuery,
  useSendMessageMutation,
} from '../../../redux/features/others/otherApi';
import { message as antdMessage } from 'antd';
import dayjs from 'dayjs';
import { getSocket } from '../../../lib/socket';

interface Message {
  _id: string;
  senderId: string;
  createdAt: string;
  text: string;
  image: string;
}

export default function MessagingApp() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  // const [file, setFile] = useState<File | null>(null);
  // const [preview, setPreview] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const [textMessage, setTextMessage] = useState('');
  const [selectedUserId, setSelectedUserId] = useState('');
  const [sendMessage] = useSendMessageMutation();
  const { user } = useAppSelector(selectCurrentUser);
  const messageEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const { data: allUsers, isLoading: usersLoading } =
    useGetUsersForSidebarQuery(undefined);
  const { data: OldMessages } = useGetMessagesQuery(selectedUserId, {
    skip: !selectedUserId,
  });

  useEffect(() => {
    if (OldMessages?.data) {
      setMessages(OldMessages?.data);
    }
  }, [OldMessages]);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const myUserId = user?.userId;

  const selectedContactData = allUsers?.data?.find(
    (c: any) => c._id === selectedUserId
  );

  // Connect to socket
  useEffect(() => {
    if (!myUserId) return;

    const socket = getSocket(myUserId);
    setSocket(socket);

    const handleConnect = () => {
      console.log('Connected to socket:', socket.id);
    };

    const handleOnlineUsers = (userIds: string[]) => {
      setOnlineUsers(userIds);
    };

    socket.on('connect', handleConnect);
    socket.on('getOnlineUsers', handleOnlineUsers);

    return () => {
      socket.off('connect', handleConnect);
      socket.off('getOnlineUsers', handleOnlineUsers);
    };
  }, [myUserId]);

  useEffect(() => {
    return () => {
      previews.forEach(url => URL.revokeObjectURL(url));
    };
  }, [previews]);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFiles = Array.from(e.target.files);
      // setFiles(prev => [...prev, ...selectedFiles]);
      setFiles([...selectedFiles]);

      // cleanup old preview
      if (previews) URL.revokeObjectURL(previews[0]);

      const newPreviews = selectedFiles.map(file => URL.createObjectURL(file));
      // setPreviews(prev => [...prev, ...newPreviews]);
      setPreviews([...newPreviews]);
    }
  };

  useEffect(() => {
    if (!socket) return;

    const handleNewMessage = (newMessage: Message) => {
      // only add message if it's from the currently selected user OR sent by me
      if (
        newMessage.senderId === selectedUserId ||
        newMessage.senderId === myUserId
      ) {
        setMessages(prev => [...prev, newMessage]);
      }
    };

    socket.on('newMessage', handleNewMessage);

    return () => {
      socket.off('newMessage', handleNewMessage);
    };
  }, [socket, selectedUserId, myUserId]);

  // Cleanup preview on unmount
  useEffect(() => {
    return () => {
      if (previews) URL.revokeObjectURL(previews[0]);
    };
  }, [previews]);

  // Send message
  const handleSendMessage = async () => {
    if (!socket || (!textMessage && !files)) return;

    if (!selectedUserId) {
      antdMessage.warning('Select a receiver!');
      return;
    }

    const formData = new FormData();
    if (textMessage) {
      formData.append('data', JSON.stringify({ text: textMessage }));
    }
    if (files) {
      formData.append('image', files[0]);
    }

    try {
      const res = await sendMessage({
        receiverId: selectedUserId,
        data: formData,
      }).unwrap();

      if (res.success) {
        const newMsg: Message = {
          _id: res.data._id,
          senderId: myUserId,
          createdAt: new Date(res.data.createdAt).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          }),
          text: res.data.text,
          image: res.data.image,
        };

        setMessages(prev => [...prev, newMsg]);
        setTextMessage('');
        setFiles([]);
        setPreviews([]);

        // reset file input so user can pick the same image again
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }
    } catch (error: any) {
      antdMessage.error(error?.data?.message || 'Something went wrong');
    }
  };

  const handleImageCancle = (idx: number) => {
    setFiles(files.filter((_, i) => i !== idx));
    setPreviews(previews.filter((_, i) => i !== idx));
    // reset file input so user can pick the same image again
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleTyping = () => {
    if (!socket) return;
    socket.emit('typing', {
      conversationId: selectedUserId,
      senderId: myUserId,
    });
  };

  const handleStopTyping = () => {
    if (!socket) return;
    socket.emit('stop-typing', {
      conversationId: selectedUserId,
      senderId: myUserId,
    });
  };

  return (
    <>
      {allUsers?.data?.length === 0 && messages.length === 0 ? (
        <div className="bg-white rounded-xl max-w-7xl mx-auto  my-12">
          <div className="max-w-xl py-20 mx-auto">
            <p className="text-xl p-7 ">
              You don&apos;t have any messages yet. They&apos;ll appear here
              once you do.
            </p>
            <div className="text-center">
              <button className="bg-[#1D69E1] text-white px-8 py-2 rounded-lg ">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex container mx-auto my-12 bg-gray-50">
          {/* Sidebar */}
          <div className="w-80 bg-white border-r border-gray-200 flex flex-col h-[80vh]">
            {/* Contacts */}
            <div className="flex-1 overflow-y-auto">
              {usersLoading ? (
                // Loading state
                <div className="flex flex-col gap-2 p-4">
                  {[...Array(5)].map((_, idx) => (
                    <div
                      key={idx}
                      className="flex items-center p-4 animate-pulse"
                    >
                      <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                      <div className="ml-3 flex-1 h-4 bg-gray-300 rounded"></div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-1">
                  {/* <div className="p-4 border-b border-gray-100">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search"
                        className="w-full pl-4 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    </div>
                  </div> */}

                  {/* Loaded users */}
                  {allUsers?.data?.map((contact: any) => {
                    const isOnline = onlineUsers.includes(contact._id);
                    return (
                      <div
                        key={contact._id}
                        onClick={() => setSelectedUserId(contact._id)}
                        className={`flex items-center p-4 hover:bg-gray-100 cursor-pointer transition-colors ${
                          selectedUserId === contact._id ? 'bg-blue-100' : ''
                        }`}
                      >
                        <div className="relative">
                          <Image
                            src={
                              contact?.image ||
                              'https://tse3.mm.bing.net/th/id/OIP.kUFzwD5-mfBV0PfqgI5GrAHaHa?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3'
                            }
                            alt={`${contact.firstName} ${contact.lastName}`}
                            className="w-12 h-12 rounded-full object-cover"
                            width={500}
                            height={500}
                          />
                          {isOnline && (
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                          )}
                        </div>
                        <div className="ml-3 flex-1">
                          <h3 className="font-medium text-gray-900 text-sm">
                            {contact.firstName} {contact.lastName}
                          </h3>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Main Chat */}
          <div className="flex-1 flex flex-col h-[80vh]">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map(msg => {
                const isMe = msg.senderId === myUserId;

                return (
                  <div
                    key={msg._id}
                    className={`flex items-start space-x-3 ${
                      isMe ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {!isMe && (
                      <Image
                        src={
                          selectedContactData?.image ||
                          'https://tse3.mm.bing.net/th/id/OIP.kUFzwD5-mfBV0PfqgI5GrAHaHa?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3'
                        }
                        alt="Sender iMAGE"
                        className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                        width={100}
                        height={100}
                      />
                    )}
                    <div className="max-w-xs lg:max-w-md">
                      {msg.image && msg.text ? (
                        <div
                          className={`inline-block max-w-xs ${
                            isMe ? 'text-right' : 'text-left'
                          }`}
                        >
                          <div
                            className={`rounded-2xl overflow-hidden ${
                              isMe
                                ? 'bg-blue-500 text-white'
                                : 'bg-blue-100 text-gray-800'
                            }`}
                          >
                            {/* Image */}
                            <Image
                              src={msg.image}
                              alt="Shared image"
                              className="rounded-t-2xl"
                              width={200}
                              height={200}
                            />
                            {/* Subtitle (text with only bottom border) */}
                            <div
                              className={`px-3 py-2 text-sm border-t ${
                                isMe ? 'border-blue-400' : 'border-blue-200'
                              }`}
                            >
                              {msg.text}
                            </div>
                          </div>
                        </div>
                      ) : msg.text ? (
                        <div
                          className={`px-4 py-2 rounded-2xl text-sm ${
                            isMe
                              ? 'bg-blue-500 text-white text-right'
                              : 'bg-blue-100 text-gray-800 text-left'
                          }`}
                        >
                          {msg.text}
                        </div>
                      ) : (
                        <div className="p-2 rounded-2xl">
                          <Image
                            src={msg.image}
                            alt="Shared image"
                            className="rounded-lg"
                            width={200}
                            height={200}
                          />
                        </div>
                      )}

                      <div
                        className={`text-xs text-gray-600 pb-2 ${
                          isMe ? 'text-right' : 'text-left'
                        }`}
                      >
                        {dayjs(msg.createdAt).format('DD MMMM YYYY @ h:mm a')}
                      </div>
                    </div>
                  </div>
                );
              })}
              <div ref={messageEndRef} />
            </div>

            {/* Message Input */}
            {selectedUserId && (
              <div>
                {previews.length > 0 && (
                  <div className="flex justify-end gap-2 p-2 overflow-x-auto">
                    {previews.map((src, idx) => (
                      <div key={idx} className="relative">
                        <Image
                          src={src}
                          alt="preview"
                          width={80}
                          height={80}
                          className="rounded-md object-cover"
                        />
                        <button
                          onClick={() => handleImageCancle(idx)}
                          className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <div className="bg-white border-t border-gray-200 p-4">
                  <div className="flex items-center space-x-3">
                    <label className="p-2 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors">
                      <FiPaperclip className="w-5 h-5" />
                      <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        onChange={handleFileUpload}
                        multiple={false} // only allow one image
                      />
                    </label>
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        value={textMessage}
                        onChange={e => {
                          setTextMessage(e.target.value);
                          handleTyping();
                        }}
                        onBlur={handleStopTyping}
                        onKeyDown={e => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleSendMessage();
                          }
                        }}
                        placeholder="Type a message..."
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <button
                      hidden={!textMessage && files.length === 0}
                      onClick={handleSendMessage}
                      className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                    >
                      <FiSend className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
