"use client";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onCategorySelect,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 py-2">
      <button
        onClick={() => onCategorySelect(null)}
        className={`px-4 py-2 rounded-md  text-sm font-medium transition-colors duration-200 cursor-pointer ${
          selectedCategory === null
            ? "bg-accent/80 text-text-white/98"
            : "hover:bg-accent/60 text-text hover:text-text-white"
        }`}
      >
        Alle
      </button>

      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategorySelect(cat)}
          className={`px-4 py-2 rounded-md  text-sm font-medium transition-colors duration-200  ${
            selectedCategory === cat
              ? "bg-accent/80 text-text-white/98 cursor-pointer"
              : "hover:bg-accent/60 text-text hover:text-text-white cursor-pointer"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
