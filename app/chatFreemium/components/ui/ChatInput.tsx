// components/ui/ChatInput.tsx
import React from 'react';
import Image from 'next/image';

interface ChatInputProps {
  placeholder?: string;
  onSend?: (message: string) => void;
  onAddClick?: () => void;
  onRecordClick?: () => void;
  // You might add value and onChange props for controlled input
}

const ChatInput: React.FC<ChatInputProps> = ({
  placeholder = "Ask anything",
  onSend,
  onAddClick,
  onRecordClick,
}) => {
  const [inputValue, setInputValue] = React.useState(''); // State for the input field

  const handleSendClick = () => {
    if (inputValue.trim() && onSend) {
      onSend(inputValue.trim());
      setInputValue(''); // Clear input after sending
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSendClick();
    }
  };

  return (
    <div className="w-full px-4 pb-6">
      {/* Main container for the input and the dragon image */}
      <div
        className="w-[822px] h-[53px] rounded-[30px] p-[12px] max-w-[822px] mx-auto bg-black/70 backdrop-blur-lg relative" // Add 'relative' here
      >
        <div className="flex items-center justify-between h-full">
          <div>
            <Image className='cursor-pointer' src="/icons/Add.png" alt="Add" width={29} height={29} onClick={onAddClick} />
          </div>
          <div className="flex-1 h-full items-center relative pl-5">
            <input
              type="text"
              placeholder={placeholder}
              className="w-full h-full bg-transparent text-white/80 placeholder:text-white/30 outline-none placeholder:text-[12.41px] font-[400] leading-[17.52px] pb-1"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
          <div className="flex items-center justify-end gap-2">
            <Image className='cursor-pointer' src="/icons/Recording.png" alt="Mic" width={18} height={18} onClick={onRecordClick} />
            <Image className='cursor-pointer' src="/icons/Send.png" alt="Send" width={18} height={18} onClick={handleSendClick} />
          </div>
        </div>

        {/* Dragon Image - Positioned Absolutely within this ChatInput component */}
        <Image
          src="/dragons/Nariko.svg" // **Ensure this path is correct**
          alt="Dragon decoration"
          width={148}
          height={148}
          className="absolute z-20" // z-index to ensure it's on top
          style={{
            right: 'calc(2px)', 
            bottom: 'calc(40px)', 
          }}
        />
      </div>
    </div>
  );
};

export default ChatInput;