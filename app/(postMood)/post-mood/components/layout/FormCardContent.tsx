// 📄 File: src/app/components/layout/FormCardContent.tsx
"use client";
import React, { useCallback, useState } from "react";
import Image from "next/image";
import {
  DesireSection,
  FormField,
  MoodCard,
  MoodGenreCard,
  RadioButton,
  TextAreaInput,
  TextInput,
} from "../common/FormContentHelpers";
import clsx from "clsx"; // We will add clsx for cleaner class names

// Import all constants from the new file
import {
  AGE_RANGES,
  ZODIAC_SIGNS,
  MOOD_CATEGORIES,
  MOOD_GENRES,
  DRAGONS,
  HEADLINE_OPTIONS,
  DESIRES_DATA,
  MoodCards,
} from "@/constants/moodData";

// Define a type for your form data
type FormData = {
  age: string;
  birthPlace: string;
  timeExpectation: string;
  zodiacSign: string;
  background: string;
  identity: string;
  moodji?: string;
  category?: string;
  mood?: string;
  genre?: string;
  headlineOption?: string;
  headline?: string;
  emotionTrigger?: string;
  aboutMood?: string;
  selectedDesires: string[];
  isSubmitted: boolean;
};

// Define the props for the FormCardContent component
type FormCardContentProps = {
  currentStep: number;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

const FormCardContent: React.FC<FormCardContentProps> = ({
  currentStep,
  formData,
  setFormData,
}) => {
  // const [step3Progress] = useState(1);

  const handleFieldChange = useCallback(
    (field: keyof FormData) => (value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    [setFormData]
  );

  const handleDesireSelect = useCallback(
    (id: string) => {
      setFormData((prev) => {
        const isSelected = prev?.selectedDesires?.includes(id);
        if (isSelected) {
          return {
            ...prev,
            selectedDesires: prev.selectedDesires.filter((desireId) => desireId !== id),
          };
        } else {
          return {
            ...prev,
            selectedDesires: [...prev.selectedDesires, id],
          };
        }
      });
    },
    [setFormData]
  );
  


  const renderStep1 = () => (
    <div className="flex flex-col w-full gap-4">
      <FormField label="How old are you?" required>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 w-full mb-4">
          {AGE_RANGES.map((ageRange) => (
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
      <FormField label="Where were you born?" required>
        <TextInput
          value={formData.birthPlace}
          onChange={handleFieldChange("birthPlace")}
          placeholder="Enter your birth place"
        />
      </FormField>
      <FormField label="How much time do you expect to spend here?" required>
        <TextInput
          value={formData.timeExpectation}
          onChange={handleFieldChange("timeExpectation")}
          placeholder="Tell us about your expectations..."
        />
      </FormField>
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
          // Use onClick to handle the selection and update the state
          onClick={() => handleFieldChange("moodji")(dragon.name)}
          className={clsx(
            "flex flex-col items-center p-4 rounded-lg border cursor-pointer text-sm transition-all duration-200 hover:border-blue-400 hover:shadow-sm",
            {
              "border-blue-600 bg-blue-50": formData.moodji === dragon.name,
              "border-gray-200 bg-[#E9DFF7]": formData.moodji !== dragon.name,
            }
          )}
        >
          <input
            type="radio"
            name="moodji"
            value={dragon.name}
            checked={formData.moodji === dragon.name}
            // Add a readOnly attribute since the click is handled by the parent div
            readOnly
            className="w-4 h-4 text-blue-600 focus:ring-blue-500 self-end"
          />
          <Image
            src={dragon.image}
            alt={dragon.name}
            className="mb-2 w-auto h-auto"
            width={160}
            height={160}
          />
          <h3 className="text-[24px] font-[700] leading-[27px] tracking-[-0.44px] text-[#000000] mb-1">
            {dragon.name}
          </h3>
          <p className="text-[14px] font-Inter font-[600] tracking-[-0.56px] text-[#F95D2B]">
            {dragon.description}
          </p>
        </div>
      ))}
    </div>
  );
  
  // const renderStep3 = () => (
  //   <div className="flex flex-col w-full gap-4">
  //     {/* Progress Indicator */}
  //     <div className="flex flex-row justify-center items-center gap-4">
  //       <div className="flex flex-col items-center">
  //         <input type="radio" checked={step3Progress === 1} readOnly />
  //         <p className="text-blue-600 mt-2 text-xs sm:text-sm text-center">
  //           Choose Moods
  //         </p>
  //       </div>
  //       <span className="w-16 h-[1px] border-t border-gray-300"></span>
  //       <div className="flex flex-col items-center">
  //         <input type="radio" checked={step3Progress === 2} readOnly disabled />
  //         <p className="mt-2 text-xs sm:text-sm text-center">Mood Genre</p>
  //       </div>
  //     </div>
  //     {/* Mood Categories */}
  //     <div className="flex flex-wrap justify-center gap-2 mt-2">
  //       {MOOD_CATEGORIES.map((category) => (
  //         <div
  //           key={category.id}
  //           // Handle the category selection
  //           onClick={() => handleFieldChange("category")(category.label)}
  //           className={clsx(
  //             "rounded-full transition-colors duration-300 cursor-pointer",
  //             {
  //               "border-2 border-blue-600": formData.category === category.label,
  //             }
  //           )}
  //           style={{
  //             borderRadius: "70px",
  //             background: "rgba(125, 92, 163, 0.11)",
  //           }}
  //         >
  //           <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full cursor-pointer transition-all duration-300">
  //             <Image
  //               src={category.icon}
  //               alt={category.label}
  //               width={20}
  //               height={20}
  //               className="w-4 h-4 sm:w-5 sm:h-5"
  //             />
  //             <span className="whitespace-nowrap text-xs sm:text-sm font-medium text-black">
  //               {category.label}
  //             </span>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //     {/* Mood Cards Grid */}
  //     <div className="w-full flex justify-center relative min-h-[65vh] overflow-y-hidden pb-10">
  //       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mt-4 max-w-6xl absolute overflow-y-scroll h-full py-6 px-4 no-scrollbar">
  //         {MoodCards.map((card, index) => (
  //           <MoodCard
  //             key={index}
  //             title={card.title}
  //             subtitle={card.subtitle}
  //             // selectedMood={formData.mood}
  //             // You need a way to track selected mood cards here
  //             isSelected={formData.mood === card.id}
  //             onClick={() => handleFieldChange("mood")(card.id)}
  //           />
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );

  // const renderStep4 = () => (
  //   <div className="flex flex-col w-full gap-4 min-h-[65vh]">
  //     {/* Progress Indicator */}
  //     <div className="flex flex-row justify-center items-center gap-4">
  //       <div className="flex flex-col items-center">
  //         <Image
  //           src="./icons/StepSuccess.svg"
  //           alt="Step Success"
  //           width={16}
  //           height={16}
  //           className="w-4 h-4 sm:w-5 sm:h-5"
  //         />
  //         <p className="text-blue-600 mt-3 text-xs sm:text-sm text-center">
  //           Choose Moods
  //         </p>
  //       </div>
  //       <span className="w-16 h-[1px] border-t border-blue-600"></span>
  //       <div className="flex flex-col items-center mt-2">
  //         <input className="p-2" type="radio" checked={step3Progress === 1} readOnly />
  //         <p className="mt-3 text-xs sm:text-sm text-center text-blue-600">
  //           Mood Genre
  //         </p>
  //       </div>
  //     </div>
  //     {/* Mood Cards Grid */}
  //     <div className="w-full flex justify-center relative min-h-[65vh] overflow-y-hidden pb-10">
  //       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 mt-4 absolute overflow-y-scroll h-full py-5 px-2 no-scrollbar">
  //         {MOOD_GENRES.map((card, index) => (
  //           <MoodGenreCard
  //             key={index}
  //             label={card.label}
  //             image_url={card.image_url}
  //             isSelected={formData.genre === card.id}
  //             onClick={() => handleFieldChange("genre")(card.id)}
  //           />
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );

const renderStep3 = () => (
  <div className="flex flex-col w-full gap-4">
    {/* Progress Indicator - Check for formData.category instead */}
    <div className="flex flex-row justify-center items-center gap-4">
      <div className="flex flex-col items-center">
        <input type="radio" checked={true} readOnly />
        <p className="text-blue-600 mt-2 text-xs sm:text-sm text-center">
          Choose Moods
        </p>
      </div>
      <span className="w-16 h-[1px] border-t border-gray-300"></span>
      <div className="flex flex-col items-center">
        <input type="radio" checked={!!formData.genre} readOnly disabled />
        <p className="mt-2 text-xs sm:text-sm text-center">Mood Genre</p>
      </div>
    </div>
    {/* Mood Categories */}
    <div className="flex flex-wrap justify-center gap-2 mt-2">
      {MOOD_CATEGORIES.map((category) => (
        <div
          key={category.id}
          onClick={() => {
            // **CORRECTED:** Only update the category, do not clear the mood.
            handleFieldChange("category")(category.label);
          }}
          className={clsx(
            "rounded-full transition-colors duration-300 cursor-pointer",
            {
              "border-2 border-blue-600": formData.category === category.label,
            }
          )}
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
    <div className="w-full flex justify-center relative min-h-[65vh] overflow-y-hidden pb-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mt-4 max-w-6xl absolute overflow-y-scroll h-full py-6 px-4 no-scrollbar">
        {MoodCards.map((card, index) => (
          <MoodCard
            key={index}
            title={card.title}
            subtitle={card.subtitle}
            isSelected={formData.mood === card.id}
            onClick={() => handleFieldChange("mood")(card.id)}
          />
        ))}
      </div>
    </div>
  </div>
);

  const renderStep4 = () => (
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
          <p className="text-blue-600 mt-3 text-xs sm:text-sm text-center">
            Choose Moods
          </p>
        </div>
        <span className="w-16 h-[1px] border-t border-blue-600"></span>
        <div className="flex flex-col items-center mt-2">
          <input className="p-2" type="radio" checked={true} readOnly />
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
              isSelected={formData.genre === card.id}
              onClick={() => handleFieldChange("genre")(card.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
  const renderStep5 = () => (
    <div className="flex flex-col items-center justify-center w-full min-h-[300px] text-center">
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 w-full mb-6">
        {HEADLINE_OPTIONS.map((option) => (
          <RadioButton
            key={option.value}
            name="headlineOption"
            value={option.value}
            checked={formData.headlineOption === option.value}
            onChange={handleFieldChange("headlineOption")}
          >
            <span className="text-xs sm:text-sm">{option.label}</span>
          </RadioButton>
        ))}
      </div>
      <FormField label="Who or what is this mood about?">
        <TextAreaInput
          value={formData.headline ?? ""}
          onChange={handleFieldChange("headline")}
          placeholder="Write a headline..."
        />
      </FormField>
      <FormField label="What sparked this emotion?">
        <TextAreaInput
          value={formData.emotionTrigger ?? ""}
          onChange={handleFieldChange("emotionTrigger")}
          placeholder="Tell us what triggered this emotion..."
        />
      </FormField>
    </div>
  );

  const renderStep6 = () => (
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

  const renderStep7 = () => (
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

  // const renderReviewScreen = () => (
  //   <div className="flex gap-1 flex-col items-center w-full p-4 overflow-y-auto">
  //     {/* ... (Your review screen content remains the same) */}
  //     <div className="flex justify-between w-full bg-[#e8f4ff] p-4 rounded-lg mb-6">
  //       <div className="flex items-center justify-center gap-4">

  //         {/* selected mood genre image */}
  //           <div className="flex">
  //             <Image
  //               src={MOOD_GENRES.find(genre => genre.id === formData.genre)?.image_url || "/icons/desires/flirt.svg"}
  //               alt="Mood Icon"
  //               width={40}
  //               height={40}
  //               className="w-10 h-10"
  //             />
  //           </div>
  //           <p className="flex">
  //             {MOOD_GENRES.find(genre => genre.id === formData.genre)?.label || "Unknown Mood"}
  //           </p>
  //       </div>
  //       <div className="flex items-center justify-center text-md font-semibold text-gray-400">#Decisive</div>
  //     </div>
  //     <div className="flex justify-between w-full bg-[#e8f4ff] p-4 rounded-lg mb-6">
  //       <div className="flex items-center justify-center gap-4">
  //           <div className="flex">
  //             <Image
  //               src={MOOD_GENRES.find(genre => genre.id === formData.genre)?.image_url || "/icons/desires/flirt.svg"}
  //               alt="Mood Icon"
  //               width={40}
  //               height={40}
  //               className="w-10 h-10"
  //             />
  //           </div>
  //           <p className="flex">
  //             {MOOD_GENRES.find(genre => genre.id === formData.genre)?.label || "Unknown Mood"}
  //           </p>
  //       </div>
  //       <div className="flex items-center justify-center text-md font-semibold text-gray-400">#Decisive</div>
  //     </div>
  //     <div className="flex flex-col justify-start w-full p-2 rounded-lg mb-6 border-2 border-gray-300">
  //       <p className="text-md font-bold text-gray-700">Who or what is this mood about?</p>
  //       <p className="text-md text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
  //     </div>
  //      <div className="flex flex-col justify-start w-full p-2 rounded-lg mb-6 border-2 border-gray-300">
  //       <p className="text-md font-bold text-gray-700">Who or what is this mood about?</p>
  //       <p className="text-md text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
  //     </div>
  //     <button
  //       type="button"
  //       onClick={() => handleFieldChange("isSubmitted")("true")}
  //       className="w-full bg-blue-600 text-white py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
  //     >
  //       Submit Mood
  //     </button>
  //   </div>
  // );

  const renderReviewScreen = () => {
  const selectedMood = MoodCards.find(mood => mood.id === formData.mood);
  const selectedGenre = MOOD_GENRES.find(genre => genre.id === formData.genre);
  const selectedMoodji = DRAGONS.find(dragon => dragon.name === formData.moodji);
  const selectedHeadlineOption = HEADLINE_OPTIONS.find(option => option.value === formData.headlineOption);
  const selectedDesires = DESIRES_DATA.flatMap(section => section.desires).filter(desire => formData.selectedDesires.includes(desire.id));

  return (
    <div className="flex gap-1 flex-col items-center w-full p-4 overflow-scroll max-h-[50vh]">
      {/* Mood Title and Genre */}
      <div className="flex justify-between w-full bg-[#e8f4ff] p-4 rounded-lg mb-6">
        <div className="flex items-center justify-center gap-4">
          <div className="flex">
            <Image
              src={selectedGenre?.image_url || "/icons/desires/flirt.svg"}
              alt="Mood Genre Icon"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </div>
          <p className="flex">
            {selectedMood?.title || "No Mood Selected"}
          </p>
        </div>
        <div className="flex items-center justify-center text-md font-semibold text-gray-400">
          #{selectedGenre?.label || "N/A"}
        </div>
      </div>

      {/* Moodji Selection */}
      <div className="flex flex-col justify-start w-full p-2 rounded-lg mb-6 border-2 border-gray-300">
        <p className="text-md font-bold text-gray-700">Your Moodji</p>
        <div className="flex items-center gap-4 mt-2">
          {selectedMoodji && (
            <Image
              src={selectedMoodji.image}
              alt={selectedMoodji.name}
              width={60}
              height={60}
            />
          )}
          <p className="text-md text-gray-600">{selectedMoodji?.name || "No Moodji Selected"}</p>
        </div>
      </div>

      {/* About the Mood */}
      <div className="flex flex-col justify-start w-full p-2 rounded-lg mb-6 border-2 border-gray-300">
        <p className="text-md font-bold text-gray-700">Who or what is this mood about?</p>
        <p className="text-md text-gray-400">{formData.headline || "Not provided."}</p>
      </div>

      {/* Emotion Trigger */}
      <div className="flex flex-col justify-start w-full p-2 rounded-lg mb-6 border-2 border-gray-300">
        <p className="text-md font-bold text-gray-700">What sparked this emotion?</p>
        <p className="text-md text-gray-400">{formData.emotionTrigger || "Not provided."}</p>
      </div>

      {/* Desires */}
      <div className="flex flex-col justify-start w-full p-2 rounded-lg mb-6 border-2 border-gray-300">
        <p className="text-md font-bold text-gray-700">What you desire</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {selectedDesires.length > 0 ? (
            selectedDesires.map(desire => (
              <span key={desire.id} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                {desire.label}
              </span>
            ))
          ) : (
            <p className="text-md text-gray-400">No desires selected.</p>
          )}
        </div>
      </div>

      {/* About Mood */}
      <div className="flex flex-col justify-start w-full p-2 rounded-lg mb-6 border-2 border-gray-300">
        <p className="text-md font-bold text-gray-700">About this mood</p>
        <p className="text-md text-gray-400">{formData.aboutMood || "Not provided."}</p>
      </div>

      <button
        type="button"
        onClick={() => setFormData(prev => ({ ...prev, isSubmitted: true }))}
        className="w-full bg-blue-600 text-white py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
      >
        Submit Mood
      </button>
    </div>
  );
};

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