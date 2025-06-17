'use client'
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image"
import { Input, Button } from 'antd'
import userImg from '../../../assests/user.png'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { IoCameraOutline } from "react-icons/io5";
const YourDetailsPage = () => {
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
        <>
             {/* Header */}
      <div className=" max-w-4xl mx-auto  flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-gray-800 mt-5">Basic Details About You</h1>

      </div> 
 <div className="w-full max-w-4xl mx-auto my-8 rounded-md bg-white p-6">

  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:flex-row gap-8 py-8">

    {/* Form Fields */}
    <div className="flex-1 space-y-4">
      <div className="">
        <div>
          <label className="block text-sm font-bold mb-3 ">Your Name</label>
          <Input
            {...register("yourName", { required: "First name is required" })}
            placeholder="Bessie"
          />
          {errors.yourName && (
            <p className="text-red-500 text-sm ">{errors.yourName.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-bold mb-3 mt-5">Company Name</label>
          <Input
            {...register("companyName", { required: "First name is required" })}
            placeholder="Bessie"
          />
          {errors.companyName && (
            <p className="text-red-500 text-sm">{errors.companyName.message}</p>
          )}
        </div>
  
      </div>

      <div>
        <label className="block text-sm font-bold mb-3 mt-5">Email Address</label>
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
                 <label className="block text-sm font-bold mb-3 mt-5">Phone Number</label>
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

<div className="">
              <label className="block text-sm font-bold mb-3 mt-5">Company size,employees</label>
              <div className="flex gap-8 max-w-3xl mx-auto">
                <button className="text-sm border border-black px-3 py-1 rounded-2xl">Self-employed, Sole propitor</button>
                <button className="text-sm border border-black px-3 py-1 rounded-2xl">2-10 Person</button>
                <button className="text-sm border border-black px-3 py-1 rounded-2xl">11-50 Person</button>
                <button className="text-sm border border-black px-3 py-1 rounded-2xl">51-200 Person</button>
                <button className="text-sm border border-black px-3 py-1 rounded-2xl">200+</button>
              </div>
</div>

        <button htmlType="submit" className="bg-blue-600 py-2  text-white w-full rounded-xl">
   Continue
        </button>

    </div>
  </form>


    </div>
        </>
    );
};

export default YourDetailsPage;