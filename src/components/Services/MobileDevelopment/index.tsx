"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  Smartphone,
  Clock,
  Shield,
  HeadphonesIcon,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";

const mobileDevelopmentTechnologies = [
  {
    name: "Flutter",
    image: "/flutter.svg",
    description: "Google's UI toolkit for building natively compiled applications",
  },
  {
    name: "React Native",
    image: "/react-native.svg",
    description: "Facebook's framework for building native apps using React",
  },
  {
    name: "Kotlin",
    image: "/kotlin.svg",
    description: "Modern programming language for Android development",
  },
  {
    name: "Swift",
    image: "/swift.svg",
    description: "Apple's powerful language for iOS development",
  },
]

const mobileDevelopmentSteps = [
  {
    number: "01",
    title: "Discovery and Planning",
    description:
      "We analyze your target audience, app objectives, and business needs to plan a comprehensive development strategy.",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "Our designers craft intuitive and visually appealing mobile interfaces to provide the best user experience.",
  },
  {
    number: "03",
    title: "Development and Integration",
    description:
      "Our skilled developers build robust mobile applications, seamlessly integrating backend services and APIs.",
  },
  {
    number: "04",
    title: "Testing and Refinement",
    description:
      "Comprehensive testing ensures your app performs flawlessly across devices and platforms.",
  },
  {
    number: "05",
    title: "Deployment",
    description:
      "We handle app store submission and ensure your app meets all platform requirements for a smooth launch.",
  },
  {
    number: "06",
    title: "Maintenance and Updates",
    description:
      "We provide ongoing updates and support to keep your app relevant, secure, and performing optimally.",
  },
];

const mobileDevelopmentBenefits = [
  {
    icon: <Smartphone className="w-6 h-6 text-[#5046E5]" />,
    title: "Cross-Platform Expertise",
    description:
      "Reach a broader audience with apps tailored for both iOS and Android platforms.",
  },
  {
    icon: <Clock className="w-6 h-6 text-[#5046E5]" />,
    title: "Faster Time to Market",
    description:
      "Accelerate your app launch with our streamlined development processes.",
  },
  {
    icon: <Shield className="w-6 h-6 text-[#5046E5]" />,
    title: "Secure and Scalable",
    description:
      "Our apps are built to handle growth while ensuring top-tier security for user data.",
  },
  {
    icon: <HeadphonesIcon className="w-6 h-6 text-[#5046E5]" />,
    title: "Comprehensive Support",
    description:
      "Our team provides continuous support and improvements for long-term success.",
  },
];

const mobileDevelopmentFaqs = [
  {
    q: "How do you ensure my mobile app meets user expectations?",
    a: "We conduct in-depth user research, create detailed prototypes, and continuously test throughout development to ensure a seamless and engaging user experience.",
  },
  {
    q: "What platforms do you develop mobile apps for?",
    a: "We develop apps for iOS and Android using native and cross-platform technologies like React Native and Flutter, depending on your needs.",
  },
  {
    q: "Will you assist with app store submission?",
    a: "Absolutely! We handle the entire app store submission process, including optimizing descriptions, creating visuals, and ensuring compliance with platform guidelines.",
  },
  {
    q: "Can you integrate third-party APIs or services into the app?",
    a: "Yes, we can integrate a variety of third-party APIs and services, including payment gateways, analytics tools, and social media platforms.",
  },
];

export default function MobileDevelopment() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeSteps, setActiveSteps] = useState<boolean[]>(
    new Array(mobileDevelopmentSteps.length).fill(false)
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
      const newActiveSteps = mobileDevelopmentSteps.map(
        (_, index) => v >= index / (mobileDevelopmentSteps.length - 1)
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
          Turn Ideas Into <span className="text-[#5046E5]">Apps</span>{" "} That Drive Growth
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-400">
          We craft feature-rich, user-friendly mobile apps that help businesses connect with customers, boost engagement, and scale effortlessly in the mobile-first era.
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
            {mobileDevelopmentBenefits.map((benefit, index) => (
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
              {mobileDevelopmentSteps.map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute left-1/2 -translate-x-1/2"
                  style={{
                    top: `${(index / (mobileDevelopmentSteps.length - 1)) * 100}%`,
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
              {mobileDevelopmentSteps.map((step, index) => (
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
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Technologies We Use
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {mobileDevelopmentTechnologies.map((tech, index) => (
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
            {mobileDevelopmentFaqs.map((faq, index) => (
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
