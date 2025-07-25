// components/ui/BackgroundSection.tsx
import React from 'react';

interface BackgroundSectionProps {
  backgroundImage: string;
  className?: string;
  children: React.ReactNode;
  gradientTop?: boolean;
  gradientBottom?: boolean;
}

export const BackgroundSection: React.FC<BackgroundSectionProps> = ({
  backgroundImage,
  className = '',
  children,
  gradientTop = false,
  gradientBottom = false
}) => {
  return (
    <div className="relative">
      <div
        className={`min-h-screen w-full pb-8 relative ${className}`}
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        {gradientTop && (
          <div className="absolute top-0 w-full h-[80px] bg-gradient-to-b from-white/30 to-transparent" />
        )}
        
        {children}
        
        {gradientBottom && (
          <div className="absolute bottom-0 w-full h-[80px] bg-gradient-to-t from-white/30 to-transparent" />
        )}
      </div>
    </div>
  );
};
