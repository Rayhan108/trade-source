'use client'
import Banner from "@/Component/Home/Banner";
import ConstractorNear from "@/Component/Home/ConstractorNear";
import ProjectsNear from "@/Component/Home/ProjectsNear";
import RecentArticle from "@/Component/Home/RecentArticle";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  console.log("filter------->",filter);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(search);
  // console.log("search---->",search);
  // Handle the debounce for search term input
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchTerm(search);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [search]);
  return (
    <div>
      <Banner setSearch={setSearch} setFilter={setFilter} />
      <ProjectsNear debouncedSearchTerm={debouncedSearchTerm} filter={filter}/>

      {/* <HomeProject /> */}
      <ConstractorNear />
      <RecentArticle />
    </div>
  );
};

export default LandingPage;
