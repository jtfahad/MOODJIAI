// components/chat/PromptSuggestions.tsx
import React from 'react';
import Image from 'next/image';

// Define a type for a single suggestion item
interface SuggestionItem {
  id: string;
  iconSrc: string;
  altText: string;
  text: string;
  onClick: () => void;
}

interface PromptSuggestionsProps {
  suggestions: SuggestionItem[];
}

const PromptSuggestions: React.FC<PromptSuggestionsProps> = ({ suggestions }) => {
  return (
    <div className="flex items-center justify-center gap-3 text-center text-[14px] font-[400] leading-[100%] text-[#E6D4E3]">
      {suggestions.map(suggestion => (
        <div
          key={suggestion.id}
          className="w-[222px] h-[88px] flex items-center gap-2 px-2 border-[1px] border-white/10 rounded-lg backdrop-blur-md bg-[#000000]/30 cursor-pointer"
          onClick={suggestion.onClick}
        >
          <Image src={suggestion.iconSrc} alt={suggestion.altText} width={40} height={40} />
          {suggestion.text}
        </div>
      ))}
    </div>
  );
};

export default PromptSuggestions;