import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { SidebarItem as SidebarItemType, PopupPosition } from "@/types/sidebar";

interface SidebarItemProps {
  item: SidebarItemType;
  onItemClick?: (id: string) => void;
  onShowPopup?: (event: React.MouseEvent, id: string, category: string) => void;
  onHidePopup?: () => void;
  isEditing: boolean;
  onRenameComplete: (id: string, newName: string) => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  item,
  onItemClick,
  onShowPopup,
  onHidePopup,
  isEditing,
  onRenameComplete,
}) => {
  const [editedTitle, setEditedTitle] = useState(item.title);
  const inputRef = useRef<HTMLInputElement>(null);
  // NEW: State to track if the input has already been focused/selected for the current editing session
  const [hasFocused, setHasFocused] = useState(false);

  // Effect to focus the input when editing starts and revert if editing stops
  useEffect(() => {
    if (isEditing && inputRef.current && !hasFocused) {
      // Only focus and select if it's the start of an editing session
      inputRef.current.focus();
      inputRef.current.select();
      setHasFocused(true); // Mark as focused
    } else if (!isEditing && hasFocused) {
      // Reset hasFocused when editing stops
      setHasFocused(false);
      // Revert editedTitle if editing is cancelled or completed elsewhere
      if (editedTitle !== item.title) {
        setEditedTitle(item.title);
      }
    }
  }, [isEditing, item.title, editedTitle, hasFocused]); // Dependencies for useEffect

  // Also, update `editedTitle` state when the `item.title` prop changes
  // This is crucial if the parent component updates the `item.title` directly
  // (e.g., after a rename operation is completed and the data is refreshed).
  useEffect(() => {
    setEditedTitle(item.title);
  }, [item.title]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(e.target.value);
  };

  const handleRenameSubmit = () => {
    if (isEditing) {
      // Ensure the rename is only completed if the name has actually changed
      // or if it's explicitly being set to an empty string (which should revert to default)
      const trimmedEditedTitle = editedTitle.trim();
      const originalTitle = item.title.trim();

      if (trimmedEditedTitle !== originalTitle || trimmedEditedTitle === '') {
        onRenameComplete(item.id, editedTitle);
      } else {
        // If the name hasn't changed, but we were in editing mode, just exit gracefully
        onRenameComplete(item.id, item.title); // Pass original title to signal no change needed
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      inputRef.current?.blur(); // Blur the input, which will trigger handleRenameSubmit
    }
  };

  const handleMenuClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation(); // Prevent item click when menu is clicked
    if (onShowPopup) {
      const rect = e.currentTarget.getBoundingClientRect();
      const sidebarWidth = 256;
      onShowPopup(e, item.id, 'default');
    }
  };

  return (
    <div
      className={`group w-full h-[40px] flex justify-center items-center gap-[8px] rounded-[80px] p-[8px] pl-4 hover:bg-[#C0C0C033]/30 cursor-pointer transition-all duration-200 relative
        ${isEditing ? 'bg-white/10' : ''} `}
      onClick={() => {
        if (!isEditing) {
          onItemClick?.(item.id);
          onHidePopup?.();
        }
      }}
    >
      
    {
      item.icon ? (
        <Image
          src={item.icon || "/moods/Zanvarion.svg"}
          alt={item.title || "Sidebar item"}
          width={32}
          height={32}
          className="flex-shrink-0"
        />
      ) : (
        <span
          className="w-[22px] h-[22px] rounded-full flex-shrink-0"
          style={{ backgroundColor: item.color }}
        />
      )
    }
      
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={editedTitle}
          onChange={handleChange}
          onBlur={handleRenameSubmit}
          onKeyDown={handleKeyDown}
          className="bg-transparent border border-gray-600 rounded px-1 py-0.5 text-white text-[14px] font-[400] leading-[17.52px] outline-none flex-1 min-w-0"
        />
      ) : (
        <span className="text-[14px] font-[400] leading-[17.52px] text-white truncate flex-1">
          {item.title}
        </span>
      )}
      {item.hasMenu && !isEditing && (
        <span
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer flex-shrink-0 p-1"
          onClick={handleMenuClick}
        >
          <Image src="/icons/Dots.png" alt="menu" width={20} height={20} />
        </span>
      )}
    </div>
  );
};

export default SidebarItem;