// components/ui/AuthButton.tsx
import React from 'react';

interface AuthButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  isActive: boolean;
  onClick: () => void;
  className?: string;
  'aria-label'?: string;
}

export const AuthButton: React.FC<AuthButtonProps> = ({
  children,
  variant,
  isActive,
  onClick,
  className = '',
  'aria-label': ariaLabel,
  ...props
}) => {
  const getVariantStyles = () => {
    if (variant === 'primary') {
      return isActive
        ? 'bg-[#F95D2B] text-white shadow-lg'
        : 'text-black hover:bg-[#F95D2B] hover:text-white hover:shadow-md';
    }
    return isActive
      ? 'bg-[#F95D2B] text-white shadow-lg'
      : 'text-black hover:bg-[#F95D2B] hover:text-white hover:shadow-md';
  };

  return (
    <button
      className={`
        relative rounded-full w-[95%] h-[80%] text-sm font-normal leading-5 mx-2
        transition-all duration-300 ease-in-out
        transform hover:scale-105 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-[#F95D2B]/50 focus:ring-offset-2 focus:ring-offset-transparent
        ${getVariantStyles()}
        ${className}
      `}
      onClick={onClick}
      aria-pressed={isActive}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
      
      {/* Ripple effect on click */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className="absolute inset-0 rounded-full bg-white/20 transform scale-0 group-active:scale-100 transition-transform duration-200" />
      </div>
    </button>
  );
};