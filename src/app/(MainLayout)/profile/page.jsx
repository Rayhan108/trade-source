import React from 'react';
import ProfBanner from '../../Component/Profile/ProfBanner'
import ProfDet from '../../Component/Profile/ProfDet'
import Tabs from '../../Component/Profile/Tab'
import ServiceDetails from '../../Component/Profile/ServiceDetails'
const ProfilePage = () => {
    return (
        <div>
            <ProfBanner/>
            <ProfDet/>
            <Tabs/>
            <ServiceDetails/>
        </div>
    );
};

export default ProfilePage;