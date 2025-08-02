// components/chat/ChatSection.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import ChatMessage from '../chat/ChatMessage';
import TypingDots from '@/app/(chat)/chat/components/ui/TypingDots'; // Adjust path if needed
import MarkdownParser from '@/utils/markdownParser'; // Assuming this path is correct

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
    // Wrap in setTimeout to ensure DOM is fully updated
    const timer = setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, 0); // A 0ms delay pushes it to the end of the current event loop

    return () => clearTimeout(timer); // Cleanup the timer
  }, [messages, isThinking]); // Dependencies remain the same

  const lastMessageIndex = messages.length - 1;

  return (
    <div className="w-full flex flex-col items-center px-4">
      <div className="w-full max-w-[732px] flex flex-col gap-5 mb-20 overflow-x-hidden">
        {messages.map((msg, idx) => {
          const isLastAiMessageAndNotThinking = (
            msg.type === 'ai' &&
            idx === lastMessageIndex &&
            !isThinking
          );

          return (
            <ChatMessage
              key={msg.id}
              type={msg.type}
              message={msg.text}
              isLastAiMessageAndNotThinking={isLastAiMessageAndNotThinking}
            />
          );
        })}

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