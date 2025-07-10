// components/ChatFreemium.tsx
'use client';
import React from 'react';
import Sidebar from './layout/sidebar'; // Assuming sidebar is in layout folder
import ChatHeader from './layout/ChatHeader'; // Import the new header component
import WelcomeSection from './chat/WelcomeSection'; // Import the new welcome component
import PromptSuggestions from './chat/PromptSuggestions'; // Import the new suggestions component
import ChatInput from './ui/ChatInput'; // Import the new chat input component
import Image from 'next/image';

const ChatFreemium: React.FC = () => {
  // Mock data for prompts - ideally this would come from a data source
  const suggestionData = [
    { id: '1', iconSrc: "/icons/Cyclone.png", altText: "Emotional Alchemy", text: "Emotional Alchemy", onClick: () => console.log("Emotional Alchemy clicked") },
    { id: '2', iconSrc: "/icons/Compass.png", altText: "Purpose and Direction", text: "Purpose and Direction", onClick: () => console.log("Purpose and Direction clicked") },
    { id: '3', iconSrc: "/icons/MilkyWay.png", altText: "Creative Flow and Decisions", text: "Creative Flow and Decisions", onClick: () => console.log("Creative Flow and Decisions clicked") },
    { id: '4', iconSrc: "/icons/Sparkles.png", altText: "Energetics and Resonance", text: "Energetics and Resonance", onClick: () => console.log("Energetics and Resonance clicked") },
  ];

  // Placeholder functions for event handlers
  const handleMenuClick = () => console.log("Menu clicked");
  const handleNewChatClick = () => console.log("New Chat button clicked");
  const handleZenvarionClick = () => console.log("Zenvarion option clicked");
  const handleSendPrompt = (message: string) => console.log("Sending message:", message);
  const handleAddAttachment = () => console.log("Add attachment clicked");
  const handleRecordVoice = () => console.log("Record voice clicked");

  return (
    <div
      className="min-h-screen w-full text-white flex"
      style={{ background: 'linear-gradient(90deg, #1C0841 0%, #A32478 100%)' }}
    >
      {/* Sidebar */}
      <div className="hidden md:flex w-64 h-vh">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div
        className="flex flex-col flex-1 m-4 rounded-2xl overflow-hidden"
        style={{
          backgroundImage: "url('/backgroundImages/chat-freemium-bg.svg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        {/* Chat Header */}
        <ChatHeader
          onMenuClick={handleMenuClick}
          timeLeft="00:00:00" // You might pass actual time from state here
          onNewChatClick={handleNewChatClick}
          // You could pass onZenvarionClick to ChatHeader if it controlled the dropdown
          // For now, NewChatDropdown handles its internal clicks
        />

        {/* Dynamic Content Area: Welcome Section or Chat History */}
        {/* This is where you would conditionally render either the WelcomeSection
            or your actual chat messages/history based on user interaction (e.g., if a chat is active) */}
        <div className="flex-1 flex flex-col justify-center items-center mt-24">
            {/* Welcome Section (shown when no chat is active) */}
            <WelcomeSection userName="Elina" />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center mb-24">
        {/* Prompt Suggestions (shown with Welcome Section) */}
            <PromptSuggestions suggestions={suggestionData} />
        </div>

        {/* Chat Input */}
        <ChatInput
          onSend={handleSendPrompt}
          onAddClick={handleAddAttachment}
          onRecordClick={handleRecordVoice}
        />
      </div>
    </div>
  );
};

export default ChatFreemium;