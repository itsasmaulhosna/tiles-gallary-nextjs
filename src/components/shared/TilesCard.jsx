import { Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const TilesCard = ({ tile }) => {
  return (
    <Card className="group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300">
      
      {/* Image */}
      <div className="relative w-full h-52 overflow-hidden">
        <Image
          src={tile.image}
          alt={tile.title}
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
        />
                <Chip size="sm" className="absolute top-2 right-2">{tile.category}</Chip>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold line-clamp-1">
          {tile.title}
        </h3>
        
        <p className="text-sm text-gray-500 line-clamp-2">
          {tile.description}
        </p>

        {/* Button */}
        <Link href={`/all-tiles/${tile.id}`} className="mt-3">
          <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
            View Details
          </button>
        </Link>
      </div>
    </Card>
  );
};

export default TilesCard;