"use client";
import { Modal } from "antd";
import React, { useState } from "react";

const DeletePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  const handleConfirmDelete = () => {
    // Call delete API or logic here
    console.log("Account deleted.");
    setIsModalOpen(false);
  };
  return (
    <div>
      <div className="max-w-7xl min-h-screen mx-auto border rounded-md p-6 shadow-sm bg-white">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Delete Account
        </h2>
        <div className="border-b border-gray-200 mb-8"></div>

        <div className="mb-2 max-w-xl mx-auto">
          <p className="text-xl  text-gray-500 mt-1">
            Once you delete your account, you will no longer be able to log in
            to Your Trade Source account. This action cannot be undone.
          </p>
          <button
            onClick={showModal}
            className="w-[60%] mt-3 border-[#F44848] border  text-[#F44848] text-xl py-2 rounded-md  transition  font-semibold"
          >
            Delete Account
          </button>
        </div>
      </div>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={600}
        centered
      >
        <div className="max-w-7xl  mx-auto rounded-md p-6 bg-white">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Delete Account
          </h2>
          <div className="border-b border-gray-200 mb-8"></div>

          <p className="text-xl  text-gray-500 my-3">
            Are you sure you want to delete your account?
          </p>
          <div className="mb-2 max-w-xl mx-auto flex gap-4">
            <button
              onClick={showModal}
              className="w-[50%] mt-3 border-[#1D69E1] border  text-[#1D69E1] text-xl py-1 rounded-md  transition  font-semibold"
            >
              Never Mind
            </button>
            <button
              onClick={showModal}
              className="w-[50%] mt-3 bg-[#F44848] border  text-[#ffffff] text-xl py-1 rounded-md  transition  font-semibold"
            >
              Yes,Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeletePage;
 