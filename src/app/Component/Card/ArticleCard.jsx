import Image from 'next/image';
import Link from 'next/link';

export default function ArticleCard({ cardData }) {
  return (
    <div className="max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-white mb-8 rounded-lg shadow-md overflow-hidden mx-auto relative">
      <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 w-full">
        <Image src={cardData.image} alt={cardData.alt} layout="fill" objectFit="cover" />
      </div>
      <div className="px-4 sm:px-6 md:px-8 py-6">
        <div className='bg-[#EAECEE] rounded-xl px-3'>

        <p className="text-xs sm:text-sm text-[#000000] py-1 mb-2">
          {cardData.author} - {cardData.date}
        </p>
        </div>
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">{cardData.title}</h2>
        <p className="text-gray-600 text-xs sm:text-sm md:text-base  leading-relaxed mb-10">
          {cardData.description}
        </p>
        <Link  href={`/article/${cardData.id}`}>
        
        <button className="px-4 py-2 text-xs sm:text-sm border bg-[#FFFFFF]  rounded-full   transition bottom-2 absolute">
          Read more
        </button>
        </Link>
      </div>
    </div>
  );
}
