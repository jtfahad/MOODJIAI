'use client';

import React, { useEffect, useState } from 'react';
import ActionButtons from './ActionButtons';

interface ChatMessageProps {
  type: 'user' | 'ai';
  message: string;
  isLastMessage?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ type, message, isLastMessage }) => {
  const isUser = type === 'user';
  const [displayedText, setDisplayedText] = useState(isLastMessage && !isUser ? '' : message);

  useEffect(() => {
    if (!isLastMessage || isUser) return;

    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + message[i]);
      i++;
      if (i >= message.length) clearInterval(interval);
    }, 15);

    return () => clearInterval(interval);
  }, [isLastMessage, isUser, message]);

  const bubbleStyle = {
    background: isUser
      ? 'linear-gradient(to right, rgba(255,255,255,0.15), rgba(255,255,255,0.1))'
      : '',
    border: isUser
      ? '1px solid rgba(255, 255, 255, 0.25)'
      : '',
    backdropFilter: isUser ? 'blur(24px)' : '',
    WebkitBackdropFilter: isUser ? 'blur(24px)' : '',
  };

  return (
    <div className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[90%] md:max-w-[680px] rounded-[30px] px-6 py-2 ${isUser ? 'shadow-xl' : ''} text-white`}
        style={bubbleStyle}
      >
        <p className="whitespace-pre-wrap text-base leading-relaxed">
          {displayedText}
          {isLastMessage && !isUser && displayedText.length < message.length && (
            <span className="animate-pulse">|</span>
          )}
        </p>
        {isLastMessage && !isUser && displayedText.length > message.length && (
          <div className="mt-2">
            <ActionButtons />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
