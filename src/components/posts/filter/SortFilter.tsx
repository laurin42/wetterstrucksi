"use client";

import { motion } from "framer-motion";

interface SortFilterProps {
  sortOrder: "newest" | "oldest";
  onSortChange: (order: "newest" | "oldest") => void;
}

const sortOptions = [
  { key: "newest", label: "Neueste zuerst" },
  { key: "oldest", label: "Älteste zuerst" },
];

export function SortFilter({ sortOrder, onSortChange }: SortFilterProps) {
  return (
    <motion.ul
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.04 } },
      }}
      className="grid grid-cols-2 gap-x-4 gap-y-2 py-2 px-2 w-full"
    >
      {sortOptions.map((option) => (
        <motion.li
          key={option.key}
          variants={{
            hidden: { opacity: 0, x: -5 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex-shrink-0"
        >
          <button
            onClick={() => onSortChange(option.key as "newest" | "oldest")}
            className={`w-full text-center px-3 py-1.5 rounded-md text-sm font-medium transition cursor-pointer ${
              sortOrder === option.key
                ? "bg-accent/80 text-text-white/98"
                : "hover:bg-accent/60 text-text hover:text-text-white"
            }`}
          >
            {option.label}
          </button>
        </motion.li>
      ))}
    </motion.ul>
  );
}
