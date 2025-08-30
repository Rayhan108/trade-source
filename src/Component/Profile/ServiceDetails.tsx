'use client';
import Image from 'next/image';
import { useState } from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import img from '@/assests/bannerImg.jpg';
import styles from '@/app/styles.module.css';
import { Modal, Pagination } from 'antd';

const reviews = [
  {
    name: 'Emma',
    date: 'Feb 2024',
    rating: 4.5,
    review:
      "We were only sad not to stay longer. We hope to be back to explore Nantes some more and would love to stay at Golwen's place again, if they'll have us! :)",
  },
  {
    name: 'Liam',
    date: 'Mar 2024',
    rating: 5.0,
    review:
      'Amazing location and a very comfortable stay. Would highly recommend!',
  },
  {
    name: 'Sophia',
    date: 'Jan 2024',
    rating: 4.0,
    review:
      'The apartment was cozy and clean. Slightly noisy at night but overall a great experience.',
  },
  {
    name: 'Noah',
    date: 'Apr 2024',
    rating: 4.8,
    review:
      'Wonderful host and excellent communication. The place was just as described.',
  },
  {
    name: 'Olivia',
    date: 'May 2024',
    rating: 5.0,
    review:
      'Absolutely loved the décor and attention to detail. Would definitely come back!',
  },
  {
    name: 'James',
    date: 'Feb 2024',
    rating: 3.5,
    review:
      'Good value for money, but the kitchen could use some improvements.',
  },
  {
    name: 'Ava',
    date: 'Mar 2024',
    rating: 4.2,
    review:
      'Quiet neighborhood and easy access to public transport. Enjoyed our stay!',
  },
  {
    name: 'Benjamin',
    date: 'Jan 2024',
    rating: 4.6,
    review:
      'Clean, well-maintained, and the host was very helpful throughout our stay.',
  },
  {
    name: 'Mia',
    date: 'Dec 2023',
    rating: 4.9,
    review: 'Perfect for a weekend getaway. Everything was just perfect.',
  },
  {
    name: 'Lucas',
    date: 'Nov 2023',
    rating: 3.8,
    review:
      'Decent place overall. Could use better heating in the winter months.',
  },
  {
    name: 'Isabella',
    date: 'Oct 2023',
    rating: 5.0,
    review: 'An unforgettable experience. The host made us feel so welcome!',
  },
  {
    name: 'Henry',
    date: 'Sep 2023',
    rating: 4.3,
    review:
      'Nice and clean. Convenient location close to restaurants and shops.',
  },
  {
    name: 'Amelia',
    date: 'Aug 2023',
    rating: 4.7,
    review:
      'The place exceeded our expectations. Very stylish and comfortable.',
  },
  {
    name: 'William',
    date: 'Jul 2023',
    rating: 3.9,
    review:
      'The space was good but a bit smaller than expected. Still enjoyable.',
  },
  {
    name: 'Charlotte',
    date: 'Jun 2023',
    rating: 5.0,
    review:
      'Everything was amazing — from the location to the amenities. 10/10!',
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={'full' + i} className="text-yellow-400 w-4 h-4" />);
  }
  if (halfStar) {
    stars.push(
      <FaStarHalfAlt key="half" className="text-yellow-400 w-4 h-4" />
    );
  }
  while (stars.length < 5) {
    stars.push(
      <FaStar
        key={'empty' + stars.length}
        className="text-yellow-200 w-4 h-4"
      />
    );
  }
  return <div className="flex space-x-1">{stars}</div>;
};

const ServiceDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const paginatedReviews = reviews.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="w-full container mx-auto px-6 py-10 bg-white text-gray-900 flex flex-col md:flex-row md:gap-20 rounded-md">
      {/* Left Side - Service Details */}
      <div className="md:flex-[0.45] pb-8 md:pb-0 pr-0 md:pr-10 ">
        <h1 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
          Service Details
        </h1>
        <div className="mb-10 flex gap-8 justify-between items-center border-b py-3 border-gray-200">
          <div>
            <h2 className="font-bold text-xl mb-1">Service Name</h2>
            <p className="text-gray-900 mb-1">Dream Ireland Painting</p>
          </div>
          <div className="w-[165px]">
            <h2 className="font-bold text-xl mb-1">Address</h2>
            <p className="text-gray-600 text-sm">
              Jhonson Rd, Aloma Street, TX 74473
            </p>
          </div>
        </div>
        <div className="mb-10 flex gap-8 justify-between items-center">
          <div>
            <h2 className="font-bold text-xl mb-1">Phone Number</h2>
            <p className="text-gray-900 mb-1">+1040323132</p>
          </div>
          <div>
            <h2 className="font-bold text-xl mb-1">Service Name</h2>
            <p className="text-gray-900 mb-1">Dream Ireland Painting</p>
          </div>
        </div>
      </div>

      {/* Right Side - Reviews */}
      <div className="md:flex-[0.55] pt-6 md:pt-0">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
            Review
          </h1>
          <button
            onClick={handleOpenModal}
            className="text-sm md:text-base text-blue-600 hover:underline"
          >
            View all
          </button>
        </div>
        <h1 className="text-lg md:text-xl font-semibold flex items-center gap-2">
          <span className="font-bold">4.97</span> · 1694 reviews
        </h1>
        {reviews.slice(0, 2).map(({ name, date, rating, review }, index) => (
          <div
            key={index}
            className="border-b border-gray-200 py-4 flex gap-4 items-start"
          >
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
              <p className="text-xs text-gray-600 mb-1">{date}</p>
              <p className="text-gray-800 text-sm">{review}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        open={isModalOpen}
        onCancel={handleCloseModal}
        footer={null}
        // title="All Reviews"
        width={700}
      >
        <div className={`space-y-4 ${styles.fontDMSans}`}>
          <div className="py-3 border-b-2 border-black ">
            <h1 className={` ${styles.fontDMSans} text-3xl font-bold`}>
              All Reviews
            </h1>
            <h1 className="text-lg md:text-xl font-semibold flex items-center gap-2 mt-1">
              <span className="font-semibold">4.97</span> · 1694 reviews
            </h1>
          </div>
          {paginatedReviews.map(({ name, date, rating, review }, index) => (
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
                  <p className="text-xs text-gray-600 mb-1">{date}</p>
                  <p className="text-gray-800 text-sm">{review}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-4 flex justify-end">
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={reviews.length}
            onChange={page => setCurrentPage(page)}
          />
        </div>
      </Modal>
    </div>
  );
};

export default ServiceDetails;
