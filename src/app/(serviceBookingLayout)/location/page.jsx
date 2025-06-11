import Link from "next/link";
import { TbCurrentLocation } from "react-icons/tb";
const location = () => {
    return (
        <div className="max-w-4xl mx-auto p-5">
                 <h1 className="text-3xl sm:text-4xl lg:text-5xl  my-12 font-bold text-gray-900 mb-6 leading-tight">
      Compare quotes from top-rated Handymen
      </h1>
      <div className="bg-[#ffffff] p-8 space-y-3">
<h1 className="text-[#1D69E1] text-2xl font-semibold">Enter Your Location</h1>
<p className="text-sm border-b-2 border-[#1D69E1] pb-3">Provide your address or location so we can match you with contractors in your area</p>
          {/* Location Input Field */}
          <div className="relative">
        <label className="font-semibold mb-1 block">Project Location</label>
        <input

          className="w-full border border-gray-300 rounded-md p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="17 Mile Drive, Pebble Beach, CA, USA"
        />
        <TbCurrentLocation className="absolute right-3 top-[51px] transform -translate-y-1/2 text-black pointer-events-none" size={20} />
      </div>
              <input

          className="w-full border border-gray-300 rounded-md p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Apt 23"
        />
        <Link href={'/chooseService'}>
        
            <button className="bg-blue-600 w-full hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg text-lg transition-colors duration-200 shadow-lg my-8">
        Continue
          </button>
        </Link>
      </div>
        </div>
    );
}; 

export default location;
