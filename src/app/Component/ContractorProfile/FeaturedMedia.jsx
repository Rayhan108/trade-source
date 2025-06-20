"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { FaStar, FaTimes, FaPlus } from "react-icons/fa"
import Link from "next/link"

export default function FeaturedMedia() {
  const [mediaItems, setMediaItems] = useState([
    {
      id: 1,
      type: "video",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      alt: "Person painting fence",
      isFeatured: true,
      name: "painting-video.mp4",
    },
    {
      id: 2,
      type: "photo",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/First%20name-NH8WIJsksKVi3qjHBAzgku8NENsbCd.png",
      alt: "Hand painting white fence",
      isFeatured: false,
      name: "fence-painting.jpg",
    },
  ])

  const fileInputRef = useRef(null)

  const toggleFeatured = (id) => {
    setMediaItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isFeatured: !item.isFeatured } : item
      )
    )
  }

  const removeItem = (id) => {
    setMediaItems((items) => items.filter((item) => item.id !== id))
  }

  const handleAddMedia = () => {
    fileInputRef.current?.click()
  }

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files)

    files.forEach((file) => {
      const reader = new FileReader()

      reader.onload = (e) => {
        const newItem = {
          id: Date.now() + Math.random(),
          type: file.type.startsWith("video/") ? "video" : "photo",
          src: e.target.result,
          alt: file.name,
          isFeatured: false,
          name: file.name,
          file: file,
        }

        setMediaItems((prevItems) => [newItem, ...prevItems])
      }

      reader.readAsDataURL(file)
    })

    event.target.value = ""
  }

  return (
    <div className="w-full max-w-7xl mx-auto ">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
          Add Featured Video Or Photos
        </h1>
  <div>
    <Link href={'/profile'}>
          <button className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-medium self-start sm:self-auto">
          View Public Profile
        </button>
    </Link>
  </div>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mediaItems.map((item) => (
          <div key={item.id} className="relative group">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              {item.type === "photo" ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
              ) : (
                <video
                  src={item.src}
                  controls
                  className="w-full h-full object-cover absolute top-0 left-0"
                />
              )}

              {/* Action Buttons */}
              <div className="absolute top-3 right-3 flex gap-2">
                <button
                  onClick={() => toggleFeatured(item.id)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 shadow-md hover:scale-105 ${
                    item.isFeatured
                      ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                      : "bg-white hover:bg-gray-100 text-gray-600"
                  }`}
                >
                  <FaStar className="text-sm" />
                </button>
                <button
                  onClick={() => removeItem(item.id)}
                  className="w-10 h-10 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-600 transition-all duration-200 shadow-md hover:scale-105"
                >
                  <FaTimes className="text-sm" />
                </button>
              </div>

              {/* Media Type Badge */}
              <div className="absolute bottom-3 left-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium text-white ${
                    item.type === "video" ? "bg-blue-600" : "bg-green-600"
                  }`}
                >
                  {item.type === "video" ? "Video" : "Photo"}
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* Add New Media Button */}
        <div className="relative group">
          <button
            onClick={handleAddMedia}
            className="w-full aspect-video border-2 border-dashed border-gray-300 hover:border-blue-500 rounded-xl flex items-center justify-center bg-gray-50 hover:bg-blue-50 transition-all duration-200 hover:scale-105"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-3 transition-colors duration-200 shadow-lg">
                <FaPlus className="text-white text-xl" />
              </div>
              <p className="text-gray-600 text-base font-medium">Add Media</p>
              <p className="text-gray-400 text-sm mt-1">Photos & Videos</p>
            </div>
          </button>
        </div>
      </div>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*,video/*"
        multiple
        onChange={handleFileUpload}
        className="hidden"
      />
   <h1 className="text-xl sm:text-2xl lg:text-2xl font-bold text-gray-900 mt-5">
          Dream Ireland Painting
        </h1>
    </div>
  )
}
