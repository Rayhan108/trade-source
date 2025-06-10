import InteriorBanner from "../../Component/Interior/IntBaner";
import LawnNear from "../../Component/Lawn/LawnNear";
const LawnAndGardenPage = () => {
    return (
        <div>
              <div className="p-4">
        <InteriorBanner />
      </div> 
      <LawnNear/>
        </div>
    );
};

export default LawnAndGardenPage;