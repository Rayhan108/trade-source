'use client'
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image"
import { Modal, Input, Button } from 'antd'
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"
import userImg from '../../../assests/user.png'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { RiEyeCloseLine } from "react-icons/ri";
import { IoCameraOutline } from "react-icons/io5";
export default function ProfilePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
    // Submit logic here
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Validate phone length for BD (+880) only
  useEffect(() => {
    if (phone.startsWith("880")) {
      const localNumber = phone.slice(3);
      if (localNumber.length !== 9) {
        setPhoneError("Bangladesh phone number must be exactly 9 digits");
      } else {
        setPhoneError("");
      }
    } else if (phone.length < 7) {
      setPhoneError("Phone number is required or invalid");
    } else {
      setPhoneError("");
    }
  }, [phone]);

  const onSubmit = (data) => {
    if (phoneError) {
      alert("Please fix phone number errors before submitting.");
      return;
    }
    data.phoneNumber = phone;
    console.log("Form Data:", data);
  }



  return (
    <div className="w-full   min-h-screen bg-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
        <button 
          className="px-6 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition"
          onClick={showModal}
        >
          Edit
        </button>
      </div>

      {/* Divider */}
      <div className="border-b border-gray-200 mb-8"></div>

      {/* Profile Content */}
      <div className="flex flex-col md:flex-row justify-center xl:mt-48 items-center md:items-start gap-12">
        {/* Profile Photo */}
        <div className="w-64 h-64 flex-shrink-0">
          <Image
            src={userImg}
            alt="Profile"
            width={256}
            height={256}
            className="rounded-full object-cover"
          />
        </div>

        {/* User Information */}
        <div className="flex flex-col space-y-6 flex-grow">
          <div className="flex items-center gap-4">
            <FaUser className="text-gray-600 w-5 h-5" />
            <span className="text-lg text-gray-900">Bessie Cooper</span>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-gray-600 w-5 h-5" />
            <span className="text-lg text-gray-900">bessie@gmail.com</span>
          </div>

          <div className="flex items-center gap-4">
            <FaPhone className="text-gray-600 w-5 h-5" />
            <span className="text-lg text-gray-900">+21309711240</span>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-gray-600 w-5 h-5" />
            <span className="text-lg text-gray-900">Jason road, Perth</span>
          </div>

          {/* Logout Button */}
          <button className="w-[30%] bg-red-500 text-white py-3 rounded hover:bg-red-600 transition mt-4">Logout</button>
        </div>
      </div>

      {/* Edit Profile Modal */}
 <Modal
  title={null}
  open={isModalOpen}
  onCancel={handleCancel}
  footer={null}
  width={700}
>
  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:flex-row gap-8 py-8">
    {/* Profile Image */}
    <div className="flex flex-col items-center gap-2">
   
              <div className="relative w-44 h-44 rounded-full overflow-hidden">
            <Image
              src={userImg}
              alt="Profile"
              fill
              className="object-cover rounded-full"
            />
            <div className="bg-black opacity-80 w-full p-1 shadow-md cursor-pointer relative top-36 py-4">
              <IoCameraOutline
                size={24}
                className="text-white absolute bottom-1 left-20"
              />
            </div>
          </div>
    </div>

    {/* Form Fields */}
    <div className="flex-1 space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">First Name</label>
          <Input
            {...register("firstName", { required: "First name is required" })}
            placeholder="Bessie"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Last Name</label>
          <Input
            {...register("lastName", { required: "Last name is required" })}
            placeholder="Cooper"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <Input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format",
            },
          })}
          placeholder="abc@gmail.com"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

              <div className="phone-wrapper w-full">
              <PhoneInput
                country={"bd"}
                value={phone}
                onChange={setPhone}
                inputProps={{
                  name: "phoneNumber",
                  required: true,
                  autoFocus: false,
                }}
                containerClass=""
                inputClass="p-3 rounded-r-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                buttonClass="rounded-l-md border border-gray-300 custom-flag-button"
                dropdownClass="rounded-md"
                specialLabel={""}
              />
              {(phoneError || errors.phoneNumber) && (
                <p className="text-red-600 text-sm mt-1">
                  {phoneError || errors.phoneNumber?.message}
                </p>
              )}
            </div>

      <div>
        <label className="block text-sm font-medium mb-1">Date Of Birth</label>
        <Input type="date" defaultValue="1998-10-10" />
      </div>

      {/* Buttons */}
      <div className="flex w-full justify-end gap-3 pt-4">
        <Button className="w-1/2" onClick={handleCancel}>Cancel</Button>
        <Button type="primary" htmlType="submit" className="bg-blue-600 w-1/2">
          Update
        </Button>
      </div>
    </div>
  </form>
</Modal>

    </div>
  )
}
