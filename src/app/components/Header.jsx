"use client";
import React, { useState, useEffect, useRef } from "react";
import Logo from "../../../public/insurance/logo.png";
import Link1 from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
const Header = () => {
  const [logoSize, setLogoSize] = useState(100); // Initial logo size in px
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
      if (scrollPosition > 2) {
        setLogoSize(Math.max(50, 100 - scrollPosition)); // Logo size decreases from 100px to 50px
      } else {
        setLogoSize(100); // Reset to 100px when scrolled to top
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
          className="text-2xl font-bold text-black tracking-wide flex items-center gap-3"
        >
          <Image
            src={Logo}
            width={logoSize}
            height={logoSize}
            alt="Logo"
            className="transition-all ease-in-out duration-300 xxs:w-16 xxs:h-16 xs:w-16 xs:h-16 sm:w-16 sm:h-16"
          />
          <h1 className="text-2xl text-[#1D951B] xxs:text-lg xs:text-lg sm:text-lg">
            Policy Sansar
          </h1>
        </Link1>

        {/* Hamburger or Back Button */}
        <button
          onClick={toggleMenu}
          className="block lg:hidden text-black focus:outline-none"
        >
          {isMenuOpen ? (
           <IoIosArrowForward className="text-2xl font-extrabold"/>
          ) : (
            <RxHamburgerMenu className="text-2xl font-extrabold"/>
          )}
        </button>

        {/* Navigation Links */}
        {/* For larger screens */}
        <div className="hidden lg:flex gap-8">
          {["Home", "Explore", "About-us", "Contact-us"].map((item, index) => (
            <Link1
              key={index}
              href={item === "Explore" ? "#explore" : `/${item.toLowerCase()}`}
              className="relative cursor-pointer text-black after:content-[''] after:block after:h-[2px] after:bg-[#1D951B] after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-[#1D951B]"
            >
              {item}
            </Link1>
          ))}
        </div>

        {/* For smaller screens */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              className="absolute top-20 right-0 xxs:h-screen w-3/4 bg-white flex flex-col gap-4 items-end p-5 shadow-md z-50 lg:hidden"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {["Home", "Explore", "About-us", "Contact-us"].map(
                (item, index) => (
                  <Link1
                    key={index}
                    href={
                      item === "Explore" ? "#explore" : `/${item.toLowerCase()}`
                    }
                    onClick={closeMenu}
                    className="relative cursor-pointer text-black after:content-[''] after:block after:h-[2px] after:bg-[#1D951B] after:w-0 after:transition-all after:duration-300 hover:after:w-full hover:text-[#1D951B] px-4 py-2 rounded-md"
                  >
                    {item}
                  </Link1>
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
