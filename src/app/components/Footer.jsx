"use client"
import React from 'react'
import { FaXTwitter,FaLinkedinIn,FaFacebook,FaInstagram } from "react-icons/fa6";
import { IoCallSharp ,IoMailOpenSharp,IoLocationSharp} from "react-icons/io5";
import { Link,animateScroll as scroll } from 'react-scroll';
const Footer = () => {
  const scrollToTop=()=>{
    scroll.scrollToTop()
  }
  return (
    <div className='w-full h-[75vh] bg-[#121212] text-white p-8  '>
      {/* logo social with navigations */}
      <div className="flex items-start justify-between w-full ">
        {/* text logos */}
        <div className="flex flex-col items-start gap-3">
          <h1 className='text-3xl font-extrabold'>PolicySansar</h1>
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full border border-x-2 border-y-2 border-white "><FaXTwitter />
            </div>
            <div className="p-3 rounded-full border border-x-2 border-y-2 border-white "><FaLinkedinIn />
            </div>
            <div className="p-3 rounded-full border border-x-2 border-y-2 border-white "><FaFacebook />
            </div>
            <div className="p-3 rounded-full border border-x-2 border-y-2 border-white "><FaInstagram />
            </div>
          </div>
        </div>
        <div className='flex flex-col items-end gap-10 w-full'>
        <div className="flex flex-col items-end gap-3 text-xl font-md">
          <Link onClick={scrollToTop} className='cursor-pointer hover:-translate-x-3 transition-all ease-in-out duration-300'>Home</Link>
          <Link to='explore' smooth={true} duration={1000} className='cursor-pointer hover:-translate-x-3 transition-all ease-in-out duration-300'>Explore</Link>
          <Link to='about' smooth={true} duration={1000} className='cursor-pointer hover:-translate-x-3 transition-all ease-in-out duration-300'>About-us</Link>
          <Link to='contact' smooth={true} duration={1000} className='cursor-pointer hover:-translate-x-3 transition-all ease-in-out duration-300'>Contact-us</Link>
        </div>
        <div className='w-1/3 flex flex-col items-start gap-4 p-5 bg-[#474747] rounded-2xl'>
          <h1>Contact</h1>
          <div className='flex items-center gap-3 text-lg'><IoCallSharp /> - <h1>+91 8668903099</h1></div>
          <div className='flex items-center gap-3 text-lg'><IoMailOpenSharp/> - <h1>policysansar@gmail.com</h1></div>
          <div className='flex items-center gap-3 text-lg'><IoLocationSharp/> - <h1>Thane,Mumbai,Maharashtra,India</h1></div>
        </div>
        </div>
       

      </div>
      <div className=""></div>
    </div>
  )
}

export default Footer