"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { flushSync } from "react-dom";
import Image from "next/image";

interface CaseStudy {
  id: number;
  title: string;
  image: string;
  description: string;
  className: string;
}

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

const TWEEN_FACTOR = 1.2;

const CaseStudies = () => {
  const [tweenValues, setTweenValues] = useState<number[]>([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
    duration: 30, // Faster transition
    startIndex: 1, // Start from the second slide to ensure smooth looping
    align: "center",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }

      const scale = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      return scale;
    });
    setTweenValues(styles);
  }, [emblaApi, setTweenValues]);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll();
    emblaApi.on("scroll", () => {
      flushSync(() => onScroll());
    });
    emblaApi.on("reInit", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="w-full mx-auto px-4">
        <div className="relative h-[80vh] flex items-center">
          <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex -ml-4">
              {" "}
              {/* Negative margin to offset first slide gap */}
              {[...caseStudies, caseStudies[0]].map(
                (
                  study,
                  index // Added first slide at end for smoother loop
                ) => (
                  <div
                    key={`${study.id}-${index}`}
                    className="relative flex-[0_0_80%] sm:flex-[0_0_50%] pl-4" // Reduced slide width and added padding-left
                    style={{
                      ...(tweenValues.length && {
                        transform: `scale(${tweenValues[index]})`,
                        opacity: tweenValues[index],
                        transition: "transform 0.3s ease-out",
                      }),
                    }}
                  >
                    <div className="relative h-[60vh]">
                      <Image
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover bg-gray-200 rounded-lg shadow-lg"
                      />
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
            </div>
          </div>

          {/* Navigation Button */}
          <button
            onClick={scrollNext}
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
