'use client'

import React from "react";
import Image from "next/image";
import userImg1 from '../../../assests/cons1.png'
const notifications = [
  {
    id: 1,
    name: "Your Profile Was Updated Successfully.",
    time: "1 week ago",
    avatar:userImg1,
    read: false
  },
  {
    id: 2,
    name: "A Contractor Has Viewed Your Request.",
    time: "1 week ago",
    avatar:userImg1,
    read: true
  },
  {
    id: 3,
    name: "Alexandra Broke Send You Connection Request",
    time: "1 week ago",
    avatar:userImg1,
    read: true
  },
  {
    id: 4,
    name: "Alexandra Broke Send You Connection Request",
    time: "1 week ago",
     avatar:userImg1,
    read: true
  },
  {
    id: 5,
    name: "Alexandra Broke Send You Connection Request",
    time: "1 week ago",
    avatar:userImg1,
    read: true
  },
  {
    id: 6,
    name: "Alexandra Broke Send You Connection Request",
    time: "1 week ago",
    avatar:userImg1,
    read: true
  }
];

const NotificationPage = () => {
  return (
    <div className="max-w-3xl bg-white my-5 mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Notifications</h2>
        <button className="text-sm text-blue-600 hover:underline">
          Mark all as read
        </button>
      </div>
        <div className="border-b border-gray-700 mb-5"></div>

      <div className="space-y-2">
        {notifications.map((n) => (
          <div
            key={n.id}
            className={`flex items-start gap-4 p-4 rounded-lg ${
              !n.read ? "bg-blue-100" : ""
            }`}
          >
            <Image
              src={n.avatar}
              alt="avatar"
              width={40}
              height={40}
              className="rounded-full w-10 h-10 object-cover"
            />
            <div className="flex-1">
              <p className={`text-sm ${!n.read ? "font-medium text-blue-900" : "text-gray-700"}`}>
                {n.name}
              </p>
              <p className="text-xs text-gray-500 mt-1">{n.time}</p>
            </div>
            {!n.read && (
              <span className="w-3 h-3 bg-green-300 rounded-full mt-1"></span>
            )}
          </div>
        ))}
      </div>

      <div className="pt-8 border-t mt-8 text-center">
        <button className="text-sm text-red-500 hover:underline">
          Clear all Notifications
        </button>
      </div>
    </div>
  );
};

export default NotificationPage;
