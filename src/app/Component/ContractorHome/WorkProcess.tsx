import {
  FaExclamationTriangle,
  FaComments,
  FaCheckCircle,
} from 'react-icons/fa';

const WorkProcess = () => {
  const steps = [
    {
      icon: FaExclamationTriangle,
      title: 'New Job Alert',
      description: [
        'Get matched instantly with new client requests',
        'Jobs appear in your dashboard',
      ],
    },
    {
      icon: FaComments,
      title: 'Review & Respond',
      description: [
        'View job details & submit a quote',
        'Add private notes or flag if not a fit',
      ],
    },
    {
      icon: FaCheckCircle,
      title: 'Manage & Close',
      description: [
        'Track jobs, close deals & view analytics',
        'Access quotes, messages & private notes',
      ],
    },
  ];

  return (
    <section className="bg-gray-100 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden sm:block">
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-8 left-10 right-10 sm:left-16 sm:right-16 md:left-20 md:right-20 lg:left-44 lg:right-44 xl:left-44 xl:right-44 2xl:left- 2xl:right- h-0.5 bg-gray-500 z-0"></div>

              {/* Steps */}
              <div className="grid grid-cols-3 gap-8 relative z-10">
                {steps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={index} className="text-center">
                      {/* Icon Circle */}
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="text-white text-xl" />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl text-start font-bold text-gray-800 mb-4">
                          {step.title}
                        </h3>
                        <ul className="space-y-2 text-gray-600">
                          {step.description.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex text-start items-start"
                            >
                              <span className="text-blue-600 mr-2 mt-1">•</span>
                              <span className="text-sm leading-relaxed">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="sm:hidden space-y-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  {/* Icon Circle */}
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <IconComponent className="text-white text-lg" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                      {step.title}
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      {step.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="text-blue-600 mr-2 mt-1">•</span>
                          <span className="text-sm leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
