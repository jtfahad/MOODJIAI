"use client";
import React, { useCallback, useState } from "react";
import Image from "next/image";

// Define a type for your form data
type FormData = {
  age: string;
  birthPlace: string;
  timeExpectation: string;
  zodiacSign: string;
  background: string;
  identity: string;
};

// Define the props for the FormCardContent component
type FormCardContentProps = {
  currentStep: number;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

// --- Constants ---
const AGE_RANGES = [
  "Under 18", "18 - 24", "25 - 34", "35 - 44", 
  "45 - 54", "55 - 64", "65 and above"
];

const ZODIAC_SIGNS = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

const MOOD_CATEGORIES = [
  { id: "positive", label: "Positive", icon: "/icons/Positive.svg" },
  { id: "negative", label: "Negative", icon: "/icons/Negative.svg" },
  { id: "natural", label: "Natural", icon: "/icons/Natural.svg" },
  { id: "physical", label: "Physical", icon: "/icons/Physical.svg" },
];

const DRAGONS = [
  { name: "Lumeria", description: "Radiant Light", image: "./dragons/Lumeria.svg" },
  { name: "Karios", description: "Grounded Power", image: "./dragons/Karios.svg" },
  { name: "Zenvarion", description: "Serene Wisdom", image: "./dragons/Zenvarion.svg" },
  { name: "Lumeria", description: "Radiant Light", image: "./dragons/Lumeria.svg" },
];

// --- Reusable Components ---
const FormField: React.FC<{
  label: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}> = ({ label, required = false, children, className = "w-full" }) => (
  <div className={`flex flex-col ${className}`}>
    <h2 className="flex justify-start text-base font-normal mb-3 leading-[160%] text-gray-800">
      {label}
      {required && <span className="text-red-500">*</span>}
    </h2>
    {children}
  </div>
);

const RadioButton: React.FC<{
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}> = ({ name, value, checked, onChange, children, className = "" }) => (
  <label className={`flex items-center justify-between p-[10px] rounded-lg border border-gray-200 bg-white cursor-pointer text-sm transition-all duration-200 hover:border-blue-400 hover:shadow-sm ${className}`}>
    {children}
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={(e) => onChange(e.target.value)}
      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
    />
  </label>
);

const TextInput: React.FC<{
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  className?: string;
}> = ({ value, onChange, placeholder, className = "" }) => (
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className={`flex p-4 rounded-lg border border-gray-200 bg-white text-sm outline-none transition-colors duration-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 ${className}`}
  />
);

const MoodCard: React.FC<{
  title: string;
  subtitle: string;
}> = ({ title, subtitle }) => (
  <div className="relative flex flex-col items-center justify-start pt-0 rounded-[20px] border border-gray-200 bg-white cursor-pointer text-md transition-all duration-200 hover:border-blue-400 hover:shadow-sm shadow-lg overflow-hidden">
    <div className="relative w-[150px] h-20 rounded-t-[20px] overflow-hidden">
      <Image
        src="/backgroundImages/moodBgCloud.png"
        alt="Abstract cloud background"
        fill
        className="object-cover rounded-t-[20px]"
      />
    </div>
    <div className="relative z-10 -mt-14">
      <Image
        src="/icons/circleGlobe.svg"
        alt="Orb"
        width={64}
        height={64}
        className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 transition-transform hover:scale-110"
      />
    </div>
    <div className="flex flex-col items-center mt-2 pb-4">
      <p className="text-sm font-semibold text-gray-700">{title}</p>
      <p className="text-sm font-semibold text-gray-700">{subtitle}</p>
    </div>
  </div>
);

const FormCardContent: React.FC<FormCardContentProps> = ({
  currentStep,
  formData,
  setFormData,
}) => {
  const [step3Progress, setStep3Progress] = useState(1); // <-- MOVE HOOK HERE

  // Memoized handlers to prevent unnecessary re-renders
  const handleFieldChange = useCallback(
    (field: keyof FormData) => (value: string) => {
      setFormData(prev => ({ ...prev, [field]: value }));
    },
    [setFormData]
  );

  const renderStep1 = () => (
    <div className="flex flex-col w-full gap-4">
      {/* Age Selection */}
      <FormField label="How old are you?" required>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 w-full mb-4">
          {AGE_RANGES.slice(0, 4).map((ageRange) => (
            <RadioButton
              key={ageRange}
              name="age"
              value={ageRange}
              checked={formData.age === ageRange}
              onChange={handleFieldChange('age')}
            >
              <span className="text-xs sm:text-sm">{ageRange}</span>
            </RadioButton>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full mb-6">
          {AGE_RANGES.slice(4).map((ageRange) => (
            <RadioButton
              key={ageRange}
              name="age"
              value={ageRange}
              checked={formData.age === ageRange}
              onChange={handleFieldChange('age')}
            >
              <span className="text-xs sm:text-sm">{ageRange}</span>
            </RadioButton>
          ))}
        </div>
      </FormField>

      {/* Name Field */}
      <FormField label="Where were you born?" required>
        <TextInput
          value={formData.birthPlace}
          onChange={handleFieldChange('birthPlace')}
          placeholder="Enter your birth place"
        />
      </FormField>

      {/* Time Expectation */}
      <FormField label="How much time do you expect to spend here?" required>
        <TextInput
          value={formData.timeExpectation}
          onChange={handleFieldChange('timeExpectation')}
          placeholder="Tell us about your expectations..."
        />
      </FormField>

      {/* Zodiac Sign */}
      <FormField label="What's your zodiac sign?" required>
        <select
          value={formData.zodiacSign}
          onChange={(e) => handleFieldChange('zodiacSign')(e.target.value)}
          className="flex p-4 rounded-lg border border-gray-200 bg-white text-sm outline-none cursor-pointer transition-colors duration-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
        >
          <option value="">Select your zodiac sign</option>
          {ZODIAC_SIGNS.map((sign) => (
            <option key={sign} value={sign}>
              {sign}
            </option>
          ))}
        </select>
      </FormField>

      {/* Background and Identity */}
      <div className="flex flex-col lg:flex-row gap-4 w-full">
        <FormField label="What's your background?" required className="w-full lg:w-1/2">
          <TextInput
            value={formData.background}
            onChange={handleFieldChange('background')}
            placeholder="Tell us about your background..."
          />
        </FormField>
        <FormField label="How do you identify?" required className="w-full lg:w-1/2">
          <TextInput
            value={formData.identity}
            onChange={handleFieldChange('identity')}
            placeholder="Share how you identify"
          />
        </FormField>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full">
      {DRAGONS.map((dragon, index) => (
        <div
          key={`${dragon.name}-${index}`}
          className="flex flex-col items-center p-4 rounded-lg border border-gray-200 bg-[#E9DFF7] cursor-pointer text-sm transition-all duration-200 hover:border-blue-400 hover:shadow-sm"
        >
          <input
            type="radio"
            name="moodji"
            value={dragon.name}
            className="w-4 h-4 text-blue-600 focus:ring-blue-500 self-end"
          />
          <Image
            src={dragon.image}
            alt={dragon.name}
            className="mb-2"
            width={160}
            height={160}
          />
          <h3 className="text-[24px] font-hanson font-[700] leading-[27px] tracking-[-0.44px] text-[#000000] mb-1">
            {dragon.name}
          </h3>
          <p className="text-[14px] font-Inter font-[600] tracking-[-0.56px] text-[#F95D2B]">
            {dragon.description}
          </p>
        </div>
      ))}
    </div>
  );

const renderStep3 = () => {
  // Create mood cards data to avoid repetition
  const moodCards = Array(12).fill({ title: "Calm -", subtitle: "Recharged" });

  return (
    <div className="flex flex-col w-full gap-4">
      {/* Progress Indicator */}
      <div className="flex flex-row justify-center items-center gap-4">
        <div className="flex flex-col items-center">
          <input type="radio" checked={step3Progress === 1} readOnly />
          <p className="text-blue-600 mt-2 text-xs sm:text-sm text-center">Choose Moods</p>
        </div>
        <span className="w-9 border-t-2 border-gray-300"></span>
        <div className="flex flex-col items-center">
          <input type="radio" checked={step3Progress === 2} readOnly />
          <p className="mt-2 text-xs sm:text-sm text-center">Choose Mood Genre</p>
        </div>
      </div>

      {/* Mood Categories */}
      <div className="flex flex-wrap justify-center gap-2 mt-2">
        {MOOD_CATEGORIES.map((category) => (
          <div
            key={category.id}
            className="rounded-full transition-colors duration-300"
            style={{
              borderRadius: "70px",
              background: "rgba(125, 92, 163, 0.11)",
            }}
          >
            <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full cursor-pointer transition-all duration-300">
              <Image
                src={category.icon}
                alt={category.label}
                width={20}
                height={20}
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
              <span className="whitespace-nowrap text-xs sm:text-sm font-medium text-black">
                {category.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Mood Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mt-4">
        {moodCards.map((card, index) => (
          <MoodCard key={index} title={card.title} subtitle={card.subtitle} />
        ))}
      </div>
    </div>
  );
};


const renderStep4 = () => {
    return (
    <div className="flex flex-col items-center justify-center w-full min-h-[300px] text-center">
      <div className="text-6xl mb-4 text-orange-500">😊</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        Choose Your Moods
      </h3>
      <p className="text-gray-600">
        Pick from a curated selection of moods to represent your state.
      </p>
    </div>
    );
  }
const renderStep5 = () => {
    return (
    <div className="flex flex-col items-center justify-center w-full min-h-[300px] text-center">
      <div className="text-6xl mb-4 text-teal-500">🎵</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        Mood Genres
      </h3>
      <p className="text-gray-600">
        Categorize your mood to find more relevant content.
      </p>
    </div>
    );
  }
const renderStep6 = () => {
    return (
    <div className="flex flex-col items-center justify-center w-full min-h-[300px] text-center">
      <div className="text-6xl mb-4 text-red-500">📝</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        Create a Headline
      </h3>
      <p className="text-gray-600">
        Your headline is the first impression; make it count!
      </p>
    </div>
    );
  }
const renderStep7 = () => {
    return (
    <div className="flex flex-col items-center justify-center w-full min-h-[300px] text-center">
      <div className="text-6xl mb-4 text-blue-500">💭</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        Your Desires
      </h3>
      <p className="text-gray-600">
        Tell us what you desire, and we&apos;ll help you find it.
      </p>
    </div>
    );
  }

  // Main render logic
  switch (currentStep) {
    case 1:
      return renderStep1();
    case 2:
      return renderStep2();
    case 3:
      return renderStep3();
    case 4:
      return renderStep4();
    case 5:
      return renderStep5();
    case 6:
      return renderStep6();
    case 7:
      return renderStep7();
    default:
      return null;
  }

};

export default FormCardContent;