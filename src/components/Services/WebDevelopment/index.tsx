"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Shield,
  Rocket,
  MessageCircle,
  Code,
  Smartphone,
  Globe,
} from "lucide-react";
import ServiceAccordion from "@/partials/Common/Service/ServiceAccordion";
import ServiceProcess from "@/partials/Common/Service/ServiceProcess";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const steps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description:
      "We dive deep into understanding your vision, goals, and requirements to create a comprehensive roadmap for your project.",
  },
  {
    number: "02",
    title: "Design & Prototyping",
    description:
      "Our designers craft stunning visuals and interactive prototypes that bring your vision to life before development begins.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Our expert developers transform designs into clean, efficient code using cutting-edge technologies and best practices.",
  },
  {
    number: "04",
    title: "Content Integration",
    description:
      "We carefully integrate your content and media, ensuring everything is optimized for performance and user experience.",
  },
  {
    number: "05",
    title: "Testing & Refinement",
    description:
      "Rigorous testing across devices and platforms ensures your website performs flawlessly for every user.",
  },
  {
    number: "06",
    title: "Launch & Support",
    description:
      "We handle the deployment process and provide ongoing support to ensure your website continues to evolve and succeed.",
  },
];

const expertise = [
  {
    icon: <Code className="w-8 h-8 text-[#5046E5]" />,
    title: "Custom Web Development",
    description: "Tailored solutions that perfectly match your business needs and goals",
    features: ["Responsive Design", "Custom Functionality", "API Integration"],
  },
  {
    icon: <Globe className="w-8 h-8 text-[#5046E5]" />,
    title: "E-commerce Solutions",
    description: "Powerful online stores that drive sales and enhance customer experience",
    features: ["Secure Payments", "Inventory Management", "Shopping Cart"],
  },
  {
    icon: <Smartphone className="w-8 h-8 text-[#5046E5]" />,
    title: "Progressive Web Apps",
    description: "Fast, engaging apps that work seamlessly across all devices",
    features: ["Offline Support", "Push Notifications", "App-like Experience"],
  },
];

const benefits = [
  {
    icon: <Zap className="w-6 h-6 text-[#5046E5]" />,
    title: "Lightning Fast Performance",
    description:
      "Optimized code and advanced caching strategies ensure your website loads in milliseconds, improving user experience and SEO rankings.",
  },
  {
    icon: <Shield className="w-6 h-6 text-[#5046E5]" />,
    title: "Rock-Solid Security",
    description:
      "Enterprise-grade security with SSL encryption, regular security audits, and protection against common vulnerabilities.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-[#5046E5]" />,
    title: "Built for Growth",
    description:
      "Scalable architecture that grows with your business, handling increased traffic and new features with ease.",
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-[#5046E5]" />,
    title: "Expert Support",
    description:
      "Dedicated support team available 24/7, ensuring your website runs smoothly and issues are resolved quickly.",
  },
];

export default function WebDevelopment() {
  // const { scrollYProgress } = useScroll({
  //   target: timelineRef,
  //   offset: ["start center", "end center"],
  // });

  // const smoothProgress = useSpring(scrollYProgress, {
  //   damping: 20,
  //   stiffness: 100,
  // });

  // useEffect(() => {
  //   const unsubscribe = smoothProgress.onChange((v) => {
  //     const newActiveSteps = steps.map(
  //       (_, index) => v >= index / (steps.length - 1)
  //     );
  //     setActiveSteps(newActiveSteps);
  //   });
  //   return () => unsubscribe();
  // }, [smoothProgress]);

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      {/* Hero Section with animated background */}
      <section className="relative pt-24 md:pt-32 lg:pt-44 px-4 md:px-8 lg:px-12 min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] bg-[#5046E5] rounded-full blur-[150px] opacity-20 -top-20 -left-20"></div>
          <div className="absolute w-[400px] h-[400px] bg-purple-500 rounded-full blur-[150px] opacity-20 top-40 right-20"></div>
        </div>
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              We Create <br />
              <span className="bg-gradient-to-r from-[#5046E5] to-[#5046E5] text-transparent bg-clip-text">
                Digital Experiences
              </span>
              <br /> That Matter
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-400 max-w-2xl">
              Transforming ideas into exceptional web solutions that drive growth 
              and elevate your digital presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#5046E5] to-[#5046E5] justify-center flex py-4 px-8 items-center text-white rounded-xl text-lg font-medium shadow-lg shadow-[#5046E5]/20"
              >
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/10 bg-white/5 backdrop-blur-sm py-4 px-8 text-white rounded-xl text-lg font-medium hover:bg-white/10 transition-colors"
              >
                View Our Work
              </motion.button>
            </div>
          </motion.div>
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

      {/* Expertise Section with cards */}
      <section className="py-32 px-4 md:px-8 lg:px-12 relative">
        <div className="absolute inset-0 bg-[#5046E5]/5"></div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative max-w-7xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Our Web Development{" "}
            <span className="bg-gradient-to-r from-[#5046E5] via-[#6e66ff] to-[#5046E5] text-transparent bg-clip-text">
              Expertise
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                variants={itemVariants}
                key={index}
                className="group relative bg-gradient-to-b from-white/[0.08] to-transparent p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-[#5046E5]/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#5046E5]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="relative">
                  <div className="mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-gray-400 mb-6">{item.description}</p>
                  <ul className="space-y-3">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <span className="w-1.5 h-1.5 bg-[#5046E5] rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Process Section */}
      <ServiceProcess 
        title="Our Development"
        subtitle="Process"
        description="A streamlined approach to bringing your web project to life, combining creativity with technical excellence"
        leftHeading={{
          line1: "Building your",
          highlight: "dream website",
          line2: "step by step"
        }}
        steps={steps}
      />

      {/* Stats Section with animated counters */}
      <section className="py-32 px-4 md:px-8 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#5046E5] to-[#5046E5]"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { number: "100+", label: "Projects Delivered" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "5+", label: "Years Experience" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-5xl font-bold mb-3">{stat.number}</div>
                <div className="text-lg opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <ServiceAccordion 
        title="Common Questions"
        faqs={[
          {
            q: "What types of websites do you build?",
            a: "We specialize in creating various types of websites including corporate websites, e-commerce platforms, custom web applications, and progressive web apps. Each solution is tailored to meet your specific business needs.",
          },
          {
            q: "How much does a website cost?",
            a: "The cost varies depending on your requirements, complexity, and features needed. We offer transparent pricing and will provide a detailed quote after understanding your project needs.",
          },
          {
            q: "Do you provide ongoing maintenance?",
            a: "Yes, we offer comprehensive maintenance packages that include regular updates, security patches, performance optimization, and technical support to keep your website running smoothly.",
          },
          {
            q: "How long does it take to build a website?",
            a: "Timeline varies based on project scope. Typically, a basic website takes 4-6 weeks, while complex projects may take 8-12 weeks. We'll provide a specific timeline after project consultation.",
          },
        ]} 
      />

      {/* CTA Section with gradient and pattern */}
      <section className="py-32 px-4 md:px-8 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#5046E5] to-[#5046E5]"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Let's create something amazing together. Get in touch for a free consultation.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#5046E5] px-12 py-5 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-shadow"
          >
            Schedule a Call
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
