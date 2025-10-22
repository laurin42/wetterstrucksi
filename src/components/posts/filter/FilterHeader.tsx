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
}: FilterHeaderProps) {
  const title =
    selectedMonth || selectedYear
      ? `Beiträge${
          selectedMonth !== null
            ? ` im ${monthLabels[parseInt(selectedMonth, 10)]}`
            : ""
        }${selectedYear !== null ? ` ${selectedYear}` : ""}`
      : "Alle Beiträge";

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
    />
  );
}
