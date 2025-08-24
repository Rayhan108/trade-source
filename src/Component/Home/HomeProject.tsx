import ProjectCard from '../Card/ProjectCard';
import styles from '../../app/styles.module.css';
import { Projects } from './ProjectsNear';

const HomeProject = () => {
  return (
    <div>
      <div className={`container mx-auto ${styles.fontDmSans}`}>
        <h1 className={`text-4xl font-bold mb-5   ${styles.fontDmSans}`}>
          Popular Home Project
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 px-3">
          {Projects?.map((project, idx) => {
            return <ProjectCard key={idx} project={project} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeProject;
