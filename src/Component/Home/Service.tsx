import handyman from '../../assests/handyman.png';
import landscaping from '../../assests/landscaping.png';
import plumbing from '../../assests/plumbing.png';
import electrical from '../../assests/electrical.png';
import remodeling from '../../assests/remodeling.png';
import Image from 'next/image';
import styles from '../../app/styles.module.css';


export default function Service() {
  return (
    <div className={`bg-green-300 py-6 px-4 sm:px-8 ${styles.fontDmSans}`}>
      <div className="flex flex-wrap justify-center items-center  gap-x-2 md:gap-x-7 lg:gap-x-8 xl:gap-x-16 4xl:gap-x-12 gap-y-6 ">
        {/* Handyman */}
        <div className="flex flex-col items-center text-blue-700 min-w-[80px]">
          <Image
            alt="Handyman"
            src={handyman}
            width={64}
            height={64}
            className="w-16 h-16"
          />
          <span className="text-xs sm:text-sm font-semibold mt-2 text-center">
            Handyman
          </span>
        </div>

        <div className="hidden sm:block border-l border-blue-700 h-10"></div>

        {/* Landscaping */}
        <div className="flex flex-col items-center text-blue-700 min-w-[80px]">
          <Image
            alt="Landscaping"
            src={landscaping}
            width={64}
            height={64}
            className="w-16 h-16"
          />
          <span className="text-xs sm:text-sm font-semibold mt-2 text-center">
            Landscaping
          </span>
        </div>

        <div className="hidden sm:block border-l border-blue-700 h-10"></div>

        {/* Plumbing */}
        <div className="flex flex-col items-center text-blue-700 min-w-[80px]">
          <Image
            alt="Plumbing"
            src={plumbing}
            width={64}
            height={64}
            className="w-16 h-16"
          />
          <span className="text-xs sm:text-sm font-semibold mt-2 text-center">
            Plumbing
          </span>
        </div>

        <div className="hidden sm:block border-l border-blue-700 h-10"></div>

        {/* Electrical */}
        <div className="flex flex-col items-center text-blue-700 min-w-[80px]">
          <Image
            alt="Electrical"
            src={electrical}
            width={64}
            height={64}
            className="w-16 h-16"
          />
          <span className="text-xs sm:text-sm font-semibold mt-2 text-center">
            Electrical
          </span>
        </div>

        <div className="hidden sm:block border-l border-blue-700 h-10"></div>

        {/* Remodeling */}
        <div className="flex flex-col items-center text-blue-700 min-w-[80px]">
          <Image
            alt="Remodeling"
            src={remodeling}
            width={64}
            height={64}
            className="w-16 h-16"
          />
          <span className="text-xs sm:text-sm font-semibold mt-2 text-center">
            Remodeling
          </span>
        </div>

   

        {/* Browse all Services Button */}
        {/* <Link href={'/allServices'}>
          <button className="bg-blue-700 text-white px-4 py-2 rounded text-xs sm:text-sm font-medium whitespace-nowrap">
           all Services
          </button>
        </Link> */}
      </div>
    </div>
  );
}
