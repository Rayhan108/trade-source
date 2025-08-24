'use client';

import { Button } from 'antd';
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCreditCard,
} from 'react-icons/fa';

export default function BillingInfo() {
  return (
    <div className="bg-white min-h-screen rounded-md shadow-sm p-3">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Billing Info
      </h2>
      {/* Divider */}
      <div className="border-b border-gray-200 mb-8"></div>
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Payment Method
        </h3>

        {/* Card Logos */}
        <div className="flex items-center gap-4 mb-4">
          <FaCcVisa className="text-3xl text-blue-600" />
          <FaCcMastercard className="text-3xl text-red-500" />
          <FaCcAmex className="text-3xl text-blue-800" />
        </div>

        {/* Card Number Field */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Card number"
            className="w-full pl-10 pr-32 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaCreditCard className="absolute top-2.5 left-3 text-gray-400 text-lg" />
          <button className="absolute right-2 top-1.5 bg-black text-white text-sm px-3 py-1 rounded-md">
            Autofill{' '}
            <span className="text-green-400 font-medium ml-1">link</span>
          </button>
        </div>

        {/* Name on Card Field */}
        <input
          type="text"
          placeholder="Name on Card"
          className="w-full px-4 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex w-full justify-end gap-3 pt-4">
        <Button className="w-1/2">Cancel</Button>
        <Button type="primary" htmlType="submit" className="bg-blue-600 w-1/2">
          Update
        </Button>
      </div>
    </div>
  );
}
