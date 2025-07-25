// components/sections/TestimonialsSection.tsx
import React from 'react';
import { TestimonialCard } from '../ui/TestimonialCard';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Vehicula id eget in in id vestibulum massa facilisi. Malesuada quisque at nisl, egestas maecenas. In aliquet sollicitudin. Sit imperdiet nulla enim nec, et nunc.",
      name: "Devon Lane",
      role: "Art Director",
      avatar: "/logos/testimonial1.svg"
    },
    {
      quote: "Vehicula id eget in in id vestibulum massa facilisi. Malesuada quisque at nisl, egestas maecenas. In aliquet sollicitudin. Sit imperdiet nulla enim nec, et nunc.",
      name: "Annette Black",
      role: "Art Director",
      avatar: "/logos/testimonial2.svg"
    },
    {
      quote: "Vehicula id eget in in id vestibulum massa facilisi. Malesuada quisque at nisl, egestas maecenas. In aliquet sollicitudin. Sit imperdiet nulla enim nec, et nunc.",
      name: "Albert Flores",
      role: "Art Director",
      avatar: "/logos/testimonial3.svg"
    }
  ];

  return (
    <section className="flex flex-col items-center justify-center w-full py-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-[45px] leading-[120%] tracking-[0.41px] font-medium text-[#984A2E]">
          What our users say
        </h2>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-5 px-4 max-w-7xl">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            {...testimonial}
            className="flex-shrink-0"
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;