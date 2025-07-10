'use client';
import React, { useState } from "react";
import Image from "next/image";
import SidebarSection from "../ui/SidebarSection";
import ProgressBar from "../ui/Progressbar";
import MenuButton from "../ui/MenuButton";
import ChatPopup from "../ui/ChatPopup";
import { SidebarItem, PopupPosition } from "@/types/sidebar";
import UpgradeButton from "../ui/UpgradeButton";

// Mock data with longer titles for testing
const MOCK_SIDEBAR_DATA = {
  favourites: [
    { id: "1", title: "Investment Opportunities and Market Analysis", color: "#84764C", hasMenu: true },
    { id: "2", title: "Financial Independence Planning Strategy", color: "#744C84", hasMenu: true },
    { id: "3", title: "Cryptocurrency Investment Research", color: "#84764C", hasMenu: true },
    // { id: "4", title: "Real Estate Investment Fundamentals", color: "#744C84", hasMenu: true },
    // { id: "5", title: "Stock Market Analysis and Trading", color: "#84764C", hasMenu: true },
    // { id: "6", title: "Passive Income Generation Methods", color: "#744C84", hasMenu: true },
    // { id: "7", title: "Portfolio Diversification Strategies", color: "#84764C", hasMenu: true },
    // { id: "8", title: "Tax Optimization and Planning", color: "#744C84", hasMenu: true },
  ],
  today: [
    { id: "9", title: "Morning Market Updates and Analysis", color: "#84764C", hasMenu: true },
    { id: "10", title: "Passive Income Strategies for Beginners", color: "#744C84", hasMenu: true },
    { id: "11", title: "Cryptocurrency News and Trends", color: "#84764C", hasMenu: true },
    // { id: "12", title: "Personal Finance Management Tips", color: "#744C84", hasMenu: true },
    // { id: "13", title: "Investment Portfolio Review Session", color: "#84764C", hasMenu: true },
    // { id: "14", title: "Economic Indicators and Market Impact", color: "#744C84", hasMenu: true },
    // { id: "15", title: "Retirement Planning Discussion", color: "#84764C", hasMenu: true },
  ],
  yesterday: [
    { id: "16", title: "Stock Market Performance Analysis", color: "#84764C", hasMenu: true },
    { id: "17", title: "Passive Income Research and Planning", color: "#744C84", hasMenu: true },
    { id: "18", title: "Investment Opportunities in Tech Sector", color: "#84764C", hasMenu: true },
    // { id: "19", title: "Financial Goal Setting and Tracking", color: "#744C84", hasMenu: true },
    // { id: "20", title: "Market Volatility and Risk Management", color: "#84764C", hasMenu: true },
    // { id: "21", title: "Alternative Investment Options", color: "#744C84", hasMenu: true },
  ],
};

const TOKENS = { current: 1, max: 3 };

const Sidebar: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [showAllFavourites, setShowAllFavourites] = useState(false);
  const [showAllToday, setShowAllToday] = useState(false);
  const [showAllYesterday, setShowAllYesterday] = useState(false);
  const [sidebarData, setSidebarData] = useState(MOCK_SIDEBAR_DATA);
  const [hiddenChatIds, setHiddenChatIds] = useState<Set<string>>(new Set());

  const [popupVisible, setPopupVisible] = useState(false);
  const [popupPosition, setPopupPosition] = useState<PopupPosition>({ top: 0, left: 0 });
  const [popupChatId, setPopupChatId] = useState<string>("");

  const handleItemClick = (id: string) => {
    setSelectedItem(id);
    console.log("Sidebar: Selected item:", id);
    setPopupVisible(false);
  };

  const handleShowPopup = (id: string, position: PopupPosition) => {
    setPopupChatId(id);
    setPopupPosition(position);
    setPopupVisible(true);
    console.log("Sidebar: Showing popup for chatId:", id, "at position:", position);
  };

  const handleHidePopup = () => {
    setPopupVisible(false);
    console.log("Sidebar: Hiding popup");
  };

  const handleRemoveChat = (id: string) => {
    console.log("Sidebar: Attempting to remove chat:", id);
    setSidebarData(prev => {
      const newData = {
        favourites: prev.favourites.filter(item => item.id !== id),
        today: prev.today.filter(item => item.id !== id),
        yesterday: prev.yesterday.filter(item => item.id !== id),
      };
      console.log("Sidebar: New sidebarData after remove:", newData);
      return newData;
    });
    setPopupVisible(false);
    setHiddenChatIds(prev => {
      const newSet = new Set(prev);
      newSet.delete(id);
      console.log("Sidebar: New hiddenChatIds after remove:", Array.from(newSet));
      return newSet;
    });
  };

  const handleHideFromSidebar = (id: string) => {
    console.log("Sidebar: Attempting to hide chat:", id);
    setHiddenChatIds(prev => {
      const newSet = new Set(prev).add(id);
      console.log("Sidebar: New hiddenChatIds after hide:", Array.from(newSet));
      return newSet;
    });
    setPopupVisible(false);
  };

  // --- CONSOLE LOGS ADDED HERE FOR "SEE ALL" ---
  const handleSeeAllFavourites = () => {
    setShowAllFavourites(prev => {
      const newState = !prev;
      console.log("Sidebar: handleSeeAllFavourites clicked. New state:", newState);
      return newState;
    });
  };

  const handleSeeAllToday = () => {
    setShowAllToday(prev => {
      const newState = !prev;
      console.log("Sidebar: handleSeeAllToday clicked. New state:", newState);
      return newState;
    });
  };

  const handleSeeAllYesterday = () => {
    setShowAllYesterday(prev => {
      const newState = !prev;
      console.log("Sidebar: handleSeeAllYesterday clicked. New state:", newState);
      return newState;
    });
  };
  // --- END CONSOLE LOGS FOR "SEE ALL" ---

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
        <div className="flex items-center gap-2 pl-5 pb-2 text-[14px] font-[500] leading-[17.52px] text-[#FFFFFF]">
          <Image src="/icons/Favourite.png" alt="favourite" width={20} height={20} />
          Favourite
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
        <SidebarSection
          items={sidebarData.favourites.filter(item => !hiddenChatIds.has(item.id))}
          showSeeAll
          showAll={showAllFavourites}
          maxVisibleItems={3}
          onItemClick={handleItemClick}
          onShowPopup={handleShowPopup}
          onHidePopup={handleHidePopup}
          onSeeAllClick={handleSeeAllFavourites} // Pass the toggler
          title="Favourites" // Add title for easier debugging in SidebarSection logs
        />

        <div className="border-b border-[#535353] ml-4 pt-4" />

        <SidebarSection
          title="Today"
          items={sidebarData.today.filter(item => !hiddenChatIds.has(item.id))}
          showSeeAll
          showAll={showAllToday}
          maxVisibleItems={3}
          onItemClick={handleItemClick}
          onShowPopup={handleShowPopup}
          onHidePopup={handleHidePopup}
          onSeeAllClick={handleSeeAllToday} // Pass the toggler
        />

        <SidebarSection
          title="Yesterday"
          items={sidebarData.yesterday.filter(item => !hiddenChatIds.has(item.id))}
          showSeeAll
          showAll={showAllYesterday}
          maxVisibleItems={3}
          onItemClick={handleItemClick}
          onShowPopup={handleShowPopup}
          onHidePopup={handleHidePopup}
          onSeeAllClick={handleSeeAllYesterday} // Pass the toggler
        />
      </div>

      <div className="flex-shrink-0">
        <div className="border-b border-[#535353] ml-4 pt-4" />
        <div className="flex justify-between items-center p-4 pt-6">
          <div className="flex gap-2 pl-5 items-center">
            <Image src="/icons/Token.png" alt="tokens" width={20} height={21} />
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
            // You can add more Tailwind classes here if needed for spacing/positioning
            // For example, if you want to explicitly control padding around the button:
            // className="mb-4"
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
        onRemove={handleRemoveChat}
        onHide={handleHidePopup}
      />
    </div>
  );
};

export default Sidebar;