

import styles from '@/app/styles.module.css';


const SpecializedNear = () => {
  return (
    <div
      className={`container mx-auto bg-[#ffffff] my-8 p-4 pt-8 ${styles.fontDmSans}`}
    >
      <div>
        <h1 className={`text-4xl font-bold mb-5   ${styles.fontDmSans}`}>
          Specialized Projects Near You
        </h1>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 px-3">
        {Projects2?.map((project, idx) => (
          <Link key={idx} href={'/location'}>
            <IntCard project={project} />
          </Link>
        ))}
      </div> */}
    </div>
  );
};

export default SpecializedNear;
