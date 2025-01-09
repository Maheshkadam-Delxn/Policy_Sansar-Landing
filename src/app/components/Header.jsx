"use client";
import React, { useState, useEffect } from "react";
import { Link ,animateScroll as scroll} from "react-scroll";
import Logo from "../../../public/insurance/logo.png";
import Link1 from "next/link";
import Image from "next/image";

const Header = () => {
  const [logoSize, setLogoSize] = useState(100); // Initial logo size in px
  const scrollToTop = () => {
    scroll.scrollToTop();
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
    <div className="w-full sticky top-0 z-10">
      <div className="w-full flex items-center justify-between px-4 py-1 text-lg font-medium bg-[#ffffff] text-white shadow-[0_4px_10px_rgba(0,0,0,0.1)] border border-white relative z-10">
        <Link1 href={"/"} className="text-2xl font-bold text-black tracking-wide flex items-center gap-3">
          <Image src={Logo} width={logoSize} height={logoSize} alt="Logo" className="transition-all ease-in-out duration-300" />
          <h1 className="text-3xl text-[#1D951B]">Policy Sansar</h1>
        </Link1>
        <div className="flex gap-8 items-center justify-between">
          <Link  onClick={scrollToTop} className="relative cursor-pointer text-black after:content-[''] after:block after:h-[2px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-full">
            Home
          </Link>
          <Link to="explore" smooth={true} duration={1000} className="relative cursor-pointer text-black after:content-[''] after:block after:h-[2px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-full">
            Explore
          </Link>
          <Link to="about" smooth={true} duration={1000} className="relative cursor-pointer text-black after:content-[''] after:block after:h-[2px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-full">
            About-us
          </Link>
          <Link to="contact" smooth={true} duration={1000} className="relative cursor-pointer text-black after:content-[''] after:block after:h-[2px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-full">
            Contact-us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
