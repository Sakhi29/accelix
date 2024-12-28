"use client";

import { motion } from "framer-motion";
import { useEffect, useState, FC } from "react";
import { Montserrat } from "next/font/google";

const montserratText = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Loader: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Prevent scrolling while loader is active
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }, 3500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" as const, delay: 2.7 }}
      onAnimationComplete={() => setIsLoading(false)}
      className='fixed inset-0 w-full h-full z-[99999] flex items-center justify-center bg-[#1E1E1E]'
      style={{
        position: "fixed" as const,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <motion.div className='flex flex-col items-center justify-center w-full max-w-[90vw] px-4'>
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0, 1, 1, 0] as const,
            scale: [0.8, 1, 1, 0.95] as const,
          }}
          transition={{
            duration: 2.5,
            times: [0, 0.2, 0.8, 1] as const,
          }}
          style={{
            fontSize: "clamp(0.5rem, 4vw, 3rem)",
            letterSpacing: "0.1em",
          }}
          className={`font-bold text-white uppercase text-center whitespace-nowrap ${montserratText.className}`}
        >
          ACCELIX
        </motion.h1>
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.5, ease: "easeInOut" as const }}
          className='h-1 bg-white/20 mt-12 w-96 max-w-full'
        />
      </motion.div>
    </motion.div>
  );
};

export default Loader;
