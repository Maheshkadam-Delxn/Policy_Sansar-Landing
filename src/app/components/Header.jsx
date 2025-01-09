"use client";
import React from "react";
import Link from "next/link";
import Logo from "../../../public/insurance/logo.png"
import Image from "next/image";
const Header = () => {
  return (
  <div className=" w-full ">
      <div className="w-full flex items-center justify-between px-4 py-1 text-lg font-medium  bg-[#ffffff] text-white shadow-[0_4px_10px_rgba(0,0,0,0.1)] border border-white  relative z-10 ">
      <div className="text-2xl font-bold text-black tracking-wide flex items-center gap-3">
        <Image src={Logo} width={100} height={100} alt="Logo" />
        <h1 className="text-3xl text-[#1D951B]">Policy Sansar</h1>
      </div>
      <div className="flex gap-8 items-center justify-between">
        <Link
          href="/"
          className="relative cursor-pointer text-black after:content-[''] after:block after:h-[2px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-full"
        >
          Home
        </Link>
        <Link
          href="/contact"
          className="relative cursor-pointer text-black after:content-[''] after:block after:h-[2px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-full"
        >
          Contact
        </Link>
        <Link
          href="/help"
          className="relative cursor-pointer text-black after:content-[''] after:block after:h-[2px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-full"
        >
          Help
        </Link>
        <Link
          href="/plans"
          className="relative cursor-pointer text-black after:content-[''] after:block after:h-[2px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-full"
        >
          Plans
        </Link>
      </div>
    </div>
  </div>
  );
};

export default Header;
