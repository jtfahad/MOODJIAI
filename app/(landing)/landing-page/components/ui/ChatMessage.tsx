// components/ui/ChatMessage.tsx
import React from 'react';

interface ChatMessageProps {
  message: string;
  isUser?: boolean;
  className?: string;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  isUser = false,
  className = ''
}) => {
  return (
    <div className={`w-full ${isUser ? 'flex justify-end' : 'flex justify-start'} ${className}`}>
      <p className={`text-lg leading-[150%] tracking-[-2%] font-medium text-[#22282B] ${
        isUser ? 'text-right' : 'text-left'
      }`}>
        {message}
      </p>
    </div>
  );
};