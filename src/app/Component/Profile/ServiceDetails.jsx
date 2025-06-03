import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const reviews = [
  {
    name: "Emma",
    date: "Feb 2024",
    rating: 4.5,
    review:
      "We were only sad not to stay longer. We hope to be back to explore Nantes some more and would love to stay at Golwen's place again, if they'll have us! :)",
  },
  {
    name: "Emma",
    date: "Feb 2024",
    rating: 4.5,
    review:
      "We were only sad not to stay longer. We hope to be back to explore Nantes some more and would love to stay at Golwen's place again, if they'll have us! :)",
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <FaStar key={"full" + i} className="text-yellow-400 w-4 h-4" />
    );
  }
  if (halfStar) {
    stars.push(
      <FaStarHalfAlt key="half" className="text-yellow-400 w-4 h-4" />
    );
  }
  while (stars.length < 5) {
    stars.push(
      <FaStar key={"empty" + stars.length} className="text-yellow-200 w-4 h-4" />
    );
  }
  return <div className="flex space-x-1">{stars}</div>;
};

const ServiceDetails = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 bg-white text-gray-900 flex flex-col md:flex-row md:gap-20 border border-gray-200 rounded-md">
      {/* Left Side - Service Details */}
      <div className="md:flex-[0.45] border-b md:border-b-0 md:border-r border-gray-200 pb-8 md:pb-0 pr-0 md:pr-10">
        <div className="mb-10">
          <h2 className="font-semibold text-lg mb-1">Service Name</h2>
          <p className="font-medium text-gray-900 mb-1">Dream Ireland Paiting</p>
          <p className="text-gray-600 text-sm">Jhonson rd, Aloma Street, TX 74473</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-1">Phone Number</h3>
          <p className="text-gray-900 mb-4">+1040323132</p>
          <h3 className="font-semibold text-lg mb-1">Service Name</h3>
          <p className="text-gray-900">Dream Ireland Paiting</p>
        </div>
      </div>

      {/* Right Side - Reviews */}
      <div className="md:flex-[0.55] pt-6 md:pt-0">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-lg md:text-xl font-semibold flex items-center gap-2">
            <span className="font-bold">4.97</span> · 1694 reviews
          </h1>
          <a
            href="#"
            className="text-sm md:text-base text-blue-600 hover:underline"
          >
            View all
          </a>
        </div>

        {reviews.map(({ name, date, rating, review }, index) => (
          <div
            key={index}
            className="border-t border-gray-200 py-4 flex gap-4 items-start"
          >
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="rounded-full w-10 h-10 object-cover"
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
    </div>
  );
};

export default ServiceDetails;
