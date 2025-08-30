"use client";

import ConstractorCard from "../Card/ConstractorCard";
import styles from "../../app/styles.module.css";
import { useState } from "react";

import { useGetAllUserQuery } from "../../redux/features/user/userApi";
import { Pagination } from "antd";

const ExpertConstructor = ({ debouncedSearchTerm }) => {
  const [page, setPage] = useState(1);
  const role = "contractor";
  const { data: contractors } = useGetAllUserQuery({
    page,
    role,
    search: debouncedSearchTerm,
  });
  // console.log("all contractors >>>>>>>>>>>>>>",contractors);
  const meta = contractors?.data?.meta;
  // Use the 'limit' from meta for dynamic items per page
  const limit = meta?.limit;
  const totalItems = meta?.total;

  // Calculate current items to show based on page and limit

  const currentItems = contractors?.data?.result;

  const onPageChange = (page: number) => {
    setPage(page);
  };
  return (
    <div>
      <div className={`container mx-auto ${styles.fontDmSans}`}>
        <h1 className={`text-4xl font-bold  my-10   ${styles.fontDmSans}`}>
          Expert Contractor
        </h1>

        <div className="px-3 mb-3">
          {currentItems && currentItems.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {currentItems?.map((contractor, idx) => {
                return <ConstractorCard key={idx} contractor={contractor} />;
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center bg-gray-50 rounded-lg shadow-inner">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 mb-4">
                <svg
                  className="w-6 h-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-gray-700">
                No items found
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Try adjusting your search or check back later.
              </p>
            </div>
          )}
        </div>

        {/* Pagination */}
        <Pagination
          current={page}
          pageSize={limit} // Use dynamic page size based on 'limit'
          total={totalItems} // Total number of items
          onChange={onPageChange}
          showSizeChanger={false}
          className="flex justify-center"
          // Show the total number of pages (meta.totalPage)
          pageSizeOptions={[limit?.toString()]}
          // showTotal={(total) => `Total ${total} items`}
        />
      </div>
    </div>
  );
};

export default ExpertConstructor;
