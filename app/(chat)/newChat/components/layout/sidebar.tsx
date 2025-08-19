'use client';
import { useState } from "react";
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
import TokenSlider from "@/app/(mood)/postMood/components/common/TokeSlider";
import { BluetoothConnected } from "lucide-react";
import { Button } from "react-day-picker";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

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
// 1. Define the props for the Sidebar, including the new 'onClose' function
type SidebarProps = {
  onClose: () => void;
  onNewChat: () => void;
};
const Sidebar: React.FC<SidebarProps> = ({ onClose ,onNewChat}) => {
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
  const handleNewChatClick = () => {
    console.log("Sidebar: New chat clicked");
    onNewChat(); // Call the onNewChat function passed from ChatScreen
  };

  return (
    // 2. The sidebar now fills its parent container and hides overflowing content during animation.
    //    I also corrected h-calc to be h-[calc(...)] which is the proper Tailwind syntax.
    <div className="w-[230px] flex flex-col h-full text-white relative overflow-hidden ">
      {/* Top: logo + close icon */}
      <div className="flex-shrink-0">
        <div className="flex justify-between items-center pt-6 pb-10 px-4">
          <Image src="/logos/moodjiverse.svg" alt="LOGO" width={130} height={15} />
          {/* 3. The close icon now triggers the 'onClose' function passed in props */}
          <Image
            src="/icons/SideBarCrossIcon.svg"
            alt="Close Sidebar"
            width={12}
            height={12}
            className="cursor-pointer hover:opacity-75 transition-opacity"
            onClick={onClose}
          />
        </div>
        {/* ... The rest of your sidebar links ... */}
        <div className="w-full h-[52px] flex items-center gap-2 pl-5 pb-2 text-[14px] font-[500] leading-[17.52px] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:bg-opacity-10  cursor-pointer">
          <Image src="/icons/CommentIcon.svg" alt="Dashboard" width={24} height={24} />
          Dashboard
        </div>
        <div className="w-full h-[52px] flex items-center gap-2 pl-5 pb-2 text-[14px] font-[500] leading-[17.52px] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:bg-opacity-10 cursor-pointer"
          onClick={handleNewChatClick}>
          <Image src="/icons/DashboardSquare.svg" alt="AskMoodJi" width={24} height={24} />
          ASK Moodji
        </div>
        <div className="w-full h-[52px] flex items-center gap-2 pl-5 pb-2 text-[14px] font-[500] leading-[17.52px] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:bg-opacity-10 cursor-pointer">
          <Image src="/icons/FavoriteIcon.svg" alt="MyMoodJis" width={24} height={24} />
          My Moodjis
        </div>
      </div>

      {/* Middle: scrollable chat sections */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
        <SidebarSection
          items={sidebarData.favorites}
          showAll={showAllFavorites}
          maxVisibleItems={8}
          onItemClick={handleItemClick}
          onShowPopup={handleShowPopup}
          onHidePopup={handleHidePopup}
          onSeeAllClick={handleSeeAllFavorites}
          title="Favorites"
          editingChatId={editingChatId}
          onRenameComplete={handleRenameChatComplete}
          className="bg-transparent"
        />
      </div>

      {/* Bottom: tokens, buttons, menu */}
      <div className="flex-shrink-0">
        <div className="flex flex-col bg-[#1A1B5566]/40 backdrop-blur-md rounded-[20px] p-4 m-4">
          {/* ... User profile and token slider ... */}
          <div className="flex items-center gap-3 mb-4">
             <div className="relative">
               <Avatar className="w-10 h-10">
                 <AvatarImage src={"./icons/ProfileImage.png"} alt={"Profile Picture"} />
                 <AvatarFallback
                   className="bg-gray-600 text-white">
                   <Image src="/icons/ProfileImage.png" alt="menu" width={35} height={35} />
                 </AvatarFallback>
               </Avatar>
               <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#1C0841]"></div>
             </div>
             <div>
               <div className="bg-green-600 text-black text-[10px] w-12 h-5 flex items-center justify-center rounded-md">
                 Ignitor
               </div>
               <h3 className="font-[400] text-white text-[12px]">Nicole Lunan</h3>
             </div>
           </div>
           <TokenSlider
             maxTokens={TOKENS.max}
             initialTokenCount={TOKENS.current}
           />
           <div className="space-y-2 mt-2">
             <button
               className="w-full h-[32px] text-[14px] font-[700] leading-[160%] tracking-[0.2px] bg-white text-orange-500 rounded-[50px]"
             >
               Upgrade Now
             </button>
           </div>
        </div>
        <div className="flex flex-col space-y-2 gap-1 mt-2 items-start w-full pl-6 mb-4">
          <MenuButton icon="/icons/Setting.png" label="Settings" onClick={handleSettingsClick} />
          <MenuButton icon="/icons/Logout.svg" label="Log out" onClick={handleLogoutClick} />
        </div>
      </div>

      {/* Popup */}
      <ChatPopup
        isVisible={popupVisible}
        position={popupPosition}
        chatId={popupChatId}
        chatCategory={popupChatCategory}
        onRemove={handleRemoveChat}
        onHide={handleHidePopup}
        onAddToFavorites={handleAddToFavorites}
        onRemoveFromFavorites={handleRemoveFromFavorites}
        onRename={handleRenameChat}
      />
    </div>
  );
};

export default Sidebar;