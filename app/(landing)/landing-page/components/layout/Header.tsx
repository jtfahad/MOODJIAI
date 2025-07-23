import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
    return(
        <div className='flex w-full items-center justify-between h-[90px] pt-4 px-10 hide-scrollbar overflow-y-auto'>
          {/* LOGO */}
          <div className='flex'>
             <Image
            src="/logos/moodjiverse.svg"
            alt="Moodji Logo"
            width={200}
            height={19}
            // style={{ filter: 'invert(0%) brightness(0%) contrast(100%)' }}
              />   
          </div>
          {/* Page Switcher */}
          <div className='flex w-[442px] h-[48px] items-center justify-center rounded-full border-[1px] border-[#FFFFFF1A] bg-[#FFFFFF1A]'>
              <button className='bg-white rounded-full w-[90%] h-[80%] text-[14px] font-[400] leading-[20px] mx-2'>Home</button>
              <button className='hover:bg-white rounded-full w-[90%] h-[80%] text-[14px] font-[400] leading-[20px] px-2'>About Us</button>
              <button className='hover:bg-white rounded-full w-[90%] h-[80%] text-[14px] font-[400] leading-[20px] px-2'>The Creatrix</button>
              <button className='hover:bg-white rounded-full w-[90%] h-[80%] text-[14px] font-[400] leading-[20px] mx-2'>Pricing</button>
          </div>

          {/* SignIn and SignUp Button */}
          <div className='flex w-[222px] h-[48px] items-center justify-center rounded-full border-[1px] border-[#FFFFFF1A] bg-[#FFFFFF1A]'>
            <button className='bg-[#F95D2B] text-white rounded-full w-[90%] h-[80%] text-[14px] font-[400] leading-[20px] mx-2'>Sign In</button>
            <button className='hover:bg-[#F95D2B] hover:text-white rounded-full w-[90%] h-[80%] text-[14px] font-[400] leading-[20px] mr-2'>Sign Up</button>
          </div>
        </div>
    )
}

export default Header;
