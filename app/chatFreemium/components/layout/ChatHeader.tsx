// components/layout/ChatHeader.tsx
import React from 'react';
import Image from 'next/image';
import NewChatDropdown from '../ui/NewChatDropDown'; // We'll create this next

interface ChatHeaderProps {
  onMenuClick?: () => void;
  timeLeft: string; // e.g., "00:00:00"
  onNewChatClick?: () => void; // For the "New Chat" button action
  // You might pass specific props for the dropdown content later
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ onMenuClick, timeLeft, onNewChatClick }) => {
  return (
    <div className="w-full flex justify-between px-4 pt-3 items-start"> {/* Adjusted items-start */}
      {/* Menu (left) */}
      <div className="flex-shrink-0">
        <Image className='cursor-pointer' src="/icons/Menu.png" alt="Menu" width={40} height={40} onClick={onMenuClick} />
      </div>

      {/* Time Left (center) */}
      <div className="flex items-center gap-2"> {/* Removed pl-24, let flexbox handle it */}
        <span className="text-[18px] font-semibold">Time left:</span>
        <span className="text-[18px] font-semibold text-[#FFCD38]">{timeLeft}</span>
      </div>

      {/* New Chat (right) - This will be our NewChatDropdown */}
      <div className="flex-shrink-0">
        <NewChatDropdown onNewChatClick={onNewChatClick} />
      </div>
    </div>
  );
};

export default ChatHeader;