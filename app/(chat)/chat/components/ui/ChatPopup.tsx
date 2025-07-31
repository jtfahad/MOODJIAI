// components/ui/ChatPopup.tsx
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { PopupPosition } from "@/types/sidebar";

// Define a type for the sidebar item's category
type SidebarCategory = 'favorites' | 'today' | 'yesterday' | 'previous';

interface ChatPopupProps {
  isVisible: boolean;
  position: PopupPosition;
  chatId: string;
  chatCategory: SidebarCategory;
  onRemove: (id: string) => void;
  onHide: (id: string) => void;
  onAddToFavorites?: (id: string) => void;
  onRemoveFromFavorites?: (id: string) => void;
  onRename: (id: string) => void; // onRename is now REQUIRED
}

const ChatPopup: React.FC<ChatPopupProps> = ({
  isVisible,
  position,
  chatId,
  chatCategory,
  onRemove,
  onHide,
  onAddToFavorites,
  onRemoveFromFavorites,
  onRename, // This will be used to signal the parent to start editing
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

  const isFavorite = chatCategory === 'favorites';
  const favoritesOptionText = isFavorite ? "Drop from Favorites" : "Add to Favorites";
  const favoritesOptionIcon = isFavorite ? "/icons/Favorite.svg" : "/icons/Favorite.svg";
  const favoritesAction = isFavorite ? onRemoveFromFavorites : onAddToFavorites;

  return (
    <>
      <div
        ref={popupRef}
        className="fixed z-50 p-[1px] rounded-[10px] backdrop-blur-lg shadow-lg bg-white/30"
        style={{
          top: position.top,
          left: position.left,
          width: '183px',
          height: '80px',
          backdropFilter: 'blur(80px)',
        }}
      >
        <div
          className="w-full h-full rounded-[9px] flex flex-col justify-center items-center gap-[6px] p-[8px] bg-[#FFFFFF]/20 text-white"
        >
          {/* Favorites Option (Dynamic) */}
          {/* <button
            onClick={() => {
              if (favoritesAction) favoritesAction(chatId);
              onHide(chatId); // Always hide popup after action
            }}
            className="w-full flex items-center gap-3 px-2 py-1 text-[14px] text-white hover:bg-white/10 transition-colors rounded-md justify-start whitespace-nowrap tracking-[-0.5px]"
          >
            <Image src={favoritesOptionIcon} alt="favorites" width={16} height={16} />
            {favoritesOptionText}
          </button> */}

          {/* Rename Option */}
          <button
            onClick={() => {
              onRename(chatId); // Call onRename to start inline editing
              onHide(chatId); // Hide the popup immediately
            }}
            className="w-full flex items-center gap-3 px-2 py-1 text-[14px] text-white hover:bg-white/20 transition-colors rounded-md justify-start"
          >
            <Image src="/icons/PenLine.svg" alt="rename" width={16} height={16} />
            Rename
          </button>

          {/* Remove Option */}
          <button
            onClick={() => {
              onRemove(chatId);
              onHide(chatId); // Always hide popup after action
            }}
            className="w-full flex items-center gap-3 px-2 py-1 text-[14px] text-white hover:bg-red-500/20 transition-colors rounded-md justify-start"
          >
            <Image src="/icons/Bin.svg" alt="remove" width={16} height={16} />
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatPopup;