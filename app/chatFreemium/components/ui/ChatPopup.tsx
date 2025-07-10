// components/ui/ChatPopup.tsx
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { PopupPosition } from "@/types/sidebar";

interface ChatPopupProps {
  isVisible: boolean;
  position: PopupPosition;
  chatId: string;
  onRemove: (id: string) => void;
  onHide: (id: string) => void;
}

const ChatPopup: React.FC<ChatPopupProps> = ({
  isVisible,
  position,
  chatId,
  onRemove,
  onHide
}) => {
  const popupRef = useRef<HTMLDivElement>(null);

  // Effect to handle clicks outside the popup
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isVisible && popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onHide(chatId);
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible, chatId, onHide]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer div for the gradient border effect and backdrop-filter */}
      <div
        ref={popupRef} // Attach ref here
        className="fixed z-50 p-[1px] rounded-[10px]" // p-[1px] creates the 1px border visually
        style={{
          top: position.top,
          left: position.left,
          width: '180px', // Fixed width from Figma
          height: '72px', // Fixed height from Figma
          // The background of THIS div IS the gradient for the border.
          background: `linear-gradient(1.26deg, rgba(249, 188, 46, 0.2) 17.18%, rgba(226, 154, 30, 0.2) 25.06%, rgba(255, 205, 56, 0.2) 35.15%, #F0AF30 60.52%, #E29A1E 66.82%, #FFCD38 74.3%, #DD931A 76.65%)`,
          // Apply backdrop-filter here. It affects content *behind* this div.
          backdropFilter: 'blur(24px)', // Figma's blur value
          // Important: We DON'T set a solid background color here,
          // as it would cover the gradient. The inner div will have the solid background.
        }}
      >
        {/* Inner div for the actual content and main background color */}
        <div
          className="w-full h-full rounded-[9px] flex flex-col justify-center items-center gap-[4px] bg-[#121212]" // bg-[#121212] is the solid background color
        >
          <button
            onClick={() => {
              onRemove(chatId);
              onHide(chatId);
            }}
            className="w-full flex items-center gap-3 px-2 py-1 text-[14px] text-red-400 hover:bg-red-500/10 transition-colors rounded-md justify-start"
          >
            <Image src="/icons/Bin.svg" alt="remove" width={16} height={16} />
            Remove
          </button>
          <button
            onClick={() => onHide(chatId)}
            className="w-full flex items-center gap-3 px-2 py-1 text-[14px] text-white hover:bg-white/10 transition-colors rounded-md justify-start"
          >
            <Image src="/icons/HideEye.svg" alt="hide" width={16} height={16} />
            Hide from sidebar
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatPopup;