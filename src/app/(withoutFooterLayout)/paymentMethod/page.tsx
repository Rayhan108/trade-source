'use client';

import React, { useState } from 'react';
import { FaChevronDown, FaCreditCard } from 'react-icons/fa';
import { FaStripe } from 'react-icons/fa6';
import { GiStripedSun } from 'react-icons/gi';
import { SiTicktick } from 'react-icons/si';
import {
  SiVisa,
  SiMastercard,
  SiAmericanexpress,
  SiDiscover,
} from 'react-icons/si';
const PaymentMethodPage = () => {
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [country, setCountry] = useState('United States');
  const [postalCode, setPostalCode] = useState('');

  const paymentMethods = [
    { id: 'card', label: 'Card', icon: FaCreditCard },
    { id: 'eps', label: 'EPS', icon: GiStripedSun },
    { id: 'giropay', label: 'Giropay', icon: FaStripe },
    { id: 'more', label: '...', icon: null },
  ];
  return (
    <div>
      <div className="bg-white p-4 max-w-7xl rounded-md mx-auto my-5">
        <h2 className="text-3xl font-bold text-black mb-6">Payment Method</h2>

        {/* Payment Method Selection */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {paymentMethods.map(method => (
            <button
              key={method.id}
              onClick={() => setSelectedPayment(method.id)}
              className={`p-4 border-2 rounded-lg text-center transition-all ${
                selectedPayment === method.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {method.icon && (
                <method.icon className="w-6 h-6 mx-auto mb-2 text-blue-600" />
              )}
              <div className="text-sm font-medium text-gray-700">
                {method.label}
              </div>
            </button>
          ))}
        </div>

        {/* Card Details Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Card number
            </label>
            <div className="relative">
              <input
                type="text"
                value={cardNumber}
                onChange={e => setCardNumber(e.target.value)}
                placeholder="1234 1234 1234 1234"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-24"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-1">
                <SiVisa className="w-6 h-6 text-blue-600" />
                <SiMastercard className="w-6 h-6 text-red-500" />
                <SiAmericanexpress className="w-6 h-6 text-blue-500" />
                <SiDiscover className="w-6 h-6 text-orange-500" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expiry
              </label>
              <input
                type="text"
                value={expiry}
                onChange={e => setExpiry(e.target.value)}
                placeholder="MM / YY"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CVC
              </label>
              <input
                type="text"
                value={cvc}
                onChange={e => setCvc(e.target.value)}
                placeholder="CVC"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country
              </label>
              <div className="relative">
                <select
                  value={country}
                  onChange={e => setCountry(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                </select>
                <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Postal code
              </label>
              <input
                type="text"
                value={postalCode}
                onChange={e => setPostalCode(e.target.value)}
                placeholder="90210"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="pt-2">
            <button className="text-blue-600 text-sm hover:underline">
              Do you have a promo code?
            </button>
          </div>
        </div>

        {/* Price Details */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex gap-8 max-w-5xl mx-auto justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Membership Fee
              </h3>
            </div>

            <div>
              <h1 className="font-semibold text-xl">$29.99</h1>
            </div>
          </div>
          <div className="flex justify-center my-3 gap-3">
            <SiTicktick size={24} className="text-[#34C759] " />
            <p className="text-xl">
              I understand that I am purchasing an automatically renewing
              membership. I accept all terms and conditions of Angi Key
              membership.
            </p>
          </div>
          <div className="text-center my-5">
            <button className="bg-[#1D69E1] w-[70%]  rounded-md font-bold  text-white px-4 py-2">
              Purchase Membership
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodPage;
