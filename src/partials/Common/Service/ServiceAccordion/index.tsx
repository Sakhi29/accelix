"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

interface FAQ {
  q: string;
  a: string;
}

interface ServiceAccordionProps {
  faqs: FAQ[];
  title: string;
}

const ServiceAccordion = ({ faqs, title }: ServiceAccordionProps) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <section className="py-32 px-4 md:px-8 lg:px-12 relative">
      <div className="absolute inset-0 bg-[#5046E5]/5"></div>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          {title.split(" ").map((word, i, arr) => (
            <span key={i}>
              {i === arr.length - 1 ? (
                <span className="text-[#5046E5]">
                  {word}{" "}
                </span>
              ) : (
                word + " "
              )}
            </span>
          ))}
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                className="w-full bg-black p-6 rounded-xl border border-white/10 hover:border-[#5046E5] transition-all duration-300 flex items-center justify-between"
              >
                <h3 className="text-xl font-semibold text-left">{faq.q}</h3>
                <motion.div
                  animate={{ rotate: activeFaq === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#5046E5]"
                >
                  <ArrowLeft className="w-5 h-5 transform -rotate-90" />
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: activeFaq === index ? "auto" : 0,
                  opacity: activeFaq === index ? 1 : 0,
                  marginTop: activeFaq === index ? 16 : 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut"
                }}
                className="overflow-hidden bg-white/5 rounded-xl"
              >
                <div className="p-6 text-gray-400">
                  {faq.a}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServiceAccordion;
