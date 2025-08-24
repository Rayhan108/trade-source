import React from 'react';
import Statics from '../../../Component/ContractorDashboard/Statics';
import PastPerformance from '../../../Component/ContractorDashboard/PastPerformance';
import Link from 'next/link';
const DashboardPage = () => {
  const proContractor = true;
  return (
    <>
      {proContractor ? (
        <div className="bg-white max-w-7xl p-4 min-h-screen flex gap-3">
          <div className="w-[70%]">
            <Statics />
            <PastPerformance />
          </div>
          <div className="border border-gray h-[60%] p-6 rounded-lg">
            <div className="grid grid-cols-1  gap-4">
              {/* Projects Card */}
              <div className="bg-gray-100 rounded-md p-4 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <p className="text-lg font-medium text-gray-800">
                    Public Profile
                  </p>
                  <Link
                    href="/contractorProfileDet"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    View
                  </Link>
                </div>
                <div className="mt-4 ">
                  <div>
                    <div className="flex gap-3">
                      <p className="text-2xl font-bold text-gray-900">1088</p>
                      <span className="bg-[#D4AF37] text-black px-3 py-1 text-xs rounded-xl">
                        VIP Contractor
                      </span>
                    </div>
                    <p className="text-sm text-blue-600 mt-1">
                      Edit Public Profile
                    </p>
                  </div>
                </div>
              </div>

              {/* Blog */}
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

              {/*Message */}
              <div className="bg-gray-100 rounded-md p-4 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <p className="text-lg font-medium text-gray-800">
                    Pro Message
                  </p>
                </div>
                <div className="mt-4">
                  <p className="text-2xl font-bold text-gray-900">7</p>
                  <p className="text-sm text-gray-600 mt-1">Prnding Message</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white max-w-7xl p-4 min-h-screen">
          <Statics />
          <PastPerformance />
        </div>
      )}
    </>
  );
};

export default DashboardPage;
