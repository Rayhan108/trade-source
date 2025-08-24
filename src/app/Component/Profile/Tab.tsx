'use client';
import { useState } from 'react';
import project1 from '../../../assests/project1.png';
import project2 from '../../../assests/project2.png';
import project3 from '../../../assests/project3.png';
import ServiceDetails from './ServiceDetails';
import styles from '../../styles.module.css';
import ProjCard from './ProjCard';
import { Projects } from '../Home/ProjectsNear';
import ProjectCard from '../Card/ProjectCard';
import LicenseCard from '../Card/LicenseCard';
const tabs = ['Projects', 'Services', 'Licenses & Insurance'];
const cardDatas = [
  {
    title: 'Pink Dyer',
    location: 'Huston TX',
    rating: 5,
    budget: 350,
    tags: ['Featured', 'Edit', 'Remove'],
    image: project1,
  },
  {
    title: 'Blue Sky',
    location: 'Austin TX',
    rating: 4,
    budget: 420,
    tags: ['Featured', 'Edit'],
    image: project2,
  },
  {
    title: 'Green Haven',
    location: 'Dallas TX',
    rating: 3,
    budget: 280,
    tags: ['Edit'],
    image: project3,
  },
  {
    title: 'Green Haven',
    location: 'Dallas TX',
    rating: 3,
    budget: 280,
    tags: ['Edit'],
    image: project3,
  },
];
const licenses = [
  {
    title: 'Licensed',
    number: '90180938',
    date: 'May 25, 2025',
    state: 'State of California',
    status: 'Verified',
  },
  {
    title: 'Licensed',
    number: '12345678',
    date: 'June 15, 2024',
    state: 'State of New York',
    status: 'Verified',
  },
];

const tabContent = {
  Projects: (
    <div>
      <div className={`container mx-auto ${styles.fontDmSans}`}>
        <div className="flex justify-between items-center ">
          <div>
            {' '}
            <h1 className={`text-4xl  mb-5   ${styles.fontDmSans}`}>
              Project <span className="font-semibold">{cardDatas?.length}</span>
            </h1>
          </div>
          <div>
            <h1 className="text-sm underline text-blue-700">View All</h1>
          </div>
        </div>
        <div className="grid  grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-3 px-3">
          {cardDatas?.map((cardData, idx) => {
            return <ProjCard key={idx} cardData={cardData} />;
          })}
        </div>
      </div>
      <ServiceDetails />
    </div>
  ),
  Services: (
    <div>
      <div className={`container mx-auto ${styles.fontDmSans}`}>
        <div className=" ">
          <div>
            {' '}
            <h1 className={`text-4xl  mb-5   ${styles.fontDmSans}`}>
              Service <span className="font-semibold">{Projects?.length}</span>
            </h1>
          </div>
        </div>
        <div className="grid  grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-3 px-3">
          {Projects?.map((project, idx) => {
            return <ProjectCard key={idx} project={project} />;
          })}
        </div>
      </div>
    </div>
  ),
  'Licenses & Insurance': (
    <div>
      <div className={`container mx-auto ${styles.fontDmSans}`}>
        <div className=" ">
          <div>
            {' '}
            <h1 className={`text-4xl  mb-5   ${styles.fontDmSans}`}>
              Licenses & Insurance{' '}
              <span className="font-semibold">{Projects?.length}</span>
            </h1>
          </div>
        </div>
        <div className="grid  grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-3 px-3">
          {licenses?.map((license, idx) => {
            return <LicenseCard key={idx} license={license} />;
          })}
        </div>
      </div>
    </div>
  ),
  // Reviews: (
  //   <div>
  //     <h2 className="text-lg font-semibold mb-2">Reviews</h2>
  //     <p>Ei khane apnar customer reviews thakbe.</p>
  //   </div>
  // ),
};

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('Projects');

  return (
    <div className="container mx-auto my-8">
      <div className="flex border-b border-gray-300">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 px-4 text-sm font-medium focus:outline-none ${
              activeTab === tab
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content area */}
      <div className="mt-6">{tabContent[activeTab]}</div>
    </div>
  );
}
