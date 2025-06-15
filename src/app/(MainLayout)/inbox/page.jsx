"use client"

import { useState } from "react"
import { FiSearch, FiPaperclip, FiSend } from "react-icons/fi"
import userImg1 from '../../../assests/cons1.png'
import userImg2 from '../../../assests/cons3.png'
import userImg3 from '../../../assests/cons2.png'
import choket from '../../../assests/choket.png'
import Image from "next/image"

export default function MessagingApp() {
  const [selectedContact, setSelectedContact] = useState("ellie")
  const [message, setMessage] = useState("")
  const [files, setFiles] = useState([])

  const contacts = [
    {
      id: "ellie",
      name: "Ellie Smith",
      role: "Handyman, Phoenix",
      time: "11:04",
      avatar: userImg1,
      online: true,
    },
    {
      id: "berlie",
      name: "Berlie Tuscani",
      role: "Handyman, Phoenix",
      time: "Thu",
      avatar: userImg2,
      online: false,
    },
    {
      id: "abd",
      name: "Abd Jacknish",
      role: "Handyman, Phoenix",
      time: "08/09",
      avatar: userImg3,
      online: false,
    },
  ]

  const messages = [
    {
      id: 1,
      sender: "ellie",
      time: "10:16",
      content: "Vel et commodo...",
      type: "text",
    },
    {
      id: 2,
      sender: "ellie",
      time: "10:16",
      content: "/placeholder.svg?height=120&width=200",
      type: "image",
    },
    {
      id: 3,
      sender: "me",
      time: "10:45",
      content: "Est, eget est quis ornare...",
      type: "text",
    },
    {
      id: 4,
      sender: "ellie",
      time: "11:04",
      content: "Vestibulum viverra lacus...",
      type: "text",
    },
    {
      id: 5,
      sender: "me",
      time: "12:37",
      content: "Donec lobortis mattis...",
      type: "text",
    },
    {
      id: 6,
      sender: "ellie",
      time: "11:04",
      content: "Ok lets do it!",
      type: "text",
    },
  ]

  const selectedContactData = contacts.find((c) => c.id === selectedContact)

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Message sent:", message)
      setMessage("")
    }
    if (files.length) {
      files.forEach((file) => {
        console.log("File uploaded:", file.name, file.size, file.type)
      })
      setFiles([])
    }
  }

  const handleFileUpload = (e) => {
    const uploadedFiles = e.target.files
    if (uploadedFiles) {
      setFiles((prev) => [...prev, ...Array.from(uploadedFiles)])
    }
  }

  return (
<>
{
    contacts.length===0 && message?.length===0?(
        <div className="bg-white rounded-xl max-w-7xl mx-auto  my-12">
            <div className="max-w-xl py-20 mx-auto">

            <p className="text-xl p-7 ">You don’t have any messages yet. They’ll appear 
here once you do.</p>
<div className="text-center">
    <button className="bg-[#1D69E1] text-white px-8 py-2 rounded-lg ">
   Start Your Project 
</button>
</div>
            </div>
        </div>
    ):(

    <div className="flex container mx-auto my-12 bg-gray-50">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-100">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-4 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
        </div>

        {/* Contacts */}
        <div className="flex-1 overflow-y-auto">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              onClick={() => setSelectedContact(contact.id)}
              className={`flex items-center p-4 hover:bg-gray-100 cursor-pointer transition-colors ${
                selectedContact === contact.id ? "bg-blue-100" : ""
              }`}
            >
              <div className="relative">
                <Image
                  src={contact.avatar}
                  alt={contact.name}
                  className="w-12 h-12 rounded-full object-cover"
                  width={500}
                  height={500}
                />
                {contact.online && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div className="ml-3 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900 text-sm">{contact.name}</h3>
                  <span className="text-xs text-gray-500">{contact.time}</span>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">{contact.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <h2 className="font-medium text-gray-900">{selectedContactData?.name}</h2>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className="flex items-start space-x-3">
              {msg.sender !== "me" && (
                <Image
                  src={selectedContactData?.avatar || userImg1}
                  alt=""
                  className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                  width={100}
                  height={100}
                />
              )}
              <div className={`flex-1 ${msg.sender === "me" ? "flex justify-end" : ""}`}>
                <div className="max-w-xs lg:max-w-md">
                  {msg.sender !== "me" && <div className="text-xs text-gray-500 mb-1">{msg.time}</div>}
                  {msg.type === "text" ? (
                    <div
                      className={`px-4 py-2 rounded-2xl text-sm ${
                        msg.sender === "me" ? "bg-blue-500 text-white ml-auto" : "bg-blue-100 text-gray-800"
                      }`}
                    >
                      {msg.content}
                    </div>
                  ) : (
                    <div className="p-3 rounded-2xl">
                      <Image
                        src={choket}
                        alt="Shared image"
                        className="rounded-lg"
                        width={100}
                        height={100}
                      />
                    </div>
                  )}
                  {msg.sender === "me" && <div className="text-xs text-gray-500 mt-1 text-right">{msg.time}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="bg-white border-t border-gray-200 p-4">
          {files.length > 0 && (
            <div className="px-2 pb-3 flex gap-3 flex-wrap">
              {files.map((file, index) => {
                const isImage = file.type.startsWith("image/")
                const objectUrl = URL.createObjectURL(file)
                return (
                  <div key={index} className="relative group border p-2 rounded-lg bg-gray-100">
                    {isImage ? (
                      <Image
                        src={objectUrl}
                        alt={file.name}
                        width={100}
                        height={100}
                        className="rounded object-cover"
                        onLoad={() => URL.revokeObjectURL(objectUrl)}
                      />
                    ) : (
                      <div className="text-sm text-gray-700 max-w-[150px] truncate">{file.name}</div>
                    )}
                    <button
                      onClick={() => setFiles((prev) => prev.filter((_, i) => i !== index))}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs hidden group-hover:flex items-center justify-center"
                    >
                      ×
                    </button>
                  </div>
                )
              })}
            </div>
          )}
          <div className="flex items-center space-x-3">
            <label className="p-2 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors">
              <FiPaperclip className="w-5 h-5" />
              <input type="file" className="hidden" onChange={handleFileUpload} multiple />
            </label>
            <div className="flex-1 relative">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={handleSendMessage}
              className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
            >
              <FiSend className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
    )

}

</>
  )
}
