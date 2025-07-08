import { Button } from '@/components/ui/button';
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

export function MoodCategories({ categories, selectedCategory, onCategorySelect }: MoodCategoriesProps) {
  return (
    <div className="flex gap-4 flex-wrap">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? "outline" : "outline"}
          className={`flex items-center gap-2 transition-all ${
            selectedCategory === category.id
              ? 'border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent rounded-2xl h-8'
              : 'border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent rounded-2xl h-8'
          }`}
          // onClick={() => onCategorySelect(category.id)}
        >
          <Image src={category.icon} alt="Icon" width={20} height={20} className="w-5 h-5" />
          {category.label}
        </Button>
      ))}
    </div>
  );
}
