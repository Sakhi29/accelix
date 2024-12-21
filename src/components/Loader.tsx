"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3500); // Increased to 3.5 seconds
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "100%" }}
      transition={{ duration: 1.2, ease: "easeInOut", delay: 3.5 }} // Increased duration and added delay
      onAnimationComplete={() => setIsLoading(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 1, 1, 0],
        }}
        transition={{ 
          duration: 3.5,
          times: [0, 0.2, 0.8, 1],  // Controls timing of each opacity value
        }}
        className="text-4xl font-bold text-white"
      >
        ACCELIX
      </motion.h1>
    </motion.div>
  );
};

export default Loader;
