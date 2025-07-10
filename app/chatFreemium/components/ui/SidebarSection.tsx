// components/ui/SidebarSection.tsx
import React from "react";
import SidebarItem from "./SidebarItem";
import { SidebarItem as SidebarItemType, PopupPosition } from "@/types/sidebar";

interface SidebarSectionProps {
  title?: string;
  items: SidebarItemType[];
  showSeeAll?: boolean;
  showAll?: boolean;
  maxVisibleItems?: number;
  onItemClick?: (id: string) => void;
  onSeeAllClick?: () => void;
  onShowPopup?: (id: string, position: PopupPosition) => void;
  onHidePopup?: () => void;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({
  title,
  items,
  showSeeAll,
  showAll = false,
  maxVisibleItems = 3,
  onItemClick,
  onSeeAllClick,
  onShowPopup,
  onHidePopup
}) => {
  const visibleItems = showAll ? items : items.slice(0, maxVisibleItems);
  const totalItemsCount = items.length;
  const canToggleVisibility = totalItemsCount > maxVisibleItems;

  return (
    <div className="mb-4">
      {title !== 'Favourites' && (
        <div
          // Added sticky positioning and z-index for the title
          className="sticky top-0 z-10 flex gap-2 pl-5 pb-2 pt-3 text-[#FFCD38] text-[12px] leading-[160%] font-[500] backdrop-blur-sm"
        >
          {title}
        </div>
      )}
      <div className="flex flex-col items-center justify-center pl-3 pb-4">
        {visibleItems.map((item) => (
          <SidebarItem
            key={item.id}
            item={item}
            onItemClick={onItemClick}
            onShowPopup={onShowPopup}
            onHidePopup={onHidePopup}
          />
        ))}
      </div>

      {showSeeAll && canToggleVisibility && !showAll && (
        <div
          className="flex items-center justify-center text-[12px] leading-[160%] font-[500] text-[#FFCD38] cursor-pointer hover:opacity-80 transition-opacity"
          onClick={onSeeAllClick}
        >
          See all ({totalItemsCount})
        </div>
      )}

      {showSeeAll && canToggleVisibility && showAll && (
        <div
          className="flex items-center justify-center text-[12px] leading-[160%] font-[500] text-[#FFCD38] cursor-pointer hover:opacity-80 transition-opacity"
          onClick={onSeeAllClick}
        >
          Show less
        </div>
      )}
    </div>
  );
};

export default SidebarSection;