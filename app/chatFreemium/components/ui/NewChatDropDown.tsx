// components/ui/NewChatDropdown.tsx
import React from 'react';
import Image from 'next/image';

interface NewChatDropdownProps {
  onNewChatClick?: () => void;
  onZenvarionClick?: () => void;
}

const NewChatDropdown: React.FC<NewChatDropdownProps> = ({
  onNewChatClick,
  onZenvarionClick,
}) => {
  return (
    <div
      className="w-36 md:w-[158px] h-[180px] md:h-[210px] p-[1px] rounded-lg" // Adjusted width and height for mobile
      style={{
        background:
          'linear-gradient(1.26deg, rgba(249, 188, 46, 0.2) 17.18%, rgba(226, 154, 30, 0.2) 25.06%, rgba(255, 205, 56, 0.2) 35.15%, #F0AF30 60.52%, #E29A1E 66.82%, #FFCD38 74.3%, #DD931A 76.65%)',
      }}
    >
      <div className="w-full h-full rounded-lg bg-[#121212] p-2 md:p-4"> {/* Adjusted padding */}
        {/* New Chat Button */}
        <div className="flex items-center justify-between cursor-pointer text-sm md:text-[14px]" onClick={onNewChatClick}>
          <div className="flex items-center gap-1 md:gap-2">
            <Image src="/icons/Wand.png" alt="New Chat" width={14} height={14} className="md:w-4 md:h-4 w-[14px] h-[14px]" /> {/* Smaller icon for mobile */}
            <span className="font-[400] text-white/80">New Chat</span>
          </div>
          <Image src="/icons/ArrowDown.png" alt="Arrow Down" width={6} height={3} className="md:w-2 md:h-1 w-[6px] h-[3px]" /> {/* Smaller icon for mobile */}
        </div>

        {/* Zenvarion Option */}
        <div className="flex items-center justify-start gap-1 md:gap-2 mt-1 md:mt-2 cursor-pointer text-sm md:text-[14px]" onClick={onZenvarionClick}>
          <Image src="/moods/Zanvarion.svg" alt="Zenvarion" width={24} height={24} className="md:w-8 md:h-8 w-6 h-6" />
          <span className="font-[400] text-white/80">Zenvarion</span>
        </div>

        {/* Locked Options (Kairos, Lumeria, Selura) */}
        <div className="flex items-center justify-between mt-1 md:mt-2 cursor-not-allowed text-sm md:text-[14px]">
          <div className="flex items-center gap-1 md:gap-2">
            <Image src="/moods/Karios.svg" alt="karios" width={24} height={24} className="md:w-8 md:h-8 w-6 h-6" />
            <span className="font-[400] text-[#6E6E6E]">Kairos</span>
          </div>
          <Image src="/icons/Unlock.png" alt="Unlock" width={18} height={18} className="md:w-6 md:h-6 w-[18px] h-[18px]" />
        </div>
        <div className="flex items-center justify-between mt-1 md:mt-2 cursor-not-allowed text-sm md:text-[14px]">
          <div className="flex items-center gap-1 md:gap-2">
            <Image src="/moods/Lumeria.svg" alt="Lumeria" width={24} height={24} className="md:w-8 md:h-8 w-6 h-6" />
            <span className="font-[400] text-[#6E6E6E]">Lumeria</span>
          </div>
          <Image src="/icons/Unlock.png" alt="Unlock" width={18} height={18} className="md:w-6 md:h-6 w-[18px] h-[18px]" />
        </div>
        <div className="flex items-center justify-between mt-1 md:mt-2 cursor-not-allowed text-sm md:text-[14px]">
          <div className="flex items-center gap-1 md:gap-2">
            <Image src="/moods/Selura.svg" alt="Selura" width={24} height={24} className="md:w-8 md:h-8 w-6 h-6" />
            <span className="font-[400] text-[#6E6E6E]">Selura</span>
          </div>
          <Image src="/icons/Unlock.png" alt="Unlock" width={18} height={18} className="md:w-6 md:h-6 w-[18px] h-[18px]" />
        </div>
      </div>
    </div>
  );
};

export default NewChatDropdown;