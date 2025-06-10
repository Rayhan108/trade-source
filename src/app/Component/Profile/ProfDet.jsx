"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Modal, Radio, Button } from "antd";
import { HiFlag } from "react-icons/hi2";
import { IoCameraOutline } from "react-icons/io5";
import { LockOutlined } from "@ant-design/icons";
import img from "../../../assests/bannerImg.jpg";

const ProfDet = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reason, setReason] = useState("");

  const reasons = [
    "It’s inaccurate or incorrect",
    "It’s not a real person",
    "It’s a scam",
    "It’s offensive",
    "It’s something else",
  ];

  const handleOk = () => {
    // handle submit logic
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setReason("");
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 space-x-0 sm:space-x-6 p-6">
        <div className="flex items-center gap-5">
          <div className="relative w-28 h-28 rounded-full overflow-hidden">
            <Image
              src={img}
              alt="Profile"
              fill
              className="object-cover rounded-full"
            />
            <div className="bg-black opacity-80 w-full p-1 shadow-md cursor-pointer relative top-20 py-4">
              <IoCameraOutline
                size={24}
                className="text-white absolute bottom-1 left-10"
              />
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Gram Dew</h2>
            <p className="text-gray-600">Interior Painting</p>
          </div>
          <button className="bg-blue-600 h-10 text-white text-sm px-3 py-0 rounded-xl transition">
            Request Quote
          </button>
        </div>
        <div
          className="flex gap-3 border-[#F44848] border-b-2 cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <HiFlag size={24} className="text-[#F44848]" />
          <p className="text-[#F44848]">Report Contractor</p>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-[#0F161C] text-sm">
          Hi, I’m Gram Dew from Dream Ireland Painting. With years of experience
          in interior painting, I’m dedicated to transforming spaces with
          high-quality finishes. I work closely with my clients to bring their
          vision to life, ensuring professional and detailed results. Check out
          my projects and reviews, and feel free to reach out for your next
          painting project!
        </p>
      </div>

      {/* Modal */}
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        centered
        width={450}
      >
        <div className="container  mx-auto p-5">
          <h2 className="text-3xl font-semibold mb-4 border-b-2 border-black py-3">
            Report This Contractor
          </h2>
          <div className="mb-2 font-medium text-base text-[#0F161C]">
            Why are you reporting the Contractor?
          </div>
          <div className="text-gray-500 text-sm mb-5 flex items-center gap-2">
            <LockOutlined /> This won’t be shared with Contractor.
          </div>

          <Radio.Group
            onChange={(e) => setReason(e.target.value)}
            value={reason}
            className="custom-radio-group  space-y-4 mb-6 sm:w-[350px] "
          >
            {reasons.map((r) => (
              <Radio key={r} value={r} className="">
                {r}
              </Radio>
            ))}
          </Radio.Group>

          <div className="flex justify-between mt-8">
            <Button
              onClick={handleCancel}
              className="w-1/2 mr-2 border border-gray-300 text-gray-700 hover:border-gray-400"
            >
              Cancel
            </Button>
            <Button
              type="primary"
              onClick={handleOk}
              className="w-1/2 ml-2 bg-blue-600 hover:bg-blue-700"
              disabled={!reason}
            >
              Continue
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProfDet;
