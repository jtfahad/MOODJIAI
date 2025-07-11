// components/ui/NewChatDropdown.tsx
import React, { useState } from 'react'; // Removed useRef, useEffect as they are no longer needed
import Image from 'next/image';

interface NewChatDropdownProps {
  onNewChatClick?: () => void; // Optional: for the primary "New Chat" action itself
  onZenvarionClick?: () => void; // Click handler for Zenvarion option
  // You can add specific handlers for Kairos, Lumeria, Selura if they become active
}

const NewChatDropdown: React.FC<NewChatDropdownProps> = ({
  onNewChatClick,
  onZenvarionClick,
}) => {
  // By default, it must be opened
  const [isOpen, setIsOpen] = useState(true);
  // The dropdownRef and useEffect for outside click detection are intentionally removed
  // to prevent the dropdown from closing when clicking anywhere else.

  // Function to toggle the dropdown's open/close state
  const handleToggleDropdown = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent click from propagating (good practice, though less critical now)
    setIsOpen(prev => !prev);
  };

  // Calculate the approximate height of the "New Chat" button when closed.
  // This value needs to match the actual height of the button row with its new py-3 px-3 padding.
  // py-3 corresponds to 12px padding top and bottom. A typical text line height + icon might be ~20px.
  // So, 12px + 12px + ~20px = ~44px. Let's adjust slightly for safety.
  const CLOSED_HEIGHT = '48px'; // Adjusted based on py-3 px-3. Fine-tune if necessary.

  // The full open height, matching your original fixed height for the whole dropdown.
  // Make sure this is sufficient to show all content without scroll.
  const OPEN_HEIGHT = '210px'; // Remains same as before, ensures full content is visible.

  return (
    <div
      // The ref={dropdownRef} is removed as it's no longer used for outside click detection.
      className="w-36 md:w-[158px] p-[1px] rounded-lg overflow-hidden transition-all duration-300 ease-in-out"
      style={{
        background:
          'linear-gradient(1.26deg, rgba(249, 188, 46, 0.2) 17.18%, rgba(226, 154, 30, 0.2) 25.06%, rgba(255, 205, 56, 0.2) 35.15%, #F0AF30 60.52%, #E29A1E 66.82%, #FFCD38 74.3%, #DD931A 76.65%)',
        maxHeight: isOpen ? OPEN_HEIGHT : CLOSED_HEIGHT, // Dynamically set max-height
      }}
    >
      <div className="w-full h-full rounded-lg bg-[#121212] flex flex-col">
        {/* New Chat Button (Always Visible at the top of the internal flex container) */}
        <div
          // Applied your new padding: py-3 px-3
          className="flex items-center justify-between cursor-pointer text-sm md:text-[14px] py-3 px-3"
          onClick={handleToggleDropdown} // Toggle dropdown on click
        >
          <div className="flex items-center gap-1 md:gap-2">
            <Image src="/icons/Wand.png" alt="New Chat" width={14} height={14} className="md:w-4 md:h-4 w-[14px] h-[14px]" />
            <span className="font-[400] text-white/80">New Chat</span>
          </div>
          {/* Arrow icon rotates based on isOpen state */}
          <Image
            src="/icons/ArrowDown.png"
            alt="Arrow Down"
            width={6}
            height={3}
            className={`md:w-2 md:h-1 w-[6px] h-[3px] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>

        {/* Separator Line: You commented this out in your provided code, so it's removed here too. */}
        {/* If you want it back when the dropdown is open, uncomment this line: */}
        {/* {isOpen && <div className="border-b border-[#535353] mx-2 md:mx-4 my-1" />} */}


        {/* Dropdown Options Container */}
        <div
          // Applied your new padding: p-2 px-3 pt-0
          className="flex flex-col p-2 px-3 pt-0"
        >
          {/* Zenvarion Option */}
          <div
            className="flex items-center justify-start gap-1 md:gap-2 cursor-pointer text-sm md:text-[14px] py-1 hover:bg-white/10 transition-colors rounded-md"
            onClick={() => {
              onZenvarionClick?.();
              setIsOpen(false); // Close dropdown after selection
            }}
          >
            <Image src="/moods/Zanvarion.svg" alt="Zenvarion" width={24} height={24} className="md:w-8 md:h-8 w-6 h-6" />
            {/* Applied your new text color: text-white */}
            <span className="font-[400] text-white">Zenvarion</span>
          </div>

          {/* Locked Options (Kairos, Lumeria, Selura) */}
          <div className="flex items-center justify-between cursor-not-allowed text-sm md:text-[14px] py-1">
            <div className="flex items-center gap-1 md:gap-2">
              <Image src="/moods/Karios.svg" alt="karios" width={24} height={24} className="md:w-8 md:h-8 w-6 h-6" />
              <span className="font-[400] text-[#6E6E6E]">Kairos</span>
            </div>
            <Image src="/icons/Unlock.png" alt="Unlock" width={18} height={18} className="md:w-6 md:h-6 w-[18px] h-[18px]" />
          </div>
          <div className="flex items-center justify-between cursor-not-allowed text-sm md:text-[14px] py-1">
            <div className="flex items-center gap-1 md:gap-2">
              <Image src="/moods/Lumeria.svg" alt="Lumeria" width={24} height={24} className="md:w-8 md:h-8 w-6 h-6" />
              <span className="font-[400] text-[#6E6E6E]">Lumeria</span>
            </div>
            <Image src="/icons/Unlock.png" alt="Unlock" width={18} height={18} className="md:w-6 md:h-6 w-[18px] h-[18px]" />
          </div>
          <div className="flex items-center justify-between cursor-not-allowed text-sm md:text-[14px] py-1">
            <div className="flex items-center gap-1 md:gap-2">
              <Image src="/moods/Selura.svg" alt="Selura" width={24} height={24} className="md:w-8 md:h-8 w-6 h-6" />
              <span className="font-[400] text-[#6E6E6E]">Selura</span>
            </div>
            <Image src="/icons/Unlock.png" alt="Unlock" width={18} height={18} className="md:w-6 md:h-6 w-[18px] h-[18px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewChatDropdown;