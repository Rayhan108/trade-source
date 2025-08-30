'use client';
import Link from 'next/link';
import house1 from '@/assests/material-symbols_star-rounded (4).png';
import house2 from '@/assests/material-symbols_star-rounded (5).png';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const YourServicePage = () => {
  const services = [
    {
      id: 1,
      title: 'Decks & Patios',
      description: 'Outdoor Lighting Installation, Generator Installation',
      image: house1,
      rating: 4.8,
      reviews: 128,
      priceFrom: 350,
    },
    {
      id: 2,
      title: 'Outdoor Structures',
      description: 'Driveway Cleaning, House Siding Washing',
      image: house2,
      rating: 4.8,
      reviews: 128,
      priceFrom: 350,
    },
  ];

  return (
    <div className="bg-white p-5">
      <div className="max-w-7xl border border-gray rounded-xl  mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 lg:mb-12">
          Your Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {services.map(service => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Service Image */}
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <Image
                  src={service.image || '/placeholder.svg'}
                  alt={service.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
              </div>

              {/* Service Content */}
              <div className="p-6">
                {/* Service Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Rating and Price Row */}
                <div className="flex items-center justify-between">
                  {/* Rating Section */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <FaStar className="w-4 h-4 text-blue-500 fill-current" />
                      <span className="font-semibold text-gray-900 text-sm sm:text-base">
                        {service.rating}
                      </span>
                    </div>
                    <span className="text-gray-500 text-sm">
                      ({service.reviews})
                    </span>
                  </div>

                  {/* Price Section */}
                  <div className="text-right">
                    <span className="text-gray-600 text-sm">from </span>
                    <span className="font-semibold text-gray-900 text-base">
                      ${service.priceFrom}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3">
        <Link href={'/createService'}>
          <button className="bg-[#1D69E1]  text-white w-full py-3 rounded-xl">
            + Create More Service
          </button>
        </Link>
      </div>
    </div>
  );
};

export default YourServicePage;
