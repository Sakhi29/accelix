"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { CaseStudy } from "@/types/CaseStudies";
import Carousel from "@/partials/Common/Carousel";
import { CarouselRef } from "@/types/Partials";

const caseStudies: CaseStudy[] = [
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
  const carouselRef = React.useRef<CarouselRef>(null);
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="w-full mx-auto px-4">
        <div className="relative h-[80vh] flex items-center">
          {/* Navigation Button */}
          <Carousel ref={carouselRef} containerClassName="gap-3">
            {[...caseStudies, caseStudies[0]].map(
              (
                study,
                index // Added first slide at end for smoother loop
              ) => (
                <div
                  key={`${study.id}-${index}`}
                  className="relative " // Reduced slide width and added padding-left
                >
                  <div className="relative">
                    <div className="relative aspect-square shadow-lg overflow-hidden  md:aspect-[400/400] md:w-[400px]">
                      <Image
                        src={study.image}
                        alt={study.title}
                        width={400}
                        height={500}
                        className="w-full h-full object-cover rounded-lg bg-gray-200"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
                      <h3 className="text-white uppercase font-medium text-xl sm:text-2xl mb-2">
                        {study.title}
                      </h3>
                      <p className="text-white/90 text-sm sm:text-base">
                        {study.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
          </Carousel>
          <button
            onClick={() => carouselRef.current?.scrollNext()}
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full absolute right-8 top-1/2 -translate-y-1/2 bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" color="black" />
          </button>

          {/* Background Text (Hidden on Mobile) */}
          <div className="hidden sm:block absolute -bottom-48 w-full h-[250px] md:overflow-hidden">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full text-center text-[100px] md:text-[100px] lg:text-[220px] font-bold text-black opacity-10 leading-[0.9] mt-[50px]"
            >
              CASE STUDY
            </motion.h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
