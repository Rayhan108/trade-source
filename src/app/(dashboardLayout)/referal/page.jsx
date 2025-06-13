"use client";

import { useState } from "react";
import { HiMail, HiClipboardCopy, HiCheck } from "react-icons/hi";
  const referrals = [
    { name: 'Amy', status: 'Referred', reward: '$10 credit', claimed: false },
    { name: 'Amy', status: 'Referred', reward: '$10 credit', claimed: true },
    { name: 'Amy', status: 'Referred', reward: '$10 credit', claimed: true },
    { name: 'Amy', status: 'Referred', reward: '$10 credit', claimed: true },
  ];

export default function ReferalPage() {
  const [email, setEmail] = useState("");
  const [copied, setCopied] = useState(false);
  const referralLink = "https://yourtradesource.com/referral?code=KEVIN123";

  const handleSendInvitation = () => {
    if (email) {
      // Handle send invitation logic here
      console.log("Sending invitation to:", email);
      setEmail("");
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  return (
    <div>
      <div className="w-full   py-3 container mx-auto mb-8 bg-[#ffffff] rounded-xl  px-4 lg:px-8">
         {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Referral</h1>
 
      </div>

      {/* Divider */}
      <div className="border-b border-gray-200 mb-8"></div>
        <div className=" ">
          <div className="  items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              {/* Description */}
              <div className="mb-8">
                <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                  At YourTradeSource (YTS), we believe great work is worth
                  sharing. Refer a friend, and you both earn rewards!
                </p>

                <p className="text-gray-700 text-lg mb-4 font-medium">
                  Here&apos;s how it works:
                </p>

                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      Your friend gets $10 off their first completed service.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      You get a $10 credit toward your next service once they
                      complete their first task.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Email Input Section */}
              <div className="mb-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <HiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      placeholder="Enter email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-700"
                    />
                  </div>
                  <button
                    onClick={handleSendInvitation}
                    className="px-6 py-3 bg-gray-400 hover:bg-gray-500 text-white font-medium rounded-lg transition-colors duration-200 whitespace-nowrap"
                  >
                    Send Invitation
                  </button>
                </div>
              </div>

              {/* Or Divider */}
              <div className="flex items-center mb-6">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="px-4 text-gray-500 font-medium">Or</span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>

              {/* Referral Link Section */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <input
                    type="text"
                    value={referralLink}
                    readOnly
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 text-sm"
                  />
                </div>
                <button
                  onClick={handleCopyLink}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 whitespace-nowrap flex items-center justify-center gap-2"
                >
                  {copied ? (
                    <>
                      <HiCheck className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <HiClipboardCopy className="w-4 h-4" />
                      Copy Link
                    </>
                  )}
                </button>
              </div>
            </div>


          </div>


  <div className=" w-full pt-3">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Referral History</h2>
      <div className="space-y-4">
        {referrals.map((ref, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between text-sm text-gray-700"
          >
            {/* Green Check & Name */}
            <div className="flex items-center gap-2 min-w-[100px]">
              <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                ✓
              </span>
              <span className="font-semibold">{ref.name}</span>
            </div>

            {/* Status */}
            <span className="w-[80px]">{ref.status}</span>

            {/* Reward */}
            <span className="w-[100px]">{ref.reward}</span>

            {/* Button */}
            {ref.claimed ? (
              <button className="bg-gray-200 text-gray-500 px-4 py-1 rounded-md cursor-not-allowed">
                Claimed
              </button>
            ) : (
              <button className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700">
                Claim
              </button>
            )}
          </div>
        ))}
      </div>
    </div>


        </div>
      </div>
    </div>
  );
}
