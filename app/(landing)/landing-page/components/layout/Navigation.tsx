// components/layout/Navigation.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button'; // Assuming Button component is still used elsewhere or for future

const Navigation: React.FC = () => {
  const navItems = ['Home', 'About Us', 'The Creatrix', 'Pricing'];
  const authButtons = ['Sign In', 'Sign Up'];

  // State to manage the active navigation item
  const [activeNavItem, setActiveNavItem] = useState<number>(0); // 0 for Home

  // State to manage the active authentication button
  const [activeAuthButton, setActiveAuthButton] = useState<number>(0); // 0 for Sign In

  return (
    <nav className="flex w-full items-center justify-between h-[90px] pt-4 px-4 lg:px-10">
      {/* Logo */}
      <div className="flex">
        <Image
          src="/logos/moodjiverse.svg"
          alt="Moodji Logo"
          width={200}
          height={19}
          className="w-auto h-auto max-w-[150px] lg:max-w-[200px]"
        //   style={{ filter: 'invert(0%) brightness(0%) contrast(100%)' }}

        />
      </div>

      {/* Navigation Menu - Hidden on mobile */}
      <div className="hidden lg:flex w-[442px] h-[48px] items-center justify-center rounded-full border border-[#FFFFFF1A] bg-[#FFFFFF1A] px-2">
        {navItems.map((item, index) => (
          <button
            key={item}
            className={`rounded-full w-[90%] h-[80%] text-sm font-normal leading-5 px-2 transition-colors ${
              activeNavItem === index
                ? 'bg-white text-black' // Active state: white background, black text
                : 'text-black hover:bg-white hover:text-black' // Inactive state: black text, white bg on hover
            }`}
            onClick={() => setActiveNavItem(index)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Auth Buttons */}
      <div className='flex w-[222px] h-[48px] items-center justify-center rounded-full border-[1px] border-[#FFFFFF1A] bg-[#FFFFFF1A]'>
        {authButtons.map((item, index) => (
          <button
            key={item}
            className={`rounded-full w-[95%] h-[80%] text-[14px] font-[400] leading-[20px] mx-2 transition-colors ${
              activeAuthButton === index
                ? 'bg-[#F95D2B] text-white' // Active state: orange background, white text
                : 'text-black hover:bg-[#F95D2B] hover:text-white' // Inactive state: black text, orange bg on hover
            }`}
            onClick={() => setActiveAuthButton(index)}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;