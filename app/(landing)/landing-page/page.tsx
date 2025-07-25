'use client';
import React from 'react';
import Navigation from './components/layout/Navigation';
import HeroSection from './components/sections/HeroSection';
import FeaturesSection from './components/sections/FeaturesSection';
import ProofSection from './components/sections/ProofSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ManifestationSection from './components/sections/ManifestationSection';
import PricingSection from './components/sections/PricingSection';
import FaqSection from './components/sections/FAQSection';
import MoodjiExploreSection from './components/sections/MoodjiExploreSection';
import Footer from './components/layout/Footer';
import { BackgroundSection } from './components/sections/BackgroundSection';
import ComparisonSection from './components/sections/CoparisonSection';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-screen min-h-screen w-full">
      {/* Hero Container */}
      <div
        id="home"
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

      {/* Features & Testimonials Section */}
      <BackgroundSection
        backgroundImage="/backgroundImages/landing-feature-bg.svg"
        gradientBottom={true}
      >
        <section id="about">
          <FeaturesSection />
          <ProofSection />
          <TestimonialsSection />
        </section>
      </BackgroundSection>

      {/* Manifestation & Comparison Section */}
      <BackgroundSection
        backgroundImage="/backgroundImages/landing-manifestation-bg.png"
        gradientTop={true}
      >
        <section id="creatrix">
          <ManifestationSection />
          <ComparisonSection />
        </section>
      </BackgroundSection>

      {/* Pricing & Additional Sections */}
      <BackgroundSection
        backgroundImage="/backgroundImages/landing-pricing-bg.png"
      >
        <section id="pricing">
          <PricingSection />
          <FaqSection />
          <MoodjiExploreSection />
          <Footer />
        </section>
      </BackgroundSection>
    </div>
  );
};

export default LandingPage;
