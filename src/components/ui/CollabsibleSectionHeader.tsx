"use client";

import React from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

interface CollapsibleSectionHeaderProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function CollapsibleSectionHeader({
  title,
  isOpen,
  onToggle,
}: CollapsibleSectionHeaderProps) {
  return (
    <div
      className="px-4 py-4 bg-card-transparent/60 text-2xl text-text-white lg:h-16 flex items-center justify-between cursor-pointer select-none md:p-8"
      onClick={onToggle}
    >
      <span>{title}</span>
      {isOpen ? (
        <FaAngleUp size={24} className="text-text-white" />
      ) : (
        <FaAngleDown size={24} className="text-text-white" />
      )}
    </div>
  );
}
