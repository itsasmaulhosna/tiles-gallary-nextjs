import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('/banner.png')] h-[60vh] md:h-[70vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl mt-6 md:mt-15">

      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center">

        <div className="max-w-7xl mx-auto px-4 md:px-6 text-white">

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-2xl leading-tight">
            Discover Your Perfect Tile Aesthetic
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 max-w-xl text-gray-200">
            Explore thousands of modern, geometric, and premium tile designs for your next project.
          </p>

          {/* Button */}
          <div className="flex flex-wrap gap-3">
            <Link href="/all-photos">
              <Button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 md:px-6 md:py-3 text-sm md:text-base transition">
                Browse Now
              </Button>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Banner;