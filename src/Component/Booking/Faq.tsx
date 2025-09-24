'use client';

import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import Image from 'next/image';
import faq from '@/assests/FAQ.png';

const faqData = [
  {
    id: 1,
    question: "What's a handy person do?",
    answer:
      'A Workspace is a shared space where you can invite teammates and clients to work on sites together.',
  },
  {
    id: 2,
    question: "What's the charges?",
    answer:
      'Our charges vary depending on the type of service and complexity of the work. We provide transparent pricing with no hidden fees. Contact us for a detailed quote based on your specific needs.',
  },
  {
    id: 3,
    question: 'How many time a clean?',
    answer:
      'Cleaning frequency depends on your needs and preferences. We offer one-time cleaning, weekly, bi-weekly, or monthly services. You can adjust the schedule anytime to fit your lifestyle.',
  },
  {
    id: 4,
    question: 'How to cancel a match?',
    answer:
      'You can cancel a match up to 24 hours before the scheduled appointment without any penalty. Simply go to your dashboard, find the booking, and click the cancel button.',
  },
  {
    id: 5,
    question: 'How many Workspaces can I have?',
    answer:
      'The number of Workspaces depends on your subscription plan. Basic plans include 1 Workspace, while premium plans offer unlimited Workspaces for your growing business needs.',
  },
  {
    id: 6,
    question: 'How many paid Site plans can I have in my Workspace?',
    answer:
      'Each Workspace can have multiple Site plans based on your subscription tier. Professional plans allow up to 10 Site plans, while Enterprise plans offer unlimited Site plans.',
  },
  {
    id: 7,
    question: 'Can I cancel my Site plan at any time?',
    answer:
      "Yes, you can cancel your Site plan at any time. The cancellation will take effect at the end of your current billing cycle, and you'll retain access until then.",
  },
  {
    id: 8,
    question: 'Can I cancel my Workspace plan at any time?',
    answer:
      'You have full control over your Workspace plan. You can cancel anytime from your account settings, and the cancellation will be processed at the end of your billing period.',
  },
];

export default function Faq() {
  const [openItems, setOpenItems] = useState(new Set([1])); // First item open by default

  const toggleItem = id => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-12 px-4 sm:py-16 lg:py-20 container mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Side - Title and Illustration */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight container mx-auto">
                Frequently Asked Questions
              </h2>
            </div>

            {/* Illustration */}
            <div className="flex justify-center lg:justify-start ">
              <Image src={faq} alt="" width={500} height={500} className="" />
            </div>
          </div>

          {/* Right Side - FAQ Items */}
          <div className="space-y-4">
            {faqData.map(item => (
              <div key={item.id} className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="flex items-center justify-between w-full text-left py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg px-2"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.has(item.id) ? (
                      <X className="w-6 h-6 text-gray-600" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-600" />
                    )}
                  </div>
                </button>

                {openItems.has(item.id) && (
                  <div className="px-2 mt-3 pb-4 animate-in slide-in-from-top-2 duration-200">
                    <p className="text-gray-600 text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
