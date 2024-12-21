"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    image: "/person1.avif",
    content:
      "Website design did exactly what you said it does. Just what I was looking for. Nice work on your website design.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Tech Entrepreneur",
    image: "/person2.avif",
    content:
      "Website design did exactly what you said it does. Just what I was looking for. Nice work on your website design.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Williams",
    role: "Product Manager",
    image: "/person3.avif",
    content:
      "Website design did exactly what you said it does. Just what I was looking for. Nice work on your website design.",
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <span key={i} className="text-blue-600 text-lg sm:text-xl">
          ★
        </span>
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="w-full bg-[#1E1E1E] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full mx-auto max-w-7xl">
        {/* Quote Section */}
        <div className="text-center md:text-right mb-12 sm:mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gray-400 italic mb-2 text-sm sm:text-base"
          >
            "Quality is never an accident; it is always the result of
            intelligent effort"
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-blue-600 text-base sm:text-lg"
          >
            - John Ruskin
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12 sm:mb-16 md:mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#F6F6F6] rounded-3xl p-6 sm:p-8 relative"
            >
              <div className="flex items-center gap-4 mb-4 sm:mb-6">
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <StarRating rating={testimonial.rating} />
              </div>
              <p className="text-sm sm:text-base mb-4 sm:mb-6 text-gray-800">
                {testimonial.content}
              </p>
              <div>
                <h4 className="font-semibold text-gray-900 text-base sm:text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  {testimonial.role}
                </p>
                <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8">
                  <span className="text-[#4338ca] bg-[#4338ca]/10 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    Testimonial
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors border-2 border-blue-600 text-sm sm:text-base"
          >
            BOOK A CALL
          </motion.button>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-gray-400 italic text-sm"
          >
            Join our client family
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
