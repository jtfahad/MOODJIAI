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
  headline?: string;
  emotionTrigger?: string;
  aboutMood?: string;
  selectedDesires: string[]; // <-- Added property
};

// Define the props for the FormCardContent component
type FormCardContentProps = {
  currentStep: number;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

// --- Constants ---
const AGE_RANGES = [
  "Under 18",
  "18 - 24",
  "25 - 34",
  "35 - 44",
  "45 - 54",
  "55 - 64",
  "65 and above",
];

const ZODIAC_SIGNS = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

const MOOD_CATEGORIES = [
  { id: "positive", label: "Positive", icon: "/icons/Positive.svg" },
  { id: "negative", label: "Negative", icon: "/icons/Negative.svg" },
  { id: "natural", label: "Natural", icon: "/icons/Natural.svg" },
  { id: "physical", label: "Physical", icon: "/icons/Physical.svg" },
];

const MOOD_GENRES = [
  { label: "Happy", image_url: "/moods/moodGenres/genre1.svg" },
  { label: "Sad", image_url: "/moods/moodGenres/genre2.svg" },
  { label: "Energetic", image_url: "/moods/moodGenres/genre3.svg" },
  { label: "Calm", image_url: "/moods/moodGenres/genre4.svg" },
  { label: "Romantic", image_url: "/moods/moodGenres/genre5.svg" },
  { label: "Angry", image_url: "/moods/moodGenres/genre6.svg" },
  { label: "Reflective", image_url: "/moods/moodGenres/genre7.svg" },
  { label: "Adventurous", image_url: "/moods/moodGenres/genre1.svg" },
  { label: "Melancholic", image_url: "/moods/moodGenres/genre2.svg" },
  { label: "Playful", image_url: "/moods/moodGenres/genre3.svg" },
  { label: "Nostalgic", image_url: "/moods/moodGenres/genre4.svg" },
  { label: "Motivated", image_url: "/moods/moodGenres/genre5.svg" },
  { label: "Calm", image_url: "/moods/moodGenres/genre4.svg" },
  { label: "Romantic", image_url: "/moods/moodGenres/genre5.svg" },
  { label: "Angry", image_url: "/moods/moodGenres/genre6.svg" },
  { label: "Nostalgic", image_url: "/moods/moodGenres/genre4.svg" },
];

const DRAGONS = [
  {
    name: "Lumeria",
    description: "Radiant Light",
    image: "./dragons/Lumeria.svg",
  },
  {
    name: "Karios",
    description: "Grounded Power",
    image: "./dragons/Karios.svg",
  },
  {
    name: "Zenvarion",
    description: "Serene Wisdom",
    image: "./dragons/Zenvarion.svg",
  },
  {
    name: "Lumeria",
    description: "Radiant Light",
    image: "./dragons/Lumeria.svg",
  },
];

const HEADLINE_OPTIONS = [
  { label: "My relationship", value: "my_relationship" },
  { label: "In-General", value: "in_general" },
];

const DESIRES_DATA = [
    {
      title: "Free Desires",
      desires: [
        { id: "flirt", label: "Flirt", icon: "/icons/desires/flirt.svg" },
        { id: "intimacy", label: "Intimacy", icon: "/icons/desires/intimacy.svg" },
        { id: "grow-closer", label: "Grow Closer", icon: "/icons/desires/growCloser.svg" },
        { id: "surprise", label: "Surprise", icon: "/icons/desires/surprise.svg" },
        { id: "quality-time", label: "Quality Time", icon: "/icons/desires/qualityTime.svg" },
        { id: "romance", label: "Romance", icon: "/icons/desires/romance.svg" },
        { id: "flirt", label: "Flirt", icon: "/icons/desires/flirt.svg" },
        { id: "intimacy", label: "Intimacy", icon: "/icons/desires/intimacy.svg" },
        { id: "grow-closer", label: "Grow Closer", icon: "/icons/desires/growCloser.svg" },
        { id: "surprise", label: "Surprise", icon: "/icons/desires/surprise.svg" },
        { id: "quality-time", label: "Quality Time", icon: "/icons/desires/qualityTime.svg" },
        { id: "romance", label: "Romance", icon: "/icons/desires/romance.svg" },
      ],
    },
    {
      title: "Teamwork - Respect",
      desires: [
         { id: "flirt", label: "Flirt", icon: "/icons/desires/flirt.svg" },
        { id: "intimacy", label: "Intimacy", icon: "/icons/desires/intimacy.svg" },
        { id: "grow-closer", label: "Grow Closer", icon: "/icons/desires/growCloser.svg" },
        { id: "surprise", label: "Surprise", icon: "/icons/desires/surprise.svg" },
        { id: "quality-time", label: "Quality Time", icon: "/icons/desires/qualityTime.svg" },
        { id: "romance", label: "Romance", icon: "/icons/desires/romance.svg" },
        { id: "flirt", label: "Flirt", icon: "/icons/desires/flirt.svg" },
        { id: "intimacy", label: "Intimacy", icon: "/icons/desires/intimacy.svg" },
        { id: "grow-closer", label: "Grow Closer", icon: "/icons/desires/growCloser.svg" },
        { id: "surprise", label: "Surprise", icon: "/icons/desires/surprise.svg" },
        { id: "quality-time", label: "Quality Time", icon: "/icons/desires/qualityTime.svg" },
        { id: "romance", label: "Romance", icon: "/icons/desires/romance.svg" },
      ],
    },
    {
      title: "Love - Support",
      desires: [
         { id: "flirt", label: "Flirt", icon: "/icons/desires/flirt.svg" },
        { id: "intimacy", label: "Intimacy", icon: "/icons/desires/intimacy.svg" },
        { id: "grow-closer", label: "Grow Closer", icon: "/icons/desires/growCloser.svg" },
        { id: "surprise", label: "Surprise", icon: "/icons/desires/surprise.svg" },
        { id: "quality-time", label: "Quality Time", icon: "/icons/desires/qualityTime.svg" },
        { id: "romance", label: "Romance", icon: "/icons/desires/romance.svg" },
        { id: "flirt", label: "Flirt", icon: "/icons/desires/flirt.svg" },
        { id: "intimacy", label: "Intimacy", icon: "/icons/desires/intimacy.svg" },
        { id: "grow-closer", label: "Grow Closer", icon: "/icons/desires/growCloser.svg" },
        { id: "surprise", label: "Surprise", icon: "/icons/desires/surprise.svg" },
        { id: "quality-time", label: "Quality Time", icon: "/icons/desires/qualityTime.svg" },
        { id: "romance", label: "Romance", icon: "/icons/desires/romance.svg" },
      ],
    },
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
  <label
    className={`flex items-center justify-between p-[10px] rounded-lg border border-gray-200 bg-white cursor-pointer text-sm transition-all duration-200 hover:border-blue-400 hover:shadow-sm ${className}`}
  >
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

const TextAreaInput: React.FC<{
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  className?: string;
}> = ({ value, onChange, placeholder, className = "" }) => (
  <textarea
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className={`flex p-4 rounded-lg border border-gray-200 bg-white text-sm outline-none transition-colors duration-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 ${className}`}
    rows={4}
  />
);

const MoodCard: React.FC<{
  title: string;
  subtitle: string;
}> = ({ title, subtitle }) => (
  <div className="relative max-w-[120px] min-w-[120px] min-h-[160px] max-h-[160px] flex flex-col items-center justify-start pt-0 rounded-[20px] border border-gray-200 bg-white cursor-pointer text-md transition-all duration-200 hover:border-blue-400 hover:shadow-lg shadow-xl overflow-hidden">
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
        src="/icons/moodGlass.svg"
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

const MoodGenreCard: React.FC<{
  image_url: string;
  label: string;
}> = ({ label, image_url }) => (
  <div
    className="relative min-w-[123px] max-w-[123px] min-h-[125px] max-h-[125px] flex flex-col items-center justify-center pt-0 rounded-[20px] bg-gradient-to-b from-[#3AE8E1] to-[#1754D6] border border-gray-200 cursor-pointer text-md transition-all duration-200 hover:border-blue-400 hover:shadow-sm shadow-lg overflow-hidden"
    style={{
      borderRadius: 30,
      background: "linear-gradient(136deg, #3AE8E1 0%, #1754D6 98.47%)",
      boxShadow: "0 14px 44px 20px rgba(0, 0, 0, 0.02)",
    }}
  >
    <div className="relative z-10 pt-2">
      <Image
        src={image_url}
        alt="moode genre"
        width={64}
        height={64}
        className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 transition-transform hover:scale-110"
      />
    </div>
    <div className="flex flex-col items-center mt-2 pb-4">
      <p className="text-sm font-semibold text-[#E4F2FB]">{label}</p>
    </div>
  </div>
);

const DesireCard: React.FC<{
  id: string;
  label: string;
  icon: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
}> = ({ id, label, icon, isSelected, onSelect }) => (
  <button
    className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200 hover:scale-105 ${isSelected ? 'border-2 border-blue-500' : ''}`}
    onClick={() => onSelect(id)}
  >
    <div className="w-[50px] h-[50px] flex items-center justify-center">
      <Image
        src={icon}
        alt={label}
        width={50}
        height={50}
      />
    </div>
    <p className="mt-2 text-gray-600 text-sm">{label}</p>
  </button>
);

const DesireSection: React.FC<{
  title: string;
  desires: { id: string; label: string; icon: string; }[];
  selectedDesires: string[];
  onSelect: (id: string) => void;
}> = ({ title, desires, selectedDesires, onSelect }) => (
  <div className="w-full">
    <p className="w-full flex justify-start text-start text-base font-medium text-gray-800 mb-2">
      {title}
    </p>
    <div
      className="w-full p-4 md:p-6 bg-[#DFE4F7]/20 rounded-[20px] shadow-md"
      style={{
        borderRadius: 20,
        border: "0.294px solid rgba(255, 255, 255, 0.40)",
        backgroundBlendMode: "soft-light, normal",
        boxShadow: "-1.469px -1.469px 2.938px 0 #FAFBFF inset, 1.469px 1.469px 2.938px 0 #A6ABBD inset",
      }}
    >
      <div className="grid grid-cols-3 md:grid-cols-6 gap-x-2 gap-y-4 md:gap-x-4 md:gap-y-6 justify-items-center">
        {desires.map((desire) => (
          <DesireCard
            key={desire.id}
            id={desire.id}
            label={desire.label}
            icon={desire.icon}
            isSelected={selectedDesires.includes(desire.id)}
            onSelect={onSelect}
          />
        ))}
      </div>
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
      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    [setFormData]
  );

  const handleDesireSelect = (id: string) => {
    setFormData(prev => {
      const isSelected = prev?.selectedDesires?.includes(id);
      if (isSelected) {
        return {
          ...prev,
          selectedDesires: prev?.selectedDesires?.filter(desireId => desireId !== id),
        };
      } else {
        return {
          ...prev,
          selectedDesires: [...prev?.selectedDesires, id],
        };
      }
    });
  };

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
              onChange={handleFieldChange("age")}
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
              onChange={handleFieldChange("age")}
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
          onChange={handleFieldChange("birthPlace")}
          placeholder="Enter your birth place"
        />
      </FormField>

      {/* Time Expectation */}
      <FormField label="How much time do you expect to spend here?" required>
        <TextInput
          value={formData.timeExpectation}
          onChange={handleFieldChange("timeExpectation")}
          placeholder="Tell us about your expectations..."
        />
      </FormField>

      {/* Zodiac Sign */}
      <FormField label="What's your zodiac sign?" required>
        <select
          value={formData.zodiacSign}
          onChange={(e) => handleFieldChange("zodiacSign")(e.target.value)}
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
        <FormField
          label="What's your background?"
          required
          className="w-full lg:w-1/2"
        >
          <TextInput
            value={formData.background}
            onChange={handleFieldChange("background")}
            placeholder="Tell us about your background..."
          />
        </FormField>
        <FormField
          label="How do you identify?"
          required
          className="w-full lg:w-1/2"
        >
          <TextInput
            value={formData.identity}
            onChange={handleFieldChange("identity")}
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
    const moodCards = Array(16).fill({
      title: "Calm -",
      subtitle: "Recharged",
    });

    return (
      <div className="flex flex-col w-full gap-4">
        {/* Progress Indicator */}
        <div className="flex flex-row justify-center items-center gap-4">
          <div className="flex flex-col items-center">
            <input type="radio" checked={step3Progress === 1} readOnly />
            <p className="text-blue-600 mt-2 text-xs sm:text-sm text-center">
              Choose Moods
            </p>
          </div>
          <span className="w-16 h-[1px] border-t border-gray-300"></span>
          <div className="flex flex-col items-center">
            <input
              type="radio"
              checked={step3Progress === 2}
              readOnly
              disabled
            />
            <p className="mt-2 text-xs sm:text-sm text-center">Mood Genre</p>
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
        {/* Mood Cards Grid */}
        <div className="w-full flex justify-center relative min-h-[65vh] overflow-y-hidden pb-10 ">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mt-4 max-w-6xl absolute overflow-y-scroll h-full py-6 px-4  no-scrollbar">
            {moodCards.map((card, index) => (
              <MoodCard key={index} title={card.title} subtitle={card.subtitle} />
            ))}
          </div>
        </div>

      </div>
    );
  };

  const renderStep4 = () => {
    return (
      <div className="flex flex-col w-full gap-4 min-h-[65vh]">
        {/* Progress Indicator */}
        <div className="flex flex-row justify-center items-center gap-4">
          <div className="flex flex-col items-center">
            <Image
              src="./icons/StepSuccess.svg"
              alt="Step Success"
              width={16}
              height={16}
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
            {/* <input type="radio" checked={step3Progress === 1} readOnly /> */}
            <p className="text-blue-600 mt-3 text-xs sm:text-sm text-center">
              Choose Moods
            </p>
          </div>
          <span className="w-16 h-[1px] border-t border-blue-600"></span>
          <div className="flex flex-col items-center mt-2">
            <input
              className="p-2"
              type="radio"
              checked={step3Progress === 1}
              readOnly
            />
            <p className="mt-3 text-xs sm:text-sm text-center text-blue-600">
              Mood Genre
            </p>
          </div>
        </div>

        {/* Mood Cards Grid */}
        <div className="w-full flex justify-center relative min-h-[65vh] overflow-y-hidden pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 mt-4 absolute overflow-y-scroll h-full py-5 px-2 no-scrollbar">
          {MOOD_GENRES.map((card, index) => (
            <MoodGenreCard
              key={index}
              label={card.label}
              image_url={card.image_url}
            />
          ))}
        </div>
        </div>
      </div>
    );
  };
  const renderStep5 = () => {
    return (
      <div className="flex flex-col items-center justify-center w-full min-h-[300px] text-center">
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 w-full mb-6">
          {HEADLINE_OPTIONS.map((option) => (
            <RadioButton
              key={option.value}
              name="headline"
              value={option.value}
              checked={formData.headline === option.value}
              onChange={handleFieldChange("headline")}
            >
              <span className="text-xs sm:text-sm">{option.label}</span>
            </RadioButton>
          ))}
        </div>
        <FormField label="Who or what is this mood about?" required>
          <TextAreaInput
            value={formData.headline ?? ""}
            onChange={handleFieldChange("headline")}
            placeholder="Write a headline..."
          />
        </FormField>

        <FormField label="What sparked this emotion?" required>
          <TextAreaInput
            value={formData.emotionTrigger ?? ""}
            onChange={handleFieldChange("emotionTrigger")}
            placeholder="Tell us what triggered this emotion..."
          />
        </FormField>
      </div>
    );
  };
  const renderStep6 = () => {
    return (
      <div className="flex flex-col items-center justify-center w-full text-center p-4 relative min-h-[65vh] overflow-y-hidden">
        <div className="flex flex-col gap-6 w-full h-full absolute overflow-y-scroll py-5 md:pb-0 no-scrollbar">
          {DESIRES_DATA.map((section, index) => (
            <DesireSection
              key={index}
              title={section.title}
              desires={section.desires}
              selectedDesires={formData.selectedDesires || []}
              onSelect={handleDesireSelect}
            />
          ))}
        </div>
      </div>
    );
  };
  const renderStep7 = () => {
    return (
      <div className="flex flex-col items-center justify-center w-full min-h-[300px] text-center">
        <FormField
          label="Don't be shy. you get what you want by asking for it."
          required
        >
          <TextAreaInput
            value={formData.aboutMood ?? ""}
            onChange={handleFieldChange("aboutMood")}
            placeholder="Tell us about this mood..."
          />
        </FormField>
      </div>
    );
  };

    const renderReviewScreen = () => (
    <div className="flex gap-1 flex-col items-center w-full p-4 overflow-y-auto">
      <div className="flex justify-between w-full bg-[#e8f4ff] p-4 rounded-lg mb-6">
        <div className="flex items-center justify-center gap-4">
            <div className="flex">
              <Image
                src="/icons/desires/flirt.svg"
                alt="Mood Icon"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
            <p className="flex">
              Mood name
            </p>
        </div>
        <div className="flex items-center justify-center text-md font-semibold text-gray-400">#Decisive</div>
      </div>
      <div className="flex justify-between w-full bg-[#e8f4ff] p-4 rounded-lg mb-6">
        <div className="flex items-center justify-center gap-4">
            <div className="flex">
              <Image
                src="/icons/desires/flirt.svg"
                alt="Mood Icon"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
            <p className="flex">
              Mood name
            </p>
        </div>
        <div className="flex items-center justify-center text-md font-semibold text-gray-400">#Decisive</div>
      </div>
      <div className="flex flex-col justify-start w-full p-2 rounded-lg mb-6 border-2 border-gray-300">
        <p className="text-md font-bold text-gray-700">Who or what is this mood about?</p>
        <p className="text-md text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
       <div className="flex flex-col justify-start w-full p-2 rounded-lg mb-6 border-2 border-gray-300">
        <p className="text-md font-bold text-gray-700">Who or what is this mood about?</p>
        <p className="text-md text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <button
        type="button"
        className="w-full bg-blue-600 text-white py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
      >
        Submit Mood
      </button>

    </div>
  );

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
    case 8:
      return renderReviewScreen();
    default:
      return null;
  }
};

export default FormCardContent;
