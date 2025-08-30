import InteriorBanner from '@/Component/Interior/IntBaner';
import Service from '@/Component/Home/Service';
import IntNearServices from '@/Component/AllServices/IntNearServices';
import ExtNearServices from '@/Component/AllServices/ExtNearServices';
import LawnGardenServices from '@/Component/AllServices/LawnGardenServices';

const AllServicesPage = () => {
  return (
    <div>
      <div className="p-4">
        <InteriorBanner />
      </div>
      <div className="container mx-auto">
        <Service />
      </div>
      <IntNearServices />
      <ExtNearServices />
      <LawnGardenServices />
    </div>
  );
};

export default AllServicesPage;
