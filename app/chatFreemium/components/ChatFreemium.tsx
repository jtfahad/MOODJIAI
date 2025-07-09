import React from 'react';
import Sidebar from './layout/sidebar';
import Image from 'next/image';

const ChatFreemium = () => {
  return (
    <div
      className="min-h-screen w-full text-white flex"
      style={{ background: 'linear-gradient(90deg, #1C0841 0%, #A32478 100%)' }}
    >
      {/* Sidebar */}
      <div className="hidden md:flex md:w-64 lg:w-72">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div
        className="relative flex flex-col flex-1 m-4 rounded-2xl overflow-hidden"
        style={{
          backgroundImage: "url('/backgroundImages/chat-freemium-bg.jpg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        {/* TOP BAR: Menu - Time Left - New Chat */}
        <div className="absolute top-4 left-0 w-full flex justify-between items-center px-4 z-10">
          {/* Menu (left) */}
          <Image className='mb-[170px]' src="/icons/Menu.png" alt="Menu" width={40} height={40} />

          {/* Time Left (center) */}
          <div className="flex items-center gap-2 mb-[170px]">
            <span className="text-[18px] font-semibold font-Inter">Time left:</span>
            <span className="text-[18px] font-semibold text-[#FFCD38] font-Inter">00:00:00</span>
          </div>

          {/* New Chat (right) */}
          <Image
            src="/logos/NewChat.svg"
            alt="New Chat"
            width={158}
            height={210}
            className="object-contain"
          />
        </div>

        {/* CENTERED LOGO */}
        <div className="flex-1 flex justify-center items-center px-4 mt-[200px]">
          <div className="w-full max-w-[800px]">
            <Image
              src="/logos/MainLogos.svg"
              alt="Main Logo"
              layout="responsive"
              width={967}
              height={362}
            />
          </div>
        </div>

        {/* BOTTOM PROMPT INPUT */}
        <div className="w-full px-4 pb-6">
          <div className="w-full max-w-[822px] mx-auto">
            <Image
              src="/logos/PromptInput.svg"
              alt="Prompt Input"
              layout="responsive"
              width={822}
              height={53}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatFreemium;
