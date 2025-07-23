// Main Landing Page Component
'use client';
import React from 'react';
import Navigation from './components/layout/Navigation';
import HeroSection from './components/sections/HeroSection';
import FeaturesSection from './components/sections/FeaturesSection';
import ProofSection from './components/sections/ProofSection';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-screen min-h-screen w-full">
      {/* Hero Container */}
      <div
        className="min-h-screen w-full"
        style={{
          backgroundImage: "url('/backgroundImages/hero-bg.svg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <Navigation />
        <HeroSection />
      </div>

      <div 
      className="min-h-screen w-full pb-8"
        style={{
          backgroundImage: "url('/backgroundImages/landing-feature-bg.svg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        {/* Features Section */}
        <FeaturesSection />
        {/* Proof Section */}
          <ProofSection />
      </div>

    </div>
  );
};

export default LandingPage;