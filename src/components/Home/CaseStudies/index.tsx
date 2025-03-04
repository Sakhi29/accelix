"use client";
import React, { useEffect } from "react";
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
    image: "/case2.png",
    description: "This is a description of the E-Commerce Platform",
    className: "md:col-span-3 md:row-span-1",
  },
  {
    id: 2,
    title: "Mobile App Design",
    image: "/case1.png",
    description: "This is a description of the Mobile App Design",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    id: 3,
    title: "Music Streaming App",
    image: "/case5.jpg",
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

  const handleSlideChange = (index: number) => {
    // Custom scale effect logic
    const slides = document.querySelectorAll(".carousel-slide");
    slides.forEach((slide, i) => {
      const element = slide as HTMLElement;
      const scale = i === index ? 1 : 0.8;
      element.style.transform = `scale(${scale})`;
      element.style.opacity = i === index ? "1" : "0.5";
    });
  };

  useEffect(() => {
    // Apply the scaling effect on the first render
    handleSlideChange(0);
  }, []);

  return (
    <div className="w-full bg-white overflow-hidden">
      <div className="w-full mx-auto px-4">
        <div className="relative pt-8 pb-[50px] md:pt-20 md:pb-[100px] lg:pb-[150px] flex items-center">
          <Carousel
            ref={carouselRef}
            containerClassName="gap-3"
            slideClassName="flex-none w-full md:w-1/2 px-2"
            align="center"
            loop
            dragFree
            containScroll="trimSnaps"
            onSlideChange={handleSlideChange}
          >
            {caseStudies.map((study, index) => (
              <div
                key={`${study.id}-${index}`}
                className="carousel-slide relative"
              >
                <div className="relative aspect-square shadow-lg overflow-hidden w-full max-h-[500px] xxl:max-h-[600px] ">
                  <Image
                    src={study.image}
                    alt={study.title}
                    width={1280}
                    height={800}
                    className="w-full h-full object-cover rounded-lg bg-gray-200"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
                  <h3 className="text-white uppercase font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl mb-1 sm:mb-2">
                    {study.title}
                  </h3>
                  <p className="text-white/90 text-xs sm:text-sm md:text-base lg:text-lg">
                    {study.description}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
          <button
            onClick={() => carouselRef.current?.scrollNext()}
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full absolute right-8 top-1/2 -translate-y-1/2 bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" color="black" />
          </button>

          {/* Background Text (Hidden on Mobile) */}
          <div className="sm:block absolute -bottom-40 md:-bottom-32 lg:-bottom-24 xl:-bottom-16 w-full h-[250px] md:overflow-hidden">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full text-center text-[40px] md:text-[100px] lg:text-[150px] xl:text-[210px] font-bold text-black opacity-10 leading-[0.9] mt-[50px]"
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
