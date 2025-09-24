import Link from 'next/link';
import { FaToolbox, FaSearch } from 'react-icons/fa';
import { FaArrowUpLong } from 'react-icons/fa6';
import { ImParagraphLeft } from 'react-icons/im';
export default function VipContractor() {
  const features = [
    {
      title: 'Priority Job Requests',
      icon: (
        <div className="relative">
          <div className="flex flex-col space-y-1">
            <ImParagraphLeft className="text-green-500 text-lg" />
          </div>
          <FaArrowUpLong className="text-orange-500 text-xl absolute -right-2 -bottom-1" />
        </div>
      ),
      benefits: [
        'Get access to jobs before non-VIP contractors.',
        'Filter through high-priority and urgent job requests.',
        'Respond quickly and gain more opportunities.',
      ],
    },
    {
      title: 'Exclusive Tools',
      icon: (
        <div className="relative bg-blue-100 p-3 rounded-lg">
          <FaToolbox className="text-blue-600 text-2xl" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      ),
      benefits: [
        'Use advanced tools for project management.',
        'Access analytics to improve job efficiency.',
        'Gain insights for better decision-making.',
      ],
    },
    {
      title: 'Enhanced Visibility',
      icon: (
        <div className="relative">
          <div className="w-12 h-12 border-2 border-dashed border-gray-400 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
          <FaSearch className="text-gray-600 text-lg absolute -bottom-1 -right-1" />
        </div>
      ),
      benefits: [
        'Stand out with a VIP badge on your profile.',
        'Attract more clients through improved exposure.',
        'Increase trust and credibility with clients.',
      ],
    },
  ];

  return (
    <>
      <nav
        className="flex items-center font-normal text-base leading-6  bg-white pl-3 md:pl-5 lg:pl-10 xl:pl-44 border-t border-gray-500 py-3"
        aria-label="breadcrumb"
      >
        <p className="text-black text-xl">Home</p>
        <svg
          className="mx-2 w-6 h-6 text-black"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
        <span className="text-black cursor-default text-xl">VIP Member</span>
      </nav>
      <div className="max-w-7xl mx-auto p-8  ">
        {/* Header */}
        <div className="text-start mb-12">
          <h1 className=" text-xl md:text-3xl font-bold text-gray-900 leading-tight">
            Unlock Your Full Potential, Become A VIP Contractor Today
          </h1>
        </div>

        {/* Features */}
        <div className="space-y-12 mb-12 bg-white p-4 ">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-6">
              {/* Icon */}
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                {feature.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h2>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start">
                      <span className="text-gray-700 text-lg leading-relaxed">
                        • {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          {/* CTA Button */}
          <div className="text-center">
            <Link href={'/memberRegister'}>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
                Apply for VIP Status
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
