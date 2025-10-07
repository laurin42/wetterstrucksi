"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/Accordion";
import { CategoryKey } from "./archive/ArchiveOverviewClient";
import { Calendar, Layers, SortDesc } from "lucide-react";

interface SidebarProps {
  categories: Record<CategoryKey, string>;
  selectedCategory: CategoryKey | null;
  onCategorySelect: (category: CategoryKey | null) => void;

  selectedMonth: string | null;
  onMonthSelect: (month: string | null) => void;

  selectedYear: number | null;
  onYearSelect: (year: number | null) => void;

  sortOrder: "newest" | "oldest";
  onSortChange: (order: "newest" | "oldest") => void;

  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
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

const years = [2022, 2023, 2024, 2025];

export function Sidebar({
  categories,
  selectedCategory,
  onCategorySelect,
  selectedMonth,
  onMonthSelect,
  selectedYear,
  onYearSelect,
  sortOrder,
  onSortChange,
  sidebarOpen,
  setSidebarOpen,
}: SidebarProps) {
  const resetAll = () => {
    onCategorySelect(null);
    onMonthSelect(null);
    onYearSelect(null);
    onSortChange("newest");
  };

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: sidebarOpen ? "auto" : 0,
        opacity: sidebarOpen ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="overflow-hidden bg-card backdrop-blur-md shadow-inner-sm pl-4 pr-3 md:px-7 mb-2"
    >
      <Accordion type="single" collapsible className="space-y-1">
        {/* Kategorien */}
        <AccordionItem value="categories">
          <AccordionTrigger className="text-xl font-normal cursor-pointer md:mt-4">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-accent" />
              <span>Kategorien</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.04 },
                },
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 px-2 py-2 md:px-4 border-b border-t border-accent/40"
            >
              {Object.entries(categories).map(([key, label]) => (
                <motion.li
                  key={key}
                  variants={{
                    hidden: { opacity: 0, y: -5 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <button
                    onClick={() => onCategorySelect(key as CategoryKey)}
                    className={`w-full text-left px-3 py-1.5 rounded-md text-sm font-medium transition cursor-pointer ${
                      selectedCategory === key
                        ? "bg-accent-dim text-text-white"
                        : "hover:bg-accent/20 text-text hover:text-text-white"
                    }`}
                  >
                    {label}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </AccordionContent>
        </AccordionItem>

        {/* Monate */}
        <AccordionItem value="months">
          <AccordionTrigger className="text-xl font-normal cursor-pointer">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-accent" />
              <span>Monat</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
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
                        ? "bg-accent-dim text-text-white"
                        : "hover:bg-accent/20 text-text hover:text-text-white"
                    }`}
                  >
                    {m.label}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </AccordionContent>
        </AccordionItem>

        {/* Jahre */}
        <AccordionItem value="years">
          <AccordionTrigger className="text-xl font-normal cursor-pointer">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-accent" />
              <span>Jahr</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.04 } },
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 px-2 py-2 md:px-4 border-b border-t border-accent/40"
            >
              {years.map((year) => (
                <motion.li
                  key={year}
                  variants={{
                    hidden: { opacity: 0, y: -5 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <button
                    onClick={() => onYearSelect(year)}
                    className={`w-full text-left px-3 py-1.5 rounded-md text-sm font-medium transition cursor-pointer ${
                      selectedYear === year
                        ? "bg-accent-dim text-text-white"
                        : "hover:bg-accent/20 text-text hover:text-text-white"
                    }`}
                  >
                    {year}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </AccordionContent>
        </AccordionItem>

        {/* Sortierung */}
        <AccordionItem value="sort">
          <AccordionTrigger className="text-xl font-normal cursor-pointer">
            <div className="flex items-center gap-2">
              <SortDesc className="w-5 h-5 text-accent" />
              <span>Sortierung</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 px-2 pt-4 md:px-4 border-t-[1px] border-accent/40">
              <button
                onClick={() => onSortChange("newest")}
                className={`w-full text-left px-3 py-1.5 rounded-md text-sm font-medium transition cursor-pointer ${
                  sortOrder === "newest"
                    ? "bg-accent-dim text-text-white/98"
                    : "hover:bg-accent/20 text-text hover:text-text-white"
                }`}
              >
                Neueste zuerst
              </button>
              <button
                onClick={() => onSortChange("oldest")}
                className={`w-full text-left px-3 py-1.5 rounded-md text-sm font-medium transition cursor-pointer ${
                  sortOrder === "oldest"
                    ? "bg-accent-dim text-text-white"
                    : "hover:bg-accent/20 text-text hover:text-text-white"
                }`}
              >
                Älteste zuerst
              </button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Reset Button */}
      <div className="flex items-center justify-center mx-4 mb-4 border-t-[1px] border-accent/40 pt-4">
        <button
          onClick={resetAll}
          className="text-sm font-semibold px-6 py-2 bg-accent cursor-pointer hover:bg-accent/80 text-text-white transition rounded-sm"
        >
          Filter zurücksetzen
        </button>
      </div>
    </motion.div>
  );
}
