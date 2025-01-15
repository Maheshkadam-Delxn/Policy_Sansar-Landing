"use client";
import { React, useState } from "react";
import Image from "next/image";
import aboutcover from "../../../public/coverimg/peoplecover.png";
import sansar from "../../../public/coverimg/sansar.png.jpg";
import Person2 from "../../../public/experts/Vesukar.png";
import Person1 from "../../../public/experts/vinod.png";
import Person3 from "../../../public/experts/ajay.png";
import { motion } from "framer-motion";
import { FaEye, FaBullseye } from "react-icons/fa";
import CoreValue from "../components/CoreValue";
import AnimatedHeader from '../components/AnimatedHeader.jsx';
import { IoMdCall } from "react-icons/io";
import { useInView } from "react-intersection-observer";

const Experts = () => {
  const { ref: visionRef, inView: visionInView } = useInView({ triggerOnce: true });
  const { ref: missionRef, inView: missionInView } = useInView({ triggerOnce: true });

  const teamMembers = [
    {
      img: Person1,
      name: "Mr. Vinod Tongar - CEO",
      description:
        "Mr. Vinod Tongar, the CEO of Policy Sansar Insurance Broking Pvt. Ltd., is a distinguished leader with over 25 years of exemplary experience in the life and general insurance industry. His association includes HDFC Life, ICICI Prudential, IndiaFirst Life, Liberty General Insurance.",
    },
    {
      img: Person2,
      name: "Mr. H. J. Vesukar - CFO",
      description:
        "Mr. H. J. Vesukar, the CFO and Director of Policy Sansar Insurance Broking Pvt. Ltd., is a highly accomplished banking professional with over 35 years of experience in financial services. He retired as General Manager of a Regional Rural Bank and later served as CFO for Marine Group companies.",
    },
    {
      img: Person3,
      name: "Mr. Ajaykumar Phate - CMO",
      description:
        "Mr. Ajaykumar Phate, the Chief Marketing Officer of Policy Sansar Insurance Broking Pvt. Ltd., has over 30 years of experience in the life insurance industry. He has worked with HDFC Life, IndiaFirst, and Met Life.",
    },
  ];

  return (
    <div className="flex flex-col gap-24">
      {/* Cover Section */}
      <div className="w-full h-56 bg-black p-6 relative ">
        <Image src={aboutcover} layout="fill" objectFit="cover" alt="about-us" />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center pl-16 text-white">
          <h1 className="text-2xl font-bold">About Us</h1>
          {/* <AnimatedHeader text="Explore Our Insurance Plans" /> */}

        </div>
      </div>

      {/* About Company Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12  px-8">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={sansar}
            width={1080}
            height={720}
            alt="Company Representative"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 text-left space-y-4">
          <h2 className="text-3xl font-bold text-[#164574]">About Our Company</h2>
          <p className="text-gray-700 text-justify">
            Welcome to <b>Policy Sansar Insurance Broking Private Limited</b>, a trusted name in the insurance brokerage industry. Policy Sansar was incorporated on <b>4th Sept 2024</b> under the Registered Company Act 2013. We have received our <b>IRDAI License</b> for Direct Broker - Life and General on <b>27 Dec 2024</b>.
          </p>
          <p className="text-gray-700 text-justify">
            We currently operate with a strength of <b>20+ field officers</b> and <b>Business Development Managers</b> across <b>10 locations</b> in India. Our Registered and Corporate Offices are in <b>Mumbai</b>, and we are in the process of setting up branches in <b>Gujarat, MP, and Kerala</b>.
          </p>
          <p className="text-gray-700 text-justify">
            Our company website is under development:{" "}
            <a href="https://www.policysansar.com" className=" font-semibold underline">www.policysansar.com</a>. We plan to launch our <b >app by May 2025</b>.
          </p>
          <div className="mt-4">
           <div className="flex items-center gap-5"> <p className="text-lg font-semibold flex items-center gap-1"><span><IoMdCall className="text-2xl"/></span>Contact Us</p>
           <p className="text-xl font-bold text-[#164574]">+91 9644170004</p></div>
            <button className="mt-3 px-6 py-2 bg-[#164574] text-white rounded-md hover:bg-[#123c60] transition">
              Call Our Experts
            </button>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className=" flex flex-col items-center gap-8 px-8 ">
        <h2 className="text-3xl font-bold text-[#164574]">Meet Our Experts</h2>
        {/* <h2 className="text-[#164574]  font-bold text-3xl">
        <AnimatedHeader text="Meet Our Experts"  className="!text-3xl  "/>
        </h2> */}

        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`relative w-full md:w-3/4 flex flex-col-reverse md:flex-row items-center gap-6 p-6 ${
              index % 2 === 0 ? "md:flex-row-reverse " : ""
            }`}
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-start">{member.name}</h3>
              <p className="text-gray-700 mt-4 text-justify">{member.description}</p>
            </div>

            <div className="relative flex-1 w-full md:h-full">
              {/* Decorative Background Shapes */}
              <div className="absolute inset-0 w-full h-full -z-10">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500 rounded-full opacity-30 blur-lg"></div>
                <div className="absolute bottom-6 right-6 w-32 h-32 bg-indigo-400 rounded-full opacity-30 blur-lg"></div>
              </div>

              <div className="w-full flex items-center justify-center">
              <Image
                width={300}
                height={300}
                src={member.img}
                alt={member.name}
                className="object-cover rounded-full shadow-lg border-4 border-white"
              />
              </div>
            </div>
          </div>
        ))}
      </div>

    
 {/* Vision & Mission Section */}
 <div
        className="relative w-full xl:h-96 2xl:h-96 md:h-[40rem] xxs:min-h-[24rem] bg-cover bg-center xxs:p-3 xs:p-3 sm:p-3"
        style={{ backgroundImage: `url(${aboutcover.src})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 text-white w-full h-full px-8">
          {/* Vision Card */}
          <motion.div
            ref={visionRef}
            initial={{ opacity: 0, y: 50 }}
            animate={visionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 h-2/3 bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaEye className="text-3xl" />
              <h2 className="text-2xl font-bold">Our Vision</h2>
            </div>
            <p>
              Our vision is to transform insurance into a powerful tool for social and financial empowerment. Rooted in integrity and
              transparency, we aim to provide inclusive, affordable, and accessible insurance solutions that cater to every segment of
              society, with a strong focus on underserved communities, rural areas, and women.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            ref={missionRef}
            initial={{ opacity: 0, y: 50 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full md:w-1/2 h-2/3 bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaBullseye className="text-3xl" />
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p>
              Our mission is to provide honest, inclusive, and accessible insurance solutions that safeguard every aspect of a family’s
              well-being. From financial security to health and livelihood protection. Through innovation, empathy, and personalized
              support, we strive to create a future where every family, regardless of their circumstances, can achieve stability,
              resilience, and peace of mind.
            </p>
          </motion.div>
        </div>
      </div>



      <CoreValue />
    </div>
  );
};

export default Experts;
