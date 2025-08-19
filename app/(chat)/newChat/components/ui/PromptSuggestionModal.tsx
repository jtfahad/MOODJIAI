// components/ui/PromptSuggestionModal.tsx
import Image from 'next/image';
import React from 'react';

interface CenteredModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode; // Make children optional if the modal has fixed internal content
}

const CenteredModal: React.FC<CenteredModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    // Overlay - covers the main content section, fixed to viewport
    // On mobile, it covers the whole screen. On md screens and up, it starts after the sidebar.
    <div
      className="fixed inset-0 z-19 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-md
                 md:left-[256px] left-0" // md:left-[256px] positions it after the sidebar
      onClick={onClose} // Close modal if overlay is clicked
    >
      {/* Modal Content - This is the outer container for the rounded border effect */}
      <div
        className="relative z-50 overflow-hidden
                   w-[90%] max-w-[489px] h-[90%] max-h-[543px]
                   rounded-2xl p-[1px]
                   shadow-lg" // Added responsive widths and heights
        style={{
          // The gradient background will simulate the border here
          background: `linear-gradient(1.26deg, rgba(249, 188, 46, 0.2) 17.18%, rgba(226, 154, 30, 0.2) 25.06%, rgba(255, 205, 56, 0.2) 35.15%, #F0AF30 60.52%, #E29A1E 66.82%, #FFCD38 74.3%, #DD931A 76.65%)`,
        }}
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
      >
        {/* Inner Content Container - This holds the actual modal content and its background */}
        <div
          className="w-full h-full flex flex-col p-4 gap-4 bg-black/90 backdrop-blur-[40px] rounded-[19px]" // Consolidated classes
          style={{
            WebkitBackdropFilter: 'blur(40px)', // For Safari compatibility
          }}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white text-xl font-bold cursor-pointer z-50"
            onClick={onClose}
          >
            <Image src="/icons/Cross.svg" width={24} height={24} alt="Close modal" />
          </button>

          {/* Modal Header/Title Section */}
          <div className="flex flex-col items-center justify-center pt-4 pb-4"> {/* Added padding-top to give space for close button */}
            <div className='flex items-center gap-2 text-2xl text-[#E6D4E3] font-semibold leading-tight mb-2'>
              <Image src="/icons/Cyclone.svg" width={32} height={32} alt="Emotional Alchemy Icon" />
              <span>Emotional Alchemy</span>
            </div>
            <p className='text-sm text-white font-normal'>Let&#39;s get you started</p>
          </div>

          {/* Prompt Questions Section (scrollable) */}
          <div className='flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent pr-2'> {/* Added pr-2 for scrollbar spacing */}
            <div className='flex flex-col gap-4'> {/* Use a flex container for the questions with gap */}
              {/* Individual Question Item - Applied new styles here */}
              <div
                className='flex items-start gap-2 p-5 rounded-2xl border border-solid' // Combined padding, gap, border-radius, border
                style={{
                  width: '100%', // Take full width of parent
                  minHeight: '78px', // Ensure minimum height
                  background: '#0000004D', // Background color with opacity
                  borderColor: '#FFFFFF33', // Border color with opacity
                  backdropFilter: 'blur(20px)', // Backdrop filter for this specific item
                  WebkitBackdropFilter: 'blur(20px)', // Safari compatibility
                }}
              >
                <Image src="/icons/Cyclone.svg" width={24} height={24} alt="Question Icon" className='mt-1 flex-shrink-0' />
                <span className='text-base text-[#E6D4E3] font-normal leading-snug'>
                  Question related to Emotional Alchemy or the main topic will be displayed here
                </span>
              </div>

              <div
                className='flex items-start gap-2 p-5 rounded-2xl border border-solid'
                style={{
                  width: '100%',
                  minHeight: '78px',
                  background: '#0000004D',
                  borderColor: '#FFFFFF33',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                }}
              >
                <Image src="/icons/Cyclone.svg" width={24} height={24} alt="Question Icon" className='mt-1 flex-shrink-0'/>
                <span className='text-base text-[#E6D4E3] font-normal leading-snug'>
                  Question related to Emotional Alchemy or the main topic will be displayed here
                </span>
              </div>

              <div
                className='flex items-start gap-2 p-5 rounded-2xl border border-solid'
                style={{
                  width: '100%',
                  minHeight: '78px',
                  background: '#0000004D',
                  borderColor: '#FFFFFF33',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                }}
              >
                <Image src="/icons/Cyclone.svg" width={24} height={24} alt="Question Icon" className='mt-1 flex-shrink-0'/>
                <span className='text-base text-[#E6D4E3] font-normal leading-snug'>
                  Question related to Emotional Alchemy or the main topic will be displayed here
                </span>
              </div>
              
              <div
                className='flex items-start gap-2 p-5 rounded-2xl border border-solid'
                style={{
                  width: '100%',
                  minHeight: '78px',
                  background: '#0000004D',
                  borderColor: '#FFFFFF33',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                }}
              >
                <Image src="/icons/Cyclone.svg" width={24} height={24} alt="Question Icon" className='mt-1 flex-shrink-0'/>
                <span className='text-base text-[#E6D4E3] font-normal leading-snug'>
                  Question related to Emotional Alchemy or the main topic will be displayed here
                </span>
              </div>
              {/* You can add more questions here as needed */}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CenteredModal;