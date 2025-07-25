// components/sections/MoodjiExploreSection.tsx
import React from 'react';
import { MoodjiCard } from '../ui/MoodjiCard';
import { MOODJI_CHARACTERS } from '@/constants';

const MoodjiExploreSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center py-16 px-4 text-center" aria-labelledby="explore-heading">
      <header className="mb-12">
        <h2 
          id="explore-heading"
          className="text-2xl sm:text-3xl lg:text-[45px] font-medium text-[#984A2E] leading-tight tracking-wide mb-3"
        >
          Explore Other MoodJis
        </h2>
        <p className="text-lg font-normal text-black leading-relaxed max-w-2xl mx-auto">
          Discover more MoodJis to enhance your experience.
        </p>
      </header>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-5">
        {MOODJI_CHARACTERS.map((character) => (
          <MoodjiCard key={character.id} character={character} />
        ))}
      </div>
    </section>
  );
};

export default MoodjiExploreSection;