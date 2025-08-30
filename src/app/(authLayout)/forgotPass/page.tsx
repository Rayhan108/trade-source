'use client';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Image from 'next/image';
import backgroundImg from '@/assests/bannerImg.jpg';
import logo from '@/assests/YL 2.png';
import { message } from 'antd';
import { useForgotPasswordMutation } from '@/redux/features/auth/authApi';

const ForgotPassPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [forgotPassword] = useForgotPasswordMutation();

  const handleForgotPassword: SubmitHandler<FieldValues> = async data => {
    try {
      const res = await forgotPassword(data).unwrap();

      if (res.success) {
        message.success(res.message);
        reset();
      }
    } catch (error) {
      message.error(error?.data?.message || 'Something went wrong');
      console.error('Error:', error);
    }
  };

  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <Image
        src={backgroundImg}
        alt="Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16">
        {/* Forgot Password Box */}
        <div className="bg-white bg-opacity-70 px-8 py-6 sm:px-16 sm:py-10 md:px-24 md:py-12 rounded-md shadow-md max-w-full  text-center">
          {/* Logo and Title */}
          <div className="flex items-center justify-center mb-6 space-x-2">
            <Image
              src={logo}
              alt="Logo"
              width={120}
              height={60}
              className="sm:w-32 sm:h-16 md:w-44 md:h-22"
            />
            <div className="text-blue-600 font-semibold text-lg sm:text-2xl md:text-3xl lg:text-4xl">
              Your Trade Source
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-black font-bold text-xl sm:text-2xl mb-3 text-left">
            Forgot Password
          </h2>
          <p className="text-black text-sm mb-5 text-left">
            Enter your email address to get a verification code for resetting
            your password.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit(handleForgotPassword)}
            className="space-y-5"
          >
            <div>
              <input
                type="email"
                placeholder="Email"
                {...register('email', {
                  required: 'Email is Required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email format',
                  },
                })}
                className="w-full p-2.5 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.email.message.toString()}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
            >
              Send Code
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassPage;
