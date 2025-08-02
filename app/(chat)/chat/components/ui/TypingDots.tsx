'use client';

import React from 'react';
import { motion } from 'framer-motion';

const TypingDots: React.FC = () => {
  const bounceTransition = {
    y: {
      duration: 0.6,
      yoyo: Infinity,
      ease: 'easeInOut',
    },
  };

  return (
    <div className="flex items-center justify-center py-4 px-6 relative">
      <div className="flex space-x-2">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-3 h-3 bg-white/60 rounded-full"
            animate={{ y: ['0%', '-50%', '0%'] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.2,
            }}
          />
        ))}
      </div>

      {/* Optional subtle glow effect behind */}
      <motion.div
        className="absolute inset-0 rounded-[30px] pointer-events-none z-[-1]"
        animate={{
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(135,206,235,0.2) 0%, transparent 70%)',
        }}
      />
    </div>
  );
};

export default TypingDots;
