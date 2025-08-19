// components/ui/MenuButton.tsx
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // Assuming this is your Shadcn UI button component

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
  // If hasArrow is true, render the div-based button (like "New Chat" in Sidebar)
  if (hasArrow) {
    return (
      <div
        // Removed `z-999` and `position-relative` from here.
        // `z-index` is only effective on *positioned* elements (relative, absolute, fixed, sticky).
        // Since it's a direct child within a flow, `z-index` here might not be necessary
        // or its effect might be overridden by parent context.
        className="w-full flex justify-between items-center p-2 pr-3 hover:bg-[#C0C0C033]/20 rounded-[5px] cursor-pointer transition-colors"
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

  // Render the Button component for standard buttons (like "Logout")
  return (
    <Button
      variant={variant}
      size="sm"
      // Removed `pr-[150px]`, `-ml-1`, `position-absolute`, and `z-999`.
      // Added `w-full` to ensure the button takes full width for hover.
      // `justify-start` aligns content to the left.
      className={`text-white hover:text-white hover:bg-[#C0C0C033]/20 w-full gap-2 cursor-pointer justify-start -ml-1`}
      onClick={onClick}
    >
      <Image src={icon} alt={label} width={20} height={20} />
      {label}
    </Button>
  );
};

export default MenuButton;