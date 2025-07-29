// components/sections/HeroSection.tsx
import React from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  logoSrc: string;
  dragonSrc: string;
  textColor?: string; // optional, fallback provided
}

const HeroSection: React.FC<HeroSectionProps> = ({
  logoSrc,
  dragonSrc,
  textColor = '#984A2E',
}) => {
  return (
    <section className="h-screen w-full relative flex items-center justify-center overflow-hidden">
      {/* Hero Logo */}
      <div className="absolute top-[22%] sm:top-[12%] left-1/2 transform -translate-x-1/2 z-10">
        <Image
          src={logoSrc}
          alt="Hero Logo"
          width={1200}
          height={200}
          className="mx-auto w-auto h-auto max-w-[350px] sm:max-w-[600px] lg:max-w-[1000px] xl:max-w-[1200px]"
        />
      </div>

      {/* Hero Dragon */}
      <div className="absolute top-[30%] sm:top-[27%] left-1/2 transform -translate-x-1/2 z-20">
        <Image
          src={dragonSrc}
          alt="Hero Dragon"
          width={600}
          height={441}
          className="mx-auto w-auto h-auto max-w-[300px] sm:max-w-[500px] lg:max-w-[600px]"
        />
      </div>

      {/* Hero Text */}
      <div className="absolute bottom-16 left-0 right-0 p-8 bg-gradient-to-t from-white/90 to-transparent z-30 pb-[50px]">
        <div className="text-center w-full px-4">
          <p
            className={`text-2xl sm:text-3xl lg:text-[45px] font-normal leading-[120%] tracking-[0.41px] mb-1`}
            style={{ color: textColor }}
          >
            You&apos;re not asking for too much.
          </p>
          <p
            className={`text-2xl sm:text-3xl lg:text-[45px] font-bold leading-[120%] tracking-[0.41px]`}
            style={{ color: textColor }}
          >
            You&apos;re just asking the wrong mirror.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
