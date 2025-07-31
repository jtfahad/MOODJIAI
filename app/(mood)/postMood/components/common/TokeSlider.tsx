'use client';
import React, { useRef, useState, useEffect } from 'react';

interface TokenSliderProps {
  maxTokens: number;
  initialTokenCount: number;
}

const TokenSlider: React.FC<TokenSliderProps> = ({
  maxTokens,
  initialTokenCount,
}) => {
  const [currentTokenCount, setCurrentTokenCount] = useState(initialTokenCount);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const progressPercentage = (currentTokenCount / maxTokens) * 100;

  const handleMouseMove = (e: MouseEvent) => {
    if (!sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const relativeX = e.clientX - rect.left;
    const newPercentage = Math.max(0, Math.min(1, relativeX / rect.width));
    const newTokenCount = Math.round(newPercentage * maxTokens);

    setCurrentTokenCount(newTokenCount);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  useEffect(() => {
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[12px] text-[#F95D2B]">TOKENS</span>
        <span className="text-sm font-semibold text-white">{maxTokens} Questions</span>
      </div>

      {/* Progress Bar Container */}
      <div
        ref={sliderRef}
        className="relative w-full bg-white/20 rounded-full h-2"
        onMouseDown={handleMouseDown}
      >
        {/* Progress bar */}
        <div
          className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        ></div>

        {/* Slider Thumb */}
        <div
          className="absolute top-1/2 -translate-y-1/2 transform bg-[#F95D2B] text-white/80 text-xs font-semibold rounded-full shadow-md z-10
                     w-8 h-4 flex items-center justify-center cursor-pointer select-none"
          style={{ left: `calc(${progressPercentage}% - 15px)` }}
        >
          {currentTokenCount}
        </div>
      </div>
    </div>
  );
};

export default TokenSlider;
