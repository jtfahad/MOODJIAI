// components/sections/PricingSection.tsx
import React from 'react';
import { BillingToggle } from '../ui/BillingToggle';
import { useBillingToggle } from '@/hooks/useBillingToggle';
import { PRICING_PLANS } from '@/constants';
import { PricingCard } from '../ui/PricigCard';

const PricingSection: React.FC = () => {
  const { isYearly, toggleBilling } = useBillingToggle();

  return (
    <section className="py-20 px-4 text-center" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <h2 
            id="pricing-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1088F8] to-[#F34AAB] mb-4"
          >
            Our Pricing Is Simple
          </h2>
          <p className="text-black font-normal text-lg leading-relaxed">
            Limited Discount For Early Users
          </p>
        </header>

        {/* Billing Toggle */}
        <BillingToggle isYearly={isYearly} onToggle={toggleBilling} />

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {PRICING_PLANS.map((plan) => (
            <PricingCard
              key={plan.id} 
              plan={plan} 
              isYearly={isYearly}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;