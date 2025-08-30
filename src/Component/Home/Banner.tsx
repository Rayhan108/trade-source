import { Search } from 'lucide-react';
import Image from 'next/image';
import hamer from '@/assests/hammer.png';
import banerImg from '@/assests/bannerImg.jpg';
import styles from '@/app/styles.module.css';
import Service from './Service';

export default function Banner() {
  return (
    <>
      <div className={`relative w-full mb-8  ${styles.fontDmSans}`}>
        <div className="relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={banerImg}
              alt="Professional contractor"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="relative px-8 py-16 2xl:px-64 lg:py-64 text-center rounded-lg">
            <div className="bg-black bg-opacity-50 px-8 py-4 sm:px-12 sm:py-4 md:py-12">
              {/* Heading with icon */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  Connect With
                </h1>
              </div>
              <div className="flex items-center justify-center gap-3 mb-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#ABE7B4]">
                  Trusted Contractors
                </h2>

                <Image
                  src={hamer}
                  alt="Professional contractor"
                  width={100}
                  height={100}
                  className="sm:w-20 sm:h-20"
                />
              </div>

              {/* Description */}
              <p className="text-white/90 text-lg md:text-xl max-w-4xl mx-auto mb-12 leading-relaxed">
                YourTradeSource connects homeowners with trusted, verified
                contractors for home improvement, remodeling, and repairs. Find
                the{' '}
                <span className="text-[#ABE7B4] font-semibold">
                  perfect professional
                </span>{' '}
                for your project and bring your{' '}
                <span className="text-[#ABE7B4] font-semibold">
                  vision to life
                </span>
                .
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="What are you looking for?"
                    className="w-full px-6 py-4 pr-14 text-gray-700 bg-white rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-[#ABE7B4] focus:ring-offset-2 focus:ring-offset-transparent text-lg"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-3 text-gray-500 hover:text-[#ABE7B4] transition-colors">
                    <Search className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service component full width at the bottom of the banner */}
      <div className="w-full -top-16 sm:-top-20 md:-top-28 lg:-top-36 2xl:-top-40 relative">
        <Service />
      </div>
    </>
  );
}
