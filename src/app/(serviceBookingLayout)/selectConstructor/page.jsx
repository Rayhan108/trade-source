"use client";

import { useState } from "react";
import { Modal } from "antd";
import dayjs from "dayjs";
import { FiCalendar, FiClock, FiChevronDown } from "react-icons/fi";
import SelectContractorCard from "../../Component/Card/SelectConstructorCard";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import cons1 from "../../../assests/cons1.png";
import cons2 from "../../../assests/cons2.png";
import cons3 from "../../../assests/cons3.png";
import Image from "next/image";
import { SlBadge } from "react-icons/sl";

const contractorData = [
  {
    id: 1,
    name: "Ellie Smith",
    image: cons1,
    verified: true,
    completedTasks: 2949,
    rating: 4.8,
    reviews: 1694,
    hourlyRate: 65,
    expertise: "General Handyman, Plumbing, Electrical",
    services: [
      "Furniture assembly",
      "TV mounting",
      "Minor electrical/plumbing fixes",
      "Drywall repair & painting",
      "Hanging shelves & wall decor"
    ]
  },
  {
    id: 2,
    name: "Genie Darwin",
    image: cons2,
    verified: true,
    completedTasks: 2949,
    rating: 4.8,
    reviews: 1694,
    hourlyRate: 65,
    expertise: "Carpentry, Home Renovation, Repairs",
    services: [
      "Furniture assembly",
      "Drywall repair & painting",
      "TV mounting",
      "Minor electrical/plumbing fixes",
      "Hanging shelves & wall decor"
    ]
  },
  {
    id: 3,
    name: "Genie Darwin",
    image: cons3,
    verified: true,
    completedTasks: 2949,
    rating: 4.8,
    reviews: 1694,
    hourlyRate: 65,
    expertise: "Electrical, HVAC, Appliance Repair",
    services: [
      "Minor electrical/plumbing fixes",
      "TV mounting",
      "Drywall repair & painting",
      "Furniture assembly",
      "Hanging shelves & wall decor"
    ]
  },
  {
    id: 4,
    name: "Genie Darwin",
    image: cons1,
    verified: true,
    completedTasks: 2949,
    rating: 4.8,
    reviews: 1694,
    hourlyRate: 65,
    expertise: "Electrical, HVAC, Appliance Repair",
    services: [
      "Furniture assembly",
      "TV mounting",
      "Minor electrical/plumbing fixes",
      "Drywall repair & painting",
      "Hanging shelves & wall decor"
    ]
  }
];


const sortOptions = [

  "Price (Lowest to Highest)",
  "Price (Highest to Lowest)",
  "Highest Rated",
  "# Completed Task",
];

export default function ContractorSearch() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [priceRange, setPriceRange] = useState(150);
  const [sortBy, setSortBy] = useState("Recommended");
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempDate, setTempDate] = useState(null);

  const handleDateConfirm = () => {
    if (tempDate) {
      console.log("Confirmed Date:", dayjs(tempDate).format("YYYY-MM-DD"));
      setSelectedDate(dayjs(tempDate).format("YYYY-MM-DD"));
    }
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-80 space-y-8">
            {/* Date Filter */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <FiCalendar className="w-5 h-5 text-gray-600" />
                <h3 className="font-semibold text-gray-900">Date</h3>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="ml-auto text-blue-600 text-sm font-medium"
                >
                  Choose a date
                </button>
              </div>
              <div className="space-y-3">
                {["Today", "Within 3 day", "Within a week"].map((option) => (
                  <button
                    key={option}
                    onClick={() => setSelectedDate(option)}
                    className={`w-full text-left px-4 py-3 rounded-full border transition-colors ${
                      selectedDate === option
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Filter */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <FiClock className="w-5 h-5 text-gray-600" />
                <h3 className="font-semibold text-gray-900">Time</h3>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="ml-auto text-blue-600 text-sm font-medium"
                >
                  Pick a time
                </button>
              </div>
              <div className="space-y-3">
                {[
                  "Morning (8 AM - 12 PM)",
                  "Afternoon (12 PM - 5 PM)",
                  "Evening (5 PM - 9 PM)",
                ].map((option) => (
                  <button
                    key={option}
                    onClick={() => setSelectedTime(option)}
                    className={`w-full text-left px-4 py-3 rounded-full border transition-colors ${
                      selectedTime === option
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Price</h3>
              <div className="space-y-4">
                <div className="text-right text-sm font-medium text-gray-600">
                  ${priceRange}
                </div>
                <input
                  type="range"
                  min="10"
                  max="1000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <div>
                    <div className="text-xs">Minimum</div>
                    <input
                      type="text"
                      value="$10"
                      readOnly
                      className="w-16 px-2 py-1 border border-gray-300 rounded text-center text-sm"
                    />
                  </div>
                  <div>
                    <div className="text-xs">Maximum</div>
                    <input
                      type="text"
                      value="$1000"
                      readOnly
                      className="w-20 px-2 py-1 border border-gray-300 rounded text-center text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="flex-1">
            <div className="flex justify-end mb-6">
              <div className="relative">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>Sort by</span>
                  <button
                    onClick={() => setShowSortDropdown(!showSortDropdown)}
                    className="flex items-center gap-1 px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50"
                  >
                    {sortBy}
                    <FiChevronDown className="w-4 h-4" />
                  </button>
                </div>

                {showSortDropdown && (
                  <div className="absolute right-0 top-full mt-1 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    <div className="py-1">
                      {/* <div className="px-3 py-2 text-xs font-medium text-blue-600 bg-blue-50">
                        View Profile
                      </div> */}
                      {sortOptions.slice(1).map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setSortBy(option);
                            setShowSortDropdown(false);
                          }}
                          className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contractorData.map((contractor) => (
                <SelectContractorCard
                  key={contractor.id}
                  contractor={contractor}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Modal */}
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        centered
        width={600}
        closable={false}
      >
        <div>
          <p className="text-center text-3xl font-bold py-5">
            Choose Contractor for your project
          </p>

          <div className="flex flex-col md:flex-row items-start gap-6 p-4 ">
            <div className="w-full md:w-[53%] ">
              <h2 className="text-lg font-semibold mb-4">April – May 2025</h2>
              <div className=" md:border-r-2 px-3 md:border-gray-400 overflow-hidden">
                <Calendar
                  onChange={(date) => {
                    console.log("Calendar selected date:", date);
                    console.log("Formatted date:", dayjs(date).format("YYYY-MM-DD"));
                    setTempDate(date);
                  }}
                  value={tempDate}
                  className="w-full"
                />
              </div>

              <div className="mt-6">
                <select
                  className="w-full rounded-md px-4 py-2 border border-gray-300 "
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                >
                  <option value="">Select Time</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="2:00 PM">2:00 PM</option>
                </select>
              </div>
            </div>

            {/* Contractor Info Section */}
            <div className="w-full md:w-1/2 bg-gray-50 rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src={cons1}
                  alt="Contractor"
                  className="w-10 h-10 object-cover rounded-full"
                  width={100}
                  height={100}
                />
                <div>
                  <h3 className="font-semibold text-gray-900 flex gap-3">
                    <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      <SlBadge />
                    </span>
                    <span>Ellie Smith</span>
                  </h3>
                </div>
              </div>
              <p className="text-sm font-bold text-gray-700 mb-2">
                <span className="mr-1">Request Date:</span>
                {tempDate ? dayjs(tempDate).format("MMM DD,") : "Select Date"}
                {selectedTime || ""}
              </p>
              <p className="text-sm font-bold text-gray-700 mb-2">
                This Contractor requires 2 hour
              </p> 
              <p className="text-xs text-gray-500">
                You can chat and adjust time after confirming
              </p>

              <button
                onClick={handleDateConfirm}
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
              >
                Select & Continue
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
