'use client'
import InteriorBanner from '@/Component/Interior/IntBaner';
import LawnNear from '@/Component/Lawn/LawnNear';
import { useEffect, useState } from 'react';
const LawnAndGardenPage = () => {
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
      <div className="p-4">
        <InteriorBanner setSearch={setSearch}/>
      </div>

      <LawnNear debouncedSearchTerm={debouncedSearchTerm}/>
    </div>
  );
};

export default LawnAndGardenPage;
