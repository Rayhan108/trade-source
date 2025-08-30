'use client';

import { useState } from 'react';
import { HiMail, HiClipboardCopy, HiCheck } from 'react-icons/hi';
import refer from '@/assests/Referral.png';
import Image from 'next/image';
export default function ReferPage() {
  const [email, setEmail] = useState('');
  const [copied, setCopied] = useState(false);
  const referralLink = 'https://yourtradesource.com/referral?code=KEVIN123';

  const handleSendInvitation = () => {
    if (email) {
      // Handle send invitation logic here
      console.log('Sending invitation to:', email);
      setEmail('');
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  return (
    <div>
      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl container mx-auto my-12 font-bold text-gray-900 mb-6 leading-tight">
        Help Your Friends & Get $10
      </h1>
      <div className="w-full container mx-auto mb-8 bg-[#ffffff] rounded-xl  py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-7xl ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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
                      onChange={e => setEmail(e.target.value)}
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

            {/* Right Illustration */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <Image
                src={refer}
                alt=""
                width={500}
                height={500}
                className="w-96"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
