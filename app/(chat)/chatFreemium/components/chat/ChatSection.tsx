// components/chat/ChatSection.tsx
import React, { useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';

interface Message {
  id: string;
  type: 'user' | 'ai';
  text: string;
}

interface ChatSectionProps {
  messages: Message[];
}

const ChatSection: React.FC<ChatSectionProps> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to the latest message whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    // IMPORTANT CHANGE: Removed flex-1, overflow-y-auto, and p-4 from here.
    // The parent (the fixed div) will now manage these properties.
    <div className="w-full max-w-[732px] mx-auto flex flex-col mb-8 gap-y-5 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
      {messages.map((msg) => (
        <ChatMessage key={msg.id} type={msg.type} message={msg.text} />
      ))}
      <div ref={messagesEndRef} /> {/* Element to scroll into view */}
    </div>
  );
};

export default ChatSection;