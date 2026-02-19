"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 h-[80px] w-[1101px] mx-auto border-b border-gray-100 bg-white shadow-sm">
      <div className="relative flex h-full w-full items-center justify-between px-[32px]">
        {/* Logo */}
        <Link href="/" className="inline-block pt-[4px]">
          <Image
            src="/logo.png"
            alt="INFNOVA Academy"
            width={120}
            height={32}
            className="h-[32px] w-[120px] object-contain"
            priority
          />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/courses"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            Courses
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            Contact
          </Link>
        </nav>

        {/* Actions - Enroll Now button positioning */}
        <div className="flex items-center gap-[16px] w-[209.28px]">
          <button className="flex h-[40px] w-[82.39px] items-center justify-center text-sm font-bold text-[#F54900] hover:opacity-80">
            Sign in
          </button>
          <button className="flex h-[40px] w-[110.89px] items-center justify-center rounded-[10px] bg-[#F54900] text-sm font-bold text-white transition-all hover:bg-[#d43f00] active:scale-95 shadow-md">
            Enroll Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
