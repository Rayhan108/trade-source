import Banner from "@/app/Component/Home/Banner";
import ConstractorNear from "@/app/Component/Home/ConstractorNear";
import HomeProject from "@/app/Component/Home/HomeProject";
import ProjectsNear from "@/app/Component/Home/ProjectsNear";
import RecentArticle from "@/app/Component/Home/RecentArticle";

import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <ProjectsNear />

      <HomeProject />
      <ConstractorNear />
      <RecentArticle/>
    </div>
  );
};

export default HomePage;
