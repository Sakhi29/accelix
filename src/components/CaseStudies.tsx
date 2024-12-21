"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const caseStudies = [
  {
    id: 1,
    title: "E-Commerce Platform",
    image: "/case1.png",
    className: "md:col-span-3 md:row-span-1",
  },
  {
    id: 2,
    title: "Mobile App Design",
    image: "/case2.jpg",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    id: 3,
    title: "Music Streaming App",
    image: "/case3.jpg",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    id: 4,
    title: "SaaS Platform",
    image: "/case4.jpg",
    className: "md:col-span-3 md:row-span-1",
  },
];

const CaseStudies = () => {
  return (
    <>
      {/* Heading Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 bg-[#1E1E1E]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-5xl mb-8 sm:mb-12 lg:mb-16 text-white font-['Montserrat'] text-center md:text-left"
        >
          CASE STUDIES
        </motion.h2>
      </section>

      {/* Case Studies Grid */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#4338ca] rounded-3xl"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className={`relative h-[250px] sm:h-[300px] rounded-3xl overflow-hidden cursor-pointer ${study.className}`}
            >
              <Image
                src={study.image}
                alt={study.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60 hover:bg-black/30 transition-all duration-300">
                <h3 className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 text-lg sm:text-2xl lg:text-3xl font-semibold text-white">
                  {study.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default CaseStudies;
