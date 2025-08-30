'use client';
import { useState } from 'react';
import { FiMapPin, FiCalendar } from 'react-icons/fi';
import { HiMiniHomeModern } from 'react-icons/hi2';
import Image from 'next/image';
import userImg from '@/assests/user.png';
import { IoCallSharp } from 'react-icons/io5';
import { MdOutlineMessage } from 'react-icons/md';
import { useRouter } from 'next/navigation';

const projectData = [
  {
    id: 1,
    client: 'Ellie Smith',
    avatar: userImg,
    service: 'Cleaning',
    time: 'Apr 28, 12:00 PM',
    address: '123 Main Street, New York, NY 10001',
    propertyType: 'Apartment',
    price: '$120',
    date: '2/5/25',
    status: 'Pending',
  },
  {
    id: 2,
    client: 'Ellie Smith',
    avatar: userImg,
    service: 'Cleaning',
    time: 'Apr 28, 12:00 PM',
    address: '123 Main Street, New York, NY 10001',
    propertyType: 'Apartment',
    price: '$120',
    date: '29/4/25',
    status: 'Accepted',
  },
  {
    id: 3,
    client: 'Ellie Smith',
    avatar: userImg,
    service: 'Cleaning',
    time: 'Apr 28, 12:00 PM',
    address: '123 Main Street, New York, NY 10001',
    propertyType: 'Apartment',
    price: '$120',
    date: '23/4/25',
    status: 'Declined',
  },
  {
    id: 4,
    client: 'Ellie Smith',
    avatar: userImg,
    service: 'Cleaning',
    time: 'Apr 28, 12:00 PM',
    address: '123 Main Street, New York, NY 10001',
    propertyType: 'Apartment',
    price: '$120',
    date: '2/4/25',
    status: 'Accepted',
  },
];

export default function ProjectManagement() {
  const [activeTab, setActiveTab] = useState('Project Requests');
  const tabs = ['Project Requests', 'Quote Management', 'Project Status'];
  const router = useRouter();
  const handleViewDetails = id => {
    console.log('View details', id);
    router.push(`/projectManagement/${id}`);
  };
  const handleReject = id => console.log('Reject', id);
  const handleAccept = id => console.log('Accept', id);
  const handleUpdateOffer = id => console.log('Update offer', id);
  const handleResendOffer = id => console.log('Resend offer', id);
  const handleMessageClient = id => console.log('Message client', id);

  return (
    <div className="max-w-7xl mx-auto p-4 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Project Management</h1>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-md font-semibold ${
              activeTab === tab
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 border hover:bg-gray-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content based on tab */}
      {activeTab === 'Project Requests' && (
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-green-200">
                <th className="px-6 py-3 text-left">Project Info</th>
                <th className="px-6 py-3 text-left">Price</th>
                <th className="px-6 py-3 text-left">Date</th>
                <th className="px-6 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {projectData.map(project => (
                <tr key={project.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-start gap-4">
                      <div className="w-[25%] flex flex-col justify-center items-center">
                        <Image
                          src={project.avatar}
                          alt={project.client}
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="font-semibold mt-1 text-gray-900">
                          {project.client}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm">{project.service}</div>
                        <div className="flex gap-2 items-center text-sm text-gray-500">
                          <FiCalendar className="text-gray-400" />
                          {project.time}
                        </div>
                        <div className="flex gap-2 items-center text-sm text-gray-500">
                          <FiMapPin className="text-gray-400" />
                          {project.address}
                        </div>
                        <div className="flex gap-2 items-center text-sm text-gray-500">
                          <HiMiniHomeModern className="text-gray-400" />
                          {project.propertyType}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-lg font-semibold">
                    {project.price}
                  </td>
                  <td className="px-6 py-4 text-lg">{project.date}</td>
                  <td className="px-6 py-4 space-y-2">
                    <button
                      onClick={() => handleViewDetails(project.id)}
                      className="w-full border px-4 py-2 rounded-md text-sm hover:bg-gray-100"
                    >
                      View Job Details
                    </button>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleReject(project.id)}
                        className="flex-1 bg-red-500 text-white px-4 py-2 rounded-md text-sm"
                      >
                        Reject
                      </button>
                      <button
                        onClick={() => handleAccept(project.id)}
                        className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
                      >
                        Accept
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'Quote Management' && (
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-green-200">
                <th className="px-6 py-3 text-left">Project Info</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-left">Date</th>
                <th className="px-6 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {projectData.map(project => (
                <tr key={project.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 flex items-start gap-4">
                    <div className="w-[50%] flex flex-col justify-center items-center">
                      <Image
                        src={project.avatar}
                        alt={project.client}
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="font-semibold mt-1 text-gray-900">
                        {project.client}
                      </div>
                    </div>

                    <div>
                      <div className="font-semibold text-gray-900">
                        {project.client}
                      </div>
                      <div className="text-sm">{project.service}</div>
                      <div className="text-sm text-gray-500">
                        {project.address}
                      </div>
                      <div className="text-sm text-gray-500">
                        {project.propertyType}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`text-sm font-semibold ${
                        project.status === 'Pending'
                          ? 'text-blue-500'
                          : project.status === 'Accepted'
                          ? 'text-green-500'
                          : 'text-red-500'
                      }`}
                    >
                      {project.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">{project.date}</td>
                  <td className="px-6 py-4 space-y-2">
                    <button
                      onClick={() => handleViewDetails(project.id)}
                      className="w-full border px-4 py-2 rounded-md text-sm hover:bg-gray-100"
                    >
                      View Job Details
                    </button>
                    {project.status === 'Pending' && (
                      <button
                        onClick={() => handleUpdateOffer(project.id)}
                        className="w-full bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
                      >
                        Update Offer
                      </button>
                    )}
                    {project.status === 'Accepted' && (
                      <button
                        onClick={() => handleMessageClient(project.id)}
                        className="w-full bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
                      >
                        Message Client
                      </button>
                    )}
                    {project.status === 'Declined' && (
                      <button
                        onClick={() => handleResendOffer(project.id)}
                        className="w-full bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
                      >
                        Resend Offer
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'Project Status' && (
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-green-200">
                <th className="px-6 py-3 text-left">Clients</th>
                <th className="px-6 py-3 text-left">Service</th>
                <th className="px-6 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {projectData.map(project => (
                <tr key={project.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <Image
                        src={project.avatar}
                        alt={project.client}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">
                          {project.client}
                        </div>
                        <div className="text-sm text-gray-500">Omaha, NE</div>
                      </div>
                      {/* You can replace icons here as per your actual use */}
                      <div className="flex gap-2 text-blue-500 ">
                        <IoCallSharp className="w-6 h-6 text-white  bg-blue-600 rounded-full p-1" />
                        <MdOutlineMessage className="w-6 h-6 text-white  bg-blue-600 rounded-full p-1" />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">{project.service}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`font-semibold ${
                        project.status === 'Accepted'
                          ? 'text-green-500'
                          : project.status === 'Declined'
                          ? 'text-red-500'
                          : project.status === 'Pending'
                          ? 'text-yellow-500'
                          : 'text-gray-500'
                      }`}
                    >
                      {project.status === 'Accepted'
                        ? 'Scheduled'
                        : project.status === 'Declined'
                        ? 'Declined'
                        : project.status === 'Pending'
                        ? 'Contacted'
                        : project.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
