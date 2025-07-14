// components/NewChatFreemium.tsx
'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from './layout/sidebar';
import ChatHeader from './layout/ChatHeader';
import WelcomeSection from './chat/WelcomeSection';
import PromptSuggestions from './chat/PromptSuggestions';
import ChatInput from './ui/ChatInput';
import CenteredModal from './ui/PromptSuggestionModal';
import ChatSection from './chat/ChatSection'; // Make sure this is correctly imported

// Define a type for your chat messages
interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  text: string;
}

const NewChatFreemium: React.FC = () => {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
    const [chatStarted, setChatStarted] = useState(false);

    const handleOpenModal = () => {
      setIsModalOpen(true);
      console.log("Modal opened for Emotional Alchemy");
    };

    const handleCloseModal = () => {
      setIsModalOpen(false);
      console.log("Modal closed");
    };

    const handleSendPrompt = (message: string) => {
      if (message.trim() === '') return;

      const newUserMessage: ChatMessage = {
        id: Date.now().toString(),
        type: 'user',
        text: message,
      };

      setChatMessages((prevMessages) => [...prevMessages, newUserMessage]);
      setChatStarted(true);

      // --- Mocking AI Response ---
      console.log("Sending message to backend (mock):", message);
      setTimeout(() => {
        const aiResponseText = `I received your message: "${message}". Here's a thought on Emotional Alchemy: "Emotional alchemy is the profound process of transforming challenging emotions into sources of strength, insight, and growth. It's about consciously engaging with feelings like fear, anger, or sadness, not to suppress them, but to understand their underlying messages and transmute their energy into something constructive, fostering resilience, empathy, and inner peace."\n\nThis is a long response to test scrolling. It should go on for a few lines, just to ensure that the scrollbar appears within the chat section and not on the whole page. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
        const newAiMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          type: 'ai',
          text: aiResponseText,
        };
        setChatMessages((prevMessages) => [...prevMessages, newAiMessage]);
      }, 1000);
      // --- End Mocking AI Response ---
    };

    const suggestionData = [
      { id: '1', iconSrc: "/icons/Cyclone.svg", altText: "Emotional Alchemy", text: "Emotional Alchemy", onClick: handleOpenModal },
      { id: '2', iconSrc: "/icons/Compass.svg", altText: "Purpose and Direction", text: "Purpose and Direction", onClick: () => console.log("Purpose and Direction clicked") },
      { id: '3', iconSrc: "/icons/MilkyWay.svg", altText: "Creative Flow and Decisions", text: "Creative Flow and Decisions", onClick: () => console.log("Creative Flow and Decisions clicked") },
      { id: '4', iconSrc: "/icons/Sparkles.svg", altText: "Energetics and Resonance", text: "Energetics and Resonance", onClick: () => console.log("Energetics and Resonance clicked") },
    ];

    const handleMenuClick= () => {
      router.push('/postMood');
      console.log('Next clicked');
    };
    const handleNewChatClick = () => {
      setChatMessages([]);
      setChatStarted(false);
      console.log("New Chat button clicked");
    };
    const handleAddAttachment = () => console.log("Add attachment clicked");
    const handleRecordVoice = () => console.log("Record voice clicked");

  return (
    // Outermost container for the whole page. Ensure it defines the full viewport height.
    <div
      className="h-screen w-full text-white flex" // Changed min-h-screen to h-screen for explicit height
      style={{
          backgroundImage: "url('/backgroundImages/chat-freemium-main-bg.svg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
    >
      {/* Sidebar - Remains outside the main content area's flex calculation */}
      <div className="hidden md:flex w-64 h-full relative z-20"> {/* Changed h-vh to h-full */}
        <Sidebar />
      </div>

      {/* Main Content Area - This container flexes vertically to fill remaining space */}
      {/* Crucial for proper height distribution. `min-h-0` prevents flex item from overflowing. */}
      <div
        className="flex flex-col flex-1 m-4 rounded-2xl overflow-hidden min-h-0"
        style={{
          backgroundImage: "url('/backgroundImages/chat-freemium-bg.svg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        {/* Chat Header - Fixed height at the top */}
        <div className="px-4 pt-3 pb-2 flex-shrink-0"> {/* flex-shrink-0 prevents it from shrinking */}
          <ChatHeader
            onMenuClick={handleMenuClick}
            timeLeft=""
            onNewChatClick={handleNewChatClick}
          />
        </div>

        {/* Dynamic Content Area: Welcome Section / Prompt Suggestions OR Chat History */}
        {/* This div takes all *remaining* vertical space and enables internal scrolling */}
        <div className="flex-1 flex flex-col items-center justify-start py-8 overflow-y-auto custom-scrollbar-hidden">
          {/* Apply a custom scrollbar to this div or the ChatSection */}
          {!chatStarted && (
            <div className='mt-[250px]'>
              <div className='mb-10 w-full flex justify-center'>
                <WelcomeSection userName="Elina" />
              </div>
              <div className="w-full flex justify-center px-4">
                <PromptSuggestions suggestions={suggestionData} />
              </div>
            </div>
          )}

          {chatStarted && (
            // ChatSection is already configured with flex-1 and overflow-y-auto.
            // It will fill the available space provided by its parent (this div).
            <ChatSection messages={chatMessages} />
          )}
        </div>

        {/* Chat Input - Fixed height at the bottom, positioned absolutely */}
        {/* Its fixed positioning takes it out of the flex flow, so the flex-1 above expands correctly */}
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