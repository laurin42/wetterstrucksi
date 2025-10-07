"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PostCard } from "@/components/posts/PostCard";
import { PostWithMeta } from "@tryghost/content-api";
import ArchiveHero from "./ArchiveHero";
import { Sidebar } from "@/components/Sidebar";
import { CollapsibleSectionHeader } from "../ui/CollabsibleSectionHeader";

interface ArchivePageProps {
  posts: {
    rueckblicke: PostWithMeta[];
    updates: PostWithMeta[];
    vorhersagen: PostWithMeta[];
    biowetter: PostWithMeta[];
    privates: PostWithMeta[];
    presseschau: PostWithMeta[];
  };
}

export type CategoryKey =
  | "rueckblicke"
  | "updates"
  | "vorhersagen"
  | "biowetter"
  | "privates"
  | "presseschau";

type SortOrder = "newest" | "oldest";

export function ArchiveOverviewClient({ posts }: ArchivePageProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey | null>(
    null
  );
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");
  const [sidebarOpen, setSidebarOpen] = useState(true); // Default geöffnet

  const categories: Record<CategoryKey, string> = {
    vorhersagen: "Vorhersagen",
    updates: "Updates",
    rueckblicke: "Rückblicke",
    biowetter: "Biowetter",
    privates: "Privates",
    presseschau: "Presseschau",
  };

  const months = [
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

  const allPosts = Object.entries(posts).flatMap(([cat, arr]) =>
    arr.map((p) => ({ ...p, category: cat as CategoryKey }))
  );

  const filteredPosts = allPosts
    .filter((p) => {
      const postDate = new Date(p.published_at);
      const matchCategory = selectedCategory
        ? p.category === selectedCategory
        : true;
      const matchMonth =
        selectedMonth !== null
          ? postDate.getMonth().toString() === selectedMonth
          : true;
      const matchYear =
        selectedYear !== null ? postDate.getFullYear() === selectedYear : true;
      return matchCategory && matchMonth && matchYear;
    })
    .sort((a, b) => {
      const timeA = new Date(a.published_at).getTime();
      const timeB = new Date(b.published_at).getTime();
      return sortOrder === "newest" ? timeB - timeA : timeA - timeB;
    });

  const headerTitle =
    `${selectedCategory ? categories[selectedCategory] : "Alle Beiträge"}` +
    (selectedMonth !== null ? ` im ${months[parseInt(selectedMonth)]}` : "") +
    (selectedYear !== null ? ` ${selectedYear}` : "");

  return (
    <motion.section className="max-w-4xl md:max-w-6xl mx-auto">
      <ArchiveHero />

      <CollapsibleSectionHeader
        title={headerTitle}
        isOpen={true}
        onToggle={() => {}}
        isContentCollabsible={false}
        onFilterToggle={() => setSidebarOpen(!sidebarOpen)}
        mobileOpen={sidebarOpen}
      />

      <Sidebar
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
        selectedMonth={selectedMonth}
        onMonthSelect={setSelectedMonth}
        selectedYear={selectedYear}
        onYearSelect={setSelectedYear}
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <motion.section className="grid grid-cols-1 md:grid-cols-3 bg-foreground-secondary/44 pb-4 md:pt-4">
        <div className="px-1 md:pr-8 md:pl-4 md:col-span-3 grid grid-cols-1 md:grid-cols-3 md:gap-y-2 md:pt-0">
          {filteredPosts.length === 0 ? (
            <p className="text-muted-foreground">Keine Beiträge gefunden.</p>
          ) : (
            filteredPosts.map((post) => (
              <motion.div
                key={`${post.category}-${post.id}`}
                className="flex flex-col"
              >
                <PostCard post={post} />
              </motion.div>
            ))
          )}
        </div>
      </motion.section>
    </motion.section>
  );
}
