"use client";
import React from 'react';
import Image from 'next/image';
import GeneralImg from "../../../public/insurance/general.png";
import HealthImg from "../../../public/insurance/health.png";
import LifeImg from "../../../public/insurance/life.png";
import GeneralIcon from "../../../public/icons/generalIcon.png";
import HealthIcon from "../../../public/icons/healthIcon.png";
import LifeIcon from "../../../public/icons/lifeIcon.png";
import Link from 'next/link';
import { motion } from 'framer-motion'; 
import { useInView } from 'react-intersection-observer';
import AnimatedHeader from './AnimatedHeader';

const Insurances = () => {
  const { ref: generalRef, inView: generalInView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { ref: healthRef, inView: healthInView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { ref: lifeRef, inView: lifeInView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div name="explore" className='mt-12 flex flex-col gap-24 min-h-[100vh] items-center justify-center  '>
      <AnimatedHeader text="Explore Our Insurance Plans" />
      <div className='flex flex-wrap items-center justify-center w-full gap-4 p-5 xxs:flex-col xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row'>
        
        {/* General Insurance Card */}
        <motion.div 
          ref={generalRef}
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: generalInView ? 1 : 0, y: generalInView ? 0 : 50 }} 
          transition={{ delay: 0.2, duration: 0.6 }}
          className='relative w-full md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4  bg-white rounded-lg h-96 shadow-lg border border-x border-y border-slate-200 overflow-hidden group'
        >
          <Link href={'../insurances/General'}>
            <Image
              src={GeneralImg}
              alt='General Insurance'
              width={1440}
              height={1080}
              className='w-full h-3/4 object-cover rounded-t-lg group-hover:opacity-50'
            />
            <div className='w-full flex flex-col items-center gap-2 p-3 h-1/4'>
              <div className='w-full flex items-center gap-3 justify-center h-full'>
                <Image 
                  src={GeneralIcon}
                  width={30}
                  height={30}
                  alt='General Icon'
                />
                <h1 className='text-xl font-bold'>General Insurance</h1>
              </div>
            </div>
            {/* Description on Hover */}
            <div className='w-full h-3/4 absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-3 transition-all duration-500 ease-in-out'>
              <p className='text-white font-semibold text-lg'>
                Protect your assets with comprehensive general insurance plans covering various needs and circumstances.
              </p>
            </div>
          </Link>
        </motion.div>

        {/* Health Insurance Card */}
        <motion.div 
          ref={healthRef}
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: healthInView ? 1 : 0, y: healthInView ? 0 : 50 }} 
          transition={{ delay: 0.4, duration: 0.6 }}
          className='relative w-full md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4 bg-white rounded-lg h-96 shadow-lg border border-x border-y border-slate-200 overflow-hidden group'
        >
          <Link href={"../insurances/Health"}>
            <Image
              src={HealthImg}
              alt='Health Insurance'
              width={1440}
              height={1080}
              className='w-full h-3/4  object-cover md:h-3/4 rounded-t-lg group-hover:opacity-50'
            />
            <div className='w-full flex flex-col items-center gap-2 p-3 h-1/4'>
              <div className='w-full flex items-center gap-3 justify-center h-full'>
                <Image 
                  src={HealthIcon}
                  width={30}
                  height={30}
                  alt='Health Icon'
                />
                <h1 className='text-xl font-bold'>Health Insurance</h1>
              </div>
            </div>
            {/* Description on Hover */}
            <div className='w-full h-3/4 absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-3 transition-all duration-500 ease-in-out'>
              <p className='text-white font-semibold text-lg'>
                Get access to the best healthcare services with our health insurance plans tailored for your needs.
              </p>
            </div>
          </Link>
        </motion.div>

        {/* Life Insurance Card */}
        <motion.div 
          ref={lifeRef}
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: lifeInView ? 1 : 0, y: lifeInView ? 0 : 50 }} 
          transition={{ delay: 0.6, duration: 0.6 }}
          className='relative w-full md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4 bg-white rounded-lg h-96 shadow-lg border border-x border-y border-slate-200 overflow-hidden group'
        >
          <Link href={"../insurances/Life"}>
            <Image
              src={LifeImg}
              alt='Life Insurance'
              width={1440}
              height={1080}
              className='w-full h-3/4 object-cover rounded-t-lg group-hover:opacity-50'
            />
            <div className='w-full flex flex-col items-center gap-2 p-3 h-1/4'>
              <div className='w-full flex items-center gap-3 justify-center h-full'>
                <Image 
                  src={LifeIcon}
                  width={30}
                  height={30}
                  alt='Life Icon'
                />
                <h1 className='text-xl font-bold'>Life Insurance</h1>
              </div>
            </div>
            {/* Description on Hover */}
            <div className='w-full h-3/4 absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-3 transition-all duration-500 ease-in-out'>
              <p className='text-white font-semibold text-lg'>
                Secure your future and the well-being of your loved ones with our life insurance plans.
              </p>
            </div>
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default Insurances;
