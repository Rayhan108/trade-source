"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Modal, Radio, Button, Upload, Input } from "antd";
import { HiFlag } from "react-icons/hi2";
import { IoCameraOutline } from "react-icons/io5";
import { LockOutlined, UploadOutlined } from "@ant-design/icons";
import img from "../../../assests/bannerImg.jpg";

const { TextArea } = Input;

const ProfDet = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [reason, setReason] = useState("");

  const reasons = [
    "It’s inaccurate or incorrect",
    "It’s not a real person",
    "It’s a scam",
    "It’s offensive",
    "It’s something else",
  ];

  const handleContinue = () => {
    setIsModalOpen(false);
    setIsSecondModalOpen(true);
  };

  const handleCancelAll = () => {
    setIsModalOpen(false);
    setIsSecondModalOpen(false);
    setReason("");
  };

  return (
    <div className="container mx-auto">
      {/* Profile Top Section */}
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

      {/* About Section */}
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

      {/* First Modal */}
      <Modal
        open={isModalOpen}
        onCancel={handleCancelAll}
        footer={null}
        centered
        width={450}
      >
        <div className="p-5">
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
            className="custom-radio-group space-y-4 flex flex-col sm:w-[350px] "
          >
            {reasons.map((r) => (
              <Radio key={r} value={r}>
                {r}
              </Radio>
            ))}
          </Radio.Group>

          <div className="flex justify-between mt-8">
            <Button
              onClick={handleCancelAll}
              className="w-1/2 mr-2 border border-gray-300 text-gray-700"
            >
              Cancel
            </Button>
            <Button
              type="primary"
              onClick={handleContinue}
              className="w-1/2 ml-2 bg-blue-600 hover:bg-blue-700"
              disabled={!reason}
            >
              Continue
            </Button>
          </div>
        </div>
      </Modal>

      {/* Second Modal */}
      <Modal
        open={isSecondModalOpen}
        onCancel={handleCancelAll}
        footer={null}
        centered
        width={500}
      >
        <div className="p-5">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-black pb-3">
            Report This Contractor
          </h2>
          <div className="mb-4">
            <p className="text-lg font-medium">
              Why are you reporting the Contractor?
            </p>
            <p className="text-sm text-gray-600 mt-2">
              We want to hear what you think so we can do better. We may not be
              able to respond to every piece of feedback individually.
            </p>
            <p className="text-sm text-gray-600 mt-1">
              If you have a question or need help resolving an issue, search our
              Help Center.
            </p>
          </div>

          <div className="mb-4">
            <label className="font-medium block mb-1">Feedback</label>
            <TextArea rows={4} placeholder="Describe your issue or question" />
          </div>

          <div className="mb-6">
            <label className="font-medium block mb-2">Attach File</label>
            <Upload beforeUpload={() => false} showUploadList={false}>
              <Button icon={<UploadOutlined />}>Choose File</Button>
            </Upload>
            <span className="ml-3 text-sm text-gray-500">No file chosen</span>
          </div>

          <div className="flex justify-between">
            <Button
              onClick={handleCancelAll}
              className="w-1/2 mr-2 border border-gray-300 text-gray-700"
            >
              Cancel
            </Button>
            <Button
              type="primary"
              className="w-1/2 ml-2 bg-blue-600 hover:bg-blue-700"
            >
              Send Report
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProfDet;
