// components/chat/ChatMessage.tsx
'use client';

import React, { useEffect, useState, useRef } from 'react';
import ActionButtons from '../ui/ActionButtons'; // Assuming this path is correct
import MarkdownParser from '@/utils/markdownParser'; // New import for markdown parsing

interface ChatMessageProps {
  type: 'user' | 'ai';
  message: string;
  isLastAiMessageAndNotThinking: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  type,
  message,
  isLastAiMessageAndNotThinking,
}) => {
  const isUser = type === 'user';
  const [displayedText, setDisplayedText] = useState(isUser ? message : '');
  const [showActions, setShowActions] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isUser) {
      setDisplayedText(message);
      setShowActions(false);
      return;
    }

    // For AI messages:
    if (isLastAiMessageAndNotThinking) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      setDisplayedText(''); // Reset for typing animation
      setShowActions(false); // Hide actions until typing is done

      let i = 0;
      intervalRef.current = setInterval(() => {
        setDisplayedText((prev) => prev + message[i]);
        i++;
        if (i >= message.length) {
          clearInterval(intervalRef.current!);
          intervalRef.current = null;
          setTimeout(() => setShowActions(true), 300);
        }
      }, 15); // Adjust typing speed here

    } else {
      // For older AI messages, show immediately without animation, and actions are visible
      setDisplayedText(message);
      setShowActions(true);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [message, isUser, isLastAiMessageAndNotThinking]);

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

  const showTypingCursor = isLastAiMessageAndNotThinking && displayedText.length < message.length;

  return (
    <div className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[90%] md:max-w-[680px] rounded-[30px] px-6 py-2 ${isUser ? 'shadow-xl' : ''} text-white`}
        style={bubbleStyle}
      >
        <p className="whitespace-pre-wrap text-base leading-relaxed">
          {/* Render markdown content here */}
          <MarkdownParser content={displayedText} />
          {showTypingCursor && (
            <span className="animate-pulse">|</span>
          )}
        </p>
        {!isUser && showActions && (
          <div className="mt-2">
            <ActionButtons />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;