"use client";

import { motion } from "framer-motion";

interface YearsFilterProps {
  selectedYear: number | null;
  onYearSelect: (year: number | null) => void;
}

const years = [2022, 2023, 2024, 2025];

export function YearsFilter({ selectedYear, onYearSelect }: YearsFilterProps) {
  return (
    <motion.ul
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.04 } },
      }}
      className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 px-2 py-2 md:px-4 border-b border-t border-accent/40"
    >
      {years.map((y) => (
        <motion.li
          key={y}
          variants={{
            hidden: { opacity: 0, y: -5 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <button
            onClick={() => onYearSelect(y)}
            className={`w-full text-left px-3 py-1.5 rounded-md text-sm font-medium transition cursor-pointer ${
              selectedYear === y
                ? "bg-accent text-text-white/98"
                : "hover:bg-accent/60 text-text hover:text-text-white"
            }`}
          >
            {y}
          </button>
        </motion.li>
      ))}
    </motion.ul>
  );
}
