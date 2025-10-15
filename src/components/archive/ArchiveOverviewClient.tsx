"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PostCard } from "@/components/posts/PostCard";
import { PostWithMeta } from "@tryghost/content-api";
import ArchiveHero from "./ArchiveHero";
import { PostsFilter } from "../posts/filter/PostsFilter";
import { useUniquePosts } from "@/lib/posts/useUniquePosts";

type SortOrder = "newest" | "oldest";

interface ArchiveOverviewClientProps {
  posts: PostWithMeta[];
}

export function ArchiveOverviewClient({ posts }: ArchiveOverviewClientProps) {
  const allPosts = useUniquePosts(posts);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");

  const filteredPosts = allPosts
    .filter((post) => {
      const postDate = new Date(post.published_at);
      const matchMonth =
        selectedMonth !== null
          ? postDate.getMonth().toString() === selectedMonth
          : true;
      const matchYear =
        selectedYear !== null ? postDate.getFullYear() === selectedYear : true;
      return matchMonth && matchYear;
    })
    .sort((a, b) => {
      const timeA = new Date(a.published_at).getTime();
      const timeB = new Date(b.published_at).getTime();
      return sortOrder === "newest" ? timeB - timeA : timeA - timeB;
    });

  return (
    <motion.section className="max-w-4xl md:max-w-6xl mx-auto">
      <ArchiveHero />
      <PostsFilter
        selectedMonth={selectedMonth}
        onMonthSelect={setSelectedMonth}
        selectedYear={selectedYear}
        onYearSelect={setSelectedYear}
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
      />

      <motion.section className="grid grid-cols-1 md:grid-cols-3 bg-foreground-secondary/44 pb-4">
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 md:gap-y-2 md:pt-2">
          {filteredPosts.length === 0 ? (
            <p className="text-muted-foreground">Keine Beiträge gefunden.</p>
          ) : (
            filteredPosts.map((post, idx) => (
              <motion.div
                key={`${post.id}-${idx}`}
                className="flex flex-col px-1"
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
