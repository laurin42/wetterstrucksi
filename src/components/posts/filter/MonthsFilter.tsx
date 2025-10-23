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
      className="grid grid-cols-2 gap-x-4 gap-y-2 py-2 px-2 w-full scrollbar-hide 
					   md:flex md:overflow-x-auto md:gap-2 md:px-0 md:whitespace-nowrap"
    >
      <motion.li
        key="clear"
        variants={{
          hidden: { opacity: 0, x: -5 },
          visible: { opacity: 1, x: 0 },
        }}
        className="col-span-2 md:col-span-none flex-shrink-0"
      >
        <button
          onClick={() => onMonthSelect(null)}
          className={`w-full text-left px-3 py-1.5 rounded-md text-sm font-medium transition cursor-pointer ${
            selectedMonth === null
              ? "bg-accent text-text-white/98"
              : "hover:bg-accent/60 text-text hover:text-text-white"
          }`}
        >
          Alle Monate
        </button>
      </motion.li>
      {months.map((m) => (
        <motion.li
          key={m.value}
          data-month={m.value}
          variants={{
            hidden: { opacity: 0, x: -5 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex-shrink-0"
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
