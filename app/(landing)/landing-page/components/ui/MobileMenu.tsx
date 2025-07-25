'use client';

import React from 'react';
import { NavigationItem } from '@/types/navigation';
import { X, Menu } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  navigationItems: NavigationItem[];
  activeNavItem: string;
  onNavClick: (itemId: string, href: string) => void;
  onAuthClick: (action: 'signin' | 'signup') => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onToggle,
  navigationItems,
  activeNavItem,
  onNavClick,
  onAuthClick
}) => {
  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button
        className="lg:hidden p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
        onClick={onToggle}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <Menu size={24} className="text-white" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={onToggle}
            aria-hidden="true"
          />

          <div className="fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-lg shadow-2xl z-50 transform transition-transform duration-300">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
                <button
                  onClick={onToggle}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} className="text-gray-600" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="flex-1 py-6 bg-white/90" role="navigation" aria-label="Mobile navigation">
                <ul className="space-y-2 px-6">
                  {navigationItems.map((item) => (
                    <li key={item.id}>
                      <button
                        className={`
                          w-full text-left py-3 px-4 rounded-lg transition-all duration-200
                          ${activeNavItem === item.id
                            ? 'bg-[#984A2E] text-white shadow-md'
                            : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                          }
                        `}
                        onClick={() => {
                          onNavClick(item.id, item.href); // scroll to section
                          onToggle(); // close menu
                        }}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Auth Buttons */}
              <div className="p-6 border-t border-gray-200 space-y-3 bg-white/90">
                <button
                  className="w-full py-3 px-4 bg-[#F95D2B] text-white rounded-lg font-medium hover:bg-[#E04A1F] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#F95D2B]/50"
                  onClick={() => {
                    onAuthClick('signin');
                    onToggle();
                  }}
                >
                  Sign In
                </button>
                <button
                  className="w-full py-3 px-4 border border-[#F95D2B] text-[#F95D2B] rounded-lg font-medium hover:bg-[#F95D2B] hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#F95D2B]/50"
                  onClick={() => {
                    onAuthClick('signup');
                    onToggle();
                  }}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
