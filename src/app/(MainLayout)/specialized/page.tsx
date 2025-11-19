/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import InteriorBanner from '@/Component/Interior/IntBaner';
// import SpecializedNear from '@/Component/Specialized/SpecializedNear';
import { useState } from 'react';

const SpecializedPage = () => {
    // eslint-disable-next-line no-unused-vars
    const [search, setSearch] = useState("");
  return (
    <div>
      <div className="p-4">
        <InteriorBanner setSearch={setSearch}/>
      </div>
      
      {/* <SpecializedNear /> */}
    </div>
  );
};

export default SpecializedPage;
