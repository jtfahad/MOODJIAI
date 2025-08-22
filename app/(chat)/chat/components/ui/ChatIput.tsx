// components/ui/ChatInput.tsx
import React from 'react';
import Image from 'next/image';

interface ChatInputProps {
  placeholder?: string;
  onSend?: (message: string) => void;
  onAddClick?: () => void;
  onRecordClick?: () => void;
}

const ChatInput: React.FC<ChatInputProps> = ({
  placeholder = "Ask anything",
  onSend,
  onAddClick,
  onRecordClick,
}) => {
  const [inputValue, setInputValue] = React.useState('');

  const handleSendClick = () => {
    if (inputValue.trim() && onSend) {
      onSend(inputValue.trim());
      setInputValue('');
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendClick();
    }
  };

  return (
    <div className="w-full px-3 sm:px-4 pb-4 sm:pb-6">
      {/* Main container for the input */}
      <div
        className="
          w-full max-w-[822px]
          min-h-[48px] sm:min-h-[53px]
          flex items-center justify-between
          rounded-[24px] sm:rounded-[30px]
          px-3 sm:px-4
          bg-[#FDFCFF] backdrop-blur-lg
          mx-auto
        "
      >
        {/* Add Icon */}
        <div>
          <Image
            className="cursor-pointer w-4 h-4 sm:w-[18px] sm:h-[18px]"
            src="/icons/Add.svg"
            alt="Add"
            width={18}
            height={18}
            onClick={onAddClick}
          />
        </div>

        {/* Text Input */}
        <div className="flex-1 px-3 sm:px-5">
          <input
            type="text"
            placeholder={placeholder}
            className="
              w-full bg-transparent
              text-black placeholder:text-black
              outline-none
              text-sm sm:text-base
              font-normal
            "
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>

        {/* Mic + Send */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Image
            className="cursor-pointer w-4 h-4 sm:w-[18px] sm:h-[18px]"
            src="/icons/Recording.svg"
            alt="Mic"
            width={18}
            height={18}
            onClick={onRecordClick}
          />
          <Image
            className="cursor-pointer w-5 h-5 sm:w-[24px] sm:h-[24px]"
            src="/icons/Send.svg"
            alt="Send"
            width={24}
            height={24}
            onClick={handleSendClick}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
