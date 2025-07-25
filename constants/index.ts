import { MoodjiCharacter, PricingPlan } from "@/types";

// constants/index.ts
export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'seeker',
    title: 'Seeker',
    price: '$7.99',
    description: 'Start your path with one MoodJi. Ask 50 meaningful questions a month.',
    features: [
      '50 AI questions',
      '500 Tokens',
      'Access to 1 MoodJi',
      'Standard AI speed'
    ],
    badge: null
  },
  {
    id: 'awakener',
    title: 'Awakener',
    price: '$14.99',
    description: 'Deepen your insights with two MoodJIs and faster answers.',
    features: [
      '150 AI questions',
      'Access to 2 MoodJIs',
      'Access to 1 MoodJi',
      '⚡ Fast AI speed'
    ],
    badge: 'Recommended'
  },
  {
    id: 'ignitor',
    title: 'Ignitor',
    price: '$24.99',
    description: 'Deepen your insights with two MoodJIs and faster answers.',
    features: [
      '300 AI questions',
      '3,000 Tokens',
      'Access to 3 MoodJIs',
      '⚡⚡ Very Fast AI speed'
    ],
    badge: 'Most popular',
    isPopular: true
  },
  {
    id: 'creator',
    title: 'Creator',
    price: '$49.99',
    description: 'Deepen your insights with two MoodJIs and faster answers.',
    features: [
      '600 AI questions',
      '10,000 Tokens',
      'Access to All 4 MoodJIs',
      '🚀 Top Priority AI speed'
    ],
    badge: null
  }
];

export const MOODJI_CHARACTERS: MoodjiCharacter[] = [
  {
    id: 'lumeria',
    name: 'LUMERIA',
    subtitle: 'Intuitive Light',
    image: '/dragons/Lumeria.svg',
    alt: 'Lumeria dragon character'
  },
  {
    id: 'zenvarion',
    name: 'ZENVARION',
    subtitle: 'Grounded Power',
    image: '/dragons/Zenvarion.svg',
    alt: 'Zenvarion dragon character'
  },
  {
    id: 'karios',
    name: 'KARIOS',
    subtitle: 'Divine Timing',
    image: '/dragons/Karios.svg',
    alt: 'Karios dragon character'
  }
];