"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MonthsFilter } from "./MonthsFilter";
import { YearsFilter } from "./YearsFilter";
import { SortFilter } from "./SortFilter";
import { ResetFilter } from "./ResetFilter";
import { FilterHeader } from "./FilterHeader";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Calendar, SortDesc } from "lucide-react";
import { useMotionVariants } from "@/lib/animation/useMotionVariants";

interface FilterCallbacks {
  onMonthSelect: (month: string | null) => void;
  onYearSelect: (year: number | null) => void;
  onSortChange: (order: "newest" | "oldest") => void;
}

interface PostsFilterProps extends FilterCallbacks {
  selectedMonth: string | null;
  selectedYear: number | null;
  sortOrder: "newest" | "oldest";
}

export function PostsFilter({
  selectedMonth,
  onMonthSelect,
  selectedYear,
  onYearSelect,
  sortOrder,
  onSortChange,
}: PostsFilterProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { sidebarVariants } = useMotionVariants();

  const callbacks = { onMonthSelect, onYearSelect, onSortChange };

  return (
    <>
      <FilterHeader
        selectedMonth={selectedMonth}
        selectedYear={selectedYear}
        onToggle={() => {}}
        onFilterToggle={() => setSidebarOpen(!sidebarOpen)}
        isOpen={true}
        mobileOpen={sidebarOpen}
      />

      <motion.div
        initial="closed"
        animate={sidebarOpen ? "open" : "closed"}
        variants={sidebarVariants}
        className="overflow-hidden bg-foreground-secondary shadow-inner-sm pl-4 pr-3 md:px-7"
      >
        <Accordion type="single" collapsible className="space-y-1">
          <AccordionItem value="months">
            <AccordionTrigger className="text-lg font-normal cursor-pointer py-2 md:pt-0 md:pb-2 md:mt-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-accent" />
                <span>Monat</span>
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
                <span>Jahr</span>
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
            <AccordionTrigger className="text-lg font-normal cursor-pointer py-2 md:pt-0 md:pb-2 md:mt-4">
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

        <ResetFilter {...callbacks} />
      </motion.div>
    </>
  );
}
