import Image from 'next/image';
import banImg from '@/assests/project4.png';
import {
  FaHome,
  FaPaintRoller,
  FaTools,
  FaLeaf,
  FaBolt,
  FaHammer,
} from 'react-icons/fa';

const ConBaner = () => {
  const services = [
    { name: 'House Cleaning', icon: FaHome },
    { name: 'Outdoor Painting', icon: FaPaintRoller },
    { name: 'Fencing Service', icon: FaTools },
    { name: 'Landscaping', icon: FaLeaf },
    { name: 'Electrical', icon: FaBolt },
    { name: 'House Remodeling', icon: FaHammer },
  ];

  return (
    <div className=" bg-green-200">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Become A Contractor And Grow Your Business
              </h1>
              <p className="text-gray-700 text-lg md:text-xl">
                100% Local and original clients are waiting for your service!
              </p>
            </div>

            {/* Search Section */}
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="What service do you provide?"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 whitespace-nowrap">
                Get Started
              </button>
            </div>

            {/* Popular Services */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Popular Services
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-blue-600 hover:text-blue-700 cursor-pointer transition-colors duration-200"
                    >
                      <IconComponent className="text-xl flex-shrink-0" />
                      <span className="font-medium text-gray-800">
                        {service.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-first lg:order-last">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={banImg}
                alt="Professional contractor smiling while working"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConBaner;
