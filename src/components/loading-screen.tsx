'use client';

import { motion } from 'framer-motion';

export function LoadingScreen() {
  const shraviLetters = ['S', 'H', 'R', 'A', 'V', 'I'];
  const logisticsLetters = ['l', 'o', 'g', 'i', 's', 't', 'i', 'c', 's'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-slate-950">
      <div className="flex flex-col items-center gap-4">
        {/* SHRAVI - Red */}
        <div className="flex items-center gap-1">
          {shraviLetters.map((letter, index) => (
            <motion.span
              key={`shravi-${index}`}
              className="font-heading text-6xl font-bold text-primary md:text-7xl lg:text-8xl"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* logistics - Black */}
        <div className="flex items-center gap-1">
          {logisticsLetters.map((letter, index) => (
            <motion.span
              key={`logistics-${index}`}
              className="font-heading text-4xl font-bold text-slate-900 dark:text-white md:text-5xl lg:text-6xl"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: (index + shraviLetters.length) * 0.1,
                ease: "easeInOut",
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}

