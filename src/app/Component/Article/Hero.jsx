"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import hero from "../../../assests/hero.png";
import jesi from "../../../assests/jesi.jpg";
export default function BlogHero() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef(null);

  const popularArticles = [
    {
      id: 1,
      title: "Design is the Mix of emotions",
      author: "Jessica koli",
      date: "02 december 2022",
      readTime: "3 min to read",
      excerpt:
        "Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp",
    },
    {
      id: 2,
      title: "Design is the Mix of emotions",
      author: "Jessica koli",
      date: "02 december 2022",
      readTime: "3 min to read",
      excerpt:
        "Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp",
    },
    {
      id: 3,
      title: "Design is the Mix of emotions",
      author: "Jessica koli",
      date: "02 december 2022",
      readTime: "3 min to read",
      excerpt:
        "Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp",
    },
    {
      id: 4,
      title: "Modern Interior Trends 2024",
      author: "Jessica koli",
      date: "01 december 2022",
      readTime: "4 min to read",
      excerpt:
        "Explore the latest trends in modern interior design that are shaping homes this year",
    },
    {
      id: 5,
      title: "Sustainable Home Solutions",
      author: "Jessica koli",
      date: "30 november 2022",
      readTime: "5 min to read",
      excerpt:
        "Discover eco-friendly approaches to home improvement and sustainable living practices",
    },
    {
      id: 6,
      title: "Smart Home Integration",
      author: "Jessica koli",
      date: "29 november 2022",
      readTime: "6 min to read",
      excerpt:
        "Learn how to seamlessly integrate smart technology into your home design",
    },
    {
      id: 7,
      title: "Color Psychology in Interiors",
      author: "Jessica koli",
      date: "28 november 2022",
      readTime: "4 min to read",
      excerpt:
        "Understanding how colors affect mood and atmosphere in your living spaces",
    },
    {
      id: 8,
      title: "Maximizing Small Spaces",
      author: "Jessica koli",
      date: "27 november 2022",
      readTime: "3 min to read",
      excerpt:
        "Creative solutions for making the most of limited square footage in your home",
    },
  ];

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        scrollContainerRef.current;
      const scrollPercentage =
        (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollPosition(scrollPercentage);
    }
  };

  const scrollToPosition = (percentage) => {
    if (scrollContainerRef.current) {
      const { scrollHeight, clientHeight } = scrollContainerRef.current;
      const scrollTop = (percentage / 100) * (scrollHeight - clientHeight);
      scrollContainerRef.current.scrollTo({
        top: scrollTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="w-full bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="inline-flex items-center rounded bg-blue-600 px-3 py-1 text-sm font-medium text-white">
                Featured
              </span>
              <span className="ml-2 text-sm text-gray-600">This month</span>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              <div className="order-2 md:order-1">
                <h1 className="mb-4 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
                  How To Find The Right Contractor For Your Home Project
                </h1>
                <div className="mb-4 flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <div className="">
                      <Image
                        src={jesi}
                        alt=""
                        height={500}
                        width={500}
                        className="h-8 w-8 rounded-full"
                      />
                    </div>
                    <span>Jessica koli</span>
                    <span>|</span>
                  </div>
                  <span>02 december 2022</span>
                  <span>|</span>
                  <span>3 min to read</span>
                </div>

                <p className="mb-4 text-gray-700 leading-relaxed">
                  Finding a trusted contractor for your home improvement needs
                  can feel like a daunting task. With so many options out there,
                  how do you ensure you&apos;re hiring someone who&apos;s not
                  only skilled but also reliable and professional? At
                  YourTradeSource (YTS), we&apos;ve made it our mission to
                  connect homeowners with licensed, vetted, and{" "}
                  <a href="#" className="text-blue-600 underline">
                    Read More...
                  </a>
                </p>
              </div>

              <div className="order-1 md:order-2">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
                  <Image
                    src={hero}
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
            <div className="mb-6">
              <span className="inline-flex items-center rounded bg-blue-600 px-3 py-1 text-sm font-medium text-white">
                Popular
              </span>
              <span className="ml-2 text-sm text-gray-600">This month</span>
            </div>

            <div className="relative">
              <div
                ref={scrollContainerRef}
                className="h-96 overflow-y-auto pl-8 [&::-webkit-scrollbar]:hidden"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                <div className="space-y-6">
                  {popularArticles.map((article, index) => (
                    <article
                      key={article.id}
                      className={`${
                        index < popularArticles.length - 1
                          ? "border-b border-gray-200 pb-6"
                          : "pb-6"
                      } cursor-pointer hover:bg-gray-50 rounded-lg p-2 -m-2 transition-colors`}
                    >
                      <h3 className="mb-2 text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>
                      <div className="mb-3 flex items-center space-x-1 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <div className="">
                            <Image
                              src={jesi}
                              alt=""
                              height={500}
                              width={500}
                              className="h-8 w-8 rounded-full"
                            />
                          </div>
                          <span>{article.author}</span>
                          <span>|</span>
                        </div>
                        <span>{article.date}</span>
                        <span>|</span>
                        <span>{article.readTime}</span>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {article.excerpt}
                      </p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="absolute left-0 top-0 h-full w-1 bg-gray-200 rounded-full">
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

            <div className="mt-6 flex justify-center space-x-2">
              {[0, 25, 50, 75].map((position, index) => (
                <button
                  key={index}
                  onClick={() => scrollToPosition(position)}
                  className={`h-2 w-2 rounded-full transition-colors duration-200 ${
                    scrollPosition >= position &&
                    scrollPosition < (index === 3 ? 100 : position + 25)
                      ? "bg-blue-600"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Scroll to section ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
