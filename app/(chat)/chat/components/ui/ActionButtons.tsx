import React from 'react';
import Image from 'next/image';

const actions = [
  { icon: '/icons/Copy.svg', alt: 'Copy' },
  { icon: '/icons/ThumbsUp.svg', alt: 'Thumbs Up' },
  { icon: '/icons/ThumbsDown.svg', alt: 'Thumbs Down' },
  { icon: '/icons/Repeat.svg', alt: 'Repeat' }
];

const ActionButtons: React.FC = () => {
  return (
    <div className="flex justify-start items-center gap-2">
      {actions.map((action, index) => (
        <button
          key={index}
          className="cursor-pointer hover:opacity-70 transition-opacity p-1 rounded-full hover:bg-white/10"
          aria-label={action.alt}
        >
          <Image
            src={action.icon}
            alt={action.alt}
            width={24}
            height={24}
            className="filter invert brightness-0"
          />
        </button>
      ))}
    </div>
  );
};

export default ActionButtons;
