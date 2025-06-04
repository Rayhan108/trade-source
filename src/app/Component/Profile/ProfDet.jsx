import React from "react";
import img from "../../../assests/bannerImg.jpg";
import Image from "next/image";
import { HiFlag } from "react-icons/hi2";
import { IoCameraOutline } from "react-icons/io5";
const ProfDet = () => {
  return (
    <div className="container mx-auto">
    <div className="flex justify-between items-center space-x-6 p-6 ">
      <div className="flex items-center gap-5">
        {/* Profile Image */}
           <div className="relative w-28 h-28 rounded-full overflow-hidden">
            <Image
              src={img}
              alt="Profile"
              fill
              className="object-cover rounded-full"
            />
            {/* Left face paint */}
            <div
        
            />
            {/* Right face paint */}
            <div
            
            />
            {/* Camera Icon */}
            <div className=" bg-black opacity-80 w-full p-1 shadow-md cursor-pointer relative top-20 py-4">
              <IoCameraOutline size={24} className="text-white left-7 sm:left-10 md:left-11 absolute bottom-1 " />
            </div>
          </div>
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-gray-900">Gram Dew</h2>
          <p className="text-gray-600">Interior Painting</p>
        </div>

        {/* Request Quote Button */}
        <button className="bg-blue-600 h-10 text-white text-sm px-3 py-0  rounded-xl transition">
          Request Quote
        </button>
      </div>
      <div className="flex gap-3 border-[#F44848] border-b-2">
        <HiFlag size={24} className="text-[#F44848]" />
        <p className="text-[#F44848]">Report Contractor</p>
      </div>
    </div>
    <div className="mb-8">
        <p className="text-[#0F161C] text-sm">Hi, I’m Gram Dew from Dream Ireland Painting. With years of experience in interior painting, I’m dedicated to transforming spaces with high-quality finishes. I work closely with my clients to bring their vision to life, ensuring professional and detailed results. Check out my projects and reviews, and feel free to reach out for your next painting project!</p>
    </div>
    
    </div>
  );
};

export default ProfDet;
