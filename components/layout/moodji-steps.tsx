import React from 'react';

interface Step {
  id: number;
  label: string;
  active: boolean;
}

interface MoodjiStepsProps {
  steps: Step[];
}

export function MoodjiSteps({ steps }: MoodjiStepsProps) {
  return (
    <div className="xl:flex xl:flex-col gap-9 py-6 pb-10 relative lg:hidden">
      {steps.map((step, index) => (
        <div key={step.id} className="relative pl-12 flex items-center">
          {/* Line segment between steps */}
          {index < steps.length - 1 && (
            <div
              className="absolute left-[16px] top-9 w-0.5 bg-white/20 z-0"
              style={{ height: 'calc(100% - 7px)' }} // Line runs between this circle and the next
            ></div>
          )}

          {/* Step circle */}
          <div
            className={`
              absolute left-0 top-0 w-8 h-8 rounded-full flex items-center justify-center 
              z-10 
              transition-all duration-300
              ${step.active 
                ? 'bg-white text-[#] shadow-md border-2 border-[#F95D2B] cursor-pointer' 
                : 'border-2 border-[#A1AEBE] text-black bg-white'}
            `}
          >
            {step.active && step.id === 1 ? (
              <div className="w-2 h-2 rounded-full bg-[#F95D2B]" />
            ) : (
              step.id.toString().padStart(2, '0')
            )}
          </div>

          {/* Step label */}
          <div
            className={`text-base font-medium pt-[4px] text-[14px] ${
              step.active ? 'text-bold' : 'text-[#8D8D8D] text-opacity-60'
            }`}
          >
            {step.label}
          </div>
        </div>
      ))}
    </div>
  );
}
