import React from 'react';
import { motion } from 'framer-motion';
import AnimatedHeader from './AnimatedHeader';

// Core values data
const coreValues = [
  { name: 'Integrity', desc: 'Upholding the highest standards of honesty and transparency in all our actions.' },
  { name: 'Inclusivity', desc: 'Promoting diversity and ensuring equal opportunities for all.' },
  { name: 'Empowerment', desc: 'Enabling our clients and teams to achieve their goals and make informed decisions.' },
  { name: 'Customer-Centricity', desc: 'Putting customers at the heart of everything we do to deliver exceptional value.' },
  { name: 'Compassion', desc: 'Demonstrating care and understanding in our interactions and support.' },
  { name: 'Innovation', desc: 'Continuously exploring new ideas to improve services and drive industry progress.' },
  { name: 'Sustainability', desc: 'Committing to eco-friendly practices that benefit society and the environment.' },
  { name: 'Accountability', desc: 'Taking responsibility for our actions and ensuring transparency in our processes.' },
];

const CoreValue = () => {
  return (
    <div className="flex flex-col items-center gap-10 mt-12 p-6 w-full overflow-hidden">
      <AnimatedHeader text={"Our Core Values"} />
      <div className="flex flex-wrap items-center gap-4 justify-center">
        {coreValues.map((value, index) => (
          <motion.div
            key={index}
            className="relative w-96 h-60 text-black rounded-lg overflow-hidden group bg-white"
            whileHover={{ scale: 1.05 }}
          >
            {/* Background Image Fade and Scale */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0 }} // Image fades out on hover
              transition={{ duration: 0.5 }}
            ></motion.div>

            {/* Core Value Name - Slightly Moves Up on Hover */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center text-3xl font-extrabold"
              initial={{ y: 0 }}
              whileHover={{ y: -30 }}
              transition={{ duration: 0.3 }}
            >
              {value.name}
            </motion.div>

            {/* Description - Initially Hidden, Appears on Hover */}
            <motion.div
              className="absolute bottom-0 w-full p-4 bg-[#11386a] text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
              initial={{ y: '100%' }} // Start the description below the card
              animate={{ y: 0 }} // Animate to the bottom of the card
              whileHover={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p>{value.desc}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CoreValue;
