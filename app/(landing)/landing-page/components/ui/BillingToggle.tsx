// components/ui/BillingToggle.tsx
import React from 'react';

interface BillingToggleProps {
  isYearly: boolean;
  onToggle: () => void;
}

export const BillingToggle: React.FC<BillingToggleProps> = ({ isYearly, onToggle }) => {
  return (
    <div className="flex items-center justify-center gap-4 mb-10">
      <label className="text-base font-normal text-black leading-relaxed">
        Bill Monthly
      </label>
      
      <button
        onClick={onToggle}
        className="relative inline-flex items-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#944c26] focus:ring-offset-2 rounded-full"
        aria-label={`Switch to ${isYearly ? 'monthly' : 'yearly'} billing`}
        role="switch"
        aria-checked={isYearly}
      >
        <div className={`w-14 h-7 rounded-full transition-colors duration-300 ${isYearly ? 'bg-[#944c26]' : 'bg-white'}`}>
          <div className={`absolute top-[2px] left-[2px] h-6 w-6 rounded-full transition-transform duration-300 ${isYearly ? 'translate-x-full bg-white' : 'bg-black'}`} />
        </div>
      </button>

      <label className="text-base font-normal text-black leading-tight">
        Bill Yearly
        <span className="text-green-600 text-sm ml-1">(Save 20%)</span>
      </label>
    </div>
  );
};