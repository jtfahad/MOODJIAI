// components/ui/MoodjiCard.tsx
import React from 'react';
import Image from 'next/image';
import { MoodjiCharacter } from '@/types';

interface MoodjiCardProps {
  character: MoodjiCharacter;
}

export const MoodjiCard: React.FC<MoodjiCardProps> = ({ character }) => {
  return (
    <article className="flex flex-col justify-center w-full max-w-[420px] h-[490px] bg-white/60 backdrop-blur-[40px] border-[2.44px] border-white/20 rounded-[20px] p-8 mx-auto transition-all duration-300 hover:shadow-xl hover:scale-105">
      <div className="mb-6">
        <Image
          src={character.image}
          alt={character.alt}
          width={360}
          height={340}
          className="mx-auto transition-transform duration-300 hover:scale-110"
          priority={false}
        />
      </div>
      
      <header className="text-center">
        <h3 className="text-3xl font-bold text-black leading-tight tracking-tight mb-3 font-hanson">
          {character.name}
        </h3>
        <p className="text-lg font-semibold text-[#F95D2B] leading-tight tracking-tight">
          {character.subtitle}
        </p>
      </header>
    </article>
  );
};