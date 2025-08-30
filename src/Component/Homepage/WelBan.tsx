import { Search } from 'lucide-react';
import Image from 'next/image';
import house from '@/assests/house.png';

const WelBan = () => {
  return (
    <div className=" bg-slate-700 flex items-center py-8 ">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Welcome Back!
            </h1>

            {/* Search Bar */}
            <div className="relative  max-w-lg">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full px-6 py-3 md:py-4 pr-12 rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={house}
                alt="Beautiful American house front porch decorated with patriotic bunting, wreaths, and flowers"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelBan;
