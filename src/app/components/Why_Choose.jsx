"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Bottom1LeftIcon from "../../../public/icons/re.png";
import MidRightIcon from "../../../public/icons/midRightIcon.png";
import MidLeftIcon from "../../../public/icons/MidLeftIcon.png";
import BottomRightIcon from "../../../public/icons/BottomRightIcon.png";
import TopIcon from "../../../public/icons/TopIcon.png";
import AnimatedHeader from "./AnimatedHeader";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const Why_Choose = () => {
  return (
    <div className="w-full min-h-screen mt-[90px] flex flex-col gap-10 ">
      <AnimatedHeader text="Why Choose Us" />
      <div className="relative w-full h-full flex flex-col items-center justify-center px-8 gap-10">
        {/* Background Image and Overlay */}
        <div className="absolute inset-0 bg-[url('/icons/family3.png')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content Section */}
        <div className="relative  w-full flex flex-col items-center">
          <motion.div
            className="w-full flex flex-wrap justify-center gap-6 mt-8 p-14"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            {/* Top Center Card */}
            <motion.div
              className="w-96 bg-white shadow-lg rounded-2xl p-5 text-center border border-gray-200 relative"
              variants={cardVariants}
            >
              <h1 className="text-xl font-bold text-gray-800">
                Customized Recommendations Tailored to Your Needs
              </h1>
              <div className="flex justify-end mt-2">
                <Image src={TopIcon} width={40} height={40} alt="Icon" />
              </div>
            </motion.div>

            {/* Two cards on left and right */}
            <div className="w-full flex justify-center gap-12 mt-6">
              <motion.div
                className="w-80 bg-white shadow-lg rounded-2xl p-5 border border-gray-200 relative "
                variants={cardVariants}
              >
                <h1 className="text-xl font-bold text-gray-800">
                  Affordable Premiums
                </h1>
                <div className="flex justify-end mt-2">
                  <Image src={MidLeftIcon} width={40} height={40} alt="Icon" />
                </div>
              </motion.div>

              <motion.div
                className="w-80 bg-white shadow-lg rounded-2xl p-5 border border-gray-200 relative "
                variants={cardVariants}
              >
                <h1 className="text-xl font-bold text-gray-800">
                  Easy and Secure Claim Process
                </h1>
                <div className="flex justify-end mt-2">
                  <Image src={MidRightIcon} width={40} height={40} alt="Icon" />
                </div>
              </motion.div>
            </div>

            {/* Two Bottom Cards */}
            <div className="w-full flex justify-center gap-12 mt-6">
              <motion.div
                className="w-80 bg-white shadow-lg rounded-2xl p-5 border border-gray-200 relative "
                variants={cardVariants}
              >
                <h1 className="text-xl font-bold text-gray-800">
                  Compare Multiple Policies Instantly
                </h1>
                <div className="flex justify-end mt-2">
                  <Image src={Bottom1LeftIcon} width={40} height={40} alt="Icon" />
                </div>
              </motion.div>

              <motion.div
                className="w-80 bg-white shadow-lg rounded-2xl p-5 border border-gray-200 relative "
                variants={cardVariants}
              >
                <h1 className="text-xl font-bold text-gray-800">
                  Expert Customer Support
                </h1>
                <div className="flex justify-end mt-2">
                  <Image src={BottomRightIcon} width={40} height={40} alt="Icon" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};


export default Why_Choose;
