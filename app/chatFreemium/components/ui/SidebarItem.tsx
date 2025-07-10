import React from "react";
import Image from "next/image";
import { SidebarItem as SidebarItemType, PopupPosition } from "@/types/sidebar";

interface SidebarItemProps {
  item: SidebarItemType;
  onItemClick?: (id: string) => void;
  onShowPopup?: (id: string, position: PopupPosition) => void;
  onHidePopup?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  item,
  onItemClick,
  onShowPopup,
  onHidePopup
}) => {
  const handleMenuClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation(); // Prevent item click when menu is clicked
    if (onShowPopup) {
      const rect = e.currentTarget.getBoundingClientRect();
      // Calculate position to the right of the sidebar
      // Assuming sidebar has a fixed width of 256px (w-64)
      const sidebarWidth = 256;
      onShowPopup(item.id, {
        top: rect.top,
        left: sidebarWidth + 10 // Position to the right of the sidebar, with a 10px gap
      });
    }
  };

  return (
    <div
      className="group w-full h-[40px] flex justify-center items-center gap-[8px] rounded-[80px] p-[8px] pl-4 hover:bg-white/5 hover:shadow-lg hover:shadow-[#00000040] hover:backdrop-blur-[20px] cursor-pointer transition-all duration-200 relative"
      onClick={() => {
        onItemClick?.(item.id);
        onHidePopup?.(); // Hide popup when another item is clicked
      }}
    >
      <span
        className="w-[22px] h-[22px] rounded-full flex-shrink-0"
        style={{ backgroundColor: item.color }}
      />
      <span className="text-[14px] font-[400] leading-[17.52px] text-white truncate flex-1">
        {item.title}
      </span>
      {item.hasMenu && (
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