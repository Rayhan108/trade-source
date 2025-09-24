import Image from 'next/image';
import proj4 from '@/assests/project4.png';
import proj2 from '@/assests/project2.png';
import ar2 from '@/assests/ar2.png';
import fe1 from '@/assests/fe1.jpg';
import fe2 from '@/assests/fe2.jpg';
import male from '@/assests/male.png';
import Link from 'next/link';

const MembershipBanner = () => {
  return (
    <div className="relative overflow-hidden bg-[#01A6BE] px-6  lg:px-12  py-12 lg:py-5 my-8 container mx-auto">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-white lg:text-5xl xl:text-6xl">
                Member Get <span className="text-red-500">20% Off</span> On All
                Services.
              </h1>
              <p className="text-lg text-white/90 lg:text-xl">
                Become a YTS Member and enjoy 20% off all services — trusted
                pros, exclusive savings.
              </p>
            </div>
            <div>
              <Link  href={'/pricing'}>
              <button className="rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Become a Member
              </button>
              </Link>
            </div>
          </div>

          {/* Right Content - Profile Images Collage */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative h-80 w-80 lg:h-96 lg:w-96">
              {/* Large profile image - top right */}
              <div className="absolute right-8 top-44 h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-lg lg:h-40 lg:w-40">
                <Image
                  src={proj4}
                  alt="Professional service provider"
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Medium profile image - top left */}
              <div className="absolute left-44 top-20 h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-lg lg:h-28 lg:w-28">
                <Image
                  src={ar2}
                  alt="Professional service provider"
                  width={112}
                  height={112}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Medium profile image - center left */}
              <div className="absolute left-0 top-20 h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-lg lg:h-32 lg:w-32">
                <Image
                  src={male}
                  alt="Professional service provider"
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Large profile image - center */}
              <div className="absolute left-16 top-32 h-36 w-36 overflow-hidden rounded-full border-4 border-white shadow-lg lg:h-44 lg:w-44">
                <Image
                  src={fe1}
                  alt="Professional service provider"
                  width={176}
                  height={176}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Small profile image - bottom left */}
              <div className="absolute bottom-8 left-4 h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-lg lg:h-24 lg:w-24">
                <Image
                  src={proj2}
                  alt="Professional service provider"
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Small profile image - center bottom */}
              <div className="absolute bottom-0 left-1/2 h-20 w-20 -translate-x-1/2 overflow-hidden rounded-full border-4 border-white shadow-lg lg:h-24 lg:w-24">
                <Image
                  src={fe2}
                  alt="Professional service provider"
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipBanner;
