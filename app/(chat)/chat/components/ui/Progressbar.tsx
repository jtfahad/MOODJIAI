// components/ui/ProgressBar.tsx
import React from "react";

interface ProgressBarProps {
  current: number;
  max: number;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, max, className = "" }) => {
  const percentage = Math.min((current / max) * 100, 100);
  
  return (
    <div className={`relative bg-[#F3F4F6] rounded-full h-2 ${className}`}>
      <div 
        className="bg-[#C02A7F] h-2 rounded-full transition-all duration-300"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;