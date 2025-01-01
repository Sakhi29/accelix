"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Zap, Shield, Rocket, MessageCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Consultation and Planning",
    description:
      "We begin by understanding your business, target audience, and goals. Through collaborative discussions, we plan the structure and features of your online store.",
  },
  {
    number: "02",
    title: "Design and Customization",
    description:
      "Our designers create a visually stunning and cohesive design that aligns with your brand. We customize the store's appearance and functionality to match your unique requirements.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Our expert developers bring the design to life, implementing all features and functionality while ensuring optimal performance and security.",
  },
  {
    number: "04",
    title: "Content Integration",
    description:
      "We populate your website with your products, content, and media, ensuring everything is organized and optimized for the best user experience.",
  },
  {
    number: "05",
    title: "Testing and Quality Assurance",
    description:
      "Rigorous testing across devices and browsers ensures your website functions flawlessly and provides a seamless experience for all users.",
  },
  {
    number: "06",
    title: "Launch and Support",
    description:
      "We carefully launch your website and provide ongoing support and maintenance to ensure your online presence continues to grow and succeed.",
  },
];

const benefits = [
  {
    icon: <Zap className="w-6 h-6 text-[#5046E5]" />,
    title: "Boost Your Online Presence",
    description:
      "Gain a competitive edge with a professional, high-performance website that attracts and retains customers.",
  },
  {
    icon: <Shield className="w-6 h-6 text-[#5046E5]" />,
    title: "Secure and Reliable",
    description:
      "Rest easy knowing your website is built with the latest security measures and hosted on reliable infrastructure.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-[#5046E5]" />,
    title: "Scalable Solutions",
    description:
      "Our websites are designed to grow with your business, easily accommodating increased traffic and new features.",
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-[#5046E5]" />,
    title: "Ongoing Support",
    description:
      "Benefit from our continuous support and maintenance services to keep your website running smoothly.",
  },
];

export default function WebDevelopment() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeSteps, setActiveSteps] = useState<boolean[]>(
    new Array(steps.length).fill(false)
  );

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
      const newActiveSteps = steps.map(
        (_, index) => v >= index / (steps.length - 1)
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
            Turn Visitors Into <span className="text-[#5046E5]">Customers</span>{" "}
            With a Powerful Website
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-400">
            We build high-converting websites that help businesses generate more
            leads, increase sales, and grow their online revenue.
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
            {benefits.map((benefit, index) => (
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
              {steps.map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute left-1/2 -translate-x-1/2"
                  style={{
                    top: `${(index / (steps.length - 1)) * 100}%`,
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
              {steps.map((step, index) => (
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

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-8 lg:px-12 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {[
              {
                q: "How long does it take to build a website?",
                a: "The timeline varies depending on the complexity of your project. Typically, we can complete a website in 4-8 weeks from start to finish.",
              },
              {
                q: "Do you provide hosting and domain registration?",
                a: "Yes, we offer comprehensive hosting solutions and can assist with domain registration to ensure your website is fully set up and ready to go.",
              },
              {
                q: "Can you help with SEO and digital marketing?",
                a: "We integrate SEO best practices into every website we build and offer additional digital marketing services to help drive traffic and conversions.",
              },
              {
                q: "What if I need changes after the website is launched?",
                a: "We provide ongoing support and maintenance services. Whether you need small updates or major changes, we're here to help your website evolve with your business.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-black p-6 rounded-lg border border-zinc-800 hover:border-[#5046E5] transition-colors"
              >
                <h3 className="text-xl font-semibold mb-3">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
