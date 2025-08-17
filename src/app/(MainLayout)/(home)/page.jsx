
'use client'

import Banner from "../../Component/Home/Banner";
import ConstractorNear from "../../Component/Home/ConstractorNear";
import HomeProject from "../../Component/Home/HomeProject";
import ProjectsNear from "../../Component/Home/ProjectsNear";
import RecentArticle from "../../Component/Home/RecentArticle";
import React from "react";

const LandingPage = () => {

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

export default LandingPage;
