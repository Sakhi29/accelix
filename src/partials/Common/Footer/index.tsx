"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Kdam_Thmor_Pro } from "next/font/google";

const kdamThmorPro = Kdam_Thmor_Pro({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const Footer = () => {
  return (
    <footer className="w-full bg-white text-black relative">
      {/* Contact Us Background Section */}
      <div className="absolute top-0 left-0 w-full h-[120px] md:h-[250px] bg-[#1E1E1E] overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full text-center text-[50px] md:text-[110px] lg:text-[220px] font-bold text-[#4338ca] leading-[0.9] md:mt-[120px]"
        >
          CONTACT US
        </motion.h2>
      </div>

      {/* Main Content */}
      <div className="w-full mx-auto px-4 md:px-8 pt-[220px] pb-10 relative">
        {/* Quote Section */}
        <div className="w-full text-right mt-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg italic"
          >
            "The best way to predict the future is to create it"
            <br />
            <span className="text-[#4338ca]">- Peter Drucker</span>
          </motion.p>
        </div>

        {/* Call to Action Button */}
        <div className="mt-12 mb-32">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#4338ca] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-[#3730a3] transition-colors"
          >
            BOOK FREE CALL
          </motion.button>
        </div>

        {/* Footer Bottom */}
        <div className="flex justify-between items-center border-t border-gray-200 pt-8">
          <div
            className={`text-2xl font-bold tracking-tighter ${kdamThmorPro.className}`}
          >
            ACCELIX
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-black rounded-full p-2 hover:bg-[#4338ca] transition-colors"
            >
              <Image
                src="/twitter.svg"
                alt="Twitter"
                width={20}
                height={20}
                className="invert"
              />
            </a>
            <a
              href="#"
              className="bg-black rounded-full p-2 hover:bg-[#4338ca] transition-colors"
            >
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                width={20}
                height={20}
                className="invert"
              />
            </a>
            <a
              href="#"
              className="bg-black rounded-full p-2 hover:bg-[#4338ca] transition-colors"
            >
              <Image
                src="/email.svg"
                alt="Email"
                width={20}
                height={20}
                className="invert"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
