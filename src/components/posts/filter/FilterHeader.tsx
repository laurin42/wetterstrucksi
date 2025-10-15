"use client";

import { CollapsibleSectionHeader } from "@/components/ui/CollabsibleSectionHeader";

interface FilterHeaderProps {
  selectedMonth: string | null;
  selectedYear: number | null;
  onToggle?: () => void;
  onFilterToggle?: () => void;
  isOpen?: boolean;
  mobileOpen?: boolean;
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
}: FilterHeaderProps) {
  const title =
    selectedMonth || selectedYear
      ? `Alle Beiträge${
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
    />
  );
}
