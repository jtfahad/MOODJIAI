// components/ui/ActionButtons.tsx
import React from 'react';
import Image from 'next/image';

const ActionButtons: React.FC = () => {
  const actions = [
    { icon: '/icons/Copy.svg', alt: 'Copy' },
    { icon: '/icons/ThumbsUp.svg', alt: 'Thumbs Up' },
    { icon: '/icons/ThumbsDown.svg', alt: 'Thumbs Down' },
    { icon: '/icons/Repeat.svg', alt: 'Repeat' }
  ];

  return (
    <div className="flex justify-start items-center gap-2">
      {actions.map((action, index) => (
        <button
          key={index}
          className="cursor-pointer hover:opacity-70 transition-opacity"
          aria-label={action.alt}
        >
          <Image
            src={action.icon}
            alt={action.alt}
            width={24}
            height={24}
          />
        </button>
      ))}
    </div>
  );
};

export default ActionButtons;