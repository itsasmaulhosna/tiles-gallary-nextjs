"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navlink from "./shared/Navlink";
import { HiMenu, HiX } from "react-icons/hi";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    await authClient.signOut();
  };

  return (
    <div className="border-b px-2 bg-white sticky top-0 z-50 shadow-sm">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">

       
        <div className="flex gap-2 items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
          />
          <h3 className="font-black text-lg">Tiles Gallery</h3>
        </div>

        
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          <li><Navlink href="/">Home</Navlink></li>
          <li><Navlink href="/all-tiles">All Tiles</Navlink></li>
          <li><Navlink href="/my-profile">My Profile</Navlink></li>
        </ul>

        
        <div className="hidden md:flex items-center gap-3">
          {isPending ? (
            <span>Loading...</span>
          ) : user ? (
            <>
              <p className="text-sm font-medium">
                Hi, {user.name}
              </p>

              <Image
                src={user?.image || "/default-user.png"}
                alt="user"
                width={40}
                height={40}
                className="rounded-full border"
              />

              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 text-white rounded-md transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="bg-sky-900 hover:bg-sky-800 px-4 py-2 text-white rounded-md transition"
            >
              Login
            </Link>
          )}
        </div>

        
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </nav>


      {isOpen && (
        <div className="md:hidden pb-4 px-2">
          <ul className="flex flex-col gap-3 text-sm font-medium">
            <li><Navlink href="/">Home</Navlink></li>
            <li><Navlink href="/all-tiles">All Tiles</Navlink></li>
            <li><Navlink href="/my-profile">My Profile</Navlink></li>
          </ul>

          <div className="mt-5">
            {isPending ? (
              <span>Loading...</span>
            ) : user ? (
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Image
                    src={user?.image || "/default-user.png"}
                    alt="user"
                    width={45}
                    height={45}
                    className="rounded-full"
                  />
                  <p>Hi, {user.name}</p>
                </div>

                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-md w-fit"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="bg-sky-900 text-white px-4 py-2 rounded-md w-fit"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;