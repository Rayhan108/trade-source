import InteriorBanner from '../../Component/Interior/IntBaner';
import SpecializedNear from '../../Component/Specialized/SpecializedNear';

const SpecializedPage = () => {
  return (
    <div>
      <div className="p-4">
        <InteriorBanner />
      </div>
      <SpecializedNear />
    </div>
  );
};

export default SpecializedPage;
