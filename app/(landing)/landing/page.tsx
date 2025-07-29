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
      <BackgroundSection
      backgroundImage="/backgroundImages/hero-bg.svg"
      className = 'h-screen w-full overflow-hidden'
      >
      {/* Navigation & Hero Section */}
        <Navigation />
        <HeroSection
          logoSrc="/logos/SELURA.svg"
          dragonSrc="/dragons/landing-hero-selura.svg"
          textColor="#984A2E"
        />
      </BackgroundSection>

      {/* Features & Testimonials Section */}
      <BackgroundSection
        backgroundImage="/backgroundImages/landing-feature-bg.svg"
        gradientBottom={true}
      >
        <section id="about">
          <FeaturesSection textColor="#A84324" buttonBg="bg-gradient-to-r from-[#CD7D60] to-[#984A2E]" />
          <ProofSection
            imageSrc="/dragons/proud-selura-logo.svg"
            headingColor="#A84324"
            buttonBg="bg-gradient-to-r from-[#CD7D60] to-[#984A2E]"
          />
          <TestimonialsSection headingColor="#A84324" />
        </section>
      </BackgroundSection>

      {/* Manifestation & Comparison Section */}
      <BackgroundSection
        backgroundImage="/backgroundImages/landing-manifestation-bg.png"
        gradientTop={true}
        gradientBottom={true}
      >
        <section id="creatrix">
          <ManifestationSection
            headingColor="#944c26"
            buttonBg="bg-gradient-to-r from-[#CD7D60] to-[#984A2E]"
          />
          <ComparisonSection
            imagePath="/dragons/ComparisonChartDragon.svg"
            headingColor="#944c26"
            buttonBg="bg-gradient-to-r from-[#CD7D60] to-[#984A2E]"
          />
        </section>
      </BackgroundSection>

      {/* Pricing & Additional Sections */}
      <BackgroundSection
        backgroundImage="/backgroundImages/landing-pricing-bg.png"
        gradientTop={true}
      >
        <section id="pricing">
          <PricingSection />
          <FaqSection
            imageSrc="/dragons/Nariko.svg"
            headingColor="#984A2E"
          />
          <MoodjiExploreSection headingColor="#984A2E" />
          <Footer />
        </section>
      </BackgroundSection>
    </div>
  );
};

export default LandingPage;
