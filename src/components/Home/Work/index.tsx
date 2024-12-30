"use client";
import React from "react";
import Image from "next/image";
import Grid from "@/partials/Common/Grid";
import { WorkItem } from "@/types/Work";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
const workItems: WorkItem[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    feature: "Full-stack Development",
    image: "/case2.png",
    className: "col-span-12 md:col-span-8 md:row-span-2",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    feature: "UI/UX Design",
    image: "/case1.png",
    className: "col-span-12 md:col-span-4 row-span-1",
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    feature: "Frontend Development",
    image: "/case5.jpg",
    className: "col-span-12 md:col-span-4 row-span-1",
  },
  {
    id: 4,
    title: "Portfolio Website",
    feature: "Responsive Design",
    image: "/case2.webp",
    className: "col-span-12 md:col-span-6 md:row-span-3",
  },
  {
    id: 5,
    title: "Portfolio Website",
    feature: "Responsive Design",
    image: "/case4.jpg",
    className: "col-span-12 md:col-span-6 md:row-span-3",
  },
];

const Work = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden w-full bg-white">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 md:mb-20 space-y-6 md:space-y-0">
          <h2
            className={`${montserrat.className} text-black text-3xl sm:text-4xl lg:text-5xl font-bold text-center md:text-left`}
          >
            OUR WORK
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-md text-center md:text-right">
            "Details make perfection, and perfection is not a detail."
            <span className="block text-[#4318FF] mt-1">
              - Leonardo da Vinci
            </span>
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Grid
          items={workItems}
          columns={12}
          gap={6}
          responsive={{ sm: 1, md: 12, lg: 12 }}
          gridClassName="relative"
          renderItem={(item) => (
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg group">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-center p-4">
                  <h3 className="text-white font-bold text-xl md:text-2xl mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/90 text-sm md:text-base">
                    {item.feature}
                  </p>
                </div>
              </div>
            </div>
          )}
        />
      </div>
    </section>
  );
};

export default Work;
