'use client';

import React from 'react';

const TypingDots = () => {
  return (
    <div className="flex items-center gap-1 px-6 py-4">
      <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
      <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
      <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
    </div>
  );
};

export default TypingDots;
