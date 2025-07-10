'use client';
import React, { useState } from "react";
import Image from "next/image";
import SidebarSection from "../ui/SidebarSection";
import ProgressBar from "../ui/Progressbar";
import MenuButton from "../ui/MenuButton";
import ChatPopup from "../ui/ChatPopup";
import { PopupPosition } from "@/types/sidebar";

// Define SidebarItem type locally to ensure hasMenu is always boolean (not undefined)
type SidebarItem = {
  id: string;
  title: string;
  color: string;
  icon: string;
  hasMenu: boolean;
};
import UpgradeButton from "../ui/UpgradeButton";

// Define a type for the sidebar item's category for better type safety
type SidebarCategory = 'favorites' | 'today' | 'yesterday' | 'previous';

// Mock data with longer titles for testing
const MOCK_SIDEBAR_DATA = {
  favorites: [
    { id: "1", title: "Investment Opportunities and Market Analysis", color: "#84764C", icon: "/moods/Zanvarion.svg", hasMenu: true },
    { id: "2", title: "Financial Independence Planning Strategy", color: "#744C84", icon: "/moods/Karios.svg", hasMenu: true },
    { id: "3", title: "Cryptocurrency Investment Research", color: "#84764C", icon: "/moods/Lumeria.svg", hasMenu: true },
    { id: "4", title: "Real Estate Investment Fundamentals", color: "#84764C", icon: "/moods/Selura.svg", hasMenu: true },
    { id: "5", title: "Stock Market Analysis and Trading", color: "#84764C", icon: "/moods/Zanvarion.svg", hasMenu: true },
    { id: "6", title: "Passive Income Generation Methods", color: "#744C84", icon: "/moods/Karios.svg", hasMenu: true },
    { id: "7", title: "Portfolio Diversification Strategies", color: "#84764C", icon: "/moods/Lumeria.svg", hasMenu: true },
    { id: "8", title: "Tax Optimization and Planning", color: "#744C84", icon: "/moods/Selura.svg", hasMenu: true },
  ],
  today: [
    { id: "9", title: "Morning Market Updates and Analysis", color: "#84764C", icon: "/moods/Zanvarion.svg", hasMenu: true },
    { id: "10", title: "Passive Income Strategies for Beginners", color: "#744C84", icon: "/moods/Karios.svg", hasMenu: true },
    { id: "11", title: "Cryptocurrency News and Trends", color: "#84764C", icon: "/moods/Lumeria.svg", hasMenu: true },
    { id: "12", title: "Personal Finance Management Tips", color: "#744C84", icon: "/moods/Selura.svg", hasMenu: true },
    { id: "13", title: "Investment Portfolio Review Session", color: "#84764C", icon: "/moods/Zanvarion.svg", hasMenu: true },
    { id: "14", title: "Economic Indicators and Market Impact", color: "#744C84", icon: "/moods/Karios.svg", hasMenu: true },
    { id: "15", title: "Retirement Planning Discussion", color: "#84764C", icon: "/moods/Lumeria.svg", hasMenu: true },
  ],
  yesterday: [
    { id: "16", title: "Stock Market Performance Analysis", color: "#84764C", icon: "/moods/Zanvarion.svg", hasMenu: true },
    { id: "17", title: "Passive Income Research and Planning", color: "#744C84", icon: "/moods/Karios.svg", hasMenu: true },
    { id: "18", title: "Investment Opportunities in Tech Sector", color: "#84764C", icon: "/moods/Lumeria.svg", hasMenu: true },
    { id: "19", title: "Financial Goal Setting and Tracking", color: "#744C84", icon: "/moods/Selura.svg", hasMenu: true },
    { id: "20", title: "Market Volatility and Risk Management", color: "#84764C", icon: "/moods/Zanvarion.svg", hasMenu: true },
    { id: "21", title: "Alternative Investment Options", color: "#744C84", icon: "/moods/Lumeria.svg", hasMenu: true },
  ],
};

const TOKENS = { current: 1, max: 3 };

const Sidebar: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [showAllFavorites, setShowAllFavorites] = useState(false);
  // Removed showAllToday and showAllYesterday states, as they are no longer needed for toggling
  const [sidebarData, setSidebarData] = useState(MOCK_SIDEBAR_DATA);
  // const [hiddenChatIds, setHiddenChatIds] = useState<Set<string>>(new Set());

  // State for ChatPopup
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupPosition, setPopupPosition] = useState<PopupPosition>({ top: 0, left: 0 });
  const [popupChatId, setPopupChatId] = useState<string>("");
  const [popupChatCategory, setPopupChatCategory] = useState<SidebarCategory>('today');

  // UPDATED: NEW STATE for inline renaming: Tracks which chat ID is currently being edited
  const [editingChatId, setEditingChatId] = useState<string | null>(null);


  // Helper function to find a chat item and its category
  const findChatItemAndCategory = (id: string): { item: SidebarItem | undefined; category: SidebarCategory } => {
    // Check favorites
    let foundItem = sidebarData.favorites.find(item => item.id === id);
    if (foundItem) return { item: foundItem, category: 'favorites' };
    // Check today
    foundItem = sidebarData.today.find(item => item.id === id);
    if (foundItem) return { item: foundItem, category: 'today' };
    // Check yesterday
    foundItem = sidebarData.yesterday.find(item => item.id === id);
    if (foundItem) return { item: foundItem, category: 'yesterday' };
    // If not found in any standard category, return undefined and a default category
    return { item: undefined, category: 'today' };
  };

  const handleItemClick = (id: string) => {
    // UPDATED: Only allow selection if not currently editing this specific item
    if (editingChatId !== id) {
      setSelectedItem(id);
      console.log("Sidebar: Selected item:", id);
      setPopupVisible(false); // Hide popup on item click
      // UPDATED: Exit editing mode if a new chat is clicked
      setEditingChatId(null);
    }
  };

  // UPDATED: onShowPopup now expects an event to get position
  const handleShowPopup = (event: React.MouseEvent, id: string, category: string) => {
    // UPDATED: If an item is being edited, close that edit mode before showing popup for another
    if (editingChatId && editingChatId !== id) {
        setEditingChatId(null);
    }
    // UPDATED: Ensure no edit mode when popup is shown
    setEditingChatId(null);

    // Get button's position relative to viewport
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    setPopupChatId(id);
    setPopupPosition({
      top: rect.top + 20,

      left: rect.right - 20, // Position to the right of the dots button
    });
    setPopupChatCategory(category as SidebarCategory);
    setPopupVisible(true);
    console.log("Sidebar: Showing popup for chatId:", id, "category:", category, "at position:", popupPosition);
  };


  const handleHidePopup = () => {
    setPopupVisible(false);
    console.log("Sidebar: Hiding popup");
  };

  const handleRemoveChat = (id: string) => {
    console.log("Sidebar: Attempting to remove chat:", id);
    setSidebarData(prev => {
      const newData = {
        favorites: prev.favorites.filter(item => item.id !== id),
        today: prev.today.filter(item => item.id !== id),
        yesterday: prev.yesterday.filter(item => item.id !== id),
      };
      console.log("Sidebar: New sidebarData after remove:", newData);
      return newData;
    });
    // setHiddenChatIds(prev => {
    //   const newSet = new Set(prev);
    //   newSet.delete(id);
    //   console.log("Sidebar: New hiddenChatIds after remove:", Array.from(newSet));
    //   return newSet;
    // });
    setPopupVisible(false);
    // UPDATED: Clear editing state if removed
    if (selectedItem === id) setSelectedItem(null);
    setEditingChatId(null);
  };

  // const handleHideFromSidebar = (id: string) => {
  //   console.log("Sidebar: Attempting to hide chat:", id);
  //   setHiddenChatIds(prev => {
  //     const newSet = new Set(prev).add(id);
  //     console.log("Sidebar: New hiddenChatIds after hide:", Array.from(newSet));
  //     return newSet;
  //   });
  //   setPopupVisible(false);
  //   // UPDATED: Clear editing state if hidden
  //   if (selectedItem === id) setSelectedItem(null);
  //   setEditingChatId(null);
  // };

  const handleAddToFavorites = (id: string) => {
    console.log(`Sidebar: Adding chat ${id} to favorites`);
    setSidebarData(prev => {
      const { item, category } = findChatItemAndCategory(id);
      if (!item || category === 'favorites') return prev;

      const newToday = prev.today.filter(chat => chat.id !== id);
      const newYesterday = prev.yesterday.filter(chat => chat.id !== id);

      const newFavorites = [...prev.favorites, item];

      return {
        favorites: newFavorites,
        today: newToday,
        yesterday: newYesterday,
      };
    });
    setPopupVisible(false);
    // UPDATED: Clear editing state after action
    setEditingChatId(null);
  };

  const handleRemoveFromFavorites = (id: string) => {
    console.log(`Sidebar: Removing chat ${id} from favorites`);
    setSidebarData(prev => {
      const { item } = findChatItemAndCategory(id);
      if (!item) return prev;

      const newFavorites = prev.favorites.filter(chat => chat.id !== id);
      const newToday = [...prev.today, item]; // Add back to 'today' for now

      return {
        favorites: newFavorites,
        today: newToday,
        yesterday: prev.yesterday,
      };
    });
    setPopupVisible(false);
    // UPDATED: Clear editing state after action
    setEditingChatId(null);
  };

  // UPDATED: handleRenameChat now just sets the editingChatId to trigger inline editing
  const handleRenameChat = (id: string) => {
    console.log(`Sidebar: Initiating rename for chat ${id}`);
    setEditingChatId(id); // Set the chat ID to be edited
    setPopupVisible(false); // Hide the popup immediately
  };

  // UPDATED: NEW handler called by SidebarItem when inline rename is complete
  const handleRenameChatComplete = (id: string, newName: string) => {
    console.log(`Sidebar: Completing rename for chat ${id} to: ${newName}`);
    setSidebarData(prev => {
      const trimmedName = newName.trim();
      // Revert to original name or default if new name is empty
      const finalName = trimmedName === '' ? (findChatItemAndCategory(id).item?.title || "New Chat") : trimmedName;

      const updateCategory = (items: SidebarItem[]) =>
        items.map(item => (item.id === id ? { ...item, title: finalName } : item));

      return {
        favorites: updateCategory(prev.favorites),
        today: updateCategory(prev.today),
        yesterday: updateCategory(prev.yesterday),
      };
    });
    setEditingChatId(null); // Exit editing mode
  };

  const handleSeeAllFavorites = () => {
    setShowAllFavorites(prev => !prev);
  };

  // Removed handleSeeAllToday and handleSeeAllYesterday as they are no longer needed.

  const handleSubscriptionClick = () => {
    console.log("Sidebar: Subscription clicked");
  };

  const handleSettingsClick = () => {
    console.log("Sidebar: Settings clicked");
  };

  const handleLogoutClick = () => {
    console.log("Sidebar: Log out clicked");
  };

  const handleUpgradeClick = () => {
    console.log("Sidebar: Upgrade clicked");
  };

  return (
    <div className="w-64 flex flex-col h-screen text-white relative">
      <div className="flex-shrink-0">
        <div className="flex p-6 pt-10 border-white/10">
          <Image src="/logos/MainLogo.svg" alt="LOGO" width={120} height={40} />
        </div>
        <div className="flex items-center gap-2 pl-5 pb-2 text-[14px] font-[500] leading-[17.52px] text-[#BCBCBC]">
          <Image src="/icons/Favorite.svg" alt="favourite" width={20} height={20} />
          Favourite
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
        <SidebarSection
          items={sidebarData.favorites}
          showSeeAll={true} // Explicitly enable "See All" for Favorites
          showAll={showAllFavorites}
          maxVisibleItems={3}
          onItemClick={handleItemClick}
          onShowPopup={handleShowPopup}
          onHidePopup={handleHidePopup}
          onSeeAllClick={handleSeeAllFavorites}
          title="Favorites"
          // UPDATED: Pass down the editing state and the rename completion handler
          editingChatId={editingChatId}
          onRenameComplete={handleRenameChatComplete}
        />

        <div className="border-b border-[#535353] ml-4 pt-4" />

        <SidebarSection
          title="Today"
          items={sidebarData.today}
          showSeeAll={false} // Explicitly disable "See All" for Today
          showAll={true} // Always show all for Today
          maxVisibleItems={sidebarData.today.length} // Ensure all items are rendered if showAll is true
          onItemClick={handleItemClick}
          onShowPopup={handleShowPopup}
          onHidePopup={handleHidePopup}
          onSeeAllClick={() => {}} // Pass an empty function as it won't be used
          // UPDATED: Pass down the editing state and the rename completion handler
          editingChatId={editingChatId}
          onRenameComplete={handleRenameChatComplete}
        />

        <SidebarSection
          title="Yesterday"
          items={sidebarData.yesterday}
          showSeeAll={false} // Explicitly disable "See All" for Yesterday
          showAll={true} // Always show all for Yesterday
          maxVisibleItems={sidebarData.yesterday.length} // Ensure all items are rendered if showAll is true
          onItemClick={handleItemClick}
          onShowPopup={handleShowPopup}
          onHidePopup={handleHidePopup}
          onSeeAllClick={() => {}} // Pass an empty function as it won't be used
          // UPDATED: Pass down the editing state and the rename completion handler
          editingChatId={editingChatId}
          onRenameComplete={handleRenameChatComplete}
        />
      </div>

      <div className="flex-shrink-0">
        <div className="border-b border-[#535353] ml-4 pt-4" />
        <div className="flex justify-between items-center p-4 pt-6">
          <div className="flex gap-1 pl-5 items-center">
            <Image src="/icons/Token.svg" alt="tokens" width={24} height={24} />
            <span className="text-[14px] font-[500] leading-[17.52px] text-[#FFFFFF]">
              Tokens
            </span>
          </div>
          <span className="text-[14px] font-[500] leading-[20px] text-[#FFFFFF]">
            {TOKENS.current}/{TOKENS.max}
          </span>
        </div>
        <ProgressBar
          current={TOKENS.current}
          max={TOKENS.max}
          className="w-[80%] mx-9"
        />
        <div className="flex justify-center items-center pt-3 pl-5 cursor-pointer">
         <UpgradeButton
            onClick={handleUpgradeClick}
            text="Get more Tokens"
        />
        </div>
        <div className="flex flex-col space-y-2 gap-1 mt-2 items-start w-full pl-6 mb-4">
          <MenuButton
            icon="/icons/Wallet.png"
            label="Subscription"
            onClick={handleSubscriptionClick}
            hasArrow
          />
          <MenuButton
            icon="/icons/Setting.png"
            label="Settings"
            onClick={handleSettingsClick}
          />
          <MenuButton
            icon="/icons/Logout.svg"
            label="Log out"
            onClick={handleLogoutClick}
          />
        </div>
      </div>

      <ChatPopup
        isVisible={popupVisible}
        position={popupPosition}
        chatId={popupChatId}
        chatCategory={popupChatCategory}
        onRemove={handleRemoveChat}
        onHide={handleHidePopup}
        onAddToFavorites={handleAddToFavorites}
        onRemoveFromFavorites={handleRemoveFromFavorites}
        // UPDATED: onRename now triggers the inline editing flow
        onRename={handleRenameChat}
      />
    </div>
  );
};

export default Sidebar;