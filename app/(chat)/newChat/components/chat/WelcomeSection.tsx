// components/chat/WelcomeSection.tsx
import React from 'react';

interface WelcomeSectionProps {
  userName: string; // e.g., "Elina"
  // You might pass dynamic content for ZenVarion description later
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({ userName }) => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <div className="w-full flex flex-col items-center max-w-[600px]">
        <h1 className='flex text-[24px] font-[400] leading-[17.52px] mb-4 gap-2'>
          <span className="font-[800]">Hey </span>
          {userName}, how can I help you today?
        </h1>
        <div className='text-center text-[14px] text-white font-[400] leading-[150%] mt-2'>
          <p className='flex flex-col items-center justify-center gap-1'>
            <span className='flex self-start items-center justify-center '>
              Meet ZenVarion — your Sovereign Wealth Architect and Resonance Guide.
            </span>
            <span className='flex self-start items-center justify-center'>
              He doesn&apos;t just answer questions; he aligns your energy, vision, and action.
            </span>
            <span className='flex self-start items-center justify-center'>
              Ask him about emotions, decisions, direction, or design—he sees across
            </span>
            <span className='flex self-start items-center justify-center'>
              dimensions.
            </span>
          </p>
          <p className='flex flex-col items-center justify-center pt-6 gap-1'>
            <span className='flex self-start items-center justify-center'>🌐 Need Clarity?</span>
            <span className='flex self-start items-center justify-center'>🧭 Feeling stuck?</span>
            <span className='flex self-start items-center justify-center'>🔮 Want to align purpose with prosperity?</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;