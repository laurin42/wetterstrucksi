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
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategorySelect(cat)}
          className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors duration-200 ${
            selectedCategory === cat
              ? "bg-accent text-text/white border-accent"
              : "bg-transparent text-text border-text/40 hover:bg-accent/10"
          }`}
        >
          {cat}
        </button>
      ))}
      <button
        onClick={() => onCategorySelect(null)}
        className="px-4 py-2 rounded-full border text-sm font-medium bg-transparent text-text/50 border-text/30 hover:bg-accent/10"
      >
        Alle
      </button>
    </div>
  );
}
