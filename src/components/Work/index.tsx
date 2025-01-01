"use client";

import React, { useState, useEffect } from 'react';
import { WorkItem, ProjectCategory } from '@/types/Our-Work';
import { Montserrat } from "next/font/google";
import MasonryGrid from '@/partials/Common/masonry-grid';
import { motion, AnimatePresence } from 'framer-motion';

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const workItems: WorkItem[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with modern UI and seamless payment integration",
    category: "Web Development",
    image: "/case2.png",
    height: 400,
    link: "https://project-placeholder.com"
  },
  {
    id: 2,
    title: "Banking Mobile App",
    description: "Secure and user-friendly mobile banking application",
    category: "Mobile Development",
    image: "/case1.png",
    height: 300,
    link: "https://project-placeholder.com"
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "Comprehensive analytics dashboard for social media management",
    category: "Web Development",
    image: "/case5.jpg",
    height: 350,
    link: "https://project-placeholder.com"
  },
  {
    id: 4,
    title: "Travel App Design",
    description: "Modern UI/UX design for a travel booking application",
    category: "UI-UX Designing",
    image: "/case2.webp",
    height: 450,
    link: "https://project-placeholder.com"
  },
  {
    id: 5,
    title: "Healthcare Portal",
    description: "Patient management system with intuitive interface",
    category: "Web Development",
    image: "/case4.jpg",
    height: 380,
    link: "https://project-placeholder.com"
  },
  {
    id: 6,
    title: "Fitness Tracking App",
    description: "Mobile application for tracking workouts and nutrition",
    category: "Mobile Development",
    image: "/case1.png",
    height: 320,
    link: "https://project-placeholder.com"
  },
  {
    id: 7,
    title: "Restaurant Website",
    description: "Modern website design with online ordering system",
    category: "Web Development",
    image: "/case2.png",
    height: 360,
    link: "https://project-placeholder.com"
  },
  {
    id: 8,
    title: "Educational Platform UI",
    description: "User interface design for an online learning platform",
    category: "UI-UX Designing",
    image: "/case5.jpg",
    height: 420,
    link: "https://project-placeholder.com"
  },
  {
    id: 9,
    title: "Weather App Design",
    description: "Clean and intuitive weather application interface",
    category: "UI-UX Designing",
    image: "/case4.jpg",
    height: 340,
    link: "https://project-placeholder.com"
  }
];

const categories: ProjectCategory[] = ['All', 'Mobile Development', 'Web Development', 'UI-UX Designing'];

const OurWork = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [filteredItems, setFilteredItems] = useState<WorkItem[]>(workItems);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredItems(workItems);
    } else {
      setFilteredItems(workItems.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <motion.main 
      className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.h1 
            className={`${montserrat.className} text-4xl md:text-5xl font-bold text-black mb-4 mt-3`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Our Projects
          </motion.h1>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Explore our portfolio of innovative solutions across web, mobile, and design projects
          </motion.p>
        </motion.div>

        {/* Category Filter - Mobile View (Select Menu) */}
        <motion.div 
          className="md:hidden mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as ProjectCategory)}
            className="w-full p-3 rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4318FF] border-none"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </motion.div>

        {/* Category Filter - Desktop View (Buttons) */}
        <motion.div 
          className="hidden md:flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#4318FF] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.6 + (index * 0.1),
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <MasonryGrid 
              items={filteredItems}
              columns={{ default: 3, tablet: 2, mobile: 1 }}
              gap={6}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.main>
  );
};

export default OurWork;