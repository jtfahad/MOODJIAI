'use client'
import React, { useState } from "react";
import Image from "next/image";
import { Paperclip } from "lucide-react";
import { backgrounds } from "@/constants/moodBackgrounds";
import ChatSection from "./components/sections/ChatSection";
import ChatInput from "./components/ui/ChatIput";


// --------------------
// Types
// --------------------
interface ChatMessage {
  id: string;
  type: "user" | "ai";
  text: string;
}

// --------------------
// Reusable Components
// --------------------

const OptionButton: React.FC<{ label: string }> = ({ label }) => (
  <button
    className="
      flex items-center justify-center
      h-[30px] px-[12px] py-[6px]
      rounded-[70px] border border-gray-300
      bg-[#7D5CA31C] hover:bg-[#7D5CA340]
      text-[12px] sm:text-[13px] lg:text-[14px]
      whitespace-nowrap transition
    "
  >
    {label}
  </button>
);

const FileUploadButton: React.FC = () => (
  <label
    htmlFor="file-upload"
    className="
      flex items-center justify-center
      min-w-[50px] h-[30px]
      px-[12px] py-[6px]
      rounded-[70px] border border-gray-300
      bg-[#7D5CA31C] hover:bg-[#7D5CA340]
      cursor-pointer
    "
  >
    <Paperclip size={16} className="mr-1 text-gray-700" />
    <input id="file-upload" type="file" className="hidden" multiple />
  </label>
);

// --------------------
// Main Screen
// --------------------

const NewChatScreen: React.FC = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [chatStarted, setChatStarted] = useState(false);
  const [isThinking, setIsThinking] = useState(false);

  const handleBgChange = () => {
    setBgIndex((prev) => (prev + 1) % backgrounds.length);
  };

  const currentBg = backgrounds[bgIndex];

  const handleSendPrompt = (message: string) => {
    if (!message.trim()) return;

    const newUserMessage: ChatMessage = {
      id: Date.now().toString(),
      type: "user",
      text: message,
    };

    setChatMessages((prev) => [...prev, newUserMessage]);
    setChatStarted(true);
    setIsThinking(true);

    // mock AI response
    setTimeout(() => {
      const newAiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        text: `AI Response: "${message}" — this is a sample.`,
      };
      setChatMessages((prev) => [...prev, newAiMessage]);
      setIsThinking(false);
    }, 1200);
  };

  const handleAddAttachment = () => console.log("Add attachment clicked");
  const handleRecordVoice = () => console.log("Record voice clicked");

  return (
    <div
      className={`
        w-screen h-screen flex items-center justify-center
        bg-cover bg-center transition-all duration-500
        border-[6px] sm:border-[8px] lg:border-[11px] border-[#CDDEF5]
        box-border p-3 sm:p-4 relative
      `}
      style={{
        backgroundImage: `
          url(${currentBg.mobile})
        `,
      }}
    >
      {/* floating decorative images */}
      <div className="hidden sm:block absolute top-0 left-1/2 -translate-x-1/2 transition-all duration-500">
        <Image
          src="/icons/resonance.svg"
          alt="resonance"
          width={232}
          height={232}
          className="object-contain"
        />
      </div>
      <div className="hidden sm:block absolute bottom-0 left-0 transition-all duration-500">
        <Image
          src="/dragons/chatScreenDragon.svg"
          alt="Chat Background"
          width={232}
          height={232}
          className="object-contain"
        />
      </div>

      {/* responsive background switch */}
      <style jsx>{`
        @media (min-width: 640px) {
          div[style] {
            background-image: url(${currentBg.desktop}) !important;
          }
        }
      `}</style>

      <div className="max-w-[900px] w-full flex flex-col items-center justify-between h-full">
      {/* BEFORE CHAT STARTS */}
        {!chatStarted && (
          <div className="flex-1 w-full flex items-center justify-center">
            <div className="text-center max-w-[900px] w-full px-2 sm:px-4">
              {/* Top Icon (click to change background) */}
              <div
                className="mb-4 sm:mb-6 cursor-pointer"
                onClick={handleBgChange}
              >
                <Image
                  src="/icons/circleGlobe.svg"
                  alt="Orb"
                  width={60}
                  height={60}
                  className="mx-auto w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 transition-transform hover:scale-110"
                />
              </div>

              {/* Greeting */}
              <h2 className="font-inter font-semibold text-[20px] sm:text-[26px] lg:text-[32px] leading-tight sm:leading-snug lg:leading-normal text-center mb-1">
                Good Morning, Synaptiq
              </h2>
              <h3 className="font-inter font-normal text-[16px] sm:text-[20px] lg:text-[24px] leading-snug sm:leading-normal lg:leading-relaxed text-center mb-5">
                How can{" "}
                <span className="text-[#9A46C2] font-semibold">
                  I Assist you Today?
                </span>
              </h3>

              {/* Input Container */}
              <div
                className="
                  w-full max-w-[802px] min-h-[180px] sm:min-h-[220px] lg:min-h-[269px]
                  flex flex-col justify-between gap-2
                  mx-auto p-3 sm:p-4 lg:p-5
                  rounded-[16px] sm:rounded-[20px]
                  border border-[#E0EBFF] bg-[#FDFCFF33]
                  shadow-[0px_20px_40px_0px_#73279426]
                  sm:shadow-[0px_28px_52px_0px_#73279426]
                  lg:shadow-[0px_34px_64px_0px_#73279426]
                "
              >
                {/* Text Input */}
                <textarea
                  placeholder="Ask anything"
                  className="flex-1 resize-none bg-transparent outline-none text-[14px] sm:text-[15px] lg:text-[16px]"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSendPrompt((e.target as HTMLTextAreaElement).value);
                      (e.target as HTMLTextAreaElement).value = "";
                    }
                  }}
                />

                {/* Options Row */}
                <div className="flex items-center gap-[10px] sm:gap-[14px] whitespace-nowrap overflow-x-auto no-scrollbar pt-2">
                  <FileUploadButton />
                  {[
                    "Final Text",
                    "Compatibility",
                    "Dating Profile",
                    "Inner Child",
                    "Shadow",
                  ].map((label, index) => (
                    <OptionButton key={index} label={label} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}


        {/* AFTER CHAT STARTS */}
        {chatStarted && (
          <>
            <div className="flex-1 w-full flex flex-col items-center justify-start overflow-y-auto custom-scrollbar-hidden py-6 sm:pt-6 pt-20">
              <ChatSection messages={chatMessages} isThinking={isThinking} />
            </div>

            {/* Chat Input */}
            <div className="w-full px-2 sm:px-4 pb-4">
              <ChatInput
                onSend={handleSendPrompt}
                onAddClick={handleAddAttachment}
                onRecordClick={handleRecordVoice}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NewChatScreen;
