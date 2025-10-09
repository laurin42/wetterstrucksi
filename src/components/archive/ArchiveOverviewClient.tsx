"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PostCard } from "@/components/posts/PostCard";
import { PostWithMeta } from "@tryghost/content-api";
import ArchiveHero from "./ArchiveHero";
import { Sidebar } from "@/components/Sidebar";
import { CollapsibleSectionHeader } from "../ui/CollabsibleSectionHeader";

type SortOrder = "newest" | "oldest";

interface ArchiveOverviewClientProps {
  posts: PostWithMeta[];
}

export function ArchiveOverviewClient({ posts }: ArchiveOverviewClientProps) {
  const [allPosts, setAllPosts] = useState<PostWithMeta[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const uniquePosts = Array.from(
      new Map(posts.map((p) => [p.id, p])).values()
    );
    setAllPosts(uniquePosts);
  }, [posts]);

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

      <CollapsibleSectionHeader
        title="Alle Beiträge"
        isOpen={true}
        onToggle={() => {}}
        isContentCollabsible={false}
        onFilterToggle={() => setSidebarOpen(!sidebarOpen)}
        mobileOpen={sidebarOpen}
      />

      <Sidebar
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
            filteredPosts.map((post, idx) => (
              <motion.div key={`${post.id}-${idx}`} className="flex flex-col">
                <PostCard post={post} />
              </motion.div>
            ))
          )}
        </div>
      </motion.section>
    </motion.section>
  );
}
