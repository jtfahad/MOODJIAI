// components/ui/FeatureCard.tsx
import React from 'react';
import Image from 'next/image';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className = ''
}) => {
  return (
    <div className={`w-full max-w-[244px] h-[220px] flex flex-col justify-between items-start gap-3 bg-white/60 p-6 rounded-[30px] border-[2.44px] border-[#E5E5E5] hover:shadow-lg transition-all duration-300 ${className}`}>
      <Image
        src={icon}
        alt={`${title} icon`}
        width={43}
        height={36}
        className="mt-2"
      />
      <div className="w-full flex flex-col items-start justify-center">
        <h3 className="text-xl font-bold leading-none tracking-[-1px] text-black mb-3">
          {title}
        </h3>
        <p className="text-base font-normal leading-[110%] text-black">
          {description}
        </p>
      </div>
    </div>
  );
};
