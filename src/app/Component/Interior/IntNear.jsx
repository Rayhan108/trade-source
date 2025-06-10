
import styles from '../../styles.module.css'
import IntCard from "./IntCard";
import project1 from "../../../assests/project1.png";
import project2 from "../../../assests/project2.png";
import project3 from "../../../assests/project3.png";
import project4 from "../../../assests/project4.png";
export const Projects2 = [
  {
    id: 1,
    image: project1,
    title: "Handy Man",
    subTitle:"General Repairs, Furniture Assembly, TV Mounting", 
    rating: 4.8,
    reviews: 128,
    price: 350,
  },
  {
    id: 2,
    image: project2,
    title: "Plumbing (Indoor)",
     subTitle:"Leak Detection & Repair, Bathroom & Kitchen Plumbing ", 
    rating: 4.2,
    reviews: 115,
    price: 250,
  },
  {
    id: 3,
    image: project3,
    title: "Electrical (Indoor)",
     subTitle:"Lighting Installation, Electrical Rewiring, Device Installation ", 
    rating: 3.8,
    reviews: 100,
    price: 150,
  },
  {
    id: 4,
    image: project4,
    title: "Painting",
     subTitle:"Interior Painting, Wallpaper Installation, Cabinet Refinishing ", 
    rating: 1.8,
    reviews: 80,
    price: 50,
  },
];
const IntNear = () => {
    return (
        <div className={`container mx-auto bg-[#ffffff] my-8 p-4 pt-8 ${styles.fontDmSans}`}>
    <h1 className={`text-4xl font-bold mb-5   ${styles.fontDmSans}`}>Interior Project Near You</h1>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 px-3">
      {Projects2?.map((project, idx) => {
        return <IntCard key={idx} project={project} />;
      })}
    </div>
  </div>
    );
};

export default IntNear;