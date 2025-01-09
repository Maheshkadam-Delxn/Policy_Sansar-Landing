"use client"
import React from 'react'
import Person1 from "../../../public/icons/person1.png"
import Person2 from "../../../public/icons/person2.png"
import Person3 from "../../../public/icons/person3.png"
import AnimatedHeader from './AnimatedHeader'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Experts = () => {
  // Set up the useInView hook
  const [inViewRef, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.5, // Trigger when 50% of the section is in the viewport
  })

  return (
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
          <h1 className='text-2xl font-bold'>Ramesh Deshpande</h1>
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
              src={Person2}
              width={500}
              height={500}
              alt='Expert2'
              className='w-full h-3/4'
            />
          </div>
          <h1 className='text-2xl font-bold'>Suresh Prabhu</h1>
          <p className='text-lg font-medium'>Head</p>
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
              src={Person3}
              width={500}
              height={500}
              alt='Expert3'
              className='w-full h-3/4'
            />
          </div>
          <h1 className='text-2xl font-bold'>Vishwas Sawant</h1>
          <p className='text-lg font-medium'>HO</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Experts
