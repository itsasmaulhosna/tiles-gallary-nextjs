
import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('/banner.png')] h-[70vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl mt-15">

      <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
            Discover Your Perfect Tile Aesthetic
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
            Explore thousands of modern, geometric, and premium tile designs for your next project.
          </p>

          <div className="flex gap-4">
            <Link href="#">
              <Button className="bg-gray-800 text-white">
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