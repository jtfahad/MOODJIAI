// components/sections/ProofSection.tsx
import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { Tag } from '../ui/Tag';

const ProofSection: React.FC = () => {
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
    <div
        className="min-h-screen w-full flex flex-col lg:flex-row items-start justify-between mt-20 gap-8 pr-4 lg:pr-8"
        // style={{
        //   backgroundImage: "url('/backgroundImages/landing-feature-bg.svg')",
        //   backgroundSize: 'cover',
        //   backgroundRepeat: 'no-repeat',
        //   backgroundPosition: 'center',
        // }}
      >
      {/* Left side - Dragon Image */}
      <div className="flex flex-col justify-center w-full lg:w-1/2">
        <Image
          src="/dragons/proud-selura-logo.svg"
          alt="Proud Selura Dragon"
          width={635}
          height={606}
          className="w-full h-auto max-w-[500px] lg:max-w-[635px]"
        />
      </div>

      {/* Right side - Content */}
      <div className="flex flex-col items-start justify-center w-full lg:w-1/2">
        <div className="flex flex-col items-start justify-center pt-6 lg:pt-24">
          <h2 className="text-2xl sm:text-3xl lg:text-[45px] font-medium leading-[120%] text-[#984A2E] tracking-[0.41px] mb-6">
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
          <div className="flex flex-wrap gap-2 w-full">
            {tags.slice(0, 2).map((tag, index) => (
              <Tag key={index} className="">
                {tag}
              </Tag>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 w-full mt-2">
            {tags.slice(2, 4).map((tag, index) => (
              <Tag key={index} className="">
                {tag}
              </Tag>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 w-full mt-2">
            {tags.slice(4, 6).map((tag, index) => (
              <Tag key={index} className="">
                {tag}
              </Tag>
            ))}
          </div>
          <div className="w-auto mt-2">
            <Tag className="w-full text-center">
              {tags[6]}
            </Tag>
          </div>
        </div>

        <div className="flex justify-center lg:justify-start items-center mt-10 w-full">
          <Button size="lg" className="w-full sm:w-auto">
            Start My Scan
          </Button>
        </div>
      </div>
    </div>
    </section>

  );
};

export default ProofSection;