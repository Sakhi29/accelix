"use client";

import React from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const Hero = () => {
  return (
    <section className='w-full min-h-screen bg-[#1E1E1E] text-white relative overflow-hidden pt-6 pb-16 px-4'>
      {/* Background gradient */}
      <div className='absolute -top-40 -right-40 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-[#4338ca] rounded-full opacity-20 blur-[60px] sm:blur-[80px] lg:blur-[100px]' />

      <div className='container mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center lg:text-left max-w-2xl mx-auto lg:mx-0'
          >
            <h1
              className={`${montserrat.className} text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6`}
            >
              Transform Your
              <span className='text-[#4338ca] block sm:inline'> Digital </span>
              Presence
            </h1>

            <p className='text-gray-400 text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0'>
              We craft innovative digital solutions that empower businesses to
              thrive in the modern world.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className='bg-[#4338ca] px-8 py-4 rounded-full font-semibold hover:bg-[#4318FF] transition-colors text-base sm:text-lg w-full sm:w-auto'
              >
                GET STARTED
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className='border-2 border-[#4338ca] px-8 py-4 rounded-full font-semibold hover:bg-[#4338ca]/10 transition-colors text-base sm:text-lg w-full sm:w-auto'
              >
                OUR WORK
              </motion.button>
            </div>

            {/* Quote Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className='mt-12 sm:mt-16 text-center lg:text-left'
            >
              <p className='text-gray-400 italic text-sm sm:text-base'>
                "Innovation distinguishes between a leader and a follower"
              </p>
              <p className='text-[#4338ca] mt-2 text-sm sm:text-base'>
                - Steve Jobs
              </p>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image/Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='relative h-[300px] sm:h-[400px] lg:h-[500px] mt-8 lg:mt-0 max-w-2xl mx-auto lg:mx-0 w-full'
          >
            <Image
              src='/hero-image.avif'
              alt='Digital Innovation'
              fill
              className='object-cover rounded-2xl lg:rounded-3xl'
              priority
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw'
            />

            {/* Stats Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className='absolute -bottom-6 sm:-bottom-8 lg:-bottom-10 -left-4 sm:-left-6 lg:-left-10 bg-white text-black p-4 sm:p-6 lg:p-8 rounded-xl lg:rounded-2xl shadow-xl'
            >
              <div className='flex gap-6 sm:gap-8 lg:gap-10'>
                <div>
                  <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold text-[#4338ca]'>
                    95%
                  </h3>
                  <p className='text-xs sm:text-sm text-gray-600'>
                    Client Satisfaction
                  </p>
                </div>
                <div>
                  <h3 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4338ca]'>
                    250+
                  </h3>
                  <p className='text-xs sm:text-sm text-gray-600'>
                    Projects Delivered
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
