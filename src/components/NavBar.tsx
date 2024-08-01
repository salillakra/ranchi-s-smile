"use client";
import React, { useState } from "react";
import SideBarMobile from "./SideBarMobile";
import { LogIn } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="sticky top-0 z-20 flex h-16 items-center justify-between bg-[rgba(255,245,224,0.7)] p-0 backdrop-blur-md md:px-4 md:py-4">
        <Link href="/">
          <Image
            src="/ranchi's smile logo.png"
            className="w-40 md:w-52"
            alt="Ranchi's Smile logo"
            height={200}
            width={300}
          />
        </Link>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center p-3 text-gray-600"
            onClick={toggleSidebar}
          >
            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
            </svg>
          </button>
        </div>
        <ul className="hidden lg:flex lg:w-auto lg:items-center lg:space-x-12">
          <li>
            <Link
              className="poppins-extralight hover-underline-animation font-semibold text-[rgb(15,118,110)]"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="poppins-extralight hover-underline-animation font-semibold text-[rgb(15,118,110)]"
              href="/about"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="poppins-extralight hover-underline-animation font-semibold text-[rgb(15,118,110)]"
              href="/services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="poppins-extralight hover-underline-animation font-semibold text-[rgb(15,118,110)]"
              href="/pricing"
            >
              Location
            </Link>
          </li>
          <li>
            <Link
              className="poppins-extralight hover-underline-animation font-semibold text-[rgb(15,118,110)]"
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
        <Link
          href="/login"
          className="hidden items-center gap-2 rounded-md bg-[#0f766e] px-4 py-2 text-sm font-bold text-white transition duration-200 hover:bg-slate-700 lg:flex"
        >
          <span className="poppins-medium">Sign in</span>
          <LogIn className="" />
        </Link>
      </nav>
      <SideBarMobile
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
    </>
  );
};

export default Navbar;
