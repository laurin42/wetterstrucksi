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
      className="grid grid-cols-2 gap-x-4 gap-y-2 py-2 px-2 w-full scrollbar-hide 
					   md:flex md:overflow-x-auto md:gap-2 md:px-0 md:whitespace-nowrap"
    >
      <motion.li
        key="clear"
        variants={{
          hidden: { opacity: 0, x: -5 },
          visible: { opacity: 1, x: 0 },
        }}
        className="col-span-2 md:col-span-none shrink-0"
      >
        <button
          onClick={() => onYearSelect(null)}
          className={`w-full text-left px-3 py-1.5 rounded-md text-sm font-medium transition cursor-pointer ${
            selectedYear === null
              ? "bg-accent/80 text-text-white/98 border-accent"
              : "hover:bg-muted text-text hover:text-text-muted"
          }`}
        >
          Alle Jahre
        </button>
      </motion.li>
      {years.map((y) => (
        <motion.li
          key={y}
          variants={{
            hidden: { opacity: 0, x: -5 },
            visible: { opacity: 1, x: 0 },
          }}
          className="shrink-0"
        >
          <button
            onClick={() => onYearSelect(y)}
            className={`w-full text-left px-3 py-1.5 rounded-md text-sm font-medium transition cursor-pointer ${
              selectedYear === y
                ? "bg-accent/80 text-text-white/98"
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
