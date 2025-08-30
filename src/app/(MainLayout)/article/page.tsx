'use client';

import Hero from '@/Component/Article/Hero';
import RecentlyPosted from '@/Component/Article/RecentlyPosted';
import LoadingSpinner from '@/Component/Loading';
import { useGetAllArticlesQuery } from '@/redux/features/others/otherApi';

const ArticlePage = () => {
  const { data: allArticles, isLoading } = useGetAllArticlesQuery(undefined);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <Hero allArticles={allArticles} />
      <RecentlyPosted allArticles={allArticles} />
    </div>
  );
};

export default ArticlePage;
