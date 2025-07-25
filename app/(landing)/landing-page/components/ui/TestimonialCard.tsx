// components/ui/TestimonialCard.tsx
import React from 'react';
import Image from 'next/image';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  role,
  avatar,
  className = ''
}) => {
  return (
    <div className={`w-full max-w-[420px] h-[323px] flex flex-col p-6 rounded-[30px] bg-white/60 backdrop-blur-[40px] border border-white/20 ${className}`}>
      <div className="flex mb-12">
        <Image
          src="/icons/QuoteMark.svg"
          alt="Quote Mark"
          width={21}
          height={18}
        />
      </div>
      
      <div className="flex flex-1">
        <p className="text-start text-lg leading-[150%] tracking-[-2%] font-medium text-[#22282B]">
          &quot;{quote}&quot;
        </p>
      </div>
      
      <div className="flex gap-4 mt-6">
        <Image
          src={avatar}
          alt={`${name} avatar`}
          width={62}
          height={62}
          className="rounded-full flex-shrink-0"
        />
        <div className="flex flex-col items-start justify-center">
          <p className="text-[21px] leading-[130%] tracking-[-2%] font-medium text-[#22282B]">
            {name}
          </p>
          <p className="text-lg leading-[150%] tracking-[-2%] font-medium text-[#909DA2]">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};
