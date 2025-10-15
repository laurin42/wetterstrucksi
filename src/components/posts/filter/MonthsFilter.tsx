"use client";

import { motion } from "framer-motion";

interface MonthsFilterProps {
  selectedMonth: string | null;
  onMonthSelect: (month: string | null) => void;
}

const months = [
  { value: "0", label: "Januar" },
  { value: "1", label: "Februar" },
  { value: "2", label: "März" },
  { value: "3", label: "April" },
  { value: "4", label: "Mai" },
  { value: "5", label: "Juni" },
  { value: "6", label: "Juli" },
  { value: "7", label: "August" },
  { value: "8", label: "September" },
  { value: "9", label: "Oktober" },
  { value: "10", label: "November" },
  { value: "11", label: "Dezember" },
];

export function MonthsFilter({
  selectedMonth,
  onMonthSelect,
}: MonthsFilterProps) {
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
      {months.map((m) => (
        <motion.li
          key={m.value}
          variants={{
            hidden: { opacity: 0, y: -5 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <button
            onClick={() => onMonthSelect(m.value)}
            className={`w-full text-left px-3 py-1.5 rounded-md text-sm font-medium transition cursor-pointer ${
              selectedMonth === m.value
                ? "bg-accent text-text-white/98"
                : "hover:bg-accent/60 text-text hover:text-text-white"
            }`}
          >
            {m.label}
          </button>
        </motion.li>
      ))}
    </motion.ul>
  );
}
