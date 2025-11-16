"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CategoryFilter } from "./CategoryFilter";
import { MonthsFilter } from "./MonthsFilter";
import { YearsFilter } from "./YearsFilter";
import { SortFilter } from "./SortFilter";
import { FilterHeader } from "./FilterHeader";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Calendar, SortDesc } from "lucide-react";
import { IoCalendar } from "react-icons/io5";
import { TbCategory } from "react-icons/tb";
import { useMotionVariants } from "@/lib/animation/useMotionVariants";

interface FilterCallbacks {
  onMonthSelect: (month: string | null) => void;
  onYearSelect: (year: number | null) => void;
  onSortChange: (order: "newest" | "oldest") => void;
  onCategorySelect: (category: string | null) => void;
}

interface PostsFilterProps extends FilterCallbacks {
  selectedMonth: string | null;
  selectedYear: number | null;
  sortOrder: "newest" | "oldest";
  selectedCategories: string | null;
  categories: string[];
}

export function PostsFilter({
  selectedMonth,
  onMonthSelect,
  selectedYear,
  onYearSelect,
  sortOrder,
  onSortChange,
  selectedCategories,
  onCategorySelect,
  categories,
}: PostsFilterProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { sidebarVariants } = useMotionVariants();

  return (
    <>
      <FilterHeader
        selectedMonth={selectedMonth}
        selectedYear={selectedYear}
        onToggle={() => {}}
        onFilterToggle={() => setSidebarOpen(!sidebarOpen)}
        isOpen={true}
        mobileOpen={sidebarOpen}
        onMonthSelect={onMonthSelect}
        onYearSelect={onYearSelect}
        onSortChange={onSortChange}
        onCategorySelect={onCategorySelect}
      />

      <motion.div
        initial="closed"
        animate={sidebarOpen ? "open" : "closed"}
        variants={sidebarVariants}
        className="overflow-hidden bg-foreground-secondary shadow-inner-sm tablet-xs:rounded-b-lg  tablet-xs:mb-2"
      >
        <Accordion
          type="single"
          collapsible
          className="space-y-1 pt-2 px-4 md:px-8"
        >
          <AccordionItem value="categories">
            <AccordionTrigger className="text-lg font-normal cursor-pointer py-2 md:pt-0 md:pb-2 md:mt-4">
              <div className="flex items-center gap-2">
                <TbCategory className="w-5 h-5 text-accent" />
                <span>Kategorie auswählen</span>
              </div>
            </AccordionTrigger>

            <AccordionContent>
              <CategoryFilter
                categories={categories ?? []}
                selectedCategory={selectedCategories}
                onCategorySelect={onCategorySelect}
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="months">
            <AccordionTrigger className="text-lg font-normal cursor-pointer py-2 md:pt-0 md:pb-2 md:mt-4">
              <div className="flex items-center gap-2">
                <IoCalendar className="w-5 h-5 text-accent" />
                <span>Monat auswählen</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <MonthsFilter
                selectedMonth={selectedMonth}
                onMonthSelect={onMonthSelect}
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="years">
            <AccordionTrigger className="text-lg font-normal cursor-pointer py-2 md:pt-0 md:pb-2 md:mt-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-accent" />
                <span>Jahr auswählen</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <YearsFilter
                selectedYear={selectedYear}
                onYearSelect={onYearSelect}
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="sort">
            <AccordionTrigger className="text-lg font-normal cursor-pointer py-2 md:pt-0 pb-4 md:pb-6 md:mt-4">
              <div className="flex items-center gap-2">
                <SortDesc className="w-5 h-5 text-accent" />
                <span>Sortierung</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <SortFilter sortOrder={sortOrder} onSortChange={onSortChange} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </>
  );
}
