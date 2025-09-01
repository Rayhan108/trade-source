import Link from "next/link";

const Statics = () => {
  return (
    <div>
      <div className="border border-gray p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Contractor Dashboard
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Projects Card */}
          <div className="bg-gray-100 rounded-md p-4 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <p className="text-lg font-medium text-gray-800">Projects</p>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                View All
              </a>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-bold text-gray-900">78</p>
              <p className="text-sm text-gray-600 mt-1">Successful Projects</p>
            </div>
          </div>

          {/* Quotes Card */}
          <div className="bg-gray-100 rounded-md p-4 flex flex-col justify-between">
            <p className="text-lg font-medium text-gray-800">Quotes</p>
            <div className="mt-4">
              <p className="text-2xl font-bold text-gray-900">1088</p>
              <p className="text-sm text-gray-600 mt-1">9 Quote Requests</p>
            </div>
          </div>

          {/* Reviews Card */}
          <div className="bg-gray-100 rounded-md p-4 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <p className="text-lg font-medium text-gray-800">Reviews</p>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                View All
              </a>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-bold text-gray-900">
                4.98{' '}
                <span className="text-sm font-medium text-gray-700">
                  rating
                </span>
              </p>
              <p className="text-sm text-gray-600 mt-1">2368 Reviews</p>
            </div>
          </div>
             {/* my blogs */}
                 <div className="bg-gray-100 rounded-md p-4 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <p className="text-lg font-medium text-gray-800">My Blog</p>
                  <Link
                    href="#"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    View All
                  </Link>
                </div>
                <div className="mt-4">
                  <p className="text-2xl font-bold text-gray-900">4</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Last Posted: 12/04/25
                  </p>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Statics;
