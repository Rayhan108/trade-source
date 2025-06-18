import React from 'react';
import Statics from '../../Component/ContractorDashboard/Statics'
import PastPerformance from '../../Component/ContractorDashboard/PastPerformance'
const DashboardPage = () => {
    return (
        <div className='bg-white p-4 min-h-screen'>
          <Statics/>
          <PastPerformance/>
        </div>
    );
};

export default DashboardPage; 