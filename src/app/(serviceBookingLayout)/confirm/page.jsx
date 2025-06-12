"use client"
import cons1 from "../../../assests/cons1.png";
import { useState } from "react"
import Image from "next/image"
import { FaCreditCard, FaCalendarAlt, FaMapMarkerAlt, FaBuilding, FaChevronDown} from "react-icons/fa"
import { SiVisa, SiMastercard, SiAmericanexpress, SiDiscover } from "react-icons/si"
import { SlBadge } from "react-icons/sl";
import { FaStripe } from "react-icons/fa6";
import { GiStripedSun } from "react-icons/gi";
import giropay from '../../../assests/Giropay.png'
import eps from '../../../assests/EPS.png'
import { useRouter } from "next/navigation";
export default function PaymentBookingInterface() {
  const [selectedPayment, setSelectedPayment] = useState("card")
  const [cardNumber, setCardNumber] = useState("")
  const [expiry, setExpiry] = useState("")
  const [cvc, setCvc] = useState("")
  const [country, setCountry] = useState("United States")
  const [postalCode, setPostalCode] = useState("")
const router = useRouter();
  const paymentMethods = [
    { id: "card", label: "Card", icon: FaCreditCard },
    { id: "eps", label: "EPS", icon: GiStripedSun },
    { id: "giropay", label: "Giropay", icon: FaStripe },
    { id: "more", label: "...", icon: null },
  ]
const handleConfirm=()=>{
router.push('/done')
}
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Payment Method */}
          <div className="bg-white rounded-lg p-6 h-fit">
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

          {/* Right Side - Task Details */}
          <div className="bg-white rounded-lg p-6 h-fit">
            {/* Contractor Profile */}
            <div className=" mb-6">
              <div className="flex flex-col justify-center items-center">
                <div className="">
                  <Image
                    src={cons1}
                    alt="Ellie Smith"
                    width={80}
                    height={80}
                    className="rounded-full w-44 h-44 object-cover"
                  />
             
                </div>
             <h3 className="font-semibold text-gray-900 flex gap-3  border-b border-gray-500 py-3">
                    <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      <SlBadge />
                    </span>
                    <span>Ellie Smith</span>
                  </h3>
              </div>
            </div>

            {/* Task Info */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Cleaning</h2>
                <button className="px-4 py-2 border border-black rounded-lg text-black hover:bg-gray-50 transition">
                  Edit Task
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-700">
                  <FaCalendarAlt className="w-5 h-5" />
                  <span>Apr 28, 12:00 PM</span>
                </div>

                <div className="flex items-center space-x-3 text-gray-700">
                  <FaMapMarkerAlt className="w-5 h-5" />
                  <span>123 Main Street, New York, NY 10001</span>
                </div>

                <div className="flex items-center space-x-3 text-gray-700">
                  <FaBuilding className="w-5 h-5" />
                  <span>Apartment</span>
                </div>
              </div>
            </div>

            {/* Task Details */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Task Details</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-3">
                  2-hour minimum per booking. I have 5+ years of experience and come fully equipped with my own tools.
                  I'm reliable, detail-oriented, and get the job done right.
                </p>
                <p className="text-gray-700 mb-2">Services include:</p>
                <ul className="text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    Furniture assembly
                  </li>
                </ul>
              </div>
            </div>

            {/* Confirm Button */}
            <button onClick={()=>handleConfirm()} className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition">
              Confirm and Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
