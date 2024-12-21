'use client';

import { Montserrat} from 'next/font/google';
import { motion } from 'framer-motion';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const services = [
  {
    title: 'Website Development',
    description: 'Creating responsive, modern websites that drive results',
    link: '/services/web'
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile solutions',
    link: '/services/mobile'
  },
  {
    title: 'Cloud Services',
    description: 'Scalable cloud solutions for your business',
    link: '/services/cloud'
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design that converts',
    link: '/services/design'
  }
];

const Services = () => {
  return (
    <section className="py-20 text-white relative overflow-hidden">
      {/* Background Effects */}
      {/* <div className="absolute -top-48 -left-64 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-20 blur-3xl -z-50"></div>
      <div className="absolute -bottom-44 -right-44 w-[600px] h-[600px] bg-white rounded-full opacity-10 blur-[200px] -z-10"></div> */}

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-20">
          <h2 className={`${montserrat.className} text-5xl font-bold `}>OUR SERVICES</h2>
          <p className="text-gray-400 text-right">
            "We are what we repeatedly do."
            <span className="block text-[#4318FF]">-Aristotle</span>
          </p>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border-b border-gray-800 pb-8 relative flex justify-between items-center"
            >
              <div>
                <h3 className={`${montserrat.className} text-4xl text-gray-200 group-hover:text-white transition-colors duration-300`}>
                  {service.title}
                </h3>
                <p className="text-gray-400 mt-2">{service.description}</p>
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
