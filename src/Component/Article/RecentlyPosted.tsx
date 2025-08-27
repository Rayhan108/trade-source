import { useState } from 'react';
import styles from '../../app/styles.module.css';
import ArticleCard from '../Card/ArticleCard';
import { Pagination } from 'antd';

const RecentlyPosted = ({ allArticles }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  // Calculate current items to show
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = allArticles?.data?.result?.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={`container my-10 mx-auto ${styles.fontInter}`}>
      <div className="my-6">
        <span className="inline-flex items-center rounded bg-blue-600 px-3 py-1 text-3xl font-medium text-white">
          Recently
        </span>
        <span className="ml-2 text-3xl text-gray-600">Posted</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 px-3 mb-8">
        {currentItems?.map((cardData, idx) => (
          <ArticleCard key={idx} cardData={cardData} />
        ))}
      </div>

      <Pagination
        current={currentPage}
        pageSize={ITEMS_PER_PAGE}
        total={allArticles?.data?.result?.length}
        onChange={onPageChange}
        showSizeChanger={false}
        className="flex justify-center"
      />
    </div>
  );
};

export default RecentlyPosted;
