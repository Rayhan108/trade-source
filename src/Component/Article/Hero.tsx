import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import dayjs from 'dayjs';
import Link from 'next/link';

export default function BlogHero({ allArticles}) {
  // const meta = allArticles?.data?.meta
  console.log({ allArticles });

  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef(null);

  const popularArticles = allArticles?.data?.result.filter(
    article => article.isPopular === true
  );

  const featuredArticles = allArticles?.data?.result.find(
    article => article.isFeatured === true
  );
// console.log("featued article--->",featuredArticles);
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        scrollContainerRef.current;
      const scrollPercentage =
        (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollPosition(scrollPercentage);
    }
  };

  const scrollToPosition = percentage => {
    if (scrollContainerRef.current) {
      const { scrollHeight, clientHeight } = scrollContainerRef.current;
      const scrollTop = (percentage / 100) * (scrollHeight - clientHeight);
      scrollContainerRef.current.scrollTo({
        top: scrollTop,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="w-full bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="gr_id gr_id-cols-1 gap-8 lg:gr_id-cols-3 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="inline-flex items-center rounded bg-blue-600 px-3 py-1 text-sm font-medium text-white">
                Featured
              </span>
              <span className="ml-2 text-sm text-gray-600">This month</span>
            </div>

            <div className="gr_id gr_id-cols-1 gap-6 md:gr_id-cols-2 md:gap-8">
              <div className="order-2 md:order-1">
                <h1 className="mb-4 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
                  {featuredArticles?.title}
                </h1>
                <div className="mb-4 flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2 ">
                    <div>
                      <Image
                        src={featuredArticles?.user?.image}
                        alt="User Image"
                        height={500}
                        width={500}
                        className="h-8 w-8 rounded-full"
                      />
                    </div>
                    <span>
                      {featuredArticles?.user?.firstName}{' '}
                      {featuredArticles?.user?.lastName}
                    </span>
                    <span>|</span>
                  </div>
                  <span>
                    {dayjs(featuredArticles?.updatedAt).format('DD MMMM YYYY')}
                  </span>
                  {/* <span>|</span>
                  <span>3 min to read</span> */}
                </div>

                <p className="mb-4 text-gray-700 leading-relaxed">
                  {featuredArticles?.content.slice(0, 50)}{' '}
                  <Link href={`/article/${featuredArticles?._id}`} className="text-blue-600 underline">
                    Read More...
                  </Link>
                </p>
              </div>

              <div className="order-1 md:order-2 mb-3">
                <div className="aspect-[4/3] w-full overflow-h_idden rounded-lg">
                  <Image
                    src={featuredArticles?.image}
                    alt="Contractor working with wood"
                    className="h-full w-full object-cover"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>

      <div className="lg:col-span-1">
  {/* Only render if popularArticles exists and is not empty */}
  {popularArticles && popularArticles.length > 0 && (
    <div>
      <div className="mb-6">
        <span className="inline-flex items-center rounded bg-blue-600 px-3 py-1 text-sm font-medium text-white">
          Popular
        </span>
        <span className="ml-2 text-sm text-gray-600">This month</span>
      </div>

      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="h-96 overflow-y-auto pl-8 [&::-webkit-scrollbar]:h_idden"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <div className="space-y-6">
            {popularArticles?.map((article, index) => (
              <article
                key={article._id}
                className={`${
                  index < popularArticles.length - 1
                    ? 'border-b border-gray-200 pb-6'
                    : 'pb-6'
                } cursor-pointer hover:bg-gray-50 rounded-lg p-2 -m-2 transition-colors`}
              >
                <h3 className="mb-2 text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <div className="mb-3 flex items-center space-x-1 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <div className="">
                      <Image
                        src={article?.user?.image}
                        alt="User Image"
                        height={500}
                        width={500}
                        className="h-8 w-8 rounded-full"
                      />
                    </div>
                    <span>
                      {article.user.firstName} {article.user.lastName}
                    </span>
                    <span>|</span>
                  </div>
                  <span>
                    {dayjs(article?.updatedAt).format('DD MMMM YYYY')}
                  </span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {article.content}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="absolute left-0 top-0 h-full w-1 bg-gray-200 rounded-full ">
          <div
            className="bg-blue-600 rounded-full transition-all duration-200 w-full"
            style={{
              height: `${Math.max(
                20,
                ((scrollContainerRef.current?.clientHeight || 0) /
                  (scrollContainerRef.current?.scrollHeight || 1)) *
                  100
              )}%`,
              transform: `translateY(${
                (scrollPosition *
                  ((scrollContainerRef.current?.clientHeight || 0) -
                    (Math.max(
                      20,
                      ((scrollContainerRef.current?.clientHeight || 0) /
                        (scrollContainerRef.current?.scrollHeight || 1)) *
                        100
                    ) *
                      (scrollContainerRef.current?.clientHeight || 0)) /
                    100)) /
                100
              }px)`,
            }}
          />
        </div>
      </div>

      <div className="mt-6 flex justify-center space-x-2 ">
        {[0, 25, 50, 75].map((position, index) => (
          <button
            key={index}
            onClick={() => scrollToPosition(position)}
            className={`h-2 w-2 rounded-full transition-colors duration-200 ${
              scrollPosition >= position &&
              scrollPosition < (index === 3 ? 100 : position + 25)
                ? 'bg-blue-600'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Scroll to section ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )}
</div>

        </div>
      </div>
    </div>
  );
}
