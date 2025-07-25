// hooks/useNavigation.ts
import { NAVIGATION_ITEMS } from '@/constants/navigation';
import { NavigationItem } from '@/types/navigation';
import { useState, useCallback, useEffect } from 'react';

export const useNavigation = (initialItems: NavigationItem[]) => {
  const [activeNavItem, setActiveNavItem] = useState<string>(
    initialItems.find(item => item.isActive)?.id || initialItems[0]?.id || ''
  );
  const [activeAuthButton, setActiveAuthButton] = useState<string>('signin');

  const handleNavClick = useCallback((itemId: string, href: string) => {
    setActiveNavItem(itemId);
    
    // Smooth scroll to section
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }, []);

  const handleAuthClick = useCallback((buttonId: string, action: () => void) => {
    setActiveAuthButton(buttonId);
    action();
  }, []);

  // Auto-detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = NAVIGATION_ITEMS.map(item => ({
        id: item.id,
        element: document.querySelector(item.href)
      })).filter(section => section.element);

      const scrollPosition = window.scrollY + 100; // Offset for header

      for (const section of sections) {
        const element = section.element as HTMLElement;
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActiveNavItem(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    activeNavItem,
    activeAuthButton,
    handleNavClick,
    handleAuthClick
  };
};