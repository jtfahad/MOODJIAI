import { MoodCard } from './mood-card';

interface Mood {
  id: number;
  label: string;
  sublabel: string;
  gradient: string;
  category: string;
}

interface MoodGridProps {
  moods: Mood[];
  selectedMood: number | null;
  onMoodSelect: (moodId: number) => void;
}

export function MoodGrid({ moods, selectedMood, onMoodSelect }: MoodGridProps) {
  return (
    <div 
      className="grid auto-fit-grid"
      style={{
        gridTemplateColumns: 'repeat(auto-fit, minmax(138px, 1fr))',
        gap: '18px',
        justifyItems: 'center',
      }}
    >
      {moods.map((mood) => (
        <MoodCard
          key={mood.id}
          id={mood.id}
          label={mood.label}
          sublabel={mood.sublabel}
          gradient={mood.gradient}
          isSelected={selectedMood === mood.id}
          onClick={onMoodSelect}
        />
      ))}
    </div>
  );
}
