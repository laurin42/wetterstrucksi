interface SidebarProps {
  onCategorySelect: (category: string | null) => void;
  selectedCategory: string | null;
  categories: Record<string, string>;
  sortOrder: "newest" | "oldest";
  onSortChange: (order: "newest" | "oldest") => void;
}

export function Sidebar({
  onCategorySelect,
  selectedCategory,
  categories,
  sortOrder,
  onSortChange,
}: SidebarProps) {
  return (
    <aside className="p-4 shadow-md space-y-6 text-text-white bg-foreground-secondary">
      <section>
        <h3 className="mb-2 text-text text-lg">Kategorien</h3>
        <ul className="space-y-1 px-3 mb-2">
          <li>
            <button
              onClick={() => onCategorySelect(null)}
              className={`hover:underline ${
                selectedCategory === null ? "font-bold" : ""
              }`}
            >
              Alle
            </button>
          </li>
          {Object.entries(categories).map(([key, label]) => (
            <li key={key}>
              <button
                onClick={() => onCategorySelect(key)}
                className={`hover:underline ${
                  selectedCategory === key ? "font-bold" : ""
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
        <h3 className="mb-2 text-text text-lg">Sortierung</h3>
        <ul className="space-y-1 px-3 mb-4">
          <li>
            <button
              onClick={() => onSortChange("newest")}
              className={`hover:underline ${
                sortOrder === "newest" ? "font-bold" : ""
              }`}
            >
              Neueste zuerst
            </button>
          </li>
          <li>
            <button
              onClick={() => onSortChange("oldest")}
              className={`hover:underline ${
                sortOrder === "oldest" ? "font-bold" : ""
              }`}
            >
              Älteste zuerst
            </button>
          </li>
        </ul>
      </section>
    </aside>
  );
}
