/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import ProjectCard from '../Card/ProjectCard';
import styles from '@/app/styles.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { useGetAllServicesQuery } from '@/redux/features/contractor/contractorApi';

const HomeProject = () => {
  const [page, setPage] = useState<number>(1);

  const { data: services } = useGetAllServicesQuery({
    page,
    limit: 8,
  });

  const totalPage: number = services?.data?.meta?.totalPage || 1;

  const filtered = services?.data?.result?.filter((service: any) => {
    if (!service?.review?.length) return false;

    const avg =
      service.review.reduce(
        (sum: number, review: { star: number }) => sum + review.star,
        0
      ) / service.review.length;

    return avg > 0;
  });

  return (
    <div className={`container mx-auto ${styles.fontDmSans}`}>
      <h1 className={`text-4xl font-bold mb-5 ${styles.fontDmSans}`}>
        Popular Home Project
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 px-3">
        {filtered && filtered.length > 0 ? (
          filtered.map((project: any, idx: number) => (
            <Link key={project._id || idx} href="/location">
              <ProjectCard project={project} />
            </Link>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No popular projects found
          </p>
        )}
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
  );
};

export default HomeProject;
