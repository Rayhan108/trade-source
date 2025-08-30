"use client"
import InteriorBanner from "@/Component/Interior/IntBaner";
import IntNear from "@/Component/Interior/IntNear";
import { useEffect, useState } from "react";
const InteriorPage = () => {
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
        <InteriorBanner setSearch={setSearch} />
      </div>

      <IntNear debouncedSearchTerm={debouncedSearchTerm} />
    </div>
  );
};

export default InteriorPage;
