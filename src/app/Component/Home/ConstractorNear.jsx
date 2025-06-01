import React from 'react';
import ConstractorCard from '../Card/ConstractorCard';
import styles from '@/app/styles.module.css'
export const data = [
  {
    "id": 1,
    "name": "Annie Panny",
    "imageSrc": "/bfe136d3-4d73-4bc9-bde8-c5649b819d2a.png",
    "status": "Expert Contractor",
    "completedTasks": 2949,
    "rating": 4.8,
    "reviews": 1694,
    "expertise": ["Interior Painting", "Exterior Painting", "Event Painting"]
  },
  {
    "id": 2,
    "name": "John Doe",
    "imageSrc": "/john-doe-image.png",
    "status": "Professional Painter",
    "completedTasks": 1500,
    "rating": 4.6,
    "reviews": 980,
    "expertise": ["Wall Painting", "Decorative Painting", "Texture Painting"]
  },
  {
    "id": 3,
    "name": "Sara Smith",
    "imageSrc": "/sara-smith-image.png",
    "status": "Certified Contractor",
    "completedTasks": 3200,
    "rating": 4.9,
    "reviews": 2100,
    "expertise": ["Exterior Painting", "Interior Design", "Wallpaper Installation"]
  }
]

const ConstractorNear = () => {
    return (
              <div>
              <div className={`container mx-auto ${styles.fontDmSans}`}>
    <h1 className={`text-4xl font-bold mb-5   ${styles.fontDmSans}`}>Popular Home Project</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 ">
      {data?.map((data, idx) => {
        return <ConstractorCard key={idx} data={data} />;
      })}
    </div>
  </div>
        </div>
    );
};

export default ConstractorNear;