import Image from "next/image";

export const FormField: React.FC<{
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

export const RadioButton: React.FC<{
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}> = ({ name, value, checked, onChange, children, className = "" }) => (
  <label
    className={`flex items-center justify-between p-[10px] rounded-lg border transition-all duration-200 cursor-pointer ${
      checked ? "border-blue-600 bg-blue-50" : "border-gray-200 bg-white"
    } hover:border-blue-400 hover:shadow-sm ${className}`}
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

export const TextInput: React.FC<{
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

export const TextAreaInput: React.FC<{
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

export const MoodCard: React.FC<{
  title: string;
  subtitle: string;
  isSelected: boolean;
  onClick: () => void;
}> = ({ title, subtitle, isSelected, onClick }) => (
  <div
    onClick={onClick}
    className={`
      relative max-w-[120px] min-w-[120px] min-h-[160px] max-h-[160px] 
      flex flex-col items-center justify-start pt-0 rounded-[20px] 
      bg-white cursor-pointer text-md transition-all duration-200 
      hover:shadow-lg shadow-xl overflow-hidden
      ${isSelected ? "border-2 border-blue-600" : "border border-gray-200"}
      hover:border-blue-400
    `}
  >
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

export const MoodGenreCard: React.FC<{
  label: string;
  image_url: string;
  isSelected: boolean;
  onClick: () => void;
}> = ({ label, image_url, isSelected, onClick }) => (
  <div
    onClick={onClick}
    className={`relative min-w-[123px] max-w-[123px] min-h-[125px] max-h-[125px] flex flex-col items-center justify-center pt-0 rounded-[20px] border cursor-pointer text-md transition-all duration-200 hover:border-blue-400 hover:shadow-sm shadow-lg overflow-hidden ${
      isSelected ? "border-2 border-blue-600" : ""
    }`}
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

export const DesireCard: React.FC<{
  id: string;
  label: string;
  icon: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
}> = ({ id, label, icon, isSelected, onSelect }) => (
  <button
    className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200 hover:scale-105 ${
      isSelected ? "border-2 border-gray-500" : ""
    }`}
    onClick={() => onSelect(id)}
  >
    <div className="w-[50px] h-[50px] flex items-center justify-center">
      <Image src={icon} alt={label} width={50} height={50} />
    </div>
    <p className="mt-2 text-gray-600 text-sm">{label}</p>
  </button>
);

export const DesireSection: React.FC<{
  title: string;
  desires: { id: string; label: string; icon: string }[];
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
        boxShadow:
          "-1.469px -1.469px 2.938px 0 #FAFBFF inset, 1.469px 1.469px 2.938px 0 #A6ABBD inset",
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