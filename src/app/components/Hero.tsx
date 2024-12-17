'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-[#1E1E1E] text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#4338ca] rounded-full opacity-20 blur-[100px]" />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={`${montserrat.className} text-5xl md:text-7xl font-bold leading-tight mb-8`}>
              Transform Your
              <span className="text-[#4338ca]"> Digital</span>
              <br />Presence
            </h1>
            
            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              We craft innovative digital solutions that empower businesses to thrive in the modern world
            </p>

            <div className="flex gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-[#4338ca] px-8 py-4 rounded-full font-semibold hover:bg-[#4318FF] transition-colors"
              >
                GET STARTED
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border-2 border-[#4338ca] px-8 py-4 rounded-full font-semibold hover:bg-[#4338ca]/10 transition-colors"
              >
                OUR WORK
              </motion.button>
            </div>

            {/* Quote Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-16"
            >
              <p className="text-gray-400 italic">
                "Innovation distinguishes between a leader and a follower"
              </p>
              <p className="text-[#4338ca] mt-2">- Steve Jobs</p>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image/Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px]"
          >
            <Image
              src="/hero-image.avif"
              alt="Digital Innovation"
              fill
              className="object-cover rounded-3xl"
              priority
            />
            
            {/* Stats Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-10 -left-10 bg-white text-black p-6 rounded-2xl shadow-xl"
            >
              <div className="flex gap-8">
                <div>
                  <h3 className="text-3xl font-bold text-[#4338ca]">95%</h3>
                  <p className="text-sm text-gray-600">Client Satisfaction</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#4338ca]">250+</h3>
                  <p className="text-sm text-gray-600">Projects Delivered</p>
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
