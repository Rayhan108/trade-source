"use client"
import userImg from '../../../assests/user.png'
import Image from "next/image"
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

export default function ProfilePage() {
  return (
    <div className="w-full bg-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
        <button className="px-6 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition">
          Edit
        </button>
      </div>

      {/* Divider */}
      <div className="border-b border-gray-200 mb-8"></div>

      {/* Profile Content */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Profile Photo */}
        <div className="w-64 h-64 flex-shrink-0">
          <Image
            src={userImg}
            alt="Profile"
            width={256}
            height={256}
            className="rounded-full object-cover"
          />
        </div>

        {/* User Information */}
        <div className="flex flex-col space-y-6 flex-grow">
          <div className="flex items-center gap-4">
            <FaUser className="text-gray-600 w-5 h-5" />
            <span className="text-lg text-gray-900">Bessie Cooper</span>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-gray-600 w-5 h-5" />
            <span className="text-lg text-gray-900">bessie@gmail.com</span>
          </div>

          <div className="flex items-center gap-4">
            <FaPhone className="text-gray-600 w-5 h-5" />
            <span className="text-lg text-gray-900">+21309711240</span>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-gray-600 w-5 h-5" />
            <span className="text-lg text-gray-900">Jason road, Perth</span>
          </div>

          {/* Logout Button */}
          <button className="w-[30%] bg-red-500 text-white py-3 rounded hover:bg-red-600 transition mt-4">Logout</button>
        </div>
      </div>
    </div>
  )
}
