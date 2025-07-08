import Image from 'next/image';

interface MoodCategory {
  id: string;
  label: string;
  icon: string;
}

interface MoodCategoriesProps {
  categories: MoodCategory[];
  selectedCategory: string;
  onCategorySelect: (categoryId: string) => void;
}

export function MoodCategories({
  categories,
  selectedCategory,
  onCategorySelect
}: MoodCategoriesProps) {
  return (
    <div className="flex gap-4 flex-wrap py-2">
      {categories.map((category) => (
        <div
          key={category.id}
          className="p-[1px] rounded-full transition-colors duration-300"
          style={{
            background: 'linear-gradient(270deg, rgba(255,255,255,0.12) 9.19%, rgba(182,94,255,0.6) 49.29%, rgba(255,255,255,0.12) 91.77%)'
          }}
        >
          <div
           className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer transition-all duration-300 !bg-[#151517CC] 'opacity-100 hover:opacity-100 hover:scale-[1.03]'}`}

            style={{
              backgroundColor: '#151517CC' // Solid background
            }}
          >
            <Image
              src={category.icon}
              alt={category.label}
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <span className="whitespace-nowrap text-sm font-medium text-white">
              {category.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
