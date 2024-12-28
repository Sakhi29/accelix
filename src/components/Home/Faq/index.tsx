"use client";

import { Plus, Minus } from "lucide-react";
import Accordion, { AccordionRef } from "@/partials/Common/Accordion";
import { useRef, useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How can I contact Inkyy Team?",
    answer:
      "You can reach us through our contact form on our website or by emailing us at hello@inkyy.com. We typically respond within 24 hours.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We offer a comprehensive range of digital services including web design, development, branding, and digital marketing solutions tailored to your needs.",
  },
  {
    question: "Do you provide website maintenance services?",
    answer:
      "Yes, we offer ongoing website maintenance and support services to ensure your website remains secure, up-to-date, and performing optimally.",
  },
  {
    question: "How long does it take to design and develop a website?",
    answer:
      "Project timelines vary depending on complexity and scope. A typical website project takes 6-12 weeks from start to finish, but we'll provide a specific timeline based on your requirements.",
  },
  {
    question: "Do you require a deposit for projects?",
    answer:
      "Yes, we typically require a 50% deposit to begin work, with the remaining balance due upon project completion. This helps us allocate resources and commit fully to your project.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const accordionRefs = useRef<Array<AccordionRef | null>>([]);

  const handleToggle = (index: number, isOpen: boolean) => {
    if (isOpen) {
      // Close the previously open Accordion
      if (openIndex !== null && accordionRefs.current[openIndex]) {
        accordionRefs.current[openIndex]?.setIsOpen(false);
      }
      setOpenIndex(index);
    } else {
      setOpenIndex(null);
    }
  };

  return (
    <div className="py-12 container mx-auto sm:py-16 ">
      <div className="px-4 mx-auto grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <Accordion
              key={index}
              ref={(el) => {
                accordionRefs.current[index] = el;
              }}
              title={
                <div className="flex items-center px-2 justify-between py-4">
                  <h3 className="text-lg text-black font-medium">
                    {faq.question}
                  </h3>
                  <div
                    className={`transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus className="h-5 min-w-5 text-black" />
                    ) : (
                      <Plus className="h-5 min-w-5 text-black" />
                    )}
                  </div>
                </div>
              }
              defaultOpen={false}
              containerClassName="rounded-[14px] bg-white"
              onToggle={(isOpen) => handleToggle(index, isOpen)}
              contentClassName="px-4 rounded-b-lg py-4 bg-gray-200 text-gray-600"
            >
              <p>{faq.answer}</p>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
}
