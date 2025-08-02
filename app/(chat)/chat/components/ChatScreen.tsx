'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Sidebar from './layout/sidebar'; // Adjust path if needed
import ChatInput from './ui/ChatInput'; // Adjust path if needed
import ChatSection from './chat/ChatSection'; // Adjust path if needed
import { motion, AnimatePresence, Variants } from 'framer-motion';

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

const MOOD_BACKGROUND: Record<Mood, string> = {
  calm:      '/backgroundImages/chatBg1.svg',
  energetic: '/backgroundImages/chatBg2.svg',
  focused:   '/backgroundImages/chatBg3.svg',
  playful:   '/backgroundImages/chatBg4.svg',
  romantic:  '/backgroundImages/chatBg5.svg',
  mysterious:'/backgroundImages/chatBg6.svg',
  inspiring: '/backgroundImages/chatBg7.svg',
  somber:    '/backgroundImages/chatBg8.svg',
};

const moodVariants: Record<Mood, Variants> = {
  calm: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.5, ease: 'easeInOut' } },
    exit:    { opacity: 0, transition: { duration: 1 } }
  },
  energetic: {
    initial: { x: '100%', scale: 1.2, opacity: 0 },
    animate: { x: '0%',   scale: 1.0, opacity: 1, transition: { duration: 0.8 } },
    exit:    { x: '-100%', scale: 1.1, opacity: 0, transition: { duration: 0.8 } }
  },
  focused: {
    initial: { clipPath: 'circle(0% at 50% 50%)', filter: 'blur(20px)' },
    animate: { clipPath: 'circle(150% at 50% 50%)', filter: 'blur(0px)', transition: { duration: 1.2, ease: 'easeOut' } },
    exit:    { clipPath: 'circle(0% at 50% 50%)', filter: 'blur(20px)', transition: { duration: 1 } }
  },
  playful: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1.0, opacity: 1, transition: { type: 'spring', stiffness: 120, damping: 15 } },
    exit:    { scale: 0.8, opacity: 0, transition: { duration: 0.6 } }
  },
  romantic: {
    initial: { y: '100%', opacity: 0 },
    animate: { y: '0%',   opacity: 1, transition: { duration: 1.5, ease: 'easeOut' } },
    exit:    { y: '-100%', opacity: 0, transition: { duration: 1 } }
  },
  mysterious: {
    initial: { backgroundColor: '#000', opacity: 1 },
    animate: { backgroundColor: 'transparent', opacity: 1, transition: { duration: 1 } },
    exit:    { opacity: 0, transition: { duration: 1 } }
  },
  inspiring: {
    initial: { rotate: -10, opacity: 0 },
    animate: { rotate: 0, opacity: 1, transition: { duration: 1, ease: 'backOut' } },
    exit:    { rotate: 10, opacity: 0, transition: { duration: 0.8 } }
  },
  somber: {
    initial: { filter: 'grayscale(100%)', opacity: 0 },
    animate: { filter: 'grayscale(0%)', opacity: 1, transition: { duration: 1.2 } },
    exit:    { filter: 'grayscale(100%)', opacity: 0, transition: { duration: 1 } }
  }
};

const PROMPT_CARDS = [
  { mood: 'calm', prompt: 'Tell me something calming.' },
  { mood: 'energetic', prompt: 'What\'s a great way to start the day?' },
  { mood: 'focused', prompt: 'Give me some tips to stay focused while studying.' },
  { mood: 'playful', prompt: 'Tell me a funny joke.' },
  { mood: 'romantic', prompt: 'Write a short love poem.' },
  { mood: 'mysterious', prompt: 'Tell me a mysterious story.' },
  { mood: 'inspiring', prompt: 'Inspire me with a quote.' },
  { mood: 'somber', prompt: 'What is a thought on melancholy?' },
];

function pickMoodFromPrompt(prompt: string): Mood {
  const text = prompt.toLowerCase();
  if (text.includes('romance') || text.includes('love'))   return 'romantic';
  if (text.includes('bored')   || text.includes('calm'))   return 'calm';
  if (text.includes('wow')      || text.includes('great'))  return 'energetic';
  if (text.includes('study')    || text.includes('focus'))  return 'focused';
  if (text.includes('laugh')    || text.includes('fun'))    return 'playful';
  if (text.includes('dark')     || text.includes('scary'))  return 'mysterious';
  if (text.includes('dream')    || text.includes('inspire'))return 'inspiring';
  return 'somber'; // Default or fallback mood
}

// Helper to get a descriptive string for the mood
const getMoodDescription = (mood: Mood): string => {
  switch (mood) {
    case 'calm':      return 'calm and serene 🧘‍♀️';
    case 'energetic': return 'energetic and lively 🚀';
    case 'focused':   return 'focused and clear-headed 🧠';
    case 'playful':   return 'playful and lighthearted 😄';
    case 'romantic':  return 'romantic and heartfelt ❤️';
    case 'mysterious':return 'mysterious and intriguing 🕵️‍♀️';
    case 'inspiring': return 'inspiring and uplifting ✨';
    case 'somber':    return 'somber and thoughtful 🌧️';
    default:          return 'neutral';
  }
};

const ChatScreen: React.FC = () => {
  const router = useRouter();

  // chat state
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [chatStarted, setChatStarted]   = useState(false);
  const [isThinking, setIsThinking]     = useState(false); // True when AI is generating a response

  // sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  // mood
  const [currentMood, setCurrentMood] = useState<Mood>('calm');

  // send user prompt
  const handleSendPrompt = async (message: string) => {
    if (!message.trim()) return;

    const nextMood = pickMoodFromPrompt(message);
    setCurrentMood(nextMood);

    const newUserMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      text: message,
    };

    // Add user message immediately
    setChatMessages(prev => [...prev, newUserMessage]);
    setChatStarted(true);
    setIsThinking(true); // Set thinking to true when starting AI generation

    // Prepare API call with exponential backoff
    // Construct chat history for the API call
    const chatHistory = [...chatMessages.map(msg => ({
      role: msg.type === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }],
    }))];

    // Dynamically add instructions to the prompt for formatting and emojis
    const moodInstruction = `Please respond in a ${getMoodDescription(currentMood)} tone.`;
    const formattingInstruction = `Use **bold** for important keywords and include relevant emojis naturally within the text. Ensure your response is professional and engaging.`;

    const fullPrompt = `${moodInstruction} ${formattingInstruction}\n\nUser: ${message}`;

    // Add the augmented prompt as the last user message for the API call
    chatHistory.push({ role: 'user', parts: [{ text: fullPrompt }] });


    const payload = { contents: chatHistory };
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "YOUR_GEMINI_API_KEY_HERE";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

    let responseText = "Sorry, I am unable to generate a response right now. Please try again later. 🙏";
    let retryCount = 0;
    const maxRetries = 5;
    let delay = 1000;

    while (retryCount < maxRetries) {
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (response.status === 429) {
          console.warn(`API call failed with status 429. Retrying in ${delay / 1000}s...`);
          await new Promise(res => setTimeout(res, delay));
          delay *= 2;
          retryCount++;
          continue;
        }

        if (!response.ok) {
          throw new Error(`API call failed with status: ${response.status} - ${response.statusText}`);
        }

        const result = await response.json();
        const text = result?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) {
          responseText = text;
        } else {
          console.warn("No text found in Gemini API response candidates.");
        }
        break;

      } catch (error) {
        console.error("Error calling Gemini API:", error);
        break;
      }
    }

    // Add the AI's response to the chat
    const aiResponse: ChatMessage = {
      id: `${Date.now()}-ai`,
      type: 'ai',
      text: responseText,
    };

    setChatMessages(prev => [...prev, aiResponse]);
    setIsThinking(false); // AI has finished generating, set thinking to false
  };

  const handleAddAttachment = () => console.log("Add attachment clicked");
  const handleRecordVoice    = () => console.log("Record voice clicked");
  const handleNewChatClick   = () => {
    setChatMessages([]);
    setChatStarted(false);
    setIsThinking(false);
    setCurrentMood('calm'); // Reset mood on new chat
    console.log("New Chat button clicked");
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentMood}
        variants={moodVariants[currentMood]}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{
          backgroundImage: `url('${MOOD_BACKGROUND[currentMood]}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        className="h-screen w-full text-white flex"
      >
        {/* Sidebar */}
        <div
          className={`
            hidden md:flex flex-shrink-0 transition-all duration-300 ease-in-out
            h-[calc(100vh-32px)] my-4
            ${isSidebarOpen ? 'w-[230px] ml-4' : 'w-0 ml-0'}
          `}
        >
          <div className="w-full h-full rounded-[20px] bg-white/20 backdrop-blur-xl z-20">
            {isSidebarOpen && <Sidebar onClose={toggleSidebar} onNewChat={handleNewChatClick} />}
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex flex-col flex-1 m-4 rounded-2xl overflow-hidden min-h-0 relative">
          {/* Menu Button */}
          {!isSidebarOpen && (
            <div
              onClick={toggleSidebar}
              className="absolute top-5 left-4 z-30 text-white rounded-full hover:bg-white/20 transition-colors md:block hidden cursor-pointer"
            >
              <Image src="/icons/MenuIcon.svg" width={36} height={36} alt="Menu" />
            </div>
          )}

          {/* Header Logo */}
          <div className="fixed top-0 left-0 w-full flex justify-center z-40 pointer-events-none">
            <div
              className="relative"
              style={{
                left: isSidebarOpen ? '122px' : '0',
                transition: 'left 0.3s ease-in-out'
              }}
            >
              <Image
                src="/icons/ChatResonance.svg"
                alt="Chat Background"
                width={151}
                height={20}
                className="object-cover"
              />
            </div>
          </div>

          {/* Chat Section */}
          <div className="h-[780px] flex flex-col items-center justify-start py-8 overflow-y-auto custom-scrollbar-hidden transition-all mt-5">
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
            className={`
              absolute bottom-0 left-0
              ${isSidebarOpen ? 'w-[calc(100%-5px)]' : 'w-full'}
              p-4 rounded-t-2xl shadow-lg z-10
              transition-all duration-500 ease-in-out
            `}
            style={{ transitionProperty: 'width, left' }}
          >
            <ChatInput
              onSend={handleSendPrompt}
              onAddClick={handleAddAttachment}
              onRecordClick={handleRecordVoice}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ChatScreen;