
import React from "react";
import AllTilesClient from "./AllTilesClient";

const AllTiles = async () => {
  const res = await fetch("https://tiles-gallary-nextjs.vercel.app/data.json");
  const tiles = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">
        All Tiles Gallery
      </h2>

      <AllTilesClient tiles={tiles} />
    </div>
  );
};

export default AllTiles;