// components/ui/Tag.tsx
import React from 'react';

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({ children, className = '' }) => {
  return (
    <div className={`flex items-center justify-center p-3 bg-white/60 border-[2.44px] border-[#E5E5E5] rounded-[10px] text-sm font-semibold leading-[160%] ${className}`}>
      {children}
    </div>
  );
};