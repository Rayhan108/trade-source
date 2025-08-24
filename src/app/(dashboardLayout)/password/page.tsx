/* eslint-disable no-unused-vars */
'use client';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { Button } from 'antd';
// import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import userImg from '../../../assests/user.png';
// import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { RiEyeCloseLine } from 'react-icons/ri';
// import { IoCameraOutline } from 'react-icons/io5';
export default function PasswordPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const showModal = () => {
  //   setIsModalOpen(true);
  // };

  // const handleOk = () => {
  //   setIsModalOpen(false);
  //   // Submit logic here
  // };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Validate phone length for BD (+880) only
  useEffect(() => {
    if (phone.startsWith('880')) {
      const localNumber = phone.slice(3);
      if (localNumber.length !== 9) {
        setPhoneError('Bangladesh phone number must be exactly 9 digits');
      } else {
        setPhoneError('');
      }
    } else if (phone.length < 7) {
      setPhoneError('Phone number is required or invalid');
    } else {
      setPhoneError('');
    }
  }, [phone]);

  const onSubmit = data => {
    if (phoneError) {
      alert('Please fix phone number errors before submitting.');
      return;
    }
    data.phoneNumber = phone;
    console.log('Form Data:', data);
  };

  return (
    <div className="w-full  min-h-screen bg-white p-6 font-dm">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Password</h1>
      </div>

      {/* Divider */}
      <div className="border-b border-gray-200 mb-8"></div>

      {/* Profile Content */}
      <div className="flex xl:mt-48 flex-col md:flex-row items-center md:items-start gap-12">
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

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col md:flex-row gap-8 w-full"
        >
          {/* Form Fields */}
          <div className="flex-1 w-full space-y-4">
            {/* Password with show/hide toggle */}
            <div className="relative">
              <label className="block text-sm font-medium mb-1">
                Current Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Current Password"
                {...register('password', { required: 'Password is required' })}
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-16  top-1/2 right-4 -translate-y-1/2 text-gray-600"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={22} />
                ) : (
                  <RiEyeCloseLine size={22} />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-600 text-sm mt-1">
                {errors.password.message.toString()}
              </p>
            )}
            <div className="relative">
              <label className="block text-sm font-medium mb-1">
                New Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="New Password"
                {...register('newPassword', {
                  required: 'Password is required',
                })}
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-16  top-1/2 right-4 -translate-y-1/2 text-gray-600"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={22} />
                ) : (
                  <RiEyeCloseLine size={22} />
                )}
              </button>
            </div>
            {errors.newPassword && (
              <p className="text-red-600 text-sm mt-1">
                {errors.newPassword.message.toString()}
              </p>
            )}
            <div className="relative">
              <label className="block text-sm font-medium mb-1">
                Confirm Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
                {...register('confirmPassword', {
                  required: 'Password is required',
                })}
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-16  top-1/2 right-4 -translate-y-1/2 text-gray-600"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={22} />
                ) : (
                  <RiEyeCloseLine size={22} />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-600 text-sm mt-1">
                {errors.confirmPassword.message.toString()}
              </p>
            )}

            {/* Buttons */}
            <div className="flex w-full justify-end gap-3 pt-4">
              <Button className="w-1/2" onClick={handleCancel}>
                Cancel
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                className="bg-blue-600 w-1/2"
              >
                Update
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
