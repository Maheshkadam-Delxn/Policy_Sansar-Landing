"use client";
import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from "../../../public/insurance/logo.png";
import Link1 from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
const Header = () => {
  const [logoSize, setLogoSize] = useState(100); // Initial logo size in px
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu open state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 2) {
        setLogoSize(Math.max(50, 100 - scrollPosition)); // Logo size decreases from 100px to 50px
      } else {
        setLogoSize(100); // Reset to 100px when scrolled to top
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full sticky top-0 z-10 bg-white">
      <div className="w-full flex items-center justify-between px-4 py-2 lg:py-1 text-lg font-medium shadow-[0_4px_10px_rgba(0,0,0,0.1)] border-b border-gray-200">
        {/* Logo Section */}
        <Link1
          href={"/"}
          className="text-2xl font-bold text-black tracking-wide flex items-center gap-3"
        >
          <Image
            src={Logo}
            width={logoSize}
            height={logoSize}
            alt="Logo"
            className="transition-all ease-in-out duration-300 xxs:w-16 xxs:h-16 xs:w-16 xs:h-16 sm:w-16 sm:h-16"
          />
          <h1 className="text-2xl  text-[#1D951B] xxs:text-lg xs:text-lg sm:text-lg">Policy Sansar</h1>
        </Link1>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="block lg:hidden text-black focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute lg:relative top-28 lg:top-auto left-0 w-full lg:w-auto bg-white lg:bg-transparent lg:flex lg:items-center flex flex-col  lg:flex-row gap-4 sm:gap-8 items-end p-5 shadow-md lg:shadow-none z-50`}
        >
          <Link1
            href={"/"}
            className="relative cursor-pointer text-black after:content-[''] after:block after:h-[2px] after:bg-[#1D951B] after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-[#1D951B]"
          >
            Home
          </Link1>
          <Link
            to="explore"
            smooth={true}
            duration={1000}
            className="relative cursor-pointer text-black after:content-[''] after:block after:h-[2px] after:bg-[#1D951B] after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-[#1D951B]"
          >
            Explore
          </Link>
          <Link1
            href="/about-us"
            className="relative cursor-pointer text-black after:content-[''] after:block after:h-[2px] after:bg-[#1D951B] after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-[#1D951B]"
          >
            About-us
          </Link1>
          <Link1
            href="/contact"
            className="relative cursor-pointer text-black after:content-[''] after:block after:h-[2px] after:bg-[#1D951B] after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-[#1D951B]"
          >
            Contact-us
          </Link1>
        </div>
      </div>
    </div>
  );
};

export default Header;
