import React from 'react';
import WelBan from "../../Component/Homepage/WelBan"
import ExpertConstructor from "../../Component/Homepage/ExpertConstructor"
import Service from '../../Component/Home/Service';
const HomePage = () => {
    return (
        <div>
            <WelBan/>
            <div className='my-8 container mx-auto'>

            <Service/>
            <ExpertConstructor/>
            </div>
        </div>
    );
};

export default HomePage;