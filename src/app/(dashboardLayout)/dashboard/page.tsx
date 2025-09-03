'use client'
import Statics from '@/Component/ContractorDashboard/Statics';
import PastPerformance from '@/Component/ContractorDashboard/PastPerformance';
import { useGetDashboardStatsQuery } from '@/redux/features/others/otherApi';
import { useAppSelector } from '@/redux/hooks';
import { selectCurrentUser } from '@/redux/features/auth/authSlice';


const DashboardPage = () => {
  const user = useAppSelector(selectCurrentUser)
  console.log("user------->",user?.user?.role);
  const role = user?.user?.role
  const {data:dashboardStats}=useGetDashboardStatsQuery(undefined)

   
  return (
    <>
      {role ==='vipContractor' ? (
        <div className="bg-white w-full  p-4 min-h-screen flex gap-3">
          <div className="w-full">
            <Statics dashboardStats={dashboardStats}/>
            <PastPerformance dashboardStats={dashboardStats}/>
          </div>
          {/* <div className="border border-gray h-[60%] p-6 rounded-lg">
            <div className="grid grid-cols-1  gap-4">
   
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
          </div> */}
        </div>
      ) : (
        <div className="bg-white w-full  p-4 min-h-screen">
          <Statics dashboardStats={dashboardStats}/>
          <PastPerformance dashboardStats={dashboardStats}/>
        </div>
      )}
    </>
  );
};

export default DashboardPage;
