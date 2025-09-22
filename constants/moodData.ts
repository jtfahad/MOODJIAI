// Define types for better code documentation and maintainability
interface MoodCategory {
  id: string;
  label: string;
  icon: string;
}

interface MoodGenre {
  id: string;
  label: string;
  image_url: string;
}

interface Dragon {
  name: string;
  description: string;
  image: string;
}

interface HeadlineOption {
  label: string;
  value: string;
}

interface Desire {
  id: string;
  label: string;
  icon: string;
}

interface DesireSectionData {
  title: string;
  desires: Desire[];
}

interface MoodCard {
  id: string;
  title: string;
  subtitle: string;
}

// --- Exported Constants ---
export const AGE_RANGES: string[] = [
  "Under 18",
  "18 - 24",
  "25 - 34",
  "35 - 44",
  "45 - 54",
  "55 - 64",
  "65 and above",
];

export const ZODIAC_SIGNS: string[] = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

export const MOOD_CATEGORIES: MoodCategory[] = [
  { id: "positive", label: "Positive", icon: "/icons/Positive.svg" },
  { id: "negative", label: "Negative", icon: "/icons/Negative.svg" },
  { id: "natural", label: "Natural", icon: "/icons/Natural.svg" },
  { id: "physical", label: "Physical", icon: "/icons/Physical.svg" },
];

export const MoodCards: MoodCard[] = [
  { id: "calm-recharged", title: "Calm", subtitle: "Recharged" },
  { id: "joyful-energized", title: "Joyful", subtitle: "Energized" },
  { id: "focused-productive", title: "Focused", subtitle: "Productive" },
  { id: "inspired-creative", title: "Inspired", subtitle: "Creative" },
  { id: "grateful-content", title: "Grateful", subtitle: "Content" },
  { id: "hopeful-optimistic", title: "Hopeful", subtitle: "Optimistic" },
  { id: "confident-empowered", title: "Confident", subtitle: "Empowered" },
  { id: "peaceful-relaxed", title: "Peaceful", subtitle: "Relaxed" },
  { id: "motivated-driven", title: "Motivated", subtitle: "Driven" },
  { id: "loved-connected", title: "Loved", subtitle: "Connected" },
  { id: "adventurous-curious", title: "Adventurous", subtitle: "Curious" },
  { id: "playful-lighthearted", title: "Playful", subtitle: "Lighthearted" },
  { id: "reflective-thoughtful", title: "Reflective", subtitle: "Thoughtful" },
  { id: "proud-accomplished", title: "Proud", subtitle: "Accomplished" },
  { id: "excited-anticipating", title: "Excited", subtitle: "Anticipating" },
  { id: "serene-balanced", title: "Serene", subtitle: "Balanced" },
];

export const MOOD_GENRES: MoodGenre[] = [
  { id: "happy", label: "Happy", image_url: "/moods/moodGenres/genre1.svg" },
  { id: "sad", label: "Sad", image_url: "/moods/moodGenres/genre2.svg" },
  {
    id: "energetic",
    label: "Energetic",
    image_url: "/moods/moodGenres/genre3.svg",
  },
  { id: "calm", label: "Calm", image_url: "/moods/moodGenres/genre4.svg" },
  {
    id: "romantic",
    label: "Romantic",
    image_url: "/moods/moodGenres/genre5.svg",
  },
  { id: "angry", label: "Angry", image_url: "/moods/moodGenres/genre6.svg" },
  {
    id: "reflective",
    label: "Reflective",
    image_url: "/moods/moodGenres/genre7.svg",
  },
  {
    id: "adventurous",
    label: "Adventurous",
    image_url: "/moods/moodGenres/genre1.svg",
  },
  {
    id: "melancholic",
    label: "Melancholic",
    image_url: "/moods/moodGenres/genre2.svg",
  },
  {
    id: "playful",
    label: "Playful",
    image_url: "/moods/moodGenres/genre3.svg",
  },
  {
    id: "nostalgic",
    label: "Nostalgic",
    image_url: "/moods/moodGenres/genre4.svg",
  },
  {
    id: "motivated",
    label: "Motivated",
    image_url: "/moods/moodGenres/genre5.svg",
  },
  { id: "calm2", label: "Calm", image_url: "/moods/moodGenres/genre4.svg" },
  {
    id: "romantic2",
    label: "Romantic",
    image_url: "/moods/moodGenres/genre5.svg",
  },
  { id: "angry2", label: "Angry", image_url: "/moods/moodGenres/genre6.svg" },
  {
    id: "nostalgic2",
    label: "Nostalgic",
    image_url: "/moods/moodGenres/genre4.svg",
  },
];

export const DRAGONS: Dragon[] = [
  {
    name: "Lumeria",
    description: "Radiant Light",
    image: "./dragons/Lumeria.svg",
  },
  {
    name: "Karios",
    description: "Grounded Power",
    image: "./dragons/Karios.svg",
  },
  {
    name: "Zenvarion",
    description: "Serene Wisdom",
    image: "./dragons/Zenvarion.svg",
  },
  {
    name: "Lumeria2",
    description: "Radiant Light",
    image: "./dragons/Lumeria.svg",
  },
];

export const HEADLINE_OPTIONS: HeadlineOption[] = [
  { label: "My relationship", value: "my_relationship" },
  { label: "In-General", value: "in_general" },
];

export const DESIRES_DATA: DesireSectionData[] = [
  {
    title: "Free Desires",
    desires: [
      { id: "flirt", label: "Flirt", icon: "/icons/desires/flirt.svg" },
      {
        id: "intimacy",
        label: "Intimacy",
        icon: "/icons/desires/intimacy.svg",
      },
      {
        id: "grow-closer",
        label: "Grow Closer",
        icon: "/icons/desires/growCloser.svg",
      },
      {
        id: "surprise",
        label: "Surprise",
        icon: "/icons/desires/surprise.svg",
      },
      {
        id: "quality-time",
        label: "Quality Time",
        icon: "/icons/desires/qualityTime.svg",
      },
      { id: "romance", label: "Romance", icon: "/icons/desires/romance.svg" },
      { id: "flirt2", label: "Flirt", icon: "/icons/desires/flirt.svg" },
      {
        id: "intimacy2",
        label: "Intimacy",
        icon: "/icons/desires/intimacy.svg",
      },
      {
        id: "grow-closer2",
        label: "Grow Closer",
        icon: "/icons/desires/growCloser.svg",
      },
      {
        id: "surprise2",
        label: "Surprise",
        icon: "/icons/desires/surprise.svg",
      },
      {
        id: "quality-time2",
        label: "Quality Time",
        icon: "/icons/desires/qualityTime.svg",
      },
      { id: "romance2", label: "Romance", icon: "/icons/desires/romance.svg" },
    ],
  },
  {
    title: "Teamwork - Respect",
    desires: [
      { id: "flirt3", label: "Flirt", icon: "/icons/desires/flirt.svg" },
      {
        id: "intimacy3",
        label: "Intimacy",
        icon: "/icons/desires/intimacy.svg",
      },
      {
        id: "grow-closer3",
        label: "Grow Closer",
        icon: "/icons/desires/growCloser.svg",
      },
      {
        id: "surprise3",
        label: "Surprise",
        icon: "/icons/desires/surprise.svg",
      },
      {
        id: "quality-time3",
        label: "Quality Time",
        icon: "/icons/desires/qualityTime.svg",
      },
      { id: "romance3", label: "Romance", icon: "/icons/desires/romance.svg" },
      { id: "flirt4", label: "Flirt", icon: "/icons/desires/flirt.svg" },
      {
        id: "intimacy4",
        label: "Intimacy",
        icon: "/icons/desires/intimacy.svg",
      },
      {
        id: "grow-closer4",
        label: "Grow Closer",
        icon: "/icons/desires/growCloser.svg",
      },
      {
        id: "surprise4",
        label: "Surprise",
        icon: "/icons/desires/surprise.svg",
      },
      {
        id: "quality-time4",
        label: "Quality Time",
        icon: "/icons/desires/qualityTime.svg",
      },
      { id: "romance4", label: "Romance", icon: "/icons/desires/romance.svg" },
    ],
  },
  {
    title: "Love - Support",
    desires: [
      { id: "flirt5", label: "Flirt", icon: "/icons/desires/flirt.svg" },
      {
        id: "intimacy5",
        label: "Intimacy",
        icon: "/icons/desires/intimacy.svg",
      },
      {
        id: "grow-closer5",
        label: "Grow Closer",
        icon: "/icons/desires/growCloser.svg",
      },
      {
        id: "surprise5",
        label: "Surprise",
        icon: "/icons/desires/surprise.svg",
      },
      {
        id: "quality-time5",
        label: "Quality Time",
        icon: "/icons/desires/qualityTime.svg",
      },
      { id: "romance5", label: "Romance", icon: "/icons/desires/romance.svg" },
      { id: "flirt6", label: "Flirt", icon: "/icons/desires/flirt.svg" },
      {
        id: "intimacy6",
        label: "Intimacy",
        icon: "/icons/desires/intimacy.svg",
      },
      {
        id: "grow-closer6",
        label: "Grow Closer",
        icon: "/icons/desires/growCloser.svg",
      },
      {
        id: "surprise6",
        label: "Surprise",
        icon: "/icons/desires/surprise.svg",
      },
      {
        id: "quality-time6",
        label: "Quality Time",
        icon: "/icons/desires/qualityTime.svg",
      },
      { id: "romance6", label: "Romance", icon: "/icons/desires/romance.svg" },
    ],
  },
];
