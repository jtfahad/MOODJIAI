// components/ui/GradientButton.tsx
import React from 'react';

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  size = 'md',
  className = '',
  ...props
}) => {
  const sizes = {
    sm: 'w-[200px] h-[44px] text-sm',
    md: 'w-[250px] h-[48px] text-sm',
    lg: 'w-[300px] h-[52px] text-base'
  };

  return (
    <button
      className={`${sizes[size]} rounded-2xl bg-gradient-to-r from-[#CD7D60] to-[#984A2E] text-white font-bold leading-[160%] tracking-[0.2px] hover:shadow-lg transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};