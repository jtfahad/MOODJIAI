// components/ui/PricingCard.tsx
import React from 'react';
import Image from 'next/image';
import { PricingPlan } from '@/types';

interface PricingCardProps {
  plan: PricingPlan;
  isYearly?: boolean;
}

export const PricingCard: React.FC<PricingCardProps> = ({ 
  plan, 
  isYearly = false 
}) => {
  const getBadgeStyles = (badge: string) => {
    switch (badge) {
      case 'Recommended':
        return 'bg-[#4C77E31A]/10 text-[#4C77E3] border-[#4C77E3]';
      case 'Most popular':
        return 'bg-[#B65EFF1A]/10 text-[#B65EFF] border-[#B65EFF]';
      default:
        return '';
    }
  };

  const getPrice = () => {
    if (!isYearly) return plan.price;
    // Calculate yearly price with discount (example: 20% off)
    const monthlyPrice = parseFloat(plan.price.replace('$', ''));
    const yearlyPrice = monthlyPrice * 12 * 0.8; // 20% discount
    return `$${yearlyPrice.toFixed(2)}`;
  };

  return (
    <article className="relative bg-white/60 border-[2.44px] border-white/50 rounded-3xl shadow-xl px-4 py-4 flex flex-col items-start text-left transition-all duration-300 hover:shadow-2xl hover:scale-105">
      {/* Badge */}
      {plan.badge && (
        <span
          className={`absolute top-6 right-4 text-xs font-semibold px-3 py-1 rounded-full border transition-all duration-300 ${getBadgeStyles(plan.badge)}`}
          aria-label={`This plan is ${plan.badge}`}
        >
          {plan.badge}
        </span>
      )}

      {/* Icon */}
      <div className="mb-8">
        <div className="w-12 h-12 rounded-full bg-white/50 border-[2.44px] border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-white/70">
          <Image 
            src="/icons/Lightning.svg" 
            alt="Lightning icon" 
            width={16} 
            height={22}
            priority={false}
          />
        </div>
      </div>

      {/* Title & Description */}
      <header className="mb-6">
        <h3 className="text-xl font-bold text-black leading-tight mb-3">
          {plan.title}
        </h3>
        <p className="text-sm font-normal text-[#777777] leading-relaxed">
          {plan.description}
        </p>
      </header>

      {/* Price */}
      <div className="mb-6">
        <p className="text-2xl font-semibold text-black leading-tight tracking-wide">
          {getPrice()}
          <span className="text-xs font-normal text-black/60 ml-1">
            /{isYearly ? 'Year' : 'Month'}
          </span>
        </p>
        {isYearly && (
          <p className="text-xs text-green-600 font-medium mt-1">
            Save 20% yearly
          </p>
        )}
      </div>

      {/* Features Container */}
      <div className="w-full flex flex-col justify-between bg-white p-3 rounded-[30px] flex-1">
        {/* Features List */}
        <ul className="text-sm text-gray-800 space-y-4 mb-8 mt-3" role="list">
          {plan.features.map((feature, index) => (
            <li key={`${plan.id}-feature-${index}`} className="flex items-center gap-3">
              <Image 
                src="/icons/Tick.svg" 
                alt="" 
                width={22} 
                height={22}
                aria-hidden="true"
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button 
          className="mt-auto w-full bg-gradient-to-b from-[#CD7D60] to-[#984A2E] text-white py-3 px-4 rounded-xl font-semibold hover:opacity-90 hover:shadow-lg active:scale-98 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#984A2E] focus:ring-offset-2"
          aria-label={`Select ${plan.title} plan for ${getPrice()}`}
        >
          Claim Your Tier
        </button>
      </div>
    </article>
  );
};