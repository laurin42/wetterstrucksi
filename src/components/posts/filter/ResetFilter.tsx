"use client";

import { motion } from "framer-motion";

interface ResetFilterProps {
  onMonthSelect: (month: string | null) => void;
  onYearSelect: (year: number | null) => void;
  onSortChange: (order: "newest" | "oldest") => void;
}

export function ResetFilter({
  onMonthSelect,
  onYearSelect,
  onSortChange,
}: ResetFilterProps) {
  const handleReset = () => {
    onMonthSelect(null);
    onYearSelect(null);
    onSortChange("newest");
  };

  return (
    <motion.div className="flex items-center justify-center md:justify-start mb-4 border-accent/40 pt-4">
      <button
        onClick={handleReset}
        className="text-sm font-semibold px-6 py-2 bg-accent cursor-pointer hover:bg-accent/80 text-text-white transition rounded-sm"
      >
        Zurücksetzen
      </button>
    </motion.div>
  );
}
