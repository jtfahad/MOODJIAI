import React from 'react';
import Image from 'next/image';
import { GradientButton } from '../ui/GradientButton';
import { FeatureCard } from '../ui/FeaturedCard';

interface FeaturesSectionProps {
  textColor?: string;
  buttonBg?: string;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ textColor = '#984A2E', buttonBg }) => {
  const features = [
    {
      icon: '/icons/FinalText.png',
      title: 'Final Text',
      description: 'Closure or emotional bait?'
    },
    {
      icon: '/icons/Compatibility.png',
      title: 'Compatibility',
      description: 'are you co-regulating or performing?'
    },
    {
      icon: '/icons/InnerChild.png',
      title: 'Inner Child',
      description: 'did they soothe her or trigger her?'
    },
    {
      icon: '/icons/Shadow.png',
      title: 'Shadow',
      description: 'what part of you chose this dynamic?'
    },
    {
      icon: '/icons/DatingProfile.png',
      title: 'Dating Profile',
      description: 'does it attract real love or just attention?'
    }
  ];

  return (
    <section className="w-full">
      <div>
        {/* Header */}
        <div className="flex flex-col items-center justify-center pt-12 px-4">
          <div className="text-center max-w-2xl">
            <p className="text-lg font-normal leading-[160%] text-[#0C2738]">
              Is this love… or a loop? 💔
            </p>
            <p className="text-lg font-normal leading-[160%] text-[#0C2738]">
              You don&apos;t need to guess.
            </p>
            <p className="text-lg font-semibold leading-[160%] text-[#0C2738]">
              MoodJi tells the truth faster than your trauma does.
            </p>
          </div>

          <div className="mt-10">
            <GradientButton size="sm" background={buttonBg}>
              Start My Scan
            </GradientButton>
          </div>
        </div>

        {/* Features Title */}
        <div className="flex flex-col items-center justify-center mt-20 px-4">
          <Image
            src="/icons/Gem.svg"
            alt="Gem icon"
            width={43}
            height={36}
            className="mx-auto"
          />
          <h2
            className="text-2xl sm:text-3xl lg:text-[45px] font-normal leading-[120%] tracking-[0.41px] mt-4"
            style={{ color: textColor }}
          >
            Benefits and features
          </h2>
        </div>

        {/* Features Grid */}
        <div className="w-full flex flex-wrap justify-center items-center mt-10 gap-5 px-4">
          {features.map((feature, index) => (
            <div key={index} className="flex justify-center w-full sm:w-auto">
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
