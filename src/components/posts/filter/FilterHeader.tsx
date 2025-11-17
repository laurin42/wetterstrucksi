"use client";

import { CollapsibleSectionHeader } from "@/components/ui/CollabsibleSectionHeader";

interface FilterHeaderProps {
  selectedMonth: string | null;
  selectedYear: number | null;
  onToggle?: () => void;
  onFilterToggle?: () => void;
  isOpen?: boolean;
  mobileOpen?: boolean;
  onMonthSelect: (month: string | null) => void;
  onYearSelect: (year: number | null) => void;
  onSortChange: (order: "newest" | "oldest") => void;
  onCategorySelect: (category: string | null) => void;
  selectedCategory: string | null;
}

const monthLabels = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

export function FilterHeader({
  selectedMonth,
  selectedYear,
  onToggle = () => {},
  onFilterToggle,
  isOpen = true,
  mobileOpen,
  onMonthSelect,
  onSortChange,
  onYearSelect,
  onCategorySelect,
  selectedCategory,
}: FilterHeaderProps) {
  const allPostsTitle = "Alle Beiträge";

  const categoryString = selectedCategory?.trim();
  const hasCategory = categoryString && categoryString !== "null";

  const monthIndex =
    selectedMonth !== null ? parseInt(selectedMonth, 10) : null;
  let monthLabel = "";
  if (
    monthIndex !== null &&
    monthIndex >= 0 &&
    monthIndex < monthLabels.length
  ) {
    monthLabel = ` im ${monthLabels[monthIndex]}`;
  }

  const yearLabel = selectedYear !== null ? ` ${selectedYear}` : "";

  let title = "";
  if (hasCategory) {
    title = `${categoryString}${monthLabel}${yearLabel}`;
  } else {
    title = `${allPostsTitle}${monthLabel}${yearLabel}`;
  }

  return (
    <CollapsibleSectionHeader
      title={title}
      isOpen={isOpen}
      onToggle={onToggle}
      isContentCollabsible={false}
      onFilterToggle={onFilterToggle}
      mobileOpen={mobileOpen}
      onMonthSelect={onMonthSelect}
      onYearSelect={onYearSelect}
      onSortChange={onSortChange}
      onCategorySelect={onCategorySelect}
    />
  );
}
