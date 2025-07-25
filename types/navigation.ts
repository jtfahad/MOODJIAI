// types/navigation.ts
export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  isActive?: boolean;
}

export interface AuthButton {
  id: string;
  label: string;
  variant: 'primary' | 'secondary';
  action: () => void;
}

// constants/navigation.ts
export const NAVIGATION_ITEMS: NavigationItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About Us', href: '#about' },
  { id: 'creatrix', label: 'The Creatrix', href: '#creatrix' },
  { id: 'pricing', label: 'Pricing', href: '#pricing' }
];