// components/sections/ComparisonSection.tsx
import React from 'react';
import Image from 'next/image';
import { ComparisonTable } from '../ui/ComparisonTable';
import { GradientButton } from '../ui/GradientButton';

const ComparisonSection: React.FC = () => {
  const comparisonData = [
    { feature: 'Architecture', moodji: true, chatgpt: true, claude: true },
    { feature: 'User Base', moodji: true, chatgpt: true, claude: true },
    { feature: 'Integrations', moodji: true, chatgpt: true, claude: false },
    { feature: 'Primary Strength', moodji: true, chatgpt: false, claude: false },
    { feature: 'Accuracy', moodji: true, chatgpt: false, claude: false },
    { feature: 'Accuracy', moodji: true, chatgpt: false, claude: false }
  ];

  return (
    <section className="relative px-4 py-16 text-center bg-white/60 pb-20 mb-8">
      {/* Dragon Image */}
      <Image
        src="/dragons/ComparisonChartDragon.svg"
        alt="Comparison Dragon"
        width={594}
        height={367}
        className="absolute top-[-130px] right-0 w-[300px] lg:w-[400px] pointer-events-none z-10"
      />

      {/* Header */}
      <div className="relative z-20 mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#944c26] mb-2">
          Comparison chart
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Find the tier that matches your needs
        </p>
      </div>

      {/* Comparison Table */}
      <ComparisonTable data={comparisonData} />

      {/* CTA Button */}
      <div className="flex justify-center items-center mt-10 w-full">
        <GradientButton size="md">
          Get Started
        </GradientButton>
      </div>
    </section>
  );
};

export default ComparisonSection;

