'use client'
import WelBan from '../../../Component/Homepage/WelBan';
import ExpertConstructor from '../../../Component/Homepage/ExpertConstructor';
import MembershipBanner from '../../../Component/Homepage/MembershipBanner';
import Service from '../../../Component/Home/Service';
import RecentArticle from '../../../Component/Home/RecentArticle';
import { useEffect, useState } from 'react';

const HomePage = () => {
    const [search, setSearch] = useState("");
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
      <WelBan setSearch={setSearch}/>
      <div className="my-8 container mx-auto">
        <Service />
      </div>
      <ExpertConstructor debouncedSearchTerm={debouncedSearchTerm} />
      <MembershipBanner />
      <RecentArticle />
    </div>
  );
};

export default HomePage;
