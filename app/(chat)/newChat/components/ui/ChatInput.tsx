'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Paperclip, Mic } from 'lucide-react';
import Image from 'next/image';

interface ChatInputProps {
  onSend: (message: string) => void;
  onAddClick: () => void;
  onRecordClick: () => void;
  placeholder?: string;
}

const ChatInput: React.FC<ChatInputProps> = ({
  onSend,
  onAddClick,
  onRecordClick,
  placeholder = "Share your thoughts with Moodji...",
}) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message.trim());
      setMessage('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // prevent newline
      handleSend();
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="w-full px-4 relative z-10"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative max-w-[822px] mx-auto rounded-[30px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl overflow-visible">
        {/* Animated Border Effect */}
        <motion.div
          className="absolute inset-0 rounded-[30px] pointer-events-none z-0"
          animate={{
            background: [
              'linear-gradient(0deg, rgba(147, 197, 253, 0.12) 0%, transparent 100%)',
              'linear-gradient(90deg, rgba(147, 197, 253, 0.12) 0%, transparent 100%)',
              'linear-gradient(180deg, rgba(147, 197, 253, 0.12) 0%, transparent 100%)',
              'linear-gradient(270deg, rgba(147, 197, 253, 0.12) 0%, transparent 100%)',
              'linear-gradient(360deg, rgba(147, 197, 253, 0.12) 0%, transparent 100%)',
            ],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
        />

        <div className="relative z-10 flex items-end gap-3 px-5 py-3">
          {/* Add Button */}
          <motion.button
            type="button"
            onClick={onAddClick}
            className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <Paperclip size={20} />
          </motion.button>

          {/* Message Input */}
          <div className="flex-1 relative">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              className="w-full bg-transparent text-white placeholder-white/50 resize-none outline-none max-h-32 min-h-[50px] leading-relaxed"
              rows={1}
              style={{
                height: 'auto',
                minHeight: '50px',
                maxHeight: '128px',
              }}
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = 'auto';
                target.style.height = target.scrollHeight + 'px';
              }}
            />
          </div>

          {/* Record Button */}
          <motion.button
            type="button"
            onClick={onRecordClick}
            className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mic size={20} />
          </motion.button>

          {/* Send Button */}
          <motion.button
            type="submit"
            disabled={!message.trim()}
            className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            whileHover={message.trim() ? { scale: 1.1 } : {}}
            whileTap={message.trim() ? { scale: 0.9 } : {}}
          >
            <Send size={20} />
          </motion.button>
        </div>

        {/* Floating Dragon */}
        <Image
          src="/dragons/ChatLumeria.svg"
          alt="Dragon"
          width={148}
          height={148}
          className="absolute z-30 pointer-events-none"
          style={{ top: '-120px', right: '0px' }}
        />
      </div>
    </motion.form>
  );
};

export default ChatInput;
