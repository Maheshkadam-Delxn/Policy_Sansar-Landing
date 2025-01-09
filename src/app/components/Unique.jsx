"use client"
import React from "react";
import Image from "next/image";
import Promote from "../../../public/insurance/promote.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Unique = () => {
  // Set up the useInView hook
  const [inViewRef, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.5, // Trigger when 50% of the section is in the viewport
  });

  return (
    <div className="w-full h-[100vh]  flex flex-col items-center gap-14">
      <div className="w-full h-full bg-white flex items-center justify-between p-5">
        <div className="flex flex-col items-start gap-14 w-2/4">
          {/* Title and Divider */}
          <motion.div
            ref={inViewRef}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col items-start gap-3"
          >
            <h1 className="text-4xl font-extrabold">What makes us Different?</h1>
            <hr className="w-96 h-0.5 bg-slate-200" />
          </motion.div>

          {/* Cards Section */}
          <div className="flex flex-col items-start gap-4 w-full p-5">
            {/* Card 1 */}
            <motion.div
              ref={inViewRef}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-96 h-32 bg-white shadow-lg border border-x border-slate-200 rounded-lg flex items-center justify-center"
            >
              <div className="flex items-start gap-6 p-3">
                <div className="bg-[#0040FF] w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div className="flex flex-col items-start gap-3">
                  <h1 className="text-lg font-bold">Real-Time Solutions</h1>
                  <p className="text-sm font-medium">Seamless support and claim assistance.</p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <div className="w-full flex items-center justify-end">
              <motion.div
                ref={inViewRef}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="w-96 h-32 bg-white shadow-lg border border-x border-slate-200 rounded-lg flex items-center justify-center"
              >
                <div className="flex items-start gap-6 p-3">
                  <div className="bg-[#0040FF] w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div className="flex flex-col items-start gap-3">
                    <h1 className="text-lg font-bold">Diverse Insurance Products</h1>
                    <p className="text-sm font-medium">Comprehensive coverage options.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Card 3 */}
            <motion.div
              ref={inViewRef}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="w-96 h-32 bg-white shadow-lg border border-x border-slate-200 rounded-lg flex items-center justify-center"
            >
              <div className="flex items-start gap-6 p-3">
                <div className="bg-[#0040FF] w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div className="flex flex-col items-start gap-3">
                  <h1 className="text-lg font-bold">Local Experts</h1>
                  <p className="text-sm font-medium">Knowledgeable team providing personalized care.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Image Section with Slide In Animation */}
        <motion.div
          ref={inViewRef}
          initial={{ opacity: 0, x: 100 }} // Start offscreen to the right
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }} // Slide in to the left
          transition={{ delay: 0.7, duration: 0.6 }}
          className="w-3/5 h-3/4"
        >
          <Image
            src={Promote}
            width={7680}
            height={4320}
            alt="promote Image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Unique;
