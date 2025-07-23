import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseStyles = 'font-bold rounded-2xl transition-all duration-300 shadow-black/15 shadow-lg hover:shadow-xl';
  
  const variants = {
    primary: 'bg-[#984A2E] text-white hover:bg-[#7A3B2A]',
    secondary: 'bg-[#F95D2B] text-white hover:bg-[#E04A1F]',
    ghost: 'bg-transparent hover:bg-white hover:text-black transition-colors'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm h-10',
    md: 'px-6 py-3 text-sm h-12',
    lg: 'px-8 py-4 text-base h-14'
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};