// components/ui/MenuButton.tsx
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface MenuButtonProps {
  icon: string;
  label: string;
  onClick: () => void;
  hasArrow?: boolean;
  variant?: "default" | "ghost";
}

const MenuButton: React.FC<MenuButtonProps> = ({
  icon,
  label,
  onClick,
  hasArrow = false,
  variant = "ghost"
}) => {
  if (hasArrow) {
    return (
      <div 
        className="w-full flex justify-between items-center p-2 pr-3 hover:bg-white/5 rounded-[5px] cursor-pointer transition-colors"
        onClick={onClick}
      >
        <div className="flex justify-center items-center gap-2">
          <Image src={icon} alt={label} width={20} height={20} />
          <span className="text-[14px] font-[500] leading-[20px] text-[#FFFFFF]">
            {label}
          </span>
        </div>
        <Image src="/icons/ArrowUp.png" alt="arrow" width={20} height={20} />
      </div>
    );
  }

  return (
    <Button
      variant={variant}
      size="sm"
      className={`text-white hover:text-white hover:bg-white/5 pr-[150px] -ml-1 gap-2 cursor-pointer justify-start`}
      onClick={onClick}
    >
      <Image src={icon} alt={label} width={20} height={20} />
      {label}
    </Button>
  );
};

export default MenuButton;