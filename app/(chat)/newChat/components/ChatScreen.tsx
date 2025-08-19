'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Sidebar from './layout/sidebar'; // Ensure this path is correct
import ChatInput from './ui/ChatInput'; // Ensure this path is correct
import ChatSection from './chat/ChatSection'; // Ensure this path is correct
import { motion, AnimatePresence } from 'framer-motion';

interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  text: string;
}

type Mood =
  | 'calm'
  | 'energetic'
  | 'focused'
  | 'playful'
  | 'romantic'
  | 'mysterious'
  | 'inspiring'
  | 'somber';

const MOOD_GRADIENTS: Record<Mood, string> = {
  calm: 'linear-gradient(135deg, #A8DADC, #457B9D)',
  energetic: 'linear-gradient(135deg, #FFD166, #EF476F)',
  focused: 'linear-gradient(135deg, #06D6A0, #118AB2)',
  playful: 'linear-gradient(135deg, #FF9A9E, #FAD0C4)',
  romantic: 'linear-gradient(135deg, #FFADAD, #FFC3A0)',
  mysterious: 'linear-gradient(135deg, #2B2D42, #4B3F72)',
  inspiring: 'linear-gradient(135deg, #FBC4AB, #FFDEEB)',
  somber: 'linear-gradient(135deg, #6C757D, #343A40)',
};

const PROMPT_CARDS = [
  { mood: 'calm', prompt: 'Tell me something calming.' },
  { mood: 'energetic', prompt: "What's a great way to start the day?" },
  { mood: 'focused', prompt: 'Give me some tips to stay focused while studying.' },
  { mood: 'playful', prompt: 'Tell me a funny joke.' },
  { mood: 'romantic', prompt: 'Write a short love poem.' },
  { mood: 'mysterious', prompt: 'Tell me a mysterious story.' },
  { mood: 'inspiring', prompt: 'Inspire me with a quote.' },
  { mood: 'somber', prompt: 'What is a thought on melancholy?' },
];

function pickMoodFromPrompt(prompt: string): Mood {
  const text = prompt.toLowerCase();
  if (text.includes('romance') || text.includes('love')) return 'romantic';
  if (text.includes('bored') || text.includes('calm')) return 'calm';
  if (text.includes('wow') || text.includes('great')) return 'energetic';
  if (text.includes('study') || text.includes('focus')) return 'focused';
  if (text.includes('laugh') || text.includes('fun')) return 'playful';
  if (text.includes('dark') || text.includes('scary')) return 'mysterious';
  if (text.includes('dream') || text.includes('inspire')) return 'inspiring';
  if (text.includes('sad') || text.includes('melancholy')) return 'somber'; // Added more somber keywords
  return 'calm'; // Default to 'calm' if no specific mood is found
}

const ChatScreen: React.FC = () => {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [chatStarted, setChatStarted] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentMood, setCurrentMood] = useState<Mood>('calm');

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  const handleSendPrompt = (message: string) => {
    if (!message.trim()) return;
    const nextMood = pickMoodFromPrompt(message);
    setCurrentMood(nextMood); // Update mood before adding message for quicker visual feedback

    const newUserMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      text: message,
    };

    setChatMessages(prev => [...prev, newUserMessage]);
    setChatStarted(true);
    setIsThinking(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: `${Date.now()}-ai`,
        type: 'ai',
        text: `You said: "${message}" — here's a thoughtful reply for the mood: **${nextMood.charAt(0).toUpperCase() + nextMood.slice(1)}**!`,
      };
      setIsThinking(false);
      setChatMessages(prev => [...prev, aiResponse]);
    }, 1500); // Simulate network delay
  };

  const handleNewChat = () => {
    setChatMessages([]);
    setChatStarted(false);
    setCurrentMood('calm'); // Reset mood on new chat
    setIsThinking(false);
  };

  return (
    // The keyframes for the gradient animation.
    // In a real project, this would be in a global CSS file.
    <div className="relative h-screen w-full text-white flex overflow-hidden"
    style={{
      backgroundImage: MOOD_GRADIENTS[currentMood],
      backgroundSize: '400% 400%',
      animation: 'gradientShift 5s ease infinite', // Slightly longer and smoother animation
    }}
    >
      <style jsx global>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        /* Hide scrollbar for Chrome, Safari and Opera */
        .custom-scrollbar-hidden::-webkit-scrollbar {
            display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .custom-scrollbar-hidden {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }
      `}</style>

      {/* Background Gradient Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentMood} // Key ensures the component remounts and animation restarts on mood change
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }} // Smoother transition
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: MOOD_GRADIENTS[currentMood],
            backgroundSize: '400% 400%',
            animation: 'gradientShift 25s ease infinite', // Slightly longer and smoother animation
          }}
        />
      </AnimatePresence>

      {/* Sidebar Section */}
      <div className={`hidden md:flex flex-shrink-0 transition-all duration-300 ease-in-out h-[calc(100vh-32px)] my-4 ${isSidebarOpen ? 'w-[230px] ml-4' : 'w-0 ml-0'}`}>
        <div className="w-full h-full rounded-[20px] bg-white/20 backdrop-blur-xl z-20">
          {isSidebarOpen && <Sidebar onClose={toggleSidebar} onNewChat={handleNewChat} />}
        </div>
      </div>

      {/* Main Chat Content */}
      <div className="flex flex-col flex-1 m-4 rounded-2xl overflow-hidden min-h-0 relative">
        {/* Sidebar Toggle Button */}
        {!isSidebarOpen && (
          <div
            onClick={toggleSidebar}
            className="absolute top-5 left-4 z-30 text-white rounded-full hover:bg-white/20 transition-colors md:block hidden cursor-pointer"
          >
            <Image src="/icons/MenuIcon.svg" width={36} height={36} alt="Menu" />
          </div>
        )}

        {/* Chat Resonance Logo */}
        <div className="fixed top-0 left-0 w-full flex justify-center z-40 pointer-events-none">
          <div className="relative" style={{ left: isSidebarOpen ? '122px' : '0', transition: 'left 0.3s ease-in-out' }}>
            <Image src="/icons/ChatResonance.svg" alt="Chat Logo" width={151} height={20} className="object-cover" />
          </div>
        </div>

        {/* Chat Section / Prompt Cards */}
        <div className="flex-1 flex flex-col items-center justify-start py-8 overflow-y-auto custom-scrollbar-hidden transition-all mt-5">
          {!chatStarted ? (
            <div className="mt-20 w-full px-4 text-center">
              <p className="text-lg opacity-60 mb-8">Start a conversation to explore Moodji</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {PROMPT_CARDS.map((card, index) => (
                  <motion.div
                    key={index}
                    className="cursor-pointer bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center text-sm font-semibold hover:bg-white/20 transition-colors"
                    onClick={() => handleSendPrompt(card.prompt)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {card.prompt}
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            <ChatSection messages={chatMessages} isThinking={isThinking} />
          )}
        </div>

        {/* Chat Input */}
        <div
          className={`absolute bottom-0 left-0 ${isSidebarOpen ? 'w-[calc(100%-5px)]' : 'w-full'} p-4 rounded-t-2xl shadow-lg z-10 transition-all duration-500 ease-in-out`}
          style={{ transitionProperty: 'width, left' }}
        >
          <ChatInput
            onSend={handleSendPrompt}
            onAddClick={() => console.log("Add attachment clicked")}
            onRecordClick={() => console.log("Record voice clicked")}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;