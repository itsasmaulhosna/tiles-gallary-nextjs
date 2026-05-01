"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navlink from "./shared/Navlink";
import { HiMenu, HiX } from "react-icons/hi";
import { authClient } from "@/lib/auth-client";
import { FaGoogle } from "react-icons/fa";


const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const [isOpen, setIsOpen] = useState(false);

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  const handleLogout = async () => {
    await authClient.signOut();
  };

  return (
    <div className="border-b px-2 bg-white sticky top-0 z-50">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        

        <div className="flex gap-2 items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={70}
            height={70}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">Tiles Gallery</h3>
        </div>

        
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          <li>
            <Navlink href="/">Home</Navlink>
          </li>
          <li>
            <Navlink href="/all-tiles">All Tiles</Navlink>
          </li>
          <li>
            <Navlink href="/my-profile">My Profile</Navlink>
          </li>
        </ul>

        
        <div className="hidden md:flex items-center gap-3">
          {isPending ? (
            <span>Loading...</span>
          ) : user ? (
            <>
              <p className="text-sm">Hello, {user.name}</p>

              <Image
                src={user?.image || "/default-user.png"}
                alt="user"
                width={42}
                height={42}
                className="rounded-full"
              />

              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 text-white rounded-md"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="bg-sky-950 px-4 py-2 text-white rounded-md"
              >
                Log In
              </Link>

              <button
                onClick={handleGoogleLogin}
                className="flex items-center gap-2 border px-4 py-2 rounded-md hover:bg-gray-200 text-blue-400 font-bold"
              >
                                  <FaGoogle />
Continue with Google
              </button>
            </>
          )}
        </div>

        
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </nav>

      
      {isOpen && (
        <div className="md:hidden pb-4">
          <ul className="flex flex-col gap-3 text-sm font-medium">
            <li>
              <Navlink href="/">Home</Navlink>
            </li>
            <li>
              <Navlink href="/all-tiles">All Tiles</Navlink>
            </li>
            <li>
              <Navlink href="/my-profile">My Profile</Navlink>
            </li>
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
                  <p>Hello, {user.name}</p>
                </div>

                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-md w-fit"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <Link
                  href="/login"
                  className="bg-sky-950 text-white px-4 py-2 rounded-md w-fit"
                >
                  Log In
                </Link>

                <button
                  onClick={handleGoogleLogin}
                  className="flex items-center gap-2 border px-4 py-2 rounded-md w-fit text-blue-400 font-bold"
                >
                  <FaGoogle />

                 Google
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;