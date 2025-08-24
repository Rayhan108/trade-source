import React from 'react';
import InteriorBanner from '../../Component/Interior/IntBaner';
import IntNear from '../../Component/Interior/IntNear';
const InteriorPage = () => {
  return (
    <div>
      <div className="p-4">
        <InteriorBanner />
      </div>

      <IntNear />
    </div>
  );
};

export default InteriorPage;
