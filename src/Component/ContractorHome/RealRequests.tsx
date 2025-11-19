import { FaCalendarAlt, FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';

export default function RealRequests() {
  const jobRequests = [
    {
      id: 1,
      timeAgo: '4 minutes ago',
      title: 'Fix Leaking Bathroom Tap',
      description:
        'Need a licensed plumber to repair a slow leak in my bathroom tap. Preferably available this week.',
      clientName: 'Rachel T.',
      date: 'Apr 28, 12:00 PM',
      address: '123 Main Street, New York, NY 10001',
      propertyType: 'Apartment',
    },
    {
      id: 2,
      timeAgo: '4 minutes ago',
      title: 'Fix Leaking Bathroom Tap',
      description:
        'Need a licensed plumber to repair a slow leak in my bathroom tap. Preferably available this week.',
      clientName: 'Rachel T.',
      date: 'Apr 28, 12:00 PM',
      address: '123 Main Street, New York, NY 10001',
      propertyType: 'Apartment',
    },
    {
      id: 3,
      timeAgo: '4 minutes ago',
      title: 'Fix Leaking Bathroom Tap',
      description:
        'Need a licensed plumber to repair a slow leak in my bathroom tap. Preferably available this week.',
      clientName: 'Rachel T.',
      date: 'Apr 28, 12:00 PM',
      address: '123 Main Street, New York, NY 10001',
      propertyType: 'Apartment',
    },
  ];

  return (
    <section className="bg-gray-100 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Real Requests With Real Details
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              When people know what they want, and you know how to help them -
              well, that&apos;s when real work begins. These are real voices, with
              real needs. All you have to do is listen.
            </p>
          </div>

          {/* Job Request Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {jobRequests.map(request => (
              <div
                key={request.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6"
              >
                {/* Time stamp */}
                <div className="text-sm text-gray-500 mb-4">
                  {request.timeAgo}
                </div>

                {/* Job Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {request.title}
                </h3>

                {/* Job Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {request.description}
                </p>

                {/* Client Info */}
                <div className="space-y-3 mb-6">
                  <div className="font-semibold text-gray-800 text-lg">
                    {request.clientName}
                  </div>

                  {/* Date */}
                  <div className="flex items-center text-gray-600">
                    <FaCalendarAlt className="text-gray-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">{request.date}</span>
                  </div>

                  {/* Address */}
                  <div className="flex items-center text-gray-600">
                    <FaMapMarkerAlt className="text-gray-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">{request.address}</span>
                  </div>

                  {/* Property Type */}
                  <div className="flex items-center text-gray-600">
                    <FaBuilding className="text-gray-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">{request.propertyType}</span>
                  </div>
                </div>

                {/* See more details link */}
                <div className="mb-4">
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200">
                    See more details
                  </button>
                </div>

                {/* Message Button */}
                <button className="w-full border border-gray-200 hover:bg-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium transition-colors duration-200">
                  Message
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
