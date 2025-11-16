"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import { useMotionVariants } from "@/lib/animation/useMotionVariants";
import { ResetFilter } from "../posts/filter/ResetFilter";

interface CollapsibleSectionHeaderProps {
  title: string;
  isOpen?: boolean;
  onToggle?: () => void;
  isContentCollabsible?: boolean;
  onFilterToggle?: () => void;
  mobileOpen?: boolean;

  onMonthSelect?: (month: string | null) => void;
  onYearSelect?: (year: number | null) => void;
  onSortChange?: (order: "newest" | "oldest") => void;
  onCategorySelect?: (category: string | null) => void;
}

export function CollapsibleSectionHeader({
  title,
  isOpen,
  onToggle,
  isContentCollabsible = true,
  onFilterToggle,
  mobileOpen = false,
  onMonthSelect,
  onYearSelect,
  onSortChange,
  onCategorySelect,
}: CollapsibleSectionHeaderProps) {
  const { fadeInVariant } = useMotionVariants();

  return (
    <div className="px-4 pr-5 md:px-8 py-2 bg-header-background/80 text-text-white shadow-sm backdrop-blur-sm flex items-center justify-between select-none tablet-xs:rounded-t-sm">
      <span className="text-xl md:text-2xl font-semibold tracking-wide">
        {title}
      </span>

      <div className="flex justify-end">
        {onMonthSelect && onYearSelect && onSortChange && onCategorySelect && (
          <ResetFilter
            onMonthSelect={onMonthSelect}
            onYearSelect={onYearSelect}
            onSortChange={onSortChange}
            onCategorySelect={onCategorySelect}
          />
        )}
        {onFilterToggle && (
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              onFilterToggle();
            }}
            className="flex items-center gap-2 cursor-pointer py-1 rounded-full"
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              key={mobileOpen ? "up" : "down"}
              initial={{ rotate: mobileOpen ? -180 : 180 }}
              animate={{ rotate: mobileOpen ? 0 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {mobileOpen ? (
                <FaAngleUp
                  size={22}
                  className="hover:text-accent-dim transition-colors duration-420"
                />
              ) : (
                <FaAngleDown
                  size={22}
                  className="hover:text-accent-dim transition-colors duration-420"
                />
              )}
            </motion.div>
          </motion.button>
        )}

        {isContentCollabsible && (
          <motion.button
            onClick={onToggle}
            className="p-1 rounded-full hover:bg-accent-dim transition-colors"
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              key={isOpen ? "up" : "down"}
              initial={{ rotate: isOpen ? -180 : 180 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <FaAngleUp size={22} /> : <FaAngleDown size={22} />}
            </motion.div>
          </motion.button>
        )}
      </div>
    </div>
  );
}
