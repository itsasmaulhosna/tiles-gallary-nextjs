"use client";

import { useState } from "react";
import TilesSearch from "./TilesSearch";
import TilesCard from "@/components/shared/TilesCard";

const AllTilesClient = ({ tiles }) => {
  const [query, setQuery] = useState("");

  const filteredTiles = tiles.filter((tile) =>
    tile.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      
      <TilesSearch query={query} setQuery={setQuery} />

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredTiles.length > 0 ? (
          filteredTiles.map((tile) => (
            <TilesCard key={tile.id} tile={tile} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500 text-lg">
             No tiles found
          </p>
        )}
      </div>
    </div>
  );
};

export default AllTilesClient;