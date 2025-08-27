'use client';

import ProjectCard from '../Card/ProjectCard';
import styles from '../../app/styles.module.css';
import Link from 'next/link';
import { useGetAllServicesQuery } from '../../redux/features/contractor/contractorApi';
import { useState } from 'react';

import project1 from '../../assests/project1.png';
import project2 from '../../assests/project2.png';
import project3 from '../../assests/project3.png';
import project4 from '../../assests/project4.png';
export const Projects = [
  {
    id: 1,
    image: project1,
    title: 'Handy Person For Small Projects',
    rating: 4.8,
    reviews: 128,
    price: 350,
  },
  {
    id: 2,
    image: project2,
    title: 'Air Conditioning Service & Repair',
    rating: 4.2,
    reviews: 115,
    price: 250,
  },
  {
    id: 3,
    image: project3,
    title: 'Expert Roofing Service',
    rating: 3.8,
    reviews: 100,
    price: 150,
  },
  {
    id: 4,
    image: project4,
    title: 'One Time Cleaning Service',
    rating: 1.8,
    reviews: 80,
    price: 50,
  },
];

const ProjectsNear = () => {
  const [page, setPage] = useState(1);
  const { data: services } = useGetAllServicesQuery({
    page,
    limit: 8,
  });

  const totalPage = services?.data?.meta?.totalPage || 1;

  return (
    <div className={`container mx-auto ${styles.fontDmSans}`}>
      <h1 className={`text-4xl font-bold mb-5  ${styles.fontDmSans}`}>
        Project Near You
      </h1>
      <div className="grid  grid-cols-2 md:grid-cols-4 gap-3 px-3">
        {services?.data?.result?.map((project, idx) => (
          <Link key={idx} href={'/location'}>
            <ProjectCard project={project} />
          </Link>
        ))}
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

export default ProjectsNear;
