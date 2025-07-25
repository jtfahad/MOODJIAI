// components/sections/ManifestationSection.tsx
import React from 'react';
import Image from 'next/image';
import { ChatMessage } from '../ui/ChatMessage';
import { GradientButton } from '../ui/GradientButton';
import ActionButtons from '../ui/ActionButtons';

const ManifestationSection: React.FC = () => {
  const chatMessages = [
    {
      message: "What does wealth feel like in your body when you're not thinking about money?",
      isUser: true
    },
    {
      message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      isUser: false
    },
    {
      message: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
      isUser: false
    },
    {
      message: "What sound or music frequency instantly puts you into power?",
      isUser: true
    }
  ];

  return (
    <section className="flex flex-col items-center mb-20">
      <div className="flex flex-col items-center justify-center w-full pt-24">
        {/* Header */}
        <div className="flex flex-col items-center justify-center w-full text-center gap-3 mb-14 px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-[45px] leading-[120%] tracking-[0.41px] font-medium text-[#984A2E]">
            Ask MoodJi
          </h2>
          <h3 className="text-2xl sm:text-3xl lg:text-[45px] leading-[120%] tracking-[0.41px] font-medium text-[#984A2E]">
            Your Manifestation Partner
          </h3>
          <p className="text-lg leading-[160%] font-normal text-black max-w-2xl">
            Share your feelings. Feel seen. Activate your next creation.
          </p>
        </div>

        {/* Chat Interface */}
        <div className="flex justify-center w-full max-w-6xl mx-4">
          <div className="w-full max-w-[95%] h-[700px] bg-white/60 backdrop-blur-[40px] border-[2.44px] border-white/20 rounded-[20px] p-8">
            <div className="flex flex-col w-full h-full gap-6 overflow-y-auto">
              {/* Chat Messages */}
              <div className="flex flex-col gap-6 flex-1 px-8">
                {chatMessages.map((msg, index) => (
                  <div key={index}>
                    <ChatMessage 
                      message={msg.message} 
                      isUser={msg.isUser}
                      className={index === 1 ? "mt-20" : index === 3 ? "mt-10" : ""}
                    />
                    {index === 2 && (
                      <div className="mt-2">
                        <ActionButtons />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="flex w-full justify-center">
                <div className="flex items-center pl-4 h-[50px] gap-2 w-[90%] bg-white/60 backdrop-blur-[40px] rounded-[30px]">
                  <Image
                    src="/icons/AddNew.svg"
                    alt="Send"
                    width={20}
                    height={20}
                    className="cursor-pointer"
                  />
                  <input
                    type="text"
                    placeholder="Ask Anything"
                    className="flex-1 bg-transparent text-sm font-normal text-black placeholder-black/60 outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center items-center mt-10 w-full p-2">
          <GradientButton size="lg">
            Activate Selura
          </GradientButton>
        </div>
      </div>
    </section>
  );
};

export default ManifestationSection;