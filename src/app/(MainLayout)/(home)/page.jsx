import Banner from '@/app/Component/Home/Banner';
import HomeProject from '@/app/Component/Home/HomeProject';
import ProjectsNear from '@/app/Component/Home/ProjectsNear';

import React from 'react';

const HomePage = () => {
    return (
        <div>
            
      
             <Banner/>
 <ProjectsNear/>
    
           <HomeProject/>
      
        </div>
    );
};

export default HomePage;