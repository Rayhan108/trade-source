import Banner from '@/Component/Home/Banner';
import ConstractorNear from '@/Component/Home/ConstractorNear';
import ProjectsNear from '@/Component/Home/ProjectsNear';
import RecentArticle from '@/Component/Home/RecentArticle';

const LandingPage = () => {
  return (
    <div>
      <Banner />
      <ProjectsNear />

      {/* <HomeProject /> */}
      <ConstractorNear />
      <RecentArticle />
    </div>
  );
};

export default LandingPage;
