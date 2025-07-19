// components/chat/ChatMessage.tsx
import React from 'react';
import Image from 'next/image';

interface ChatMessageProps {
  type: 'user' | 'ai';
  message: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ type, message }) => {
  const borderGradient = `linear-gradient(273.92deg, rgba(249, 188, 46, 0.2) -0.4%, rgba(226, 154, 30, 0.2) 12.89%, rgba(255, 205, 56, 0.2) 29.94%, #F0AF30 72.76%, #E29A1E 83.4%, #FFCD38 96.03%, #DD931A 100%)`;

  return (
    // Outer wrapper for alignment (user messages right, AI messages left)
    <div className={`flex w-full ${type === 'user' ? 'justify-end' : 'justify-start'}`}>
      {/* Inner wrapper for the gradient border effect */}
      <div
        className={`relative overflow-hidden p-[2px] rounded-[40px] shadow-lg`}
        style={{
          background: borderGradient,
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
          // Responsive width using min() for max width and responsive percentage
          width: type === 'user' ? 'min(490px, 90%)' : 'min(732px, 95%)',
          minHeight: type === 'user' ? '77px' : 'auto', // User message has fixed height
          maxHeight: type === 'ai' ? '403px' : 'auto', // Max height for AI message, will scroll internally if content overflows
        }}
      >
        {/* Actual content container */}
        <div
          className={`w-full h-full flex flex-col justify-center items-start rounded-[38px] p-4 text-white backdrop-blur-lg`}
          style={{
            background: type === 'user' ? '#FFFFFF99' : '#08101599', // Semi-transparent white for user, dark for AI
            WebkitBackdropFilter: 'blur(24px)', // Safari compatibility for backdrop filter
            color: type === 'user' ? '#333' : '#fff', // Text color for user message
            padding: type === 'ai' ? '40px' : '16px', // Specific padding for AI messages
            gap: type === 'ai' ? '10px' : '0px', // Specific gap for AI content
          }}
        >
          {/* You can add an icon for AI messages here if desired */}
          {/* {type === 'ai' && (
            <Image src="/icons/GeminiIcon.svg" alt="AI" width={32} height={32} className="mb-2" />
          )} */}
          <p className="whitespace-pre-wrap">{message}</p> {/* Preserves newlines and spaces */}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;