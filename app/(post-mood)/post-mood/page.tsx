"use client";
import React, { useState } from "react";
import FormCardContent from "./components/layout/FormCardContent";
import Image from "next/image";

// 📝 Define a type for your form data to ensure type safety
interface FormData {
  age: string;
  birthPlace: string;
  timeExpectation: string;
  zodiacSign: string;
  background: string;
  identity: string;
  emotionTrigger?: string;
  aboutMood?: string;
  selectedDesires: string[]; // <-- Added propertyq
}

// 📝 Define a type for your step configuration objects
interface StepConfig {
  title: string;
  description: string;
  buttonText: string;
  content: "form" | React.ReactNode;
}

export default function PostMoodFlow() {
  // 🚀 State to track the current step, initialized to 1
  const [currentStep, setCurrentStep] = useState(1);

  // 📝 State to store all form data, using the defined FormData type
  const [formData, setFormData] = useState<FormData>({
    age: "",
    birthPlace: "",
    timeExpectation: "",
    zodiacSign: "",
    background: "",
    identity: "",
    emotionTrigger: "",
    aboutMood: "",
    selectedDesires: [], // <-- Initialize as an empty array
  });

  // Centralized configuration for each step. Using an array requires a numeric index.
  const stepsConfig: StepConfig[] = [
    {
      title: "Tell us a little about yourself",
      description:
        "Answer a few quick questions so we can tailor your MVP experience just for you.",
      buttonText: "Post your first mood",
      content: "form", // A string to signal that this step renders a form
    },
    {
      title: "Explore other moodjis",
      description:
        "Discover different ways to express your emotions and connect with others.",
      buttonText: "Next",
      content: "moodjis",
    },
    {
      title: "Choose Moods",
      description:
        "Select the moods that resonate with you today and express how you're feeling.",
      buttonText: "Next",
      content: (
        <div className="flex flex-col items-center justify-center w-full min-h-[300px] text-center">
          <div className="text-6xl mb-4 text-orange-500">😊</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Choose Your Moods
          </h3>
          <p className="text-gray-600">
            Pick from a curated selection of moods to represent your state.
          </p>
        </div>
      ),
    },
    {
      title: "Choose Moods Genre",
      description:
        "Pick the genre that best matches your current emotional state and vibe.",
      buttonText: "Next",
      content: (
        <div className="flex flex-col items-center justify-center w-full min-h-[300px] text-center">
          <div className="text-6xl mb-4 text-teal-500">🎵</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Mood Genres
          </h3>
          <p className="text-gray-600">
            Categorize your mood to find more relevant content.
          </p>
        </div>
      ),
    },
    {
      title: "Headline",
      description:
        "Create a compelling headline that captures the essence of your current mood.",
      buttonText: "Skip",
      content: (
        <div className="flex flex-col items-center justify-center w-full min-h-[300px] text-center">
          <div className="text-6xl mb-4 text-red-500">📝</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Headline
          </h3>
          <p className="text-gray-600">
            Your headline is the first impression; make it count!
          </p>
        </div>
      ),
    },
    {
      title: "What do you desire?",
      description:
        "Share what you're looking for or hoping to achieve in this moment.",
      buttonText: "Next",
      content: (
        <div className="flex flex-col items-center justify-center w-full min-h-[300px] text-center">
          <div className="text-6xl mb-4 text-blue-500">💭</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            What do you Desire?
          </h3>
          <p className="text-gray-600">
            Tell us what you desire, and we&apos;ll help you find it.
          </p>
        </div>
      ),
    },
    {
      title: "What does this desire feel or look like?",
      description:
        "Describe the feelings, images, or experiences that represent your desires.",
      buttonText: "Next",
      content: (
        <div className="flex flex-col items-center justify-center w-full min-h-[300px] text-center">
          <div className="text-6xl mb-4 text-pink-500">✨</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Visualize Your Desire
          </h3>
          <p className="text-gray-600">
            Help us understand your desires by describing them vividly.
          </p>
        </div>
      ),
    },
    {
      title: "",
      description:
        "",
      buttonText: "Submit",
      content: "review", // A string to signal that this step is the review screen
    },
  ];

  const handleNext = () => {
    if (currentStep < stepsConfig.length) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log("Form completed:", formData);
      alert("Setup completed!");
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    handleNext();
  };

  const renderProgressIndicators = () => {
    return Array.from({ length: stepsConfig.length-1 }, (_, index) => (
      <li
        key={index}
        className={`w-5 h-5 rounded-[3px] cursor-pointer transition-colors duration-300 ${
          index + 1 <= currentStep ? "bg-blue-600" : "bg-gray-300"
        }`}
        onClick={() => setCurrentStep(index + 1)}
      />
    ));
  };

  // Get the current step's configuration by subtracting 1 from the 1-indexed currentStep
  const currentStepData = stepsConfig[currentStep - 1];

 return (
    <div
      className="min-h-screen p-0 lg:p-5 border-[6px] lg:border-6 border-purple-200 flex items-center justify-center sm:-mt-[0] -mt-[100px] px-4"
      style={{
        backgroundImage: 'url("/backgroundImages/postMoodBg.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

    <div className='w-full h-full flex flex-col items-center justify-center overflow-auto sm:bg-none bg-[url("/moodBackgrounds/sm/CalmRecharge.png")] bg-no-repeat bg-center bg-contain sm:relative absolute transition-all duration-500 sm:pt-0 pt-24'>
      <div className={`flex ${currentStep === 8 ? "flex-col justify-center items-center" : "flex-col lg:flex-row"} w-full  max-w-7xl min-h-[80vh] gap-6 lg:gap-10 pb-[100px] sm:pb-4 pt-[150px] sm:pt-10`}>
        <div className="flex w-full flex-col justify-center items-center lg:w-1/2 px-4 lg:px-6 sm:pt-0 sm:backdrop-blur-0 backdrop-blur-lg">
          <div className="flex flex-col w-full max-w-md">
            {
              currentStep !== 8 ? (
              <ul className="hidden sm:flex gap-2 mb-4 list-none p-0 justify-start flex-wrap">
                {renderProgressIndicators()}
              </ul>
              ) : null
            }
            {
              currentStep !== 8 ? (
              <p className="hidden sm:flex text-base font-bold text-gray-500 leading-[150%] tracking-wide mb-8">
                Step {currentStep} of {stepsConfig.length}
              </p>
              ) : null
            }
            
            <h1 className="text-2xl sm:text-2xl lg:text-3xl md:text-start sm:text-center text-center font-bold leading-[150%] tracking-wide mb-4 bg-gradient-to-r from-[#1088F8] to-[#4A4CF3] text-transparent bg-clip-text">
              {currentStepData?.title}
            </h1>
            <p className="text-sm md:text-start sm:text-center text-center leading-[150%] tracking-wide mb-10 text-gray-800">
              {currentStepData?.description}
            </p>
            
            {/* Desktop and Tablet buttons */}
            <div className="hidden sm:flex gap-3 flex-row flex-wrap items-center">
              {(currentStep > 1 && currentStep !== 8) && (
                <button
                  onClick={handlePrevious}
                  className="bg-gray-100 text-blue-600 border-2 border-blue-600 py-4 px-6 rounded-2xl text-sm font-semibold cursor-pointer transition-all duration-200 hover:bg-blue-600 hover:text-white w-24 h-14"
                >
                  Back
                </button>
              )}
              <button
                onClick={handleNext}
                className={`bg-blue-600 text-white border-none py-4 px-2 rounded-2xl text-sm font-semibold cursor-pointer transition-all duration-200 hover:bg-blue-700 hover:-translate-y-0.5 shadow-lg hover:shadow-blue-200 ${
                  currentStep === 1 ? "w-48 h-14" : "w-24 h-14"
                }
                ${currentStep === 8 ? "hidden" : ""}
              `}
              >
                {currentStepData?.buttonText}
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:w-[60%] px-2 sm:px-2 md:px-4 lg:px-6 relative">
            {
              currentStep === 8 ? (
                <div className="flex flex-col justify-center items-center sm:justify-center mb-3 -mt-[120px]">
                  <div className="flex w-full items-center gap-2">
                     <Image
                        src="/icons/desires/genre.png"
                        alt="Skip Icon"
                        width={148}
                        height={148}
                        className="cursor-pointer mb-6"
                      />
                  </div>
                  <p className="text-center text-lg font-semibold text-gray-600">Calm - Recharged</p>
                </div>
              ):
              null
            }
          <div
            className="flex flex-col justify-center items-center w-full max-w-2xl p-0 md:p-4 lg:p-6 gap-2 rounded-[20px] border border-white/40 bg-[#DFE4F7]/20 sm:shadow-none lg:shadow-[inset_-1.469px_-1.469px_2.938px_#FAFBFF,inset_1.469px_1.469px_2.938px_#A6ABBD] bg-blend-soft-light"
          >
            <div className="flex flex-col justify-start w-full h-full bg-white rounded-3xl p-4 lg:p-6 shadow-lg overflow-auto pt-8">
              <FormCardContent
                currentStep={currentStep}
                formData={formData}
                setFormData={setFormData}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile-only fixed buttons */}
      {currentStep !== 8 ? (
        <div className="fixed bottom-0 left-0 right-0 z-20 flex sm:hidden justify-center py-4">
          <div className="flex gap-3 flex-row flex-wrap items-center">
            {currentStep > 1 && (
              <button
                onClick={handlePrevious}
                className="bg-gray-100 text-blue-600 border-2 border-blue-600 py-4 px-6 rounded-2xl text-sm font-semibold cursor-pointer transition-all duration-200 hover:bg-blue-600 hover:text-white w-24 h-14"
              >
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              className={`bg-blue-600 text-white border-none py-4 px-2 rounded-2xl text-sm font-semibold cursor-pointer transition-all duration-200 hover:bg-blue-700 hover:-translate-y-0.5 shadow-lg hover:shadow-blue-200 ${
                currentStep === 1 ? "w-48 h-14" : "w-24 h-14"
              }`}
            >
              {currentStepData?.buttonText}
            </button>
          </div>
        </div>
      ) : null}
    </div>
    </div>
  );
}
