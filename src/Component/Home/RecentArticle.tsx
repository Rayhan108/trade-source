'use client';

import styles from '@/app/styles.module.css';
import ArticleCard from '../Card/ArticleCard';
import Link from 'next/link';
import { useGetAllArticlesQuery } from '@/redux/features/others/otherApi';
import LoadingSpinner from '../Loading';

const RecentArticle = () => {
  const { data: articles, isLoading } = useGetAllArticlesQuery(undefined);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className={`container mx-auto ${styles.fontInter}`}>
      <div className="flex justify-between items-center my-12 px-3">
        <div>
          <h1 className={`sm:text-4xl text-xl  ${styles.fontDmSans}`}>
            <span className="bg-[#1D69E1] text-white px-3">Recent</span> Article
          </h1>
        </div>
        <div>
          <Link href={'/article'}>
            <p className="underline text-sm sm:text-2xl">See All Articles</p>
          </Link>
        </div>
      </div>
      <div className="grid  grid-cols-2 md:grid-cols-3 gap-3 px-3 mb-8">
        {articles?.data?.result
          ?.map((cardData, idx) => {
            return <ArticleCard key={idx} cardData={cardData} />;
          })
          .slice(0, 3)}
      </div>
    </div>
  );
};

export default RecentArticle;
