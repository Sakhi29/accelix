import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { WorkItem } from '@/types/Our-Work';
import { motion, AnimatePresence } from 'framer-motion';

interface MasonryGridProps {
  items: WorkItem[];
  columns?: {
    default: number;
    tablet: number;
    mobile: number;
  };
  gap: number;
}

const DEFAULT_HEIGHT = 300;

const MasonryGrid: React.FC<MasonryGridProps> = ({
  items,
  columns = { default: 3, tablet: 2, mobile: 1 },
  gap = 6,
}) => {
  const [columnCount, setColumnCount] = useState(columns.default);
  const [touchedItem, setTouchedItem] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateColumnCount = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setColumnCount(columns.mobile);
        setIsMobile(true);
      } else if (width < 1024) {
        setColumnCount(columns.tablet);
        setIsMobile(false);
      } else {
        setColumnCount(columns.default);
        setIsMobile(false);
      }
    };

    updateColumnCount();
    window.addEventListener('resize', updateColumnCount);
    return () => window.removeEventListener('resize', updateColumnCount);
  }, [columns]);

  const distributeItemsInColumns = () => {
    const columnArray: WorkItem[][] = Array.from({ length: columnCount }, () => []);
    
    items.forEach((item) => {
      const shortestColIndex = columnArray
        .map((col, i) => ({
          index: i,
          height: col.reduce((acc, item) => acc + (item.height || DEFAULT_HEIGHT), 0),
        }))
        .reduce((min, col) => 
          col.height < min.height ? col : min
        , { index: 0, height: Infinity }).index;
      
      columnArray[shortestColIndex].push(item);
    });

    return columnArray;
  };

  const gridColumns = distributeItemsInColumns();

  const handleItemClick = (id: number) => {
    if (isMobile) {
      setTouchedItem(touchedItem === id ? null : id);
    }
  };

  const getItemHeight = (height: number | undefined): number => {
    const baseHeight = height || DEFAULT_HEIGHT;
    return baseHeight >= 400 ? baseHeight / 2 : baseHeight;
  };

  return (
    <motion.div 
      className={`grid gap-${gap} w-full`}
      style={{
        gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {gridColumns.map((column, colIndex) => (
        <div key={colIndex} className={`flex flex-col gap-${gap}`}>
          {column.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: colIndex * 0.1,
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
            >
              <Link 
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block transform transition-transform duration-300 hover:scale-[1.02]"
                onClick={(e) => {
                  if (isMobile && touchedItem !== item.id) {
                    e.preventDefault();
                    handleItemClick(item.id);
                  }
                }}
              >
                <motion.div
                  className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ 
                    paddingBottom: `${getItemHeight(item.height)}px`,
                  }}
                  whileHover={!isMobile ? "hover" : undefined}
                  initial="initial"
                  animate={touchedItem === item.id ? "hover" : "initial"}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <AnimatePresence>
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"
                      variants={{
                        initial: { opacity: 0 },
                        hover: { opacity: 1 }
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 p-6 text-white"
                        variants={{
                          initial: { y: 20, opacity: 0 },
                          hover: { y: 0, opacity: 1 }
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-200 mb-3">{item.description}</p>
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      ))}
    </motion.div>
  );
};

export default MasonryGrid;
