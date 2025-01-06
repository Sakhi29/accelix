"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  Search,
  TrendingUp,
  Heart,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";

const seoBenefits = [
  {
    icon: <Search className="w-6 h-6 text-[#5046E5]" />,
    title: "Boost Visibility",
    description:
      "Dominate search results and attract your ideal customers organically.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-[#5046E5]" />,
    title: "Increase Traffic",
    description:
      "Drive qualified traffic to your site, turning visitors into loyal customers.",
  },
  {
    icon: <Heart className="w-6 h-6 text-[#5046E5]" />,
    title: "Build Trust",
    description:
      "Enhance credibility and authority in your industry with high-ranking content.",
  },
];

const seoFaqs = [
  {
    q: "How long does it take to see SEO results?",
    a: "SEO is a long-term investment. Typically, you can expect noticeable improvements within 3-6 months, depending on the competition and industry.",
  },
  {
    q: "Do you provide keyword research as part of your SEO services?",
    a: "Yes, our SEO services include thorough keyword research to target the most effective terms for your business.",
  },
  {
    q: "Can you help improve my website's loading speed?",
    a: "Absolutely! Optimizing website performance is a critical aspect of our SEO strategy to enhance user experience and rankings.",
  },
  {
    q: "Do you offer content creation for SEO?",
    a: "Yes, we provide high-quality content creation services to ensure your site ranks well and engages your audience effectively.",
  },
];

const seoTechnologies = [
  { name: 'Google Analytics', image: '/google-analytics.svg', description: 'Analyze website traffic and user behavior.' },
  { name: 'PageSpeed Insights', image: '/pagespeed-insights.svg', description: 'Analyze and improve page load performance.' },
  { name: 'Google Trends', image: '/google-trends.svg', description: 'Analyze search trends and topics over time.' },
];

const seoSteps = [
  {
    number: "01",
    title: "SEO Audit & Analysis",
    description:
      "We perform a comprehensive analysis of your website's current SEO status and identify improvement opportunities.",
  },
  {
    number: "02",
    title: "Keyword Research",
    description:
      "We identify high-value keywords that your target audience is searching for.",
  },
  {
    number: "03",
    title: "On-Page Optimization",
    description:
      "We optimize your website's content, meta tags, and structure for better search engine visibility.",
  },
  {
    number: "04",
    title: "Content Strategy",
    description:
      "We develop and implement a content strategy that drives organic traffic and engagement.",
  },
  {
    number: "05",
    title: "Technical SEO",
    description:
      "We optimize your website's technical aspects to improve crawlability and indexing.",
  },
  {
    number: "06",
    title: "Monitoring & Reporting",
    description:
      "We track your SEO performance and provide detailed reports on rankings and traffic growth.",
  },
];

export default function SEOPage() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeSteps, setActiveSteps] = useState<boolean[]>(
    new Array(seoSteps.length).fill(false)
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
      const newActiveSteps = seoSteps.map(
        (_, index) => v >= index / (seoSteps.length - 1)
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
          Turn Clicks Into <span className="text-[#5046E5]">Conversions</span>{" "} With Expert SEO
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-400">
          We optimize your online presence to rank higher, drive organic traffic, and convert visitors into loyal customers. Let your business shine on search engines
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
            {seoBenefits.map((benefit, index) => (
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
              {seoSteps.map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute left-1/2 -translate-x-1/2"
                  style={{
                    top: `${(index / (seoSteps.length - 1)) * 100}%`,
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
              {seoSteps.map((step, index) => (
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
            {seoTechnologies.map((tech, index) => (
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
            {seoFaqs.map((faq, index) => (
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
