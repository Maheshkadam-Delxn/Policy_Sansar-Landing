"use client";
import React, { useState, useEffect, useRef } from "react";
import Logo from "../../../public/insurance/logo.png";
import Link1 from "next/link";
import Image from "next/image";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";

const Header = () => {
  const [logoSize, setLogoSize] = useState(130); // Initial logo size in px
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu open state
  const menuRef = useRef(null); // Ref for menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu if user clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenWidth = window.innerWidth; // Get the screen width

      // Apply scroll effect only for large screens (md to 2xl)
      if (screenWidth >= 768) {
        if (scrollPosition > 2) {
          setLogoSize(Math.max(50, 130 - scrollPosition)); // Decrease logo size smoothly
        } else {
          setLogoSize(130); // Reset to default size smoothly
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false); // Function to close the menu

  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 }, // Reverse to slide-out to the right
  };

  return (
    <div className="w-full sticky top-0 z-10 bg-white">
      <div className="w-full flex items-center justify-between px-4 py-2 lg:py-1 text-lg font-medium shadow-[0_4px_10px_rgba(0,0,0,0.1)] border-b border-gray-200">
        {/* Logo Section */}
        <Link1
          href={"/"}
          className="text-2xl font-bold text-black tracking-wide flex items-center gap-3 w-1/2 "
        >
          <Image
            src={Logo}
            width={logoSize}
            height={logoSize}
            alt="Logo"
            className="transition-all ease-in-out duration-300 xxs:w-1/3 xs:w-1/3 sm:w-1/3"
          />
          <h1 className="text-2xl text-[#1D951B] xxs:text-sm xs:text-sm sm:text-sm">Policy Sansar</h1>
        </Link1>

        {/* Hamburger or Back Button */}
        <button
          onClick={toggleMenu}
          className="block lg:hidden text-black focus:outline-none"
        >
          {isMenuOpen ? (
            <IoIosArrowForward className="text-2xl font-extrabold" />
          ) : (
            <RxHamburgerMenu className="text-2xl font-extrabold" />
          )}
        </button>

        {/* Navigation Links */}
        {/* For larger screens */}
        <div className="hidden lg:flex gap-8">
          <Link1 href={"/"} onClick={closeMenu} className="relative cursor-pointer text-black after:content-[''] after:block after:h-[2px] after:bg-[#1D951B] after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-[#1D951B]">
            Home
          </Link1>
          <Link to="explore" smooth={true} duration={1000} onClick={closeMenu} className="relative cursor-pointer text-black after:content-[''] after:block after:h-[2px] after:bg-[#1D951B] after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-[#1D951B]">
            Explore
          </Link>
          <Link1 href="/about-us" onClick={closeMenu} className="relative cursor-pointer text-black after:content-[''] after:block after:h-[2px] after:bg-[#1D951B] after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-[#1D951B]">
            About-us
          </Link1>
          <Link1 href="/contact" onClick={closeMenu} className="relative cursor-pointer text-black after:content-[''] after:block after:h-[2px] after:bg-[#1D951B] after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-[#1D951B]">
            Contact-us
          </Link1>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              className="fixed top-0 right-0 w-2/3 h-full bg-white shadow-lg z-20 flex flex-col items-start px-6 py-4 lg:hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              <Link1 href={"/"} onClick={closeMenu} className="py-2 text-lg text-black border-b border-gray-200 w-full text-left">
                Home
              </Link1>
              <Link to="explore" smooth={true} duration={1000} onClick={closeMenu} className="py-2 text-lg text-black border-b border-gray-200 w-full text-left">
                Explore
              </Link>
              <Link1 href="/about-us" onClick={closeMenu} className="py-2 text-lg text-black border-b border-gray-200 w-full text-left">
                About-us
              </Link1>
              <Link1 href="/contact" onClick={closeMenu} className="py-2 text-lg text-black border-b border-gray-200 w-full text-left">
                Contact-us
              </Link1>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
