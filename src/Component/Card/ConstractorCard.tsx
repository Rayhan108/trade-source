import Image from 'next/image';
import Link from 'next/link';
import { IoIosStar } from 'react-icons/io';
import { SlBadge } from 'react-icons/sl';

export default function ConstractorCard({ service }) {
  return (
    <div className="max-w-sm w-full bg-green-200 rounded-lg shadow-md overflow-hidden mx-auto ">
      <div className="relative h-64">
        <Image
          src={service.image}
          alt={service.title}
          layout="fill"
          objectFit="cover"
          className="block"
          priority
        />
        <h2 className="absolute bottom-4 left-1 sm:left-4 text-white sm:font-bold text-xs sm:text-xl drop-shadow-lg">
          {service.title}
        </h2>
        <Link href={`/profile/${service?.contractorId?._id}`}>
          <button className="flex sm:hidden  absolute bottom-2 sm:bottom-4 right-1 bg-blue-600 text-white text-sm sm:font-semibold py-1 px-1 rounded-md shadow-md hover:bg-blue-700 transition">
            View Profile
          </button>
        </Link>
        <Link href={`/profile/${service?.contractorId?._id}`}>
          <button className="hidden sm:flex absolute bottom-4 right-4 bg-blue-600 text-white text-sm font-semibold py-1.5 px-3 rounded-md shadow-md hover:bg-blue-700 transition">
            View Profile
          </button>
        </Link>
      </div>

      <div className="p-5 text-gray-900 flex flex-col gap-4">
        <div className="space-y-3 text-sm items-center">
          {/* <span className="flex items-center gap-1">
            <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"><Image src={hamIcon} alt='' width={500} height={500} className='w-3'/></span>
            {data.completedTasks} Completed Task{data.completedTasks > 1 ? 's' : ''}
          </span> */}
          <span className="flex items-center gap-2">
            <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              <SlBadge />
            </span>
            {service.projectStatus}
          </span>
          {/* <span className="flex items-center gap-2">
            <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              <IoIosHammer />
            </span>
            {data.completedTasks || 0} Completed Task
            {data.completedTasks > 1 ? 's' : ''}
          </span> */}
          <span className="flex items-center gap-2">
            <IoIosStar className="text-[#D4AF37] text-xl" />
            {service?.review?.length
              ? (
                  service.review.reduce(
                    (sum: number, item: { rating: number }) =>
                      sum + item.rating,
                    0
                  ) / service.review.length || 5
                ).toFixed(1)
              : 0}{' '}
            ({service.review.length} review
            {service.review.length > 1 ? 's' : ''})
          </span>
        </div>

        <div>
          <p className="font-semibold mb-2">Expertise</p>
          <ul className="list-disc list-inside text-sm space-y-1">
            {service?.contractorId?.servicesYouProvide.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <Link href={'/quote'}>
        <button className="w-full bg-blue-600 text-white font-semibold py-3 hover:bg-blue-700 transition">
          Request Quote
        </button>
      </Link>
    </div>
  );
}
