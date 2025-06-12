import React, { useState } from "react";
import Image from "next/image";
import {  FiStar } from "react-icons/fi";
import img from "../../../assests/bannerImg.jpg";
import { Modal, Pagination } from "antd";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import {  IoStar } from "react-icons/io5";

import { SlBadge } from "react-icons/sl";
import { IoIosHammer } from "react-icons/io";
import styles from "../../styles.module.css";
import Link from "next/link";
const reviews = [
  {
    name: "Emma",
    date: "Feb 2024",
    rating: 4.5,
    review:
      "We were only sad not to stay longer. We hope to be back to explore Nantes some more and would love to stay at Golwen's place again, if they'll have us! :)",
  },
  {
    name: "Liam",
    date: "Mar 2024",
    rating: 5.0,
    review:
      "Amazing location and a very comfortable stay. Would highly recommend!",
  },
  {
    name: "Sophia",
    date: "Jan 2024",
    rating: 4.0,
    review:
      "The apartment was cozy and clean. Slightly noisy at night but overall a great experience.",
  },
  {
    name: "Noah",
    date: "Apr 2024",
    rating: 4.8,
    review:
      "Wonderful host and excellent communication. The place was just as described.",
  },
  {
    name: "Olivia",
    date: "May 2024",
    rating: 5.0,
    review:
      "Absolutely loved the décor and attention to detail. Would definitely come back!",
  },
  {
    name: "James",
    date: "Feb 2024",
    rating: 3.5,
    review:
      "Good value for money, but the kitchen could use some improvements.",
  },
  {
    name: "Ava",
    date: "Mar 2024",
    rating: 4.2,
    review:
      "Quiet neighborhood and easy access to public transport. Enjoyed our stay!",
  },
  {
    name: "Benjamin",
    date: "Jan 2024",
    rating: 4.6,
    review:
      "Clean, well-maintained, and the host was very helpful throughout our stay.",
  },
  {
    name: "Mia",
    date: "Dec 2023",
    rating: 4.9,
    review: "Perfect for a weekend getaway. Everything was just perfect.",
  },
  {
    name: "Lucas",
    date: "Nov 2023",
    rating: 3.8,
    review:
      "Decent place overall. Could use better heating in the winter months.",
  },
  {
    name: "Isabella",
    date: "Oct 2023",
    rating: 5.0,
    review: "An unforgettable experience. The host made us feel so welcome!",
  },
  {
    name: "Henry",
    date: "Sep 2023",
    rating: 4.3,
    review:
      "Nice and clean. Convenient location close to restaurants and shops.",
  },
  {
    name: "Amelia",
    date: "Aug 2023",
    rating: 4.7,
    review:
      "The place exceeded our expectations. Very stylish and comfortable.",
  },
  {
    name: "William",
    date: "Jul 2023",
    rating: 3.9,
    review:
      "The space was good but a bit smaller than expected. Still enjoyable.",
  },
  {
    name: "Charlotte",
    date: "Jun 2023",
    rating: 5.0,
    review:
      "Everything was amazing — from the location to the amenities. 10/10!",
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={"full" + i} className="text-yellow-400 w-4 h-4" />);
  }
  if (halfStar) {
    stars.push(
      <FaStarHalfAlt key="half" className="text-yellow-400 w-4 h-4" />
    );
  }
  while (stars.length < 5) {
    stars.push(
      <FaStar
        key={"empty" + stars.length}
        className="text-yellow-200 w-4 h-4"
      />
    );
  }
  return <div className="flex space-x-1">{stars}</div>;
};

const SelectConstructorCard = ({ contractor }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;

  const paginatedReviews = reviews.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <>
      <div className="bg-white rounded-lg overflow-hidden shadow-sm">
        {/* Profile Image Section */}
        <div className="relative h-48">
          <Image
            src={contractor.image}
            alt={contractor.name}
            className="w-full h-full object-cover"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute bottom-4 left-4">
            <h3 className="text-white text-xl font-bold drop-shadow-lg">
              {contractor.name}
            </h3>
          </div>
          <button
            onClick={openModal}
            className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium hover:bg-blue-700"
          >
            View Profile
          </button>
        </div>

        {/* Info Section */}
        <div className="bg-green-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    <SlBadge />
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Verified Contractor
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    <IoIosHammer />
                  </span>
                </div>
                <span className="text-sm text-gray-600">
                  {contractor.completedTasks} Completed Task
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FiStar className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-medium text-gray-700">
                  {contractor.rating} ({contractor.reviews} reviews)
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">
                ${contractor.hourlyRate}/Hr
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 mb-1">Expertise</h4>
            <p className="text-sm text-gray-600">{contractor.expertise}</p>
          </div>
          <Link href={"/confirm"}>
            <button className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
              Select & Continue
            </button>
          </Link>
        </div>
      </div>

      {/* Modal */}
      <Modal
        open={isModalOpen}
        onCancel={closeModal}
        footer={null}
        centered
        width="90%"
        style={{ maxWidth: 800 }} // max width on bigger screens
      >
        <div className="  flex items-center justify-center ">
          <div className="bg-white rounded-lg w-full overflow-y-auto relative">
            <div className="flex flex-col lg:flex-row">
              {/* Left Side - Profile Info */}
              <div className=" p-6  border-r border-gray-200">
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={contractor.image}
                    alt={contractor.name}
                    width={150}
                    height={150}
                    className="rounded-full w-44 h-44 object-cover mb-4"
                  />
                  <div className="flex gap-7">
                    <div>
                      <h2 className="text-2xl font-bold mb-1">
                        {contractor.name}
                      </h2>
                      <p className="text-sm text-green-600 mb-4">
                        {contractor.minimumHours
                          ? contractor.minimumHours
                          : "2"}{" "}
                        Hour minimum
                      </p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-gray-900 mb-1">
                        ${contractor.hourlyRate}/Hr
                      </p>
                    </div>
                  </div>

                  {/* Verification and Stats */}
                  <div className="w-full space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2">
                          <SlBadge />
                        </span>
                        <span className="text-sm">Verified Contractor</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2">
                          <IoIosHammer />
                        </span>
                        <span className="text-sm">
                          {contractor.completedTasks} Completed Task
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <IoStar className="w-6 h-6 text-yellow-400 mr-2" />
                        <span className="text-sm">
                          {contractor.rating} ({contractor.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                  <Link href={"/confirm"}>
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium">
                      Select & Continue
                    </button>
                  </Link>
                </div>
              </div>

              {/* Right Side - Details */}
              <div className="lg:w-2/3 p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">
                    How I Can Help You
                  </h3>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {contractor.description}
                  </p>

                  <div className="mb-4 border-2 p-3 rounded-xl border-gray-200">
                    <p>
                      2-hour minimum per booking. I have 5+ years of experience
                      and come fully equipped with my own tools. I’m reliable,
                      detail-oriented, and get the job done right.
                    </p>
                    <p className="font-medium mb-2">Services include:</p>
                    <ul className="space-y-1">
                      {contractor?.services?.map((service, index) => (
                        <li
                          key={index}
                          className="flex items-center text-gray-700"
                        >
                          <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                          {service}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-1">
                      I’m the Tasker you can trust to keep your space in great
                      shape!
                    </p>
                  </div>

                  <p className="text-gray-700">
                    I&apos;m the Tasker you can trust to keep your space in
                    great shape!
                  </p>
                </div>

                {/* Reviews */}
                <div className="space-y-4 mb-6">
                  <div className={`space-y-4 ${styles.fontDMSans}`}>
                    <div className="py-3 border-b-2 border-black ">
                      <h1 className="text-lg md:text-xl font-semibold flex items-center gap-2 mt-1">
                        <span className="font-semibold">4.97</span> · 1694
                        reviews
                      </h1>
                    </div>
                    {paginatedReviews.map(
                      ({ name, date, rating, review }, index) => (
                        <div key={index}>
                          <div className="border-b border-gray-200 py-4 flex gap-4 items-start">
                            <Image
                              src={img}
                              alt="Profile"
                              className="rounded-full w-10 h-10 object-cover"
                              width={100}
                              height={100}
                            />
                            <div className="flex-1">
                              <div className="flex justify-between items-center mb-0.5">
                                <p className="font-bold text-sm">{name}</p>
                                <StarRating rating={rating} />
                              </div>
                              <p className="text-xs text-gray-600 mb-1">
                                {date}
                              </p>
                              <p className="text-gray-800 text-sm">{review}</p>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                  <div className="pt-4 flex justify-center">
                    <Pagination
                      current={currentPage}
                      pageSize={pageSize}
                      total={reviews.length}
                      onChange={(page) => setCurrentPage(page)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SelectConstructorCard;
