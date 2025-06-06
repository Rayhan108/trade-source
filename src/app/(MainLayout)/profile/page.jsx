import React from 'react';
import ProfBanner from '../../Component/Profile/ProfBanner'
import ProfDet from '../../Component/Profile/ProfDet'
import Tabs from '../../Component/Profile/Tab'

const ProfilePage = () => {
    return (
  <div className=''>
         <nav className="flex items-center font-normal text-base leading-6  bg-white pl-3 md:pl-5 lg:pl-10 xl:pl-44 border-t border-gray-500 py-3" aria-label="breadcrumb">
      <p className="text-black text-xl">
        Home
      </p>
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
      <span className="text-black cursor-default text-xl">Contractor Profile</span>
    </nav>
     <div className='p-3'>
                  <h1 className="text-2xl md:text-3xl font-semibold flex items-center gap-2 my-5 container mx-auto ">
       Preview Public Profile
          </h1>
   
          <div className='container mx-auto bg-white shadow-2xl p-5 rounded-xl my-10' >
            <ProfBanner/>
            <ProfDet/>
            <Tabs/>
     </div>
    </div>
      
     
  </div>
    );
};

export default ProfilePage;