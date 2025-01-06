"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Smile,
  Palette,
  Layers,
  Eye,
} from "lucide-react";
import Image from "next/image";

const uiUxDesignSteps = [
    {
      number: "01",
      title: "Research and Analysis",
      description:
        "We gather insights about your users and business to guide the design process.",
    },
    {
      number: "02",
      title: "Wireframing and Prototyping",
      description:
        "We create wireframes and interactive prototypes to visualize the user experience.",
    },
    {
      number: "03",
      title: "Visual Design",
      description:
        "Our designers craft stunning visuals that reflect your brand identity and resonate with your audience.",
    },
    {
      number: "04",
      title: "User Testing",
      description:
        "We test the designs with real users to ensure usability and effectiveness.",
    },
    {
      number: "05",
      title: "Final Implementation",
      description:
        "We deliver the final design files and collaborate with developers for seamless integration.",
    },
    {
      number: "06",
      title: "Iteration and Improvement",
      description:
        "Based on user feedback, we continuously refine and improve the design.",
    },
  ];
  
  const uiUxDesignBenefits = [
    {
      icon: <Eye className="w-6 h-6 text-[#5046E5]" />, 
      title: "User-Centric Approach",
      description:
        "Deliver designs that prioritize user needs and enhance overall satisfaction.",
    },
    {
      icon: <Layers className="w-6 h-6 text-[#5046E5]" />, 
      title: "Seamless Collaboration",
      description:
        "Our designs align with your development workflow for smooth implementation.",
    },
    {
      icon: <Palette className="w-6 h-6 text-[#5046E5]" />, 
      title: "Creative Excellence",
      description:
        "Stand out with visually stunning and brand-consistent designs.",
    },
    {
      icon: <Smile className="w-6 h-6 text-[#5046E5]" />, 
      title: "Enhanced User Engagement",
      description:
        "Boost user engagement and retention with intuitive and visually appealing interfaces.",
    },
  ];
  
  const uiUxTechnologies = [
    { name: 'Figma', image: '/figma.svg', description: 'For wireframing and prototyping.' },
    { name: 'Adobe XD', image: '/adobe-xd.svg', description: 'For collaboration and design handoff.' },
  ];

const uiuxFaqs = [
    {
        q: "What is your approach to creating a great user experience?",
        a: "We focus on understanding your users’ needs, designing intuitive interfaces, and testing extensively to create experiences that delight and engage.",
    },
    {
        q: "Do you provide design revisions during the process?",
        a: "Yes, our process includes multiple revision rounds to ensure the design aligns perfectly with your vision and goals.",
    },
    {
        q: "Can you design for both web and mobile platforms?",
        a: "Absolutely! Our team specializes in creating responsive designs that work seamlessly across web and mobile platforms.",
    },
    {
        q: "What tools do you use for UI/UX design?",
        a: "We use industry-leading tools like Figma, Adobe XD, and Sketch to create and iterate on our designs.",
    },
];

export default function MobileDevelopment() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeSteps, setActiveSteps] = useState<boolean[]>(
    new Array(uiUxDesignSteps.length).fill(false)
  );
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 100,
  });

  useEffect(() => {
    const unsubscribe = smoothProgress.onChange((v) => {
      const newActiveSteps = uiUxDesignSteps.map(
        (_, index) => v >= index / (uiUxDesignSteps.length - 1)
      );
      setActiveSteps(newActiveSteps);
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 lg:pt-44 px-4 md:px-8 lg:px-12">
        <div className="mx-auto">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-6">
          Turn Designs Into <span className="text-[#5046E5]">Delight</span>{" "} With Stunning Experiences
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-400">
          We design intuitive, visually striking interfaces that not only captivate users but also drive measurable results, ensuring your product stands out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#5046E5] justify-center flex py-3 px-3 items-center text-white hover:bg-[#4038c7]">
              GET STARTED <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-[#5046E5] border-2 py-3 px-3 text-[#5046E5] hover:bg-white hover:text-[#5046E5]">
              VIEW PORTFOLIO
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 md:px-8 lg:px-12 bg-zinc-900/50">
        <div className=" mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {uiUxDesignBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-black p-6 rounded-lg border border-zinc-800 hover:border-[#5046E5] transition-colors"
              >
                <div className="flex items-center mb-4">
                  {benefit.icon}
                  <h3 className="text-xl font-semibold ml-3">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 md:px-8 lg:px-12" ref={timelineRef}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Process
          </h2>
          <div className="grid lg:grid-cols-[1fr,auto,1fr] gap-8 lg:gap-12">
            {/* Heading */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <h3 className="capitalize text-center sm:text-start text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                your website in 6 steps
              </h3>
            </div>

            {/* Timeline */}
            <div className="hidden lg:block relative w-px">
              {/* Timeline track */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-800" />

              {/* Animated progress line */}
              <motion.div
                className="absolute left-0 top-0 w-px bg-[#5046E5] origin-top"
                style={{
                  height: useTransform(smoothProgress, [0, 1], ["0%", "100%"]),
                  scaleY: 1,
                }}
              />

              {/* Timeline dots */}
              {uiUxDesignSteps.map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute left-1/2 -translate-x-1/2"
                  style={{
                    top: `${(index / (uiUxDesignSteps.length - 1)) * 100}%`,
                  }}
                >
                  <motion.div
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      activeSteps[index] ? "bg-[#5046E5]" : "bg-zinc-800"
                    }`}
                  />
                </motion.div>
              ))}
            </div>

            {/* Steps */}
            <div className="space-y-12">
              {uiUxDesignSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.1,
                    },
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`bg-black rounded-lg p-8 md:p-12 transform transition-all duration-300 border border-zinc-800 ${
                    activeSteps[index]
                      ? "scale-105 border-[#5046E5]"
                      : "scale-100"
                  }`}
                >
                  <div className="space-y-4">
                    <span className="text-5xl md:text-6xl font-bold text-[#5046E5]">
                      {step.number}
                    </span>
                    <h4 className="text-2xl md:text-3xl font-bold">
                      {step.title}
                    </h4>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Technologies We Use
          </h2>
          <div className="grid grid-cols-2 gap-8">
            {uiUxTechnologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black p-6 rounded-lg border border-zinc-800 hover:border-[#5046E5] transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 md:w-20 md:h-20 relative transition-transform duration-300 group-hover:scale-110">
                    <Image
                      height={100}
                      width={100}
                      src={tech.image}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{tech.name}</h3>
                  <p className="text-gray-400 text-sm">{tech.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-8 lg:px-12 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-lg">
              Get answers to common questions about our mobile app development process
            </p>
          </motion.div>

          <div className="space-y-4">
            {uiuxFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className={`bg-black p-6 rounded-lg border cursor-pointer transition-all duration-300 ${
                    activeFaq === index
                      ? "border-[#5046E5] shadow-lg shadow-[#5046E5]/10"
                      : "border-zinc-800 hover:border-[#5046E5]/50"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">{faq.q}</h3>
                    <motion.div
                      animate={{ rotate: activeFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#5046E5]"
                    >
                      <ChevronDown size={24} />
                    </motion.div>
                  </div>
                  <motion.div
                    initial={false}
                    animate={{
                      height: activeFaq === index ? "auto" : 0,
                      opacity: activeFaq === index ? 1 : 0,
                      marginTop: activeFaq === index ? 16 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-400">{faq.a}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
