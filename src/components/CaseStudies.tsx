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
      <section className="w-full md:px-8 bg-[#1E1E1E]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-5xl mb-16 text-white font-['Montserrat']"
        >
          CASE STUDIES
        </motion.h2>
      </section>

      <motion.section 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full py-20 px-4 md:px-8 bg-[#4338ca] rounded-3xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className={`relative h-[300px] rounded-3xl overflow-hidden cursor-pointer ${study.className}`}
            >
              <Image
                src={study.image}
                alt={study.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60 hover:bg-black/30 transition-all duration-300">
                <h3 className="absolute bottom-8 left-8 text-3xl font-semibold text-white">
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
