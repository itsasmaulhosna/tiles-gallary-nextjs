"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const TileClient = ({ tile }) => {
  if (!tile) {
    return (
      <h2 className="text-center mt-10 text-lg font-semibold">
        Tile not found
      </h2>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-5">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="grid md:grid-cols-2 gap-8 bg-white border rounded-2xl shadow-xl overflow-hidden"
      >
        
        <motion.div whileHover={{ scale: 1.03 }} className="overflow-hidden">
          <Image
            src={tile.image}
            alt={tile.title}
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </motion.div>

        
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              {tile.title}
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {tile.description}
            </p>


            <div className="space-y-3 text-sm text-gray-700">
              <p>
                <span className="font-semibold">Category:</span>{" "}
                {tile.category}
              </p>

              <p>
                <span className="font-semibold">Material:</span>{" "}
                {tile.material}
              </p>

              <p>
                <span className="font-semibold">Dimensions:</span>{" "}
                {tile.dimensions}
              </p>

              <p>
                <span className="font-semibold">Stock:</span>{" "}
                {tile.inStock ? (
                  <span className="text-green-600 font-semibold">
                    Available
                  </span>
                ) : (
                  <span className="text-red-500 font-semibold">
                    Out of Stock
                  </span>
                )}
              </p>
            </div>
          </div>

          
          <motion.div
            className="mt-6 flex items-center justify-between border-t pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-2xl font-bold text-blue-600">
              ${tile.price}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition"
            >
              Buy Now
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default TileClient;