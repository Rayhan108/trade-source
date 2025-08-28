'use client'
import InteriorBanner from "../../../Component/Interior/IntBaner";
import Service from "../../../Component/Home/Service";
import { useEffect, useState } from "react";
import { useGetAllServicesQuery } from "../../../redux/features/contractor/contractorApi";
import AllServices from "../../../Component/AllServices/AllServices";
import { Pagination } from "antd";

const AllServicesPage = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(search);
// console.log("search---->",search);
  // Handle the debounce for search term input
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchTerm(search);
    }, 500);
     
    return () => {
      clearTimeout(timeoutId);
    };
  }, [search]);

  const { data: allService } = useGetAllServicesQuery({
    page,
    search: debouncedSearchTerm,
  });

const meta = allService?.data?.meta
  // Use the 'limit' from meta for dynamic items per page
  const limit = meta?.limit;
  const totalItems = meta?.total;

  // Calculate current items to show based on page and limit
  const startIndex = (page - 1) * limit;
  const currentItems = allService?.data?.result?.slice(
    startIndex,
    startIndex + limit
  );

  const onPageChange = (page: number) => {
    setPage(page);
  };




  // console.log("get-all-service----->", allService);
  return (
    <div>
      <div className="p-4">
        <InteriorBanner setSearch={setSearch}/>
      </div>
      <div className="container mx-auto">
        <Service />
      </div>
      {/* <IntNearServices />
      <ExtNearServices />
      <LawnGardenServices /> */}
      <AllServices allServices={currentItems} page={page} setPage={setPage} />
    <div className="mb-3">
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

export default AllServicesPage;
