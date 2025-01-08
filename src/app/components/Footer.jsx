import React from 'react'
import { FaXTwitter,FaLinkedinIn,FaFacebook,FaInstagram } from "react-icons/fa6";

const Footer = () => {
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
        <div className="flex flex-col items-end gap-3 text-xl font-md">
          <h1  className='cursor-pointer hover:-translate-x-3 transition-all ease-in-out duration-300'>Home</h1>
          <h1 className='cursor-pointer hover:-translate-x-3 transition-all ease-in-out duration-300'>Services</h1>
          <h1 className='cursor-pointer hover:-translate-x-3 transition-all ease-in-out duration-300'>About-us</h1>
          <h1 className='cursor-pointer hover:-translate-x-3 transition-all ease-in-out duration-300'>Plans</h1>
          <h1 className='cursor-pointer hover:-translate-x-3 transition-all ease-in-out duration-300'>Blog</h1>
        </div>

      </div>
      <div className=""></div>
    </div>
  )
}

export default Footer