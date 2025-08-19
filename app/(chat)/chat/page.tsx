import React from "react";
import Image from "next/image";
import { Paperclip } from "lucide-react"; // icon for file upload

const NewChatScreen: React.FC = () => {
  return (
    <div
      className="
        w-screen h-screen 
        flex items-center justify-center 
        bg-cover bg-center 
        border-[6px] sm:border-[8px] lg:border-[11px] border-[#CDDEF5] 
        box-border p-3 sm:p-4
      "
      style={{ backgroundImage: 'url("/backgroundImages/chatScreenBg.jpg")' }}
    >
      {/* Centered Content */}
      <div className="text-center max-w-[900px] w-full px-2 sm:px-4">
        {/* Top Icon */}
        <div className="mb-4 sm:mb-6">
          <Image
            src="/icons/circleGlobe.svg"
            alt="Orb"
            width={68}
            height={68}
            className="mx-auto w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
          />
        </div>

        {/* Greeting */}
        <h2 className="font-inter font-semibold text-[20px] sm:text-[26px] lg:text-[32px] leading-[28px] sm:leading-[36px] lg:leading-[42px] text-center mb-1">
          Good Morning, Synaptiq
        </h2>
        <h3 className="font-inter font-normal text-[16px] sm:text-[20px] lg:text-[24px] leading-[22px] sm:leading-[30px] lg:leading-[36px] text-center mb-5">
          How can{" "}
          <span className="text-[#9A46C2] font-semibold">I Assist you Today?</span>
        </h3>

        {/* Input Container */}
        <div
          className="
            w-full max-w-[802px] 
            min-h-[180px] sm:min-h-[220px] lg:min-h-[269px]
            rounded-[16px] sm:rounded-[20px] 
            border-[1.5px] sm:border-[2px] border-[#E0EBFF] 
            bg-[#FDFCFF33]
            shadow-[0px_20px_40px_0px_#73279426] sm:shadow-[0px_28px_52px_0px_#73279426] lg:shadow-[0px_34px_64px_0px_#73279426]
            flex flex-col justify-between
            p-3 sm:p-4 lg:p-5 gap-[8px]
            mx-auto
          "
        >
          {/* Text Input */}
          <textarea
            placeholder="Ask anything"
            className="
              flex-1
              resize-none
              bg-transparent
              outline-none
              text-[14px] sm:text-[15px] lg:text-[16px]
              text-left
            "
          />

          {/* Options Row at Bottom */}
          <div className="flex items-center gap-[10px] sm:gap-[14px] whitespace-nowrap overflow-x-auto no-scrollbar pt-2">
            {/* File Upload Button */}
            <label
              htmlFor="file-upload"
              className="
                flex items-center justify-center
                min-w-[77px] h-[30px]
                rounded-[70px]
                bg-[#7D5CA31C]
                border border-gray-300
                cursor-pointer hover:bg-[#7D5CA340]
                px-[12px] py-[6px]
              "
            >
              <Paperclip size={16} className="text-gray-600" />
              <input id="file-upload" type="file" className="hidden" multiple />
            </label>

            {/* Other Option Buttons */}
            {["Final Text", "Compatibility", "Dating Profile", "Inner Child", "Shadow"].map(
              (label, index) => (
                <button
                  key={index}
                  className="
                    flex items-center justify-center
                    w-auto min-w-[77px] h-[30px]
                    rounded-[70px]
                    bg-[#7D5CA31C]
                    border border-gray-300
                    text-[12px] sm:text-[13px] lg:text-[14px]
                    whitespace-nowrap
                    px-[12px] py-[6px]
                    hover:bg-[#7D5CA340]
                    transition
                  "
                >
                  {label}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewChatScreen;
