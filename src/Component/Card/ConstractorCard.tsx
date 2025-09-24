import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IoIosStar } from "react-icons/io";

export default function ConstractorCard({ contractor }) {
  return (
    <div className="max-w-sm w-full bg-green-200 rounded-lg shadow-md overflow-hidden mx-auto flex flex-col">
      {/* Image Section */}
      <div className="relative h-64">
        <Image
          src={contractor?.image}
          alt={contractor?.title}
          layout="fill"
          objectFit="cover"
          className="block"
          priority
        />
        <h2 className="absolute bottom-4 left-1 sm:left-4 text-white sm:font-bold text-xs sm:text-xl drop-shadow-lg">
          {contractor?.title}
        </h2>
        <Link href={`/profile/${contractor?._id}`}>
          <button className="flex sm:hidden absolute bottom-2 sm:bottom-4 right-1 bg-blue-600 text-white text-sm sm:font-semibold py-1 px-1 rounded-md shadow-md hover:bg-blue-700 transition">
            View Profile
          </button>
        </Link>
        <Link href={`/profile/${contractor?._id}`}>
          <button className="hidden sm:flex absolute bottom-4 right-4 bg-blue-600 text-white text-sm font-semibold py-1.5 px-3 rounded-md shadow-md hover:bg-blue-700 transition">
            View Profile
          </button>
        </Link>
      </div>

      {/* Content */}
      <div className="p-5 text-gray-900 flex flex-col gap-4 flex-1">
        <div className="space-y-3 text-sm items-center">
          <span className="flex items-center gap-2">
            <span className="rounded-full w-5 h-5 flex items-center justify-center text-blue-700 text-xs">
              <User />
            </span>
            {contractor?.firstName + " " + contractor?.lastName}
          </span>

          <span className="flex items-center gap-2">
            <IoIosStar className="text-[#D4AF37] text-xl" />
            {contractor?.review?.length
              ? (
                  contractor.review.reduce(
                    (sum: number, item: { rating: number }) =>
                      sum + item.rating,
                    0
                  ) / contractor.review.length || 5
                ).toFixed(1)
              : 0}{" "}
            ({contractor?.review?.length} review
            {contractor?.review?.length > 1 ? "s" : ""})
          </span>
        </div>

        <div>
          <p className="font-semibold mb-2">Expertise</p>
          <ul className="list-disc list-inside text-sm space-y-1">
            {contractor?.servicesYouProvide?.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <Link href={`/quote/${contractor?._id}`}>
        <button className="w-full bg-blue-600 text-white font-semibold py-3 hover:bg-blue-700 transition mt-auto">
          Request Quote
        </button>
      </Link>
    </div>
  );
}
