'use client'
import React, { useState } from 'react';
import { FaChevronDown, FaCreditCard } from 'react-icons/fa';
import { FaStripe } from "react-icons/fa6";
import { GiStripedSun } from "react-icons/gi";
import { SiVisa, SiMastercard, SiAmericanexpress, SiDiscover } from "react-icons/si"
const PaymentMethodPage = () => {
      const [selectedPayment, setSelectedPayment] = useState("card")
  const [cardNumber, setCardNumber] = useState("")
  const [expiry, setExpiry] = useState("")
  const [cvc, setCvc] = useState("")
  const [country, setCountry] = useState("United States")
  const [postalCode, setPostalCode] = useState("")

  const paymentMethods = [
    { id: "card", label: "Card", icon: FaCreditCard },
    { id: "eps", label: "EPS", icon: GiStripedSun },
    { id: "giropay", label: "Giropay", icon: FaStripe },
    { id: "more", label: "...", icon: null },
  ]
    return (
        <div>
            <div className='bg-white p-4 container mx-auto'>
     
            <h2 className="text-3xl font-bold text-black mb-6">Payment Method</h2>

            {/* Payment Method Selection */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setSelectedPayment(method.id)}
                  className={`p-4 border-2 rounded-lg text-center transition-all ${
                    selectedPayment === method.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {method.icon && <method.icon className="w-6 h-6 mx-auto mb-2 text-blue-600" />}
                  <div className="text-sm font-medium text-gray-700">{method.label}</div>
                </button>
              ))}
            </div>

            {/* Card Details Form */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Card number</label>
                <div className="relative">
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Expiry</label>
                  <input
                    type="text"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    placeholder="MM / YY"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">CVC</label>
                  <input
                    type="text"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    placeholder="CVC"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                  <div className="relative">
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Postal code</label>
                  <input
                    type="text"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    placeholder="90210"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button className="text-blue-600 text-sm hover:underline">Do you have a promo code?</button>
              </div>
            </div>

            {/* Price Details */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Price Details</h3>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">Hourly Rate</span>
                  <span className="font-medium">$65/hr</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Trust & Support fee</span>
                  <span className="font-medium">$10/hr</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between">
                    <span className="text-xl font-bold text-gray-900">Total Rate</span>
                    <span className="text-xl font-bold text-gray-900">$75/Hr</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-600 leading-relaxed">
                You may see a temporary hold on your payment method in the amount of your Tasker's hourly rate of
                $65.00. You can cancel at any time. Tasks cancelled less than 24 hours before the scheduled start time
                may be subject to a cancellation fee equal to one hour of work. Tasks require a minimum booking of two
                hours.
              </div>
            </div>
          </div>
    
        </div>
    );
};

export default PaymentMethodPage;