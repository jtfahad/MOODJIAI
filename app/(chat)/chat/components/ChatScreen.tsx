'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Sidebar from './layout/sidebar';
import ChatInput from './ui/ChatInput';
import ChatSection from './chat/ChatSection';

// Chat message type
interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  text: string;
}

const ChatScreen: React.FC = () => {
  const router = useRouter();
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [chatStarted, setChatStarted] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  // 1. Add state to manage sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // 2. Create a function to toggle the sidebar state
  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  const handleSendPrompt = (message: string) => {
    if (!message.trim()) return;

    const newUserMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      text: message,
    };

    setChatMessages((prev) => [...prev, newUserMessage]);
    setChatStarted(true);
    setIsThinking(true);

    // Simulate backend AI response with typing indicator
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: `${Date.now()}-ai`,
        type: 'ai',
        text: `I received your message: "${message}". Here's a thought on Emotional Alchemy:\n\nEmotions are not barriers. They are guides, tools, and messengers. Embrace them. Transform them. Use them.`,
      };

      setIsThinking(false);
      setChatMessages((prev) => [...prev, aiResponse]);
    }, 1500);
  };

  const handleNewChatClick = () => {
    setChatMessages([]);
    setChatStarted(false);
    setIsThinking(false);
    console.log("New Chat button clicked");
  };

  const handleAddAttachment = () => console.log("Add attachment clicked");
  const handleRecordVoice = () => console.log("Record voice clicked");

  return (
    <div
      className="h-screen w-full text-white flex"
      style={{
        backgroundImage: "url('/backgroundImages/chatScreenBg.svg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >

      {/* Sidebar Container */}
      {/* 3. This container now controls the animation */}
      {/* It animates its width and margin based on the 'isSidebarOpen' state */}
      {/* I've also corrected the h-[calc(...)] syntax here */}
      <div
        className={`
          hidden md:flex flex-shrink-0 transition-all duration-300 ease-in-out
          h-[calc(100vh-32px)] my-4
          ${isSidebarOpen ? 'w-[230px] ml-4' : 'w-0 ml-0'}
        `}
      >
        <div className="w-full h-full rounded-[20px] bg-white/20 backdrop-blur-xl z-20">
          {/* We only render the sidebar's content when it's open to prevent visual glitches */}
          {isSidebarOpen && <Sidebar onClose={toggleSidebar} />}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex flex-col flex-1 m-4 rounded-2xl overflow-hidden min-h-0 relative">

        {/* 4. Menu button to re-open the sidebar */}
        {/* It only appears when the sidebar is closed */}
        {!isSidebarOpen && (
          <div
            onClick={toggleSidebar}
            className="absolute top-5 left-4 z-30 text-white rounded-full hover:bg-white/20 transition-colors md:block hidden cursor-pointer"
          >
            <Image src="/icons/MenuIcon.svg" width={36} height={36} alt="Menu" />
          </div>
        )}
              <div className="fixed top-0 left-0 w-full flex justify-center z-40 pointer-events-none">
        <div
          className="relative"
          style={{
        // When sidebar is open, shift right by sidebar width (230px + 16px margin)
        left: isSidebarOpen ? '122px' : '0',
        transition: 'left 0.3s ease-in-out',
          }}
        >
          <Image
        src="/icons/ChatResonance.svg"
        alt="Chat Background"
        width={151}
        height={20}
        className="object-cover"
          />
        </div>
      </div>

        {/* Chat Section */}
        <div className="flex-1 flex flex-col items-center justify-start py-8 overflow-y-auto custom-scrollbar-hidden transition-all">
          {!chatStarted ? (
            <div className="mt-[250px] w-full text-center">
              <p className="text-lg opacity-60">Start a conversation to explore Moodji</p>
            </div>
          ) : (
            <ChatSection messages={chatMessages} isThinking={isThinking} />
          )}
        </div>

        {/* Chat Input */}
        <div
          className={`
            fixed bottom-0 left-0
            ${isSidebarOpen ? 'w-[calc(100%+256px)]' : 'w-full'}
            p-4 rounded-t-2xl shadow-lg z-10
            transition-all duration-500 ease-in-out
          `}
          style={{
            transitionProperty: 'width, left',
          }}
        >
          <ChatInput
            onSend={handleSendPrompt}
            onAddClick={handleAddAttachment}
            onRecordClick={handleRecordVoice}
          />
        </div>

      </div>
    </div>
  );
};

export default ChatScreen;