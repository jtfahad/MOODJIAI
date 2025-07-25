'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { NavigationButton } from '../ui/NavigationButton';
import { AuthButton } from '../ui/AuthButton';
import { MobileMenu } from '../ui/MobileMenu';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { NAVIGATION_ITEMS } from '@/constants/navigation';

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollDirection, isVisible } = useScrollDirection();
  const router = useRouter();

  // Scroll to section or top
  const scrollToSection = (hash: string) => {
    const id = hash.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (href: string) => {
    scrollToSection(href);
  };

  const handleAuthClick = (type: 'signin' | 'signup') => {
    router.push(type === 'signin' ? '/login' : '/signup');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-30
          flex w-full items-center justify-between h-[90px] pt-4 px-4 lg:px-10
          transition-all duration-300 ease-in-out
          ${isVisible ? 'translate-y-0' : '-translate-y-full'}
          ${scrollDirection === 'down' ? 'shadow-lg' : ''}
        `}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <div className="flex items-center">
          <a
            href="#home"
            className="focus:outline-none"
            aria-label="Moodjiverse home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
          >
            <Image
              src="/logos/moodjiverse.svg"
              alt="Moodjiverse"
              width={200}
              height={19}
              className="w-auto h-auto max-w-[150px] lg:max-w-[200px]"
              priority
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex w-[442px] h-[48px] items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-md px-2 shadow-lg">
          {NAVIGATION_ITEMS.map((item) => (
            <NavigationButton
              key={item.id}
              isActive={false} // optionally set based on scroll position
              onClick={() => handleNavClick(item.href)}
              aria-label={`Navigate to ${item.label}`}
            >
              {item.label}
            </NavigationButton>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex w-[222px] h-[48px] items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-md shadow-lg">
          <AuthButton
            variant="primary"
            isActive={false}
            onClick={() => handleAuthClick('signin')}
            aria-label="Sign in to your account"
          >
            Sign In
          </AuthButton>
          <AuthButton
            variant="secondary"
            isActive={false}
            onClick={() => handleAuthClick('signup')}
            aria-label="Create new account"
          >
            Sign Up
          </AuthButton>
        </div>

        {/* Mobile Menu Toggle */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onToggle={toggleMobileMenu}
          navigationItems={NAVIGATION_ITEMS}
          activeNavItem=""
          onNavClick={(id, href) => {
            handleNavClick(href);
            setIsMobileMenuOpen(false);
          }}
          onAuthClick={(action) => {
            handleAuthClick(action);
            setIsMobileMenuOpen(false);
          }}
        />
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-[90px]" aria-hidden="true" />
    </>
  );
};

export default Navigation;
