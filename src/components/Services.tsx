"use client";

import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const services = [
  {
    title: "Website Development",
    description: "Creating responsive, modern websites that drive results",
    link: "/services/web",
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile solutions",
    link: "/services/mobile",
  },
  {
    title: "Cloud Services",
    description: "Scalable cloud solutions for your business",
    link: "/services/cloud",
  },
  {
    title: "UI/UX Design",
    description: "User-centered design that converts",
    link: "/services/design",
  },
  {
    title: "SEO Optimization",
    description:
      "Boost your online visibility and drive organic traffic with tailored SEO strategies.",
    link: "/services/seo",
  },
];

const Services = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 md:mb-20 space-y-6 md:space-y-0">
          <h2
            className={`${montserrat.className} text-3xl sm:text-4xl lg:text-5xl font-bold text-center md:text-left`}
          >
            OUR SERVICES
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg text-center md:text-right">
            "We are what we repeatedly do."
            <span className="block text-[#4318FF] mt-1">- Aristotle</span>
          </p>
        </div>

        {/* Services Section */}
        <div className="space-y-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex items-center justify-between border-b border-gray-800 pb-8 space-x-4"
            >
              <div className="flex-1">
                <h3
                  className={`${montserrat.className} text-2xl sm:text-3xl lg:text-4xl text-gray-200 group-hover:text-white transition-colors duration-300`}
                >
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base lg:text-lg mt-2">
                  {service.description}
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center group-hover:border-[#4318FF] transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6 text-gray-400 group-hover:text-[#4318FF] transition-colors duration-300 transform group-hover:translate-x-1"
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
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
