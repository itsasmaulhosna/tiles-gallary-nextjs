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

  return (
    <div className="border-b px-2">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        
        <div className="flex gap-1 items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">Tiles Gallery</h3>
        </div>

        <ul className="hidden md:flex items-center gap-5 text-sm">
          <li><Navlink href="/">Home</Navlink></li>
          <li><Navlink href="/all-tiles">All Tiles</Navlink></li>
          <li><Navlink href="/profile">My Profile</Navlink></li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          {isPending ? (
            <span>Loading...</span>
          ) : user ? (
            <>
              <h2 className="text-sm">Hello, {user.name}</h2>

              <Image
                src={user?.image || "/default-user.png"}
                alt="user"
                width={40}
                height={40}
                className="rounded-full"
              />

              <button
                className="bg-red-500 px-3 py-1 text-white rounded"
                onClick={async () => await authClient.signOut()}
              >
                Log Out
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="bg-sky-950 px-4 py-2 text-white rounded-md"
            >
              Log In
            </Link>
          )}
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
            <li><Navlink href="/">Home</Navlink></li>
            <li><Navlink href="/all-tiles">All Tiles</Navlink></li>
            <li><Navlink href="/profile">My Profile</Navlink></li>
          </ul>

          <div className="mt-4">
            {isPending ? (
              <span>Loading...</span>
            ) : user ? (
              <div className="flex items-center gap-4">
                <h2>Hello, {user.name}</h2>

                <Image
                  src={user?.image || "/default-user.png"}
                  alt="user"
                  width={50}
                  height={50}
                  className="rounded-full"
                />

                <button
                  className="bg-red-500 px-3 py-1 text-white rounded"
                  onClick={() => authClient.signOut()}
                >
                  Log Out
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="bg-purple-500 text-white px-4 py-2 rounded"
              >
                Log In
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;