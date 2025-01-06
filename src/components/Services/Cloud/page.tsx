"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Cloud,
  Lock,
  Server,
  RefreshCcw,
} from "lucide-react";
import Image from "next/image";

const cloudBenefits = [
    {
      icon: <Cloud className="w-6 h-6 text-[#5046E5]" />,
      title: "Scalable and Flexible",
      description:
        "Scale your operations seamlessly as your business grows, adapting to ever-changing demands with ease.",
    },
    {
      icon: <Lock className="w-6 h-6 text-[#5046E5]" />,
      title: "Unparalleled Security",
      description:
        "Your data is protected with advanced encryption, regular audits, and the latest compliance standards.",
    },
    {
      icon: <RefreshCcw className="w-6 h-6 text-[#5046E5]" />,
      title: "Streamlined Operations",
      description:
        "Boost efficiency and reduce costs with automated, cloud-based workflows and integrations.",
    },
    {
      icon: <Server className="w-6 h-6 text-[#5046E5]" />,
      title: "Reliable Infrastructure",
      description:
        "Ensure uninterrupted operations with a resilient, fault-tolerant cloud setup.",
    },
  ];
  

const cloudFaqs = [
    {
        q: "How do you ensure data security in the cloud?",
        a: "We use industry-standard encryption, access controls, and regular audits to keep your data secure and compliant with regulations.",
      },
      {
        q: "Can you help with migrating our existing systems to the cloud?",
        a: "Yes, we specialize in seamless cloud migrations, ensuring minimal disruption to your operations during the process.",
      },
      {
        q: "What cloud platforms do you support?",
        a: "We work with leading cloud platforms like AWS, Microsoft Azure, and Google Cloud, tailoring solutions to your needs.",
      },
      {
        q: "Do you offer ongoing cloud management services?",
        a: "Yes, we provide comprehensive management services, including monitoring, scaling, and optimizing your cloud infrastructure.",
      },
    
];

const cloudTechnologies = [
    { name: 'AWS', image: '/aws.svg', description: 'Comprehensive cloud computing services.' },
    { name: 'Microsoft Azure', image: '/azure.svg', description: 'Cloud services for building, managing, and deploying applications.' },
    { name: 'Google Cloud', image: '/google-cloud.svg', description: 'Scalable cloud computing solutions.' },
]
const cloudServicesSteps = [
    {
      number: "01",
      title: "Assessment and Strategy",
      description:
        "We evaluate your business requirements and design a cloud strategy tailored to your goals.",
    },
    {
      number: "02",
      title: "Architecture Design",
      description:
        "Our team develops a scalable and secure cloud architecture to meet your needs.",
    },
    {
      number: "03",
      title: "Migration and Integration",
      description:
        "We seamlessly migrate your applications and data to the cloud while ensuring minimal disruption.",
    },
    {
      number: "04",
      title: "Optimization and Scaling",
      description:
        "We optimize performance and scalability to ensure your cloud solutions are cost-effective and efficient.",
    },
    {
      number: "05",
      title: "Monitoring and Management",
      description:
        "Our services include proactive monitoring and management to maintain uptime and performance.",
    },
    {
      number: "06",
      title: "Continuous Improvement",
      description:
        "We continuously improve your cloud infrastructure to keep up with your business growth and technological advancements.",
    },
  ];
  

export default function CloudPage() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeSteps, setActiveSteps] = useState<boolean[]>(
    new Array(cloudServicesSteps.length).fill(false)
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
      const newActiveSteps = cloudServicesSteps.map(
        (_, index) => v >= index / (cloudServicesSteps.length - 1)
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
          Turn Vision Into <span className="text-[#5046E5]">Reality</span>{" "} With Scalable Cloud Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-400">
          We offer a range of cloud services to help businesses of all sizes achieve their goals. From hosting and database management to DevOps and infrastructure, we have the expertise and experience to help you succeed.
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
            {cloudBenefits.map((benefit, index) => (
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
              {cloudServicesSteps.map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute left-1/2 -translate-x-1/2"
                  style={{
                    top: `${(index / (cloudServicesSteps.length - 1)) * 100}%`,
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
              {cloudServicesSteps.map((step, index) => (
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {cloudTechnologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black p-8 rounded-lg border border-zinc-800 hover:border-[#5046E5] transition-all duration-300 group aspect-square flex flex-col items-center justify-center"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-20 h-20 relative transition-transform duration-300 group-hover:scale-110">
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
            {cloudFaqs.map((faq, index) => (
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
