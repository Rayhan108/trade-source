
import styles from '../../app/styles.module.css';
import ArticleCard from '../Card/ArticleCard';
import { Pagination } from 'antd';

const RecentlyPosted = ({ allArticles,setPage ,page}) => {
  const meta = allArticles?.data?.meta;
  console.log("all article---->", allArticles);

  // Use the 'limit' from meta for dynamic items per page
  const limit = meta?.limit;
  const totalItems = meta?.total;

  // Calculate current items to show based on page and limit
  const startIndex = (page - 1) * limit;
  const currentItems = allArticles?.data?.result?.slice(
    startIndex,
    startIndex + limit
  );

  const onPageChange = (page: number) => {
    setPage(page);
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
        current={page}
        pageSize={limit} // Use dynamic page size based on 'limit'
        total={totalItems} // Total number of items
        onChange={onPageChange}
        showSizeChanger={false}
        className="flex justify-center"
        // Show the total number of pages (meta.totalPage)
        pageSizeOptions={[limit.toString()]}
        showTotal={(total) => `Total ${total} items`}
      />
    </div>
  );
};

export default RecentlyPosted;
