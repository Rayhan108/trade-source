'use client';

import ConstractorCard from '../Card/ConstractorCard';
import styles from '@/app/styles.module.css';
import { useState } from 'react';
import { useGetAllServicesQuery } from '@/redux/features/contractor/contractorApi';

const ExpertConstructor = () => {
  const [page, setPage] = useState(1);

  const { data: services } = useGetAllServicesQuery({
    page,
    limit: 8,
  });

  const totalPage = services?.data?.meta?.totalPage || 1;

  return (
    <div>
      <div className={`container mx-auto ${styles.fontDmSans}`}>
        <h1 className={`text-4xl font-bold  my-10   ${styles.fontDmSans}`}>
          Expert Contractor
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3 px-3 md:px-0">
          {services?.data?.result?.map((service, idx) => {
            return <ConstractorCard key={idx} service={service} />;
          })}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-3 mt-8">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 border rounded-lg bg-white disabled:opacity-50"
          >
            Prev
          </button>
          <span className="text-gray-700">
            Page {page} of {totalPage}
          </span>
          <button
            onClick={() => setPage(p => Math.min(totalPage, p + 1))}
            disabled={page === totalPage}
            className="px-4 py-2 border rounded-lg bg-white disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpertConstructor;
