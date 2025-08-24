import InteriorBanner from '../../Component/Interior/IntBaner';
import ExtNear from '../../Component/Exterior/ExtNear';

const ExteriorPage = () => {
  return (
    <div>
      <div className="p-4">
        <InteriorBanner />
      </div>

      <ExtNear />
    </div>
  );
};

export default ExteriorPage;
