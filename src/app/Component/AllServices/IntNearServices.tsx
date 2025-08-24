import IntCard from '../Interior/IntCard';
import { Projects2 } from '../Interior/IntNear';
import styles from '../../styles.module.css';

const IntNearServices = () => {
  return (
    <div
      className={`container mx-auto bg-[#ffffff] my-8 p-4 pt-8 ${styles.fontDmSans}`}
    >
      <div className="flex justify-between items-center mb-3">
        <div>
          {' '}
          <h1 className={`text-4xl font-bold mb-5   ${styles.fontDmSans}`}>
            Interior Project Near You
          </h1>
        </div>
        <div className="underline text-blue-700 text-sm sm:text-2xl">
          {' '}
          View All{' '}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 px-3">
        {Projects2?.map((project, idx) => {
          return <IntCard key={idx} project={project} />;
        })}
      </div>
    </div>
  );
};

export default IntNearServices;
