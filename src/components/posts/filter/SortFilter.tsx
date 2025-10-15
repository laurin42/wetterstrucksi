"use client";

import { motion } from "framer-motion";

interface SortFilterProps {
  sortOrder: "newest" | "oldest";
  onSortChange: (order: "newest" | "oldest") => void;
}

export function SortFilter({ sortOrder, onSortChange }: SortFilterProps) {
  return (
    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 px-2 pt-4 md:px-4 border-t-[1px] border-accent/40">
      <button
        onClick={() => onSortChange("newest")}
        className={`w-full text-left px-3 py-1.5 rounded-md text-sm font-medium transition cursor-pointer ${
          sortOrder === "newest"
            ? "bg-accent text-text-white/98"
            : "hover:bg-accent/60 text-text hover:text-text-white"
        }`}
      >
        Neueste zuerst
      </button>
      <button
        onClick={() => onSortChange("oldest")}
        className={`w-full text-left px-3 py-1.5 rounded-md text-sm font-medium transition cursor-pointer ${
          sortOrder === "oldest"
            ? "bg-accent text-text-white/98"
            : "hover:bg-accent/60 text-text hover:text-text-white"
        }`}
      >
        Älteste zuerst
      </button>
    </motion.div>
  );
}
