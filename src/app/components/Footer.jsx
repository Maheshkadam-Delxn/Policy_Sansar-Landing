"use client";
import React from "react";
import { FaXTwitter, FaLinkedinIn, FaFacebook, FaInstagram } from "react-icons/fa6";
import { IoCallSharp, IoMailOpenSharp, IoLocationSharp } from "react-icons/io5";
import { Link, animateScroll as scroll } from "react-scroll";
import { useInView } from "react-intersection-observer"; // Importing useInView
import Link1 from "next/link";
const Footer = () => {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="w-full h-auto bg-[#121212] text-white p-8 overflow-hidden">
      {/* logo social with navigations */}
      <div className="flex flex-col lg:flex-row items-start justify-between w-full space-y-8 lg:space-y-0 lg:space-x-10">
        {/* text logos */}
        <div ref={ref1} className="flex flex-col items-start gap-3 w-full lg:w-1/3">
          <h1
            className={`text-3xl font-extrabold transition-all duration-700 xxs:text-xl xs:text-xl sm:text-xl ${
              inView1 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            PolicySansar
          </h1>
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full  border border-x-2 border-y-2 border-white hover:border-[#1D951B] hover:bg-[#1D951B] hover:-translate-y-1 transition-all ease-in-out duration-300 cursor-pointer xxs:text-sm xs:text-sm sm:text-sm xxs:p-2 xs:p-2 sm:p-2">
              <FaXTwitter />
            </div>
            <div className="p-3 rounded-full border border-x-2 border-y-2 border-white hover:border-[#1D951B] hover:bg-[#1D951B] hover:-translate-y-1 transition-all ease-in-out duration-300 cursor-pointer xxs:text-sm xs:text-sm sm:text-sm xxs:p-2 xs:p-2 sm:p-2">
              <FaLinkedinIn />
            </div>
            <div className="p-3 rounded-full border border-x-2 border-y-2 border-white hover:border-[#1D951B] hover:bg-[#1D951B] hover:-translate-y-1 transition-all ease-in-out duration-300 cursor-pointer xxs:text-sm xs:text-sm sm:text-sm xxs:p-2 xs:p-2 sm:p-2">
              <FaFacebook />
            </div>
            <div className="p-3 rounded-full border border-x-2 border-y-2 border-white hover:border-[#1D951B] hover:bg-[#1D951B] hover:-translate-y-1 transition-all ease-in-out duration-300 cursor-pointer xxs:text-sm xs:text-sm sm:text-sm xxs:p-2 xs:p-2 sm:p-2">
              <FaInstagram />
            </div>
          </div>
        </div>

            {/* PRODUCT LINKS */}

            <div className="flex flex-col items-start gap-5">
              <h1 className="text-xl font-bold">Products</h1>
              <ul className="text-md flex flex-col gap-3">
                <li><Link1 href={"/insurances/General"} className="hover:text-[#1D951B] transition-all ease-in-out duration-300">General Inusrance</Link1></li>
                <li><Link1 href={"/insurances/Health"} className="hover:text-[#1D951B] transition-all ease-in-out duration-300">Health Insurance</Link1></li>
                <li><Link1 href={"/insurances/Life"} className="hover:text-[#1D951B] transition-all ease-in-out duration-300">Life Insurance</Link1></li>
                <li><Link1 href={"/insurances/group"} className="hover:text-[#1D951B] transition-all ease-in-out duration-300">Group Insurance</Link1></li>
                <li><Link1 href={"/insurances/financial"} className="hover:text-[#1D951B] transition-all ease-in-out duration-300">Financial Insurance</Link1></li>
                <li><Link1 href={"/insurances/wealth"} className="hover:text-[#1D951B] transition-all ease-in-out duration-300">Wealth Insurance</Link1></li>
              </ul>
            </div>
        <div ref={ref2} className="flex flex-col items-end gap-10 w-full lg:w-1/3">
          <div
            className={`flex flex-col items-end gap-3 text-xl font-md transition-all duration-700 ${
              inView2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <Link
              onClick={scrollToTop}
              className="cursor-pointer hover:-translate-x-3 transition-all ease-in-out duration-300 hover:text-[#1D951B] xxs:text-sm xs:text-sm sm:text-sm"
            >
              Home
            </Link>
            <Link
              to="explore"
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:-translate-x-3 transition-all ease-in-out duration-300 hover:text-[#1D951B] xxs:text-sm xs:text-sm sm:text-sm"
            >
              Explore
            </Link>
            <Link1
              href={"/about-us"}
              className="cursor-pointer hover:-translate-x-3 transition-all ease-in-out duration-300 hover:text-[#1D951B] xxs:text-sm xs:text-sm sm:text-sm"
            >
              About-us
            </Link1>
            <Link1
              href={"/contact"}
              className="cursor-pointer hover:-translate-x-3 transition-all ease-in-out duration-300 hover:text-[#1D951B] xxs:text-sm xs:text-sm sm:text-sm"
            >
              Contact-us
            </Link1>
          </div>

          <div
            ref={ref3}
            className={`w-full lg:w-96 xl:w-96 2xl:w-96 md:w-96 flex flex-col items-start gap-4 p-5 bg-[#474747] rounded-2xl transition-all duration-700 ${
              inView3 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h1
              className={`transition-all duration-700 ${
                inView3 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              Contact
            </h1>
            <div className="flex items-center gap-3 text-lg xxs:text-xs">
              <IoCallSharp /> - <h1 className="text-sm sm:text-base">+91 8668903099</h1>
            </div>
            <div className="flex items-center gap-3 text-lg xxs:text-xs">
              <IoMailOpenSharp /> -{" "}
              <h1 className="text-sm sm:text-base">policysansar@gmail.com</h1>
            </div>
            <div className="flex items-center gap-3 text-lg xxs:text-xs">
              <IoLocationSharp /> -{" "}
              <h1 className="text-sm sm:text-base">Thane, Mumbai, Maharashtra, India</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
