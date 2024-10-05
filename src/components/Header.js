"use client";

import Image from "next/image";
import { useState } from "react";
import NavMenu from "./NavMenu";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black bg-opacity-80 text-white w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/assets/logo.svg"
            alt="Grilli Restaurant"
            width={100}
            height={50}
          />
          <div className="ml-4 hidden lg:block">
            <p className="text-sm font-semibold">
              Restaurant St, Delicious City, London 9578, UK
            </p>
            <p className="text-sm font-semibold">Daily: 8:00 am to 10:00 pm</p>
          </div>
        </div>
        <div className="hidden md:block">
          <NavMenu />
        </div>
        <div className="hidden lg:block text-right">
          <p className="text-sm font-semibold">+1 123 456 7890</p>
          <p className="text-sm font-semibold">booking@restaurant.com</p>
        </div>
        <a href="/page/reservation" className="hidden md:block">
          <button className="border border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-black text-base font-semibold py-2 px-4 rounded transition duration-300">
            BOOK TABLE
          </button>
        </a>

        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden">
          <NavMenu mobile />
          <div className="p-4">
            <p className="text-sm font-semibold">
              Restaurant St, Delicious City, London 9578, UK
            </p>
            <p className="text-sm font-semibold">Daily: 8:00 am to 10:00 pm</p>
            <p className="text-sm mt-2 font-semibold">+1 123 456 7890</p>
            <p className="text-sm font-semibold pb-4">booking@restaurant.com</p>
            <a href="/page/reservation" className="py-4">
              <button className="border border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-black text-base font-semibold py-2 px-4 rounded transition duration-300">
                BOOK TABLE
              </button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
