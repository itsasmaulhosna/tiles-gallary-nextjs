"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navlink from "./shared/Navlink";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b px-2">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-1 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={100}
            height={100}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">Tiles Gallery</h3>
        </div>

        <ul className="hidden md:flex items-center gap-5 text-sm">
          <li><Navlink href={"/"}>Home</Navlink></li>
          <li><Navlink href={"/all-tiles"}>All Tiles</Navlink></li>
          <li><Navlink href={"/profile"}>My Profile</Navlink></li>
        </ul>

        <div className="hidden md:flex">
          <Link
            href={"/login"}
            className="bg-blue-950 px-4 py-2 text-white rounded-md"
          >
            Log In
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-3 text-sm">
            <li><Navlink href={"/"}>Home</Navlink></li>
            <li><Navlink href={"/all-tiles"}>All Tiles</Navlink></li>
            <li><Navlink href={"/profile"}>My Profile</Navlink></li>
            <li>
              <Link
                href={"/login"}
                className="block bg-blue-950 px-4 py-2 text-white rounded-md text-center"
              >
                Log In
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;