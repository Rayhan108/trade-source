"use client";

import cons1 from "../../../assests/cons1.png";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { PiQuestionFill } from "react-icons/pi";

const contractors = [
  {
    id: 1,
    name: "Ellie Smith",
    rate: "$65/Hr",
    completedTasks: 2949,
    rating: 4.8,
    reviews: 1694,
    image: cons1,
  },
  {
    id: 2,
    name: "John Doe",
    rate: "$55/Hr",
    completedTasks: 2100,
    rating: 4.6,
    reviews: 1300,
    image: cons1,
  },
  {
    id: 3,
    name: "Sarah Lee",
    rate: "$75/Hr",
    completedTasks: 3200,
    rating: 4.9,
    reviews: 2000,
    image: cons1,
  },
];

const ProConstractorPage = () => {
  return (
    <div className="md:w-[50%] p-7 mx-auto my-8">
      <h1 className="text-xl font-bold">Select A Pro</h1>
      <p className="text-lg my-3">
        Choose the person you are looking for a guidance from!
      </p>

      <div className=" bg-white rounded-xl p-7 space-y-6">
        {contractors.map((contractor) => (
          <div
            key={contractor.id}
            className="flex flex-col lg:flex-row bg-white rounded-lg overflow-hidden shadow-md"
          >
            {/* Left - Image & Name */}
            <div className="relative w-full lg:w-1/2">
              <Image
                src={contractor.image}
                alt={contractor.name}
                width={600}
                height={400}
                className="object-cover h-full w-full"
              />
              <div className="absolute bottom-4 left-4 text-white text-xl font-semibold">
                {contractor.name}
              </div>
              <button className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1 rounded">
                View Profile
              </button>
            </div>

            {/* Right - Info */}
            <div className="w-full lg:w-1/2 bg-green-200 p-6 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <FaCheckCircle className="text-blue-600" />
                  Verified Contractor
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-800">
                  <PiQuestionFill className="text-blue-600 text-lg" />
                  <span className="font-bold">
                    {contractor.completedTasks}
                  </span>{" "}
                  Completed Task
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-800">
                  <FaStar className="text-yellow-500" />
                  <span className="font-bold">{contractor.rating}</span> (
                  {contractor.reviews} reviews)
                </div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <div className="text-gray-800 text-sm font-medium">
                  Expertise
                </div>
                <div className="text-xl font-bold text-gray-900">
                  {contractor.rate}
                </div>
              </div>
              <Link href={"/messagePro"}>
                <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold">
                  Select & Continue
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProConstractorPage;
