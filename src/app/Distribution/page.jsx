import React from 'react';
import Image from 'next/image';
import DistImg from '../../../public/icons/workflowImg.png';

const Distribution = () => {
  return (
    <div className="flex flex-col items-center justify-evenly py-10 px-5 bg-white min-h-[90vh] w-full">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Distribution Model</h2>
      
      <div className="flex flex-col md:flex-row w-full items-center justify-center gap-10 px-5">
        {/* Left Sections */}
        <div className="flex flex-col gap-10 md:gap-24 max-w-sm w-full">
          <div className="bg-[#9C5FB1] text-white px-4 py-8 rounded-lg shadow-md w-full">
            <h3 className="font-semibold">Policy Sansar App</h3>
            <p className="text-sm mt-2">We are planning to roll out our app for individual customers to avail financial & investment products, including UPI payments by May 2025.</p>
          </div>
          <div className="bg-[#F3C13F] text-white px-4 py-8 rounded-lg shadow-md w-full">
            <h3 className="font-semibold">Co-Op Banks</h3>
            <p className="text-sm mt-2">Our associate Co-Op banks and credit societies, mainly in Maharashtra, Gujarat, and MP-CG, are resourceful in selling group and retail products.</p>
          </div>
        </div>

        {/* Central Image */}
        <div className="flex justify-center items-center w-full max-w-xs">
          <Image src={DistImg} alt="Distribution Model" width={300} height={300} className="w-full h-auto" />
        </div>
        
        {/* Right Sections */}
        <div className="flex flex-col gap-10 md:gap-24 max-w-sm w-full">
          <div className="bg-[#3293CF] text-white px-4 py-8 rounded-lg shadow-md w-full">
            <h3 className="font-semibold">NBFC Network</h3>
            <p className="text-sm mt-2">We collaborate with NBFCs for multiple financial products, including life, health, and GI group and retail insurance.</p>
          </div>
          <div className="bg-[#3BAFA3] text-white px-4 py-8 rounded-lg shadow-md w-full">
            <h3 className="font-semibold">Loan DSA & Trading App</h3>
            <p className="text-sm mt-2">Our network includes leading loan providers and trading apps to offer financial solutions to their customers.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distribution;
