"use client";

import React from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const features = [
  {
    id: 1,
    icon: "🚀",
    title: "Performance First",
    description: "Lightning-fast solutions optimized for speed and efficiency",
  },
  {
    id: 2,
    icon: "🎯",
    title: "Pixel Perfect Design",
    description: "Meticulously crafted interfaces with attention to detail",
  },
  {
    id: 3,
    icon: "💡",
    title: "Smart Solutions",
    description: "Innovative approaches to complex business challenges",
  },
  {
    id: 4,
    icon: "🛡️",
    title: "Secure & Reliable",
    description: "Built with security and stability as top priorities",
  },
];

const Features = () => {
  return (
    <section className="w-full bg-[#1E1E1E] text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-10 sm:mb-12 lg:mb-20">
          <h2
            className={`${montserrat.className} text-2xl sm:text-3xl lg:text-5xl font-bold mb-6 lg:mb-0 text-center lg:text-left`}
          >
            KEY FEATURES
          </h2>

          {/* Quote Section */}
          <div className="text-center lg:text-right">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-gray-400 italic text-sm sm:text-base"
            >
              "Simplicity is the ultimate sophistication"
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#4338ca] mt-2 text-sm sm:text-base"
            >
              - Leonardo da Vinci
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-gray-800 hover:border-[#4338ca] transition-all"
            >
              <span className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4 block">
                {feature.icon}
              </span>
              <h3
                className={`${montserrat.className} text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4`}
              >
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                {feature.description}
              </p>
              <div className="mt-4 sm:mt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-white px-4 sm:px-6 py-2 rounded-full text-[#4338ca] text-sm sm:text-base hover:bg-[#4338ca]/10 transition-all group"
                >
                  <span>Learn More</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12 sm:mt-20"
        >
          <button className="bg-[#4338ca] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-[#4318FF] transition-colors">
            EXPLORE ALL FEATURES
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
