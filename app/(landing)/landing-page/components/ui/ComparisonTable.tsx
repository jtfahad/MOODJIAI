// components/ui/ComparisonTable.tsx
import React from 'react';
import Image from 'next/image';

interface ComparisonRow {
  feature: string;
  moodji: boolean;
  chatgpt: boolean;
  claude: boolean;
}

interface ComparisonTableProps {
  data: ComparisonRow[];
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ data }) => {
  const platforms = [
    { name: 'Moodjiverse', logo: '/logos/moodjiverse-logo.svg', width: 167, height: 18 },
    { name: 'ChatGPT', logo: '/logos/ChatGPT.svg', width: 109, height: 32 },
    { name: 'Claude', logo: '/logos/Claude.svg', width: 109, height: 24 }
  ];

  const CheckIcon = () => (
    <div className="flex justify-center items-center">
      <Image src="/icons/CheckCircle.svg" alt="Supported" width={24} height={24} />
    </div>
  );

  const CancelIcon = () => (
    <div className="flex justify-center items-center">
      <Image src="/icons/CancelCircle.svg" alt="Not supported" width={24} height={24} />
    </div>
  );

  return (
    <div className="relative z-20 overflow-x-auto max-w-5xl mx-auto">
      <div className="min-w-full">
        {/* Header */}
        <div className="flex text-[#7b3e22] text-sm md:text-base mb-4">
          <div className="w-1/4 p-4 font-semibold text-center"></div>
          {platforms.map((platform, index) => (
            <div key={index} className="w-1/4 p-4 font-semibold flex justify-center items-center">
              <Image 
                src={platform.logo} 
                alt={platform.name} 
                width={platform.width} 
                height={platform.height}
              />
            </div>
          ))}
        </div>

        {/* Body */}
        <div className="space-y-2">
          {data.map((row, index) => (
            <div 
              key={index} 
              className={`flex items-center text-gray-800 text-sm md:text-base ${
                index % 2 === 0 
                  ? "bg-white/30 rounded-[30px] border-[2.44px] border-white/20" 
                  : ""
              }`}
            >
              <div className="w-1/4 p-4 text-left font-medium">{row.feature}</div>
              <div className="w-1/4 p-4 flex justify-center items-center">
                {row.moodji ? <CheckIcon /> : <CancelIcon />}
              </div>
              <div className="w-1/4 p-4 flex justify-center items-center">
                {row.chatgpt ? <CheckIcon /> : <CancelIcon />}
              </div>
              <div className="w-1/4 p-4 flex justify-center items-center">
                {row.claude ? <CheckIcon /> : <CancelIcon />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
