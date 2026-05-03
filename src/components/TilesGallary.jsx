import React from 'react';
import TilesCard from './shared/TilesCard';

const TilesGallary = async() => {
    const res=await fetch('https://tiles-gallary-nextjs.vercel.app/data.json')
    const tiles=await res.json()
    const topTiles=tiles.slice(0,4)
    console.log(topTiles)
    return (
    
         <div className="max-w-7xl mx-auto px-6 mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Top 4 Tiles</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {topTiles.map(tile=><TilesCard key={tile.id} tile={tile}></TilesCard>)}
      </div>
      </div>
    );
};

export default TilesGallary;