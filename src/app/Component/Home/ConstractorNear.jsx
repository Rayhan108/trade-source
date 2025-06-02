import React from 'react';
import ConstractorCard from '../Card/ConstractorCard';
import c1 from '@/assests/client1.png'
import c2 from '@/assests/client2.jpg'
import c3 from '@/assests/client3.png'
import styles from '@/app/styles.module.css'
export const data = [
  {
    "id": 1,
    "name": "Annie Panny",
    "imageSrc": c1,
    "status": "Expert Contractor",
    "completedTasks": 2949,
    "rating": 4.8,
    "reviews": 1694,
    "expertise": ["Interior Painting", "Exterior Painting", "Event Painting"]
  },
  {
    "id": 2,
    "name": "John Doe",
    "imageSrc": c2,
    "status": "Professional Painter",
    "completedTasks": 1500,
    "rating": 4.6,
    "reviews": 980,
    "expertise": ["Wall Painting", "Decorative Painting", "Texture Painting"]
  },
  {
    "id": 3,
    "name": "Sara Smith",
    "imageSrc": c3,
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
    <h1 className={`text-4xl font-bold text-center mb-10   ${styles.fontDmSans}`}>Contractor Near You</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3 px-3">
      {data?.map((data, idx) => {
        return <ConstractorCard key={idx} data={data} />;
      })}
    </div>
  </div>
        </div>
    );
};

export default ConstractorNear;