// components/NewChatFreemium.tsx
'use client';
import React, { useState } from 'react'; // Import useState
import { useRouter } from 'next/navigation';
import Sidebar from './layout/sidebar';
import ChatHeader from './layout/ChatHeader';
import WelcomeSection from './chat/WelcomeSection';
import PromptSuggestions from './chat/PromptSuggestions';
import ChatInput from './ui/ChatInput';
import CenteredModal from './ui/PromptSuggestionModal'; // Import the new modal component

const NewChatFreemium: React.FC = () => {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

    // Function to open the modal
    const handleOpenModal = () => {
      setIsModalOpen(true);
      console.log("Modal opened for Emotional Alchemy");
    };

    // Function to close the modal
    const handleCloseModal = () => {
      setIsModalOpen(false);
      console.log("Modal closed");
    };

  // Mock data for prompts - ideally this would come from a data source
  const suggestionData = [
    { id: '1', iconSrc: "/icons/Cyclone.svg", altText: "Emotional Alchemy", text: "Emotional Alchemy", onClick: handleOpenModal }, // <-- UPDATED: Call handleOpenModal
    { id: '2', iconSrc: "/icons/Compass.svg", altText: "Purpose and Direction", text: "Purpose and Direction", onClick: () => console.log("Purpose and Direction clicked") },
    { id: '3', iconSrc: "/icons/MilkyWay.svg", altText: "Creative Flow and Decisions", text: "Creative Flow and Decisions", onClick: () => console.log("Creative Flow and Decisions clicked") },
    { id: '4', iconSrc: "/icons/Sparkles.svg", altText: "Energetics and Resonance", text: "Energetics and Resonance", onClick: () => console.log("Energetics and Resonance clicked") },
  ];

  // Placeholder functions for event handlers
  const handleMenuClick= () => {
    router.push('/postMood');
    console.log('Next clicked');
  };
  const handleNewChatClick = () => console.log("New Chat button clicked");
  const handleZenvarionClick = () => console.log("Zenvarion option clicked");
  const handleSendPrompt = (message: string) => console.log("Sending message:", message);
  const handleAddAttachment = () => console.log("Add attachment clicked");
  const handleRecordVoice = () => console.log("Record voice clicked");

  return (
    <div
      className="min-h-screen w-full text-white flex"
      style={{
          backgroundImage: "url('/backgroundImages/chat-freemium-main-bg.svg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
    >
      {/* Sidebar */}
      <div className="hidden md:flex w-64 h-vh relative z-20">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div
        className="flex flex-col flex-1 m-4 rounded-2xl overflow-hidden relative" // Added relative for potential modal positioning
        style={{
          backgroundImage: "url('/backgroundImages/chat-freemium-bg.svg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        {/* Chat Header */}
        <div className="top-0 left-[256px]">
          <ChatHeader
          onMenuClick={handleMenuClick}
          timeLeft="" // Ensure this is handled as per our previous discussion if needed
          onNewChatClick={handleNewChatClick}
        />
        </div>

        {/* Dynamic Content Area: Welcome Section or Chat History */}
        <div className="fixed top-[300px] w-[86%]"> {/* This width might be problematic with fixed positioning */}
            <div className='mb-10'>
              <WelcomeSection userName="Elina" />
            </div>
            <div>
            <PromptSuggestions suggestions={suggestionData} />
            </div>
        </div>

        
        {/* Chat Input */}
        <div className='fixed bottom-0 left-0 w-[calc(100%+256px)] p-4 rounded-t-2xl shadow-lg z-10'>
          <ChatInput
          onSend={handleSendPrompt}
          onAddClick={handleAddAttachment}
          onRecordClick={handleRecordVoice}
        />
        </div>

        {/* The Modal Component */}
        <CenteredModal isOpen={isModalOpen} onClose={handleCloseModal} />
          
      </div>
    </div>
  );
};

export default NewChatFreemium;