"use client";

import { motion } from "framer-motion";
import { RxReset } from "react-icons/rx";

interface ResetFilterProps {
  onMonthSelect: (month: string | null) => void;
  onYearSelect: (year: number | null) => void;
  onSortChange: (order: "newest" | "oldest") => void;
  onCategorySelect: (category: string | null) => void;
}

export function ResetFilter({
  onMonthSelect,
  onYearSelect,
  onSortChange,
  onCategorySelect,
}: ResetFilterProps) {
  const handleReset = () => {
    onMonthSelect(null);
    onYearSelect(null);
    onSortChange("newest");
    onCategorySelect(null);
  };

  return (
    <motion.div className="flex">
      <button
        onClick={handleReset}
        className="text-text-white hover:text-accent-dim pr-3 my-auto cursor-pointer"
      >
        {" "}
        <RxReset />
      </button>
    </motion.div>
  );
}
