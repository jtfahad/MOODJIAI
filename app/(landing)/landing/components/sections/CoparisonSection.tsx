// components/sections/ComparisonSection.tsx
import React from 'react';
import Image from 'next/image';
import { ComparisonTable } from '../ui/ComparisonTable';
import { GradientButton } from '../ui/GradientButton';

interface ComparisonSectionProps {
  imagePath?: string;
  headingColor?: string;
  buttonBg?: string; // additional class override for the button
}

const ComparisonSection: React.FC<ComparisonSectionProps> = ({
  imagePath = '/dragons/ComparisonChartDragon.svg',
  headingColor = '#944c26',
  buttonBg = '',
}) => {
  const comparisonData = [
    { feature: 'Architecture', moodji: true, chatgpt: true, claude: true },
    { feature: 'User Base', moodji: true, chatgpt: true, claude: true },
    { feature: 'Integrations', moodji: true, chatgpt: true, claude: false },
    { feature: 'Primary Strength', moodji: true, chatgpt: false, claude: false },
    { feature: 'Accuracy', moodji: true, chatgpt: false, claude: false },
    { feature: 'Speed', moodji: true, chatgpt: true, claude: false }
  ];

  return (
    <section className="relative px-4 py-16 text-center bg-white/60 pb-20 mb-8 sm:mt-20">
      {/* Dragon Image */}
      <Image
        src={imagePath}
        alt="Comparison Dragon"
        width={594}
        height={367}
        className="absolute md:top-[-150px] top-[-100px] right-0 w-[180px] md:w-[300px] lg:w-[400px] pointer-events-none z-10"
      />

      {/* Header */}
      <div className="relative z-20 mb-12">
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2"
          style={{ color: headingColor }}
        >
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
        <GradientButton size="md" background={buttonBg}>
          Get Started
        </GradientButton>
      </div>
    </section>
  );
};

export default ComparisonSection;
