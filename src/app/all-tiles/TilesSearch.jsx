"use client";

import { Input } from "@heroui/react";
import { FaSearch } from "react-icons/fa";

const TilesSearch = ({ query, setQuery }) => {
  return (
    <div className="w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto mb-12 relative">
      
      <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-base sm:text-lg md:text-xl" />

      <Input
        type="text"
        placeholder="Search tiles by title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        radius="lg"
        variant="bordered"
        className="pl-12 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg shadow-md"
      />
    </div>
  );
};

export default TilesSearch;