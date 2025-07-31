'use client';

import React, { useEffect, useRef } from 'react';
import ChatMessage from '@/app/(chat)/chat/components/ui/ChatMessage';
import TypingDots from '@/app/(chat)/chat/components/ui/TypingDots'; // Adjust path if needed

interface Message {
  id: string;
  type: 'user' | 'ai';
  text: string;
}

interface ChatSectionProps {
  messages: Message[];
  isThinking: boolean;
}

const ChatSection: React.FC<ChatSectionProps> = ({ messages, isThinking }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isThinking]);

  return (
    <div className="w-full flex flex-col items-center px-4">
      <div className="w-full max-w-[732px] flex flex-col gap-5 mb-20 overflow-x-hidden">
        {messages.map((msg, idx) => (
          <ChatMessage
            key={msg.id}
            type={msg.type}
            message={msg.text}
            isLastMessage={idx === messages.length - 1 && msg.type === 'ai' && !isThinking}
          />
        ))}

        {isThinking && (
          <div className="flex justify-start w-full">
            <div className="max-w-[90%] md:max-w-[680px] rounded-[30px] border border-white/20">
              <TypingDots />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatSection;
