// components/ui/UpgradeButton.tsx
import React from 'react';

interface UpgradeButtonProps {
  onClick: () => void;
  text: string;
  className?: string; // For any additional Tailwind classes
}

const UpgradeButton: React.FC<UpgradeButtonProps> = ({ onClick, text, className }) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative 
        w-[210px] h-[45px]
        rounded-md 
        flex items-center justify-center 
        text-[#313131] font-semibold text-sm 
        overflow-hidden 
        border border-solid border-[rgba(0,0,0,0.05)] 
        ${className || ''}
      `}
      style={{
        background: 
          'linear-gradient(93.92deg, #F9BC2E 0%, #E29A1E 13.29%, #FFCD38 30.34%, #F0AF30 73.17%, #E29A1E 83.8%, #FFCD38 96.43%, #DD931A 100.4%)',
      }}
    >
      {/* The text content of the button */}
      Get more Tokens
    </button>
  );
};

export default UpgradeButton;