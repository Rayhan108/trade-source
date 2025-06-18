"use client"
import { HiMiniHomeModern } from "react-icons/hi2";
import { useState } from "react"
import { FiMapPin, FiBuilding, FiCalendar } from "react-icons/fi"
import userImg from '../../../assests/user.png'
import Image from "next/image";
const projectData = [
  {
    id: 1,
    client: "Ellie Smith",
    avatar:userImg,
    service: "Cleaning",
    time: "Apr 28, 12:00 PM",
    address: "123 Main Street, New York, NY 10001",
    propertyType: "Apartment",
    price: "$120",
    date: "2/5/25",
  },
  {
    id: 2,
    client: "Ellie Smith",
    avatar:userImg,
    service: "Cleaning",
    time: "Apr 28, 12:00 PM",
    address: "123 Main Street, New York, NY 10001",
    propertyType: "Apartment",
    price: "$120",
    date: "29/4/25",
  },
  {
    id: 3,
    client: "Ellie Smith",
    avatar:userImg,
    service: "Cleaning",
    time: "Apr 28, 12:00 PM",
    address: "123 Main Street, New York, NY 10001",
    propertyType: "Apartment",
    price: "$120",
    date: "23/4/25",
  },
  {
    id: 4,
    client: "Ellie Smith",
    avatar:userImg,
    service: "Cleaning",
    time: "Apr 28, 12:00 PM",
    address: "123 Main Street, New York, NY 10001",
    propertyType: "Apartment",
    price: "$120",
    date: "2/4/25",
  },
];
export default function ProjectManagement() {
  const [activeTab, setActiveTab] = useState("Project Requests")

  const tabs = ["Project Requests", "Quote Management", "Project Status"]



  const handleViewDetails = (projectId) => {
    console.log("View details for project:", projectId)
  }

  const handleReject = (projectId) => {
    console.log("Reject project:", projectId)
  }

  const handleAccept = (projectId) => {
    console.log("Accept project:", projectId)
  }

  return (
    <div className="max-w-7xl mx-auto p-5">
      <div className="bg-white rounded-lg">
        {/* Page Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Project Management</h1>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            {/* Table Header */}
            <thead>
              <tr className="bg-green-200">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 rounded-tl-lg">Project info</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Price</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 rounded-tr-lg">Action</th>
              </tr>
            </thead>

            {/* Table Body */}
<tbody className="divide-y divide-gray-200">
  {projectData.map((project) => {
    console.log("Project:", project); // 👈 Logs each project object

    return (
      <tr key={project?.id} className="hover:bg-gray-50">
        {/* Project Info Column */}
        <td className="px-6 py-6">
          <div className="flex items-start gap-4">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <Image
                src={project?.avatar}
                alt={project?.client}
                className="w-12 h-12 rounded-full object-cover"
                width={500}
                height={500}
              />
            </div>

            {/* Project Details */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  {project?.service}
                </h3>
              </div>

              <div className="space-y-1 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <FiCalendar className="w-4 h-4 text-gray-400" />
                  <span>{project?.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiMapPin className="w-4 h-4 text-gray-400" />
                  <span>{project?.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiMiniHomeModern  className="w-4 h-4 text-gray-400" />
                  <span>
                    {project?.propertyType}


                  </span>
                </div>
              </div>

              <div className="mt-2 text-sm font-medium text-gray-900">
                {project?.client}
              </div>
            </div>
          </div>
        </td>

        {/* Price Column */}
        <td className="px-6 py-6">
          <span className="text-lg font-semibold text-gray-900">{project?.price}</span>
        </td>

        {/* Date Column */}
        <td className="px-6 py-6">
          <span className="text-lg font-medium text-gray-900">{project?.date}</span>
        </td>

        {/* Action Column */}
        <td className="px-6 py-6">
          <div className="space-y-2">
            <button
              onClick={() => handleViewDetails(project?.id)}
              className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              View Job Details
            </button>
            <div className="flex gap-2">
              <button
                onClick={() => handleReject(project?.id)}
                className="flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors font-medium"
              >
                Reject
              </button>
              <button
                onClick={() => handleAccept(project?.id)}
                className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
              >
                Accept
              </button>
            </div>
          </div>
        </td>
      </tr>
    );
  })}
</tbody>

          </table>
        </div>
      </div>
    </div>
  )
}
