import React from 'react';
import TilesCard from '@/components/shared/TilesCard';

const AllTiles = async () => {
  const res = await fetch('https://tiles-gallary-nextjs.vercel.app/data.json');
  const tiles = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-8">All Tiles</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tiles.map(tile => (
          <TilesCard key={tile.id} tile={tile} />
        ))}
      </div>
    </div>
  );
};

export default AllTiles;