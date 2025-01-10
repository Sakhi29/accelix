"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

interface Step {
  number: string;
  title: string;
  description: string;
}

interface ServiceProcessProps {
  title: string;
  subtitle: string;
  description: string;
  leftHeading: {
    line1: string;
    highlight: string;
    line2: string;
  };
  steps: Step[];
}

const ServiceProcess = ({ title, subtitle, description, leftHeading, steps }: ServiceProcessProps) => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeSteps, setActiveSteps] = useState<boolean[]>(
    new Array(steps.length).fill(false)
  );

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  useEffect(() => {
    const updateActiveSteps = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setActiveSteps((prev) => {
              const newSteps = [...prev];
              newSteps[index] = entry.isIntersecting;
              return newSteps;
            });
          });
        },
        {
          threshold: 0.5,
          rootMargin: "-10% 0px -10% 0px",
        }
      );

      const stepElements = document.querySelectorAll("[data-index]");
      stepElements.forEach((element) => observer.observe(element));

      return () => {
        stepElements.forEach((element) => observer.unobserve(element));
      };
    };

    updateActiveSteps();
  }, []);

  // Update active steps based on scroll position as well
  scrollYProgress.on("change", (latest) => {
    const newActiveSteps = steps.map((_, index) => {
      const stepProgress = (index + 1) / steps.length;
      return latest >= stepProgress - 0.2;
    });
    setActiveSteps(newActiveSteps);
  });

  return (
    <section className="py-16 md:py-32 px-4 md:px-8 lg:px-12 relative" ref={timelineRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#5046E5]/5 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            {title}{" "}
            <span className="bg-gradient-to-r from-[#5046E5] to-[#5046E5] text-transparent bg-clip-text">
              {subtitle}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            {description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr,auto,1fr] gap-8 lg:gap-12">
          {/* Left side heading */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-start text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-12 lg:mb-0"
            >
              {leftHeading.line1} <br />
              <span className="bg-gradient-to-r from-[#5046E5] to-[#5046E5] text-transparent bg-clip-text">
                {leftHeading.highlight}
              </span>
              <br /> {leftHeading.line2}
            </motion.h3>
          </div>

          {/* Timeline - Hidden on mobile, shown on lg screens */}
          <div className="hidden lg:block relative w-px h-full">
            {/* Timeline track */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-800 to-transparent opacity-50" />

            {/* Animated progress line */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#5046E5] to-[#5046E5] origin-top"
              style={{
                transformOrigin: "top",
                scaleY: scrollYProgress,
                height: "100%"
              }}
            />

            {/* Timeline dots */}
            {steps.map((_, index) => (
              <motion.div
                key={index}
                className="absolute left-1/2 -translate-x-1/2"
                style={{
                  top: `${(index / (steps.length - 1)) * 100}%`,
                }}
              >
                <motion.div
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    activeSteps[index] 
                      ? "bg-gradient-to-r from-[#5046E5] to-[#5046E5] shadow-lg shadow-[#5046E5]/50" 
                      : "bg-zinc-800"
                  }`}
                  style={{
                    scale: activeSteps[index] ? 1 : 0.8,
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Steps */}
          <div className="space-y-8 md:space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                data-index={index}
                initial={{ opacity: 0, y: 20 }}
                animate={activeSteps[index] ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className={`relative ${
                  activeSteps[index] ? "opacity-100" : "opacity-50"
                }`}
              >
                <div className="group bg-black p-6 md:p-8 rounded-2xl border border-white/10 hover:border-[#5046E5] transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-0 mb-4">
                    <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#5046E5] to-[#5046E5] text-transparent bg-clip-text">
                      {step.number}
                    </span>
                    <div className="hidden md:block w-12 h-[1px] bg-gradient-to-r from-[#5046E5] to-[#5046E5] mx-4 group-hover:from-[#5046E5] group-hover:to-[#5046E5] transition-all duration-300" />
                    <h3 className="text-xl md:text-2xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-base md:text-lg text-gray-400 md:pl-24">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
