"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaBullseye, FaBuilding, FaUsers, FaGlobe, FaHandshake } from 'react-icons/fa';
import aboutcover from '../../../public/coverimg/peoplecover.png';
import sansar from '../../../public/coverimg/sansar.png.jpg';
import AnimatedHeader from '../components/AnimatedHeader';
import { useInView } from 'react-intersection-observer';
import Person1 from "../../../public/icons/person1.png";
import Person2 from "../../../public/icons/person2.png";
import Person3 from "../../../public/icons/person3.png";

const tabData = [
  {
    title: "Our Vision and Mission",
    icon: <FaBullseye size={40} className="text-[#164574]" />,
    content: (
      <>
        <p className="mt-2 text-gray-600">
          At <b>Policy Sansar</b>, our vision is to bridge the gap between insurers and insured individuals
          through a tech-driven, seamless, and customer-first approach. Our mission is to provide <b>affordable,
          customized, and innovative</b> insurance solutions, ensuring that every Indian has access to 
          the protection they deserve.
        </p>
        <p className="mt-2 text-gray-600">
          We strive to expand our digital ecosystem through <b>banking collaborations, AI-powered risk assessments,
          and seamless claim management</b>, making insurance hassle-free and transparent for all.
        </p>
      </>
    ),
  },
  {
    title: "Our Services",
    icon: <FaBuilding size={40} className="text-[#164574]" />,
    content: (
      <>
        <p className="mt-2 text-gray-600">
          Our comprehensive insurance portfolio covers:
        </p>
        <ul className="mt-2 list-disc pl-6 text-gray-600">
          <li>✔ <b>Life Insurance</b>: Tailored policies ensuring financial security for families.</li>
          <li>✔ <b>Health Insurance</b>: Comprehensive health plans with cashless hospitalization.</li>
          <li>✔ <b>Motor Insurance</b>: Covering damages, theft, and liabilities for vehicles.</li>
          <li>✔ <b>Corporate Insurance</b>: Safeguarding businesses against risks and uncertainties.</li>
        </ul>
        <p className="mt-2 text-gray-600">
          We also specialize in <b>policy renewals, claim settlements, and grievance management</b> to ensure a 
          seamless experience for our clients.
        </p>
      </>
    ),
  },
  {
    title: "Our Team",
    icon: <FaUsers size={40} className="text-[#164574]" />,
    content: (
      <>
        <p className="mt-2 text-gray-600">
          Our team consists of <b>industry veterans, risk analysts, and financial advisors</b> with a 
          collective experience of over <b>50 years</b>. Each member is dedicated to providing 
          tailored insurance solutions based on in-depth market research.
        </p>
        <p className="mt-2 text-gray-600">
          Our <b>customer support</b> and <b>AI-driven policy matching system</b> ensure that each client 
          receives the best possible coverage suited to their needs.
        </p>
      </>
    ),
  },
  {
    title: "Our Presence",
    icon: <FaGlobe size={40} className="text-[#164574]" />,
    content: (
      <>
        <p className="mt-2 text-gray-600">
          We have a growing footprint across <b>Mumbai, Thane, Tamil Nadu, Kerala, Karnataka, and more</b>.
          Our extensive network allows us to provide localized insurance services while maintaining 
          a high standard of customer care.
        </p>
        <p className="mt-2 text-gray-600">
          With a strong digital presence and multiple tie-ups with NBFCs, we are actively expanding 
          across <b>Tier-2 and Tier-3 cities</b> to ensure insurance reaches every corner of India.
        </p>
      </>
    ),
  },
  {
    title: "Our Focus",
    icon: <FaHandshake size={40} className="text-[#164574]" />,
    content: (
      <>
        <p className="mt-2 text-gray-600">
          Our primary focus is on <b>organic B2C lead generation, POS agent development, and digital-first 
          insurance models</b>. We aim to simplify insurance purchases by integrating AI-powered 
          solutions with human expertise.
        </p>
        <p className="mt-2 text-gray-600">
          Our goal for <b>2023-2024</b> is to achieve a <b>₹50 crore retail premium</b> milestone through 
          extensive partnerships, data-driven risk assessment, and enhanced customer engagement strategies.
        </p>
      </>
    ),
  },
];

const Experts = () => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.5, // Trigger when 50% of the section is in the viewport
  })
  const [activeIndex, setActiveIndex] = useState(0); // Track active tab

  return (
    <>
      {/* Cover Section */}
      <div className="w-full h-56 bg-black p-6 relative">
        <Image
          src={aboutcover}
          layout="fill"
          objectFit="cover"
          alt="about-us"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center pl-16 text-white">
          <h1 className="text-2xl  font-bold">About Us</h1>
        </div>
      </div>

      {/* About Company Section (Image on Left, Text on Right) */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-12 px-8">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={sansar}
            width={660}
            height={350}
            alt="Company Representative"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - About Company Text */}
        <div className="w-full md:w-1/2 text-left space-y-4">
          <h2 className="text-3xl font-bold text-[#164574]">About Our Company</h2>
          <p className="text-gray-700 text-justify">
            Welcome to **Policy Sansar Insurance Pvt. Ltd.**, a trusted name in the insurance brokerage industry. 
            We are dedicated to offering cutting-edge solutions powered by advanced technology to ensure seamless 
            experiences for our clients.  
          </p>
          <p className="text-gray-700 text-justify">
            As part of **Sansar**, we bring expertise from various sectors, including data analysis, digital 
            marketing, hospitality, and startup funding. Our approach combines deep industry knowledge with modern 
            technological advancements to help you secure your future.
          </p>

          {/* Contact Section */}
          <div className="mt-4">
            <p className="text-lg font-semibold">📞 Contact Us</p>
            <p className="text-xl font-bold text-[#164574]">+91 9922949596</p>
            <button className="mt-3 px-6 py-2 bg-[#164574] text-white rounded-md hover:bg-[#123c60] transition">
              Call to Our Experts
            </button>
          </div>
        </div>
      </div>

      {/* Card Slider Section */}
      <div className="flex flex-col gap-10 w-full max-w-5xl mx-auto overflow-hidden mt-12  mb-12">
        {/* Left Sidebar - Tabs */}
        <div className="    rounded-3xl border-r border-gray-300 bg-white w-full  flex">
          {tabData.map((tab, index) => (
            <button
              key={index}
              className={`w-full px-6 py-6 text-left text-lg xxs:text-xs font-semibold transition-all ease-in-out duration-500  border-b rounded-3xl ${
                activeIndex === index
                  ? "bg-[#164574] text-white"
                  : "text-gray-800 hover:bg-gray-200"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Right Side - Content */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="w-full p-8 bg-white rounded-3xl shadow-md"
        >
          <div className="flex items-center gap-4">
            {tabData[activeIndex].icon}
            <h2 className="text-2xl xxs:text-sm font-bold text-[#164574]">{tabData[activeIndex].title}</h2>
          </div>
          {tabData[activeIndex].content}
        </motion.div>
      </div>

      <div name="about" className='mt-12 flex flex-col items-center justify-center gap-24 h-[100vh]'>
      {/* Header Section */}
      <AnimatedHeader text="Our Expert"/>

      {/* Gradient Element */}
      <div className='flex items-center gap-24'>
        {/* Expert 1 */}
        <motion.div
          ref={inViewRef}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className='flex flex-col items-center gap-3'
        >
          <div className='w-44 h-96 bg-gradient-to-b from-[#5578DF] via-[#4163c9] to-[#C3F6FF] rounded-full flex flex-col items-end justify-end overflow-hidden'>
            <Image
              src={Person1}
              width={500}
              height={500}
              alt='Expert1'
              className='w-full h-3/4'
            />
          </div>
          <h1 className='text-2xl font-bold'>Vinod Tongar 
          </h1>
          <p className='text-lg font-medium'>CEO</p>
        </motion.div>

        {/* Expert 2 */}
        <motion.div
          ref={inViewRef}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className='flex flex-col items-center gap-3'
        >
          <div className='w-44 h-96 bg-gradient-to-b from-[#5578DF] via-[#4163c9] to-[#C3F6FF] rounded-full flex flex-col items-end justify-end overflow-hidden'>
            <Image
              src={Person3}
              width={500}
              height={500}
              alt='Expert2'
              className='w-full h-3/4'
            />
          </div>
          <h1 className='text-2xl font-bold'>Ajay Phate</h1>
          <p className='text-lg font-medium'>CEO</p>
        </motion.div>

        {/* Expert 3 */}
        <motion.div
          ref={inViewRef}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className='flex flex-col items-center gap-3'
        >
          <div className='w-44 h-96 bg-gradient-to-b from-[#5578DF] via-[#4163c9] to-[#C3F6FF] rounded-full flex flex-col items-end justify-end overflow-hidden'>
            <Image
              src={Person2}
              width={500}
              height={500}
              alt='Expert3'
              className='w-full h-3/4'
            />
          </div>
          <h1 className='text-2xl font-bold'>- Sawant</h1>
          <p className='text-lg font-medium'>CEO</p>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default Experts;
