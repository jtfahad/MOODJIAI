'use client';
import React from 'react';
import Navigation from '../components/layout/Navigation';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import ProofSection from '../components/sections/ProofSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ManifestationSection from '../components/sections/ManifestationSection';
import PricingSection from '../components/sections/PricingSection';
import FaqSection from '../components/sections/FAQSection';
import MoodjiExploreSection from '../components/sections/MoodjiExploreSection';
import Footer from '../components/layout/Footer';
import { BackgroundSection } from '../components/sections/BackgroundSection';
import ComparisonSection from '../components/sections/CoparisonSection';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-screen min-h-screen w-full">
      {/* Hero Container */}
      <BackgroundSection
      backgroundImage="/backgroundImages/hero-karios-bg.svg"
      className = 'h-screen w-full overflow-hidden'
      gradientBottom={true}
      >
      {/* Navigation & Hero Section */}
        <Navigation />
        <HeroSection
          logoSrc="/logos/KARIOS.svg"
          dragonSrc="/dragons/landing-hero-karios.svg"
          textColor="#1088F8"
        />
      </BackgroundSection>

      {/* Features & Testimonials Section */}
      <BackgroundSection
        backgroundImage="/backgroundImages/landing-karios-feature.svg"
        gradientTop={true}
        gradientBottom={true}
      >
        <section id="about">
          <FeaturesSection textColor="#1088F8" buttonBg="bg-gradient-to-r from-[#6395FF] to-[#4269F4]" />
          <ProofSection
            imageSrc="/dragons/proud-karios-logo.svg"
            headingColor="#6395FF"
            buttonBg="bg-gradient-to-r from-[#6395FF] to-[#4269F4]"
          />
          <TestimonialsSection headingColor="#1088F8" />
        </section>
      </BackgroundSection>

      {/* Manifestation & Comparison Section */}
      <BackgroundSection
        backgroundImage="/backgroundImages/landing-karios-manifestation.svg"
        gradientTop={true}
        gradientBottom={true}
      >
        <section id="creatrix">
          <ManifestationSection
            headingColor="#1088F8"
            buttonBg="bg-gradient from-[#6395FF] to-[#4269F4]"
          />
          <ComparisonSection
            imagePath="/dragons/ComparisonChartKarios.svg"
            headingColor="#1088F8"
            buttonBg="bg-gradient from-[#6395FF] to-[#4269F4]"
          />
        </section>
      </BackgroundSection>

      {/* Pricing & Additional Sections */}
      <BackgroundSection
        backgroundImage="/backgroundImages/landing-pricing-karios.svg"
        gradientTop={true}
      >
        <section id="pricing">
          <PricingSection buttonBg="bg-gradient from-[#6395FF] to-[#4269F4]"/>
          <FaqSection
            imageSrc="/dragons/FAQ-karios.svg"
            headingColor="#1088F8"
          />
          <MoodjiExploreSection headingColor="#1088F8" />
          <Footer />
        </section>
      </BackgroundSection>
    </div>
  );
};

export default LandingPage;
