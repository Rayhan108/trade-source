import Image from 'next/image';
import logo from '@/assests/navLogo.png';
import Link from 'next/link';
import { IoIosHammer } from 'react-icons/io';
import Footer from '@/Component/shared/Footer';
const BookingLayout = ({ children }) => {
  return (
    <>
      <div>
        <div className="min-h-screen">
          <div className="flex justify-between items-center bg-white lg:px-2 xl:px-8 px-3 py-3">
            {/* Logo */}
            <div className="lg:mr-5 xl:mr-6 2xl:mr-44 mr-auto flex items-center ">
              <Link href={'/'}>
                <Image
                  src={logo}
                  alt="Logo"
                  width={200}
                  height={100}
                  className="md:h-20 md:w-48 w-20"
                />
              </Link>
            </div>
            <div>
              <Link href={'/location'}>
              <button className="bg-blue-600 text-white px-4 py-1 md:py-3 rounded  flex justify-center items-center gap-3">
                Become a Pro
                <span className="bg-[#ffffff] text-blue-700 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  <IoIosHammer />
                </span>
              </button>
              </Link>
            </div>
          </div>
          {children}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default BookingLayout;
