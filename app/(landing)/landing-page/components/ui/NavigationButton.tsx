// components/ui/NavigationButton.tsx
import React from 'react';

interface NavigationButtonProps {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  className?: string;
  'aria-label'?: string;
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({
  children,
  isActive,
  onClick,
  className = '',
  'aria-label': ariaLabel,
  ...props
}) => {
  return (
    <button
      className={`
        relative rounded-full w-[90%] h-[80%] text-sm font-normal leading-5 px-2
        transition-all duration-300 ease-in-out
        transform hover:scale-105 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent
        ${isActive
          ? 'bg-white text-black shadow-lg' 
          : 'text-black hover:bg-white/90 hover:text-black hover:shadow-md'
        }
        ${className}
      `}
      onClick={onClick}
      aria-pressed={isActive}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
      
      {/* Active indicator */}
      {isActive && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent pointer-events-none" />
      )}
    </button>
  );
};