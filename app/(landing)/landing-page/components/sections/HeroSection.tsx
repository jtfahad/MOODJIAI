// components/sections/HeroSection.tsx
import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] mt-10 lg:mt-20">
      {/* Hero Logo */}
      <div className="absolute top-10 lg:top-20 left-1/2 transform -translate-x-1/2 z-10">
        <Image
          src="/logos/SELURA.svg"
          alt="Selura Logo"
          width={1200}
          height={200}
          className="mx-auto mt-10 w-auto h-auto max-w-[300px] sm:max-w-[600px] lg:max-w-[1200px]"
        />
      </div>

      {/* Hero Dragon */}
      <div className="absolute top-20 lg:top-40 left-1/2 transform -translate-x-1/2 z-20">
        <Image
          src="/dragons/landing-hero-selura.svg"
          alt="Selura Dragon"
          width={400}
          height={441}
          className="mx-auto mt-10 w-auto h-auto max-w-[250px] sm:max-w-[350px] lg:max-w-[400px]"
        />
      </div>

      {/* Hero Text */}
      <div className="absolute bottom-[-117px] left-0 right-0 flex flex-col items-center justify-center bg-gradient-to-t from-white to-transparent p-6 z-30">
        <div className="text-center max-w-4xl px-4">
          <p className="text-2xl sm:text-3xl lg:text-[45px] font-normal leading-[120%] tracking-[0.41px] text-[#984A2E] mb-1">
            You&apos;re not asking for too much.
          </p>
          <p className="text-2xl sm:text-3xl lg:text-[45px] font-bold leading-[120%] tracking-[0.41px] text-[#984A2E]">
            You&apos;re just asking the wrong mirror.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;