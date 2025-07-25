// types/index.ts
export interface PricingPlan {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  badge?: 'Recommended' | 'Most popular' | null;
  isPopular?: boolean;
}

export interface MoodjiCharacter {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  alt: string;
}

export interface TestimonialData {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}