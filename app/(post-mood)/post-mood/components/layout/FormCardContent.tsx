import React from "react";

// Define a type for your form data
type FormData = {
  age: string;
  name: string;
  timeExpectation: string;
  zodiacSign: string;
  background: string;
  identity: string;
};

// Define a type for your step configuration objects
type StepConfig = {
  content: "form" | React.ReactNode;
};

// Define the props for the FormCardContent component
type FormCardContentProps = {
  currentStep: number;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  stepsConfig: StepConfig[]; // stepsConfig is an array of StepConfig objects
};

const FormCardContent: React.FC<FormCardContentProps> = ({
  currentStep,
  formData,
  setFormData,
  stepsConfig,
}) => {
  // 🐛 FIX: Correctly access the content for the current step from the stepsConfig array
  // We use currentStep - 1 because the array is 0-indexed.
  const content = stepsConfig[currentStep - 1]?.content;

  // Render the appropriate content based on the value of 'content'
  if (content === "form") {
    // This is the specific content for Step 1
    return (
      <div className="flex flex-col w-full gap-4">
        {/* Age Selection Section */}
        <div className="flex flex-col w-full">
          <h2 className="flex justify-start text-base font-normal mb-3 leading-[160%] text-gray-800">
            How old are you?<span className="text-red-500">*</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 w-full mb-4">
            {["Under 18", "18 - 24", "25 - 34", "35 - 44"].map((ageRange) => (
              <label
                key={ageRange}
                className="flex items-center justify-between p-[10px] rounded-lg border border-gray-200 bg-white cursor-pointer text-sm transition-all duration-200 hover:border-blue-400 hover:shadow-sm"
              >
                <span className="text-xs sm:text-sm">{ageRange}</span>
                <input
                  type="radio"
                  name="age"
                  value={ageRange}
                  checked={formData.age === ageRange}
                  onChange={(e) =>
                    setFormData({ ...formData, age: e.target.value })
                  }
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
              </label>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full mb-6">
            {["45 - 54", "55 - 64", "65 and above"].map((ageRange) => (
              <label
                key={ageRange}
                className="flex items-center justify-between p-[10px] rounded-lg border border-gray-200 bg-white cursor-pointer text-sm transition-all duration-200 hover:border-blue-400 hover:shadow-sm"
              >
                <span className="text-xs sm:text-sm">{ageRange}</span>
                <input
                  type="radio"
                  name="age"
                  value={ageRange}
                  checked={formData.age === ageRange}
                  onChange={(e) =>
                    setFormData({ ...formData, age: e.target.value })
                  }
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
              </label>
            ))}
          </div>
        </div>

        {/* Other form fields */}
        <div className="flex flex-col w-full">
          <h2 className="flex justify-start text-base font-normal mb-3 leading-[160%] text-gray-800">
            What&apos;s your name?<span className="text-red-500">*</span>
          </h2>
          <input
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="flex p-4 rounded-lg border border-gray-200 bg-white text-sm outline-none transition-colors duration-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          />
        </div>

        <div className="flex flex-col w-full">
          <h2 className="flex justify-start text-base font-normal mb-3 leading-[160%] text-gray-800">
            How much time do you expect to spend here?<span className="text-red-500">*</span>
          </h2>
          <input
            type="text"
            placeholder="Tell us about your expectations..."
            value={formData.timeExpectation}
            onChange={(e) =>
              setFormData({ ...formData, timeExpectation: e.target.value })
            }
            className="flex p-4 rounded-lg border border-gray-200 bg-white text-sm outline-none resize-y font-inherit transition-colors duration-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          />
        </div>

        <div className="flex flex-col w-full">
          <h2 className="flex justify-start text-base font-normal mb-3 leading-[160%] text-gray-800">
            What&apos;s your zodiac sign?<span className="text-red-500">*</span>
          </h2>
          <select
            value={formData.zodiacSign}
            onChange={(e) =>
              setFormData({ ...formData, zodiacSign: e.target.value })
            }
            className="flex p-4 rounded-lg border border-gray-200 bg-white text-sm outline-none cursor-pointer transition-colors duration-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          >
            <option value="">Select your zodiac sign</option>
            {[
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
            ].map((sign) => (
              <option key={sign} value={sign}>
                {sign}
              </option>
            ))}
          </select>
        </div>

        {/* Two-column layout for background and identity */}
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          <div className="flex flex-col w-full lg:w-1/2">
            <h2 className="flex justify-start text-base font-normal mb-3 leading-[160%] text-gray-800">
              What&apos;s your background?<span className="text-red-500">*</span>
            </h2>
            <input
              type="text"
              placeholder="Tell us about your background..."
              value={formData.background}
              onChange={(e) =>
                setFormData({ ...formData, background: e.target.value })
              }
              className="flex p-4 rounded-lg border border-gray-200 bg-white text-sm outline-none resize-y font-inherit transition-colors duration-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <div className="flex flex-col w-full lg:w-1/2">
            <h2 className="flex justify-start text-base font-normal mb-3 leading-[160%] text-gray-800">
              How do you identify?<span className="text-red-500">*</span>
            </h2>
            <input
              type="text"
              placeholder="Share how you identify"
              value={formData.identity}
              onChange={(e) =>
                setFormData({ ...formData, identity: e.target.value })
              }
              className="flex p-4 rounded-lg border border-gray-200 bg-white text-sm outline-none transition-colors duration-200 focus:border-blue-600 focus:ring-1 focus:ring-600"
            />
          </div>
        </div>
      </div>
    );
  } else {
    // Return the mock content defined in the stepsConfig
    return content;
  }
};

export default FormCardContent;