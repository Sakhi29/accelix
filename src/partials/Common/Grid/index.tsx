"use client";
import React from "react";
import { motion } from "framer-motion";
import { GridItem, GridProps } from "@/types/Work";

const Grid = <T extends GridItem>({
  items,
  renderItem,
  className = "",
  gridClassName = "",
  animate = true,
  columns = 12,
  gap = 4,
  responsive = {
    sm: 2,
    md: 3,
    lg: 4,
    xl: 4,
    "2xl": 4,
  },
}: GridProps<T>) => {
  const gridCols = `grid-cols-1 ${
    responsive.sm ? `sm:grid-cols-${responsive.sm}` : ""
  } ${responsive.md ? `md:grid-cols-${responsive.md}` : ""} ${
    responsive.lg ? `lg:grid-cols-${responsive.lg}` : ""
  } ${responsive.xl ? `xl:grid-cols-${responsive.xl}` : ""} ${
    responsive["2xl"] ? `2xl:grid-cols-${responsive["2xl"]}` : ""
  }`;

  return (
    <div className={className}>
      <div
        className={`grid ${gridCols} gap-${gap} ${gridClassName}`}
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
      >
        {items.map((item, index) => (
          <React.Fragment key={item.id}>
            {animate ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={item.className}
                style={item.style}
              >
                {renderItem(item, index)}
              </motion.div>
            ) : (
              <div className={item.className} style={item.style}>
                {renderItem(item, index)}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Grid;
