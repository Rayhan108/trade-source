import ProjectCard from "../Card/ProjectCard";
import project1 from "../../../assests/project1.png";
import project2 from "../../../assests/project2.png";
import project3 from "../../../assests/project3.png";
import project4 from "../../../assests/project4.png";
import styles from '@/app/styles.module.css'
export const Projects = [
  {
    id: 1,
    image: project1,
    title: "Handy Person For Small Projects",
    rating: 4.8,
    reviews: 128,
    price: 350,
  },
  {
    id: 2,
    image: project2,
    title: "Air Conditioning Service & Repair",
    rating: 4.2,
    reviews: 115,
    price: 250,
  },
  {
    id: 3,
    image: project3,
    title: "Expert Roofing Service",
    rating: 3.8,
    reviews: 100,
    price: 150,
  },
  {
    id: 4,
    image: project4,
    title: "One Time Cleaning Service",
    rating: 1.8,
    reviews: 80,
    price: 50,
  },
];

const ProjectsNear = () => {
  return (
  <div className={`container mx-auto ${styles.fontDmSans}`}>
    <h1 className={`text-4xl font-bold mb-5   ${styles.fontDmSans}`}>Project Near You</h1>
      <div className="grid  grid-cols-2 md:grid-cols-4 gap-3 ">
      {Projects?.map((project, idx) => {
        return <ProjectCard key={idx} project={project} />;
      })}
    </div>
  </div>
  );
};

export default ProjectsNear;
