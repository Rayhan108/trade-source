import ConstractorCard from "../Card/ConstractorCard";

import styles from '../../styles.module.css'
import { data } from "../Home/ConstractorNear";
const ExpertConstructor = () => {
    return (
                  <div>
              <div className={`container mx-auto ${styles.fontDmSans}`}>
    <h1 className={`text-4xl font-bold  my-10   ${styles.fontDmSans}`}>Expert Contractor</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3 px-3 md:px-0">
      {data?.map((data, idx) => {
        return <ConstractorCard key={idx} data={data} />;
      })}
    </div>
  </div>
        </div>
    );
};

export default ExpertConstructor;