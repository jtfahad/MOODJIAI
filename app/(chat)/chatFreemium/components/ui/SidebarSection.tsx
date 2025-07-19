// components/ui/SidebarSection.tsx
import React from "react";
import { SidebarItem as SidebarItemType, PopupPosition } from "@/types/sidebar";
import SidebarItem from "./SidebarItem";

interface SidebarSectionProps {
  title?: string;
  items: SidebarItemType[];
  showSeeAll?: boolean;
  showAll?: boolean;
  maxVisibleItems?: number;
  onItemClick?: (id: string) => void;
  onSeeAllClick?: () => void;
  // UPDATED: Now expects an event to get position for the popup
  onShowPopup?: (event: React.MouseEvent, id: string, category: string) => void;
  onHidePopup?: () => void;
  // NEW PROPS: For inline renaming functionality
  editingChatId: string | null; // ID of the chat currently being edited
  onRenameComplete: (id: string, newName: string) => void; // Callback for when rename is finished
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
  onHidePopup,
  // NEW: Destructure the new props
  editingChatId,
  onRenameComplete,
}) => {
  const visibleItems = showAll ? items : items.slice(0, maxVisibleItems);
  const totalItemsCount = items.length;
  const canToggleVisibility = totalItemsCount > maxVisibleItems;
  const category = title ? title.toLowerCase() : 'default'; // Infer category from title

  return (
    <div className="mb-4">
      {title !== 'Favorites' && (
        <div
          className="sticky top-0 z-10 flex gap-2 pl-5 pb-2 pt-3 text-[#BCBCBC] text-[12px] leading-[160%] font-[500] backdrop-blur-sm"
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
            // UPDATED: Pass event, id, and category to onShowPopup
            onShowPopup={(e) => onShowPopup && onShowPopup(e, item.id, category)}
            onHidePopup={onHidePopup}
            // NEW: Pass editing state and rename complete handler to SidebarItem
            isEditing={editingChatId === item.id}
            onRenameComplete={onRenameComplete}
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