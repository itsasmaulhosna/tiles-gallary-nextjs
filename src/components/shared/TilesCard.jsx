"use client";

import { Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionCard = motion(Card);

const TilesCard = ({ tile }) => {
  return (
    <MotionCard
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.03,
        y: -5,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl"
    >

      <div className="relative w-full h-52 overflow-hidden">
        <Image
          src={tile.image}
          alt={tile.title}
          fill
          className="object-cover group-hover:scale-110 transition duration-500"
        />

        <Chip size="sm" className="absolute top-2 right-2">
          {tile.category}
        </Chip>
      </div>

      
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold line-clamp-1">
          {tile.title}
        </h3>

        <p className="text-sm text-gray-500 line-clamp-2">
          {tile.description}
        </p>

        
        <Link href={`/all-tiles/${tile.id}`} className="mt-3">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            View Details
          </motion.button>
        </Link>
      </div>
    </MotionCard>
  );
};

export default TilesCard;