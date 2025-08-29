"use client";

import ConstractorCard from "../Card/ConstractorCard";
import styles from "../../app/styles.module.css";
import { useState } from "react";

import { useGetAllUserQuery } from "../../redux/features/user/userApi";
import { Pagination } from "antd";

const ExpertConstructor = () => {
  const [page, setPage] = useState(1);
  const role = "contractor";
  const { data: contractors } = useGetAllUserQuery({
    page,
    role,
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3 px-3 md:px-0">
          {currentItems?.map((contractor, idx) => {
            return <ConstractorCard key={idx} contractor={contractor} />;
          })}
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
