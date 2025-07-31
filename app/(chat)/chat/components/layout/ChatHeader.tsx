// components/layout/ChatHeader.tsx
import React from 'react';
import Image from 'next/image';
import NewChatDropdown from '../ui/NewChatDropDown';
import { time } from 'console';

interface ChatHeaderProps {
  onMenuClick?: () => void;
  timeLeft?: string;
  onNewChatClick?: () => void;
  // You might pass specific props for the dropdown content later
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ onMenuClick, timeLeft, onNewChatClick }) => { // ADD timeLeft here
  return (
    <div className="w-full flex justify-between px-4 pt-3 items-start">
      {/* Menu (left) */}
      <div className="flex-shrink-0 ">
        <Image className='cursor-pointer fixed md:left-[290px] left-[34px] top-7 z-20' src="/icons/Menu.svg" alt="Menu" width={40} height={40} onClick={onMenuClick} />
      </div>
      { timeLeft && ( 
       <div className="flex items-center gap-2">
        <span className="text-[18px] font-semibold">Time left:</span>
        <span className="text-[18px] font-semibold text-[#FFCD38]">{timeLeft}</span>
      </div>
      )}

      {/* New Chat (right) */}
      <div className="flex-shrink-0 fixed right-[34px] top-7 z-20">
        <NewChatDropdown onNewChatClick={onNewChatClick} />
      </div>
    </div>
  );
};

export default ChatHeader;