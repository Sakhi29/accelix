"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "E-Commerce Platform",
    image: "/case1.png",
    description: "This is a description of the E-Commerce Platform",
    className: "md:col-span-3 md:row-span-1",
  },
  {
    id: 2,
    title: "Mobile App Design",
    image: "/case2.jpg",
    description: "This is a description of the Mobile App Design",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    id: 3,
    title: "Music Streaming App",
    image: "/case3.jpg",
    description: "This is a description of the Music Streaming App",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    id: 4,
    title: "SaaS Platform",
    image: "/case4.jpg",
    description: "This is a description of the SaaS Platform",
    className: "md:col-span-3 md:row-span-1",
  },
];

const CaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const nextIndex = (activeIndex + 1) % caseStudies.length;

  const nextCase = () => {
    setDirection(1);
    setActiveIndex(nextIndex);
  };

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="w-full mx-auto px-4">
        <div className="relative h-[80vh] flex items-center">
          <div className="w-full flex gap-4 relative">
            <AnimatePresence mode="popLayout" initial={false}>
              {/* Left Case Study */}
              <motion.div
                key={activeIndex}
                className="w-3/5"
                initial={{ 
                  x: direction > 0 ? 1000 : -1000,
                  scale: 0.8,
                  opacity: 0,
                  zIndex: 1 
                }}
                animate={{ 
                  x: 0,
                  scale: 1,
                  opacity: 1,
                  zIndex: 2,
                  transition: {
                    duration: 0.7,
                    ease: "easeOut"
                  }
                }}
                exit={{ 
                  x: direction > 0 ? -1000 : 1000,
                  scale: 0.8,
                  opacity: 0,
                  zIndex: 1,
                  transition: {
                    duration: 0.7,
                    ease: "easeIn"
                  }
                }}
              >
                <div className="relative h-[60vh]">
                  <img
                    src={caseStudies[activeIndex].image}
                    alt={caseStudies[activeIndex].title}
                    className="w-full h-full object-cover bg-gray-200"
                  />
                  <div className="mt-4 flex justify-between items-center text-sm">
                    <span className="uppercase font-medium">
                      {caseStudies[activeIndex].title}
                    </span>
                    <br />
                    <span>{caseStudies[activeIndex].description}</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Case Study (Next) */}
              <motion.div
                key={`next-${nextIndex}`}
                className="w-2/5"
                initial={{ 
                  x: 100,
                  scale: 0.7,
                  opacity: 0.5,
                  zIndex: 0 
                }}
                animate={{ 
                  x: 0,
                  scale: 0.8,
                  opacity: 0.7,
                  zIndex: 1,
                  transition: {
                    duration: 0.5
                  }
                }}
                whileHover={{ 
                  scale: 0.85,
                  opacity: 0.9,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="relative h-[40vh]">
                  <img
                    src={caseStudies[nextIndex].image}
                    alt={caseStudies[nextIndex].title}
                    className="w-full h-full object-cover bg-gray-200"
                  />
                  <div className="mt-4 flex justify-between items-center text-sm">
                    <span className="uppercase font-medium">
                      {caseStudies[nextIndex].title}
                    </span>
                    <br />
                    <span>{caseStudies[nextIndex].description}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Centered Navigation Button */}
            <button
              onClick={nextCase}
              className="w-20 h-20 rounded-full absolute left-[59%] top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white text-white flex items-center justify-center hover:bg-gray-800 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" color="black" />
            </button>

            {/* Case Counter */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
              <p className="text-sm text-gray-500">
                {activeIndex + 1}/{caseStudies.length}
              </p>
            </div>

            <div className="absolute -bottom-48 w-full h-[250px] overflow-visible">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full text-center text-[50px] md:text-[100px] lg:text-[220px] font-bold text-[black] opacity-50 leading-[0.9] mt-[120px]"
              >
                CASESTUDY
              </motion.h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
