import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => (
  <div className={`flex items-center ${className || ''}`}>
    <span className="font-bold text-white text-2xl tracking-widest">MODJI</span>
    <span className="font-bold text-[#b3b3b3] text-2xl tracking-widest ml-1">VERSE</span>
  </div>
);

export default Logo; 