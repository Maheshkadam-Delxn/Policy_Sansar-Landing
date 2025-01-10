"use client";
import React, { useState, useEffect, useRef } from "react"; // Import useRouter from next/router
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from "../../../public/insurance/logo.png";
import Link1 from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Header = () => {
  const [logoSize, setLogoSize] = useState(100); // Initial logo size in px
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu open state
  
  const menuRef = useRef(null); // Ref for menu
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => setIsMenuOpen(false); // Function to close the menu

  // Close the menu if user clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener for clicks outside the menu
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on unmount
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          <h1 className="text-2xl text-[#1D951B] xxs:text-lg xs:text-lg sm:text-lg">Policy Sansar</h1>
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
        <motion.div
          ref={menuRef}
          initial={{ x: "100%" }} // Start position: off screen (right)
          animate={{ x: isMenuOpen ? 0 : "100%" }} // Slide in or out based on menu state
          transition={{ type: "spring", stiffness: 300, damping: 30 }} // Smooth sliding animation
          className={`absolute top-0 right-0 w-3/4 lg:w-auto h-screen bg-[#121212]  text-white lg:bg-transparent lg:flex lg:items-center flex flex-col lg:flex-row gap-10 sm:gap-8 items-center p-5 shadow-md lg:shadow-none z-50`}
        >
          <div className="flex flex-col gap-5 w-full items-center">
            <Image
              src={Logo}
              width={100}
              height={100}
            />
            <h1 className="text-2xl font-bold">Policy Sansar</h1>
            <hr className="w-64"/>
          </div>

          {/* Close button inside the menu */}
          <button
            onClick={closeMenu}
            className="absolute top-6 right-4 text-white text-xl font-semibold"
          >
            X
          </button>

          <Link1
            href={"/"}
            onClick={closeMenu} // Close the menu on link click
            className="relative cursor-pointer text-white after:content-[''] after:block after:h-[2px] after:bg-[#1D951B] after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-[#1D951B]"
          >
            Home
            <hr className="w-0 mt-1 transition-all duration-300 hover:w-full hover:bg-[#1D951B]" />
          </Link1>

          <Link
            to="explore"
            smooth={true}
            duration={1000}
            onClick={closeMenu} // Close the menu on link click
            className="relative cursor-pointer text-white after:content-[''] after:block after:h-[2px] after:bg-[#1D951B] after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-[#1D951B]"
          >
            Explore
            <hr className="w-0 mt-1 transition-all duration-300 hover:w-full hover:bg-[#1D951B]" />
          </Link>

          <Link1
            href="/about-us"
            onClick={closeMenu} // Close the menu on link click
            className="relative cursor-pointer text-white after:content-[''] after:block after:h-[2px] after:bg-[#1D951B] after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-[#1D951B]"
          >
            About-us
            <hr className="w-0 mt-1 transition-all duration-300 hover:w-full hover:bg-[#1D951B]" />
          </Link1>

          <Link1
            href="/contact"
            onClick={closeMenu} // Close the menu on link click
            className="relative cursor-pointer text-white after:content-[''] after:block after:h-[2px] after:bg-[#1D951B] after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-[#1D951B]"
          >
            Contact-us
            <hr className="w-0 mt-1 transition-all duration-300 hover:w-full hover:bg-[#1D951B]" />
          </Link1>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
