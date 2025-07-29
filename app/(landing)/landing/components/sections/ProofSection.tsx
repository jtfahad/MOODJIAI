import React from 'react';
import Image from 'next/image';
import { Tag } from '../ui/Tag';
import { GradientButton } from '../ui/GradientButton';

interface ProofSectionProps {
  imageSrc?: string;
  headingColor?: string;
  buttonBg?: string;
}

const ProofSection: React.FC<ProofSectionProps> = ({
  imageSrc = '/dragons/proud-selura-logo.svg',
  headingColor = '#984A2E',
  buttonBg
}) => {
  const tags = [
    '✅ Green flag recognition',
    '💚 Signs of healthy emotional engagement',
    '🎭 Words misalign with actions',
    '🧠 Manipulation patterns',
    '🔁 Push/pull power loops',
    '⏳ Timing mismatches',
    '🚩 Emotional codependency masking as care'
  ];

  return (
    <section className="w-full">
      <div className="h-full w-full flex flex-col md:flex-row sm:items-start items-center justify-between py-20 gap-8 pr-4 lg:pr-8">
        {/* Left side - Dynamic Image */}
        <div className="flex flex-col justify-center w-full lg:w-1/2">
          <Image
            src={imageSrc}
            alt="Proof section image"
            width={635}
            height={606}
            className="w-full h-auto max-w-[500px] lg:max-w-[635px]"
          />
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col items-center w-[70%] lg:mt-15 md:mt-0 mt-0">
          <div className="flex flex-col items-start justify-center w-full lg:w-2/3 lg:pl-0 sm:pl-20px">
            <div className="flex flex-col items-start justify-center pt-6 lg:pt-24">
              <h2
                className="text-2xl sm:text-3xl lg:text-[45px] font-medium leading-[120%] tracking-[0.41px] mb-6"
                style={{ color: headingColor }}
              >
                Real love exists
              </h2>

              <div className="flex flex-col items-start justify-center mt-2">
                <p className="text-lg font-normal leading-[160%] text-black">
                  MoodJi doesn&apos;t just believe in love — it&apos;s trained to
                </p>
                <p className="text-lg font-normal leading-[160%] text-black">
                  track it. 🧬 Backed by <span className="font-bold">over 400,000 emotional data</span>
                </p>
                <p className="text-lg font-normal leading-[160%] text-black">
                  <span className="font-bold">points,</span> MoodJi reflects:
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-col items-start justify-center pt-8 lg:pt-14 w-full">
              {[0, 2, 4].map((start, i) => (
                <div key={i} className={`flex flex-wrap gap-2 w-full ${i !== 0 ? 'mt-2' : ''}`}>
                  {tags.slice(start, start + 2).map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </div>
              ))}
              <div className="w-auto mt-2">
                <Tag className="w-full text-center">{tags[6]}</Tag>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start items-center mt-10 w-full">
              <GradientButton size="sm" background={buttonBg}>
                Start My Scan
              </GradientButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
