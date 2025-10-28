"use client";

import { useState, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { PostCard } from "@/components/posts/PostCard";
import { PostWithMeta } from "@tryghost/content-api";
import ArchiveHero from "./ArchiveHero";
import { PostsFilter } from "../posts/filter/PostsFilter";
import { useUniquePosts } from "@/lib/posts/useUniquePosts";
import { usePaginationHandler } from "@/lib/useScrollToTop";

type SortOrder = "newest" | "oldest";

interface ArchiveOverviewClientProps {
  posts: PostWithMeta[];
}

export function ArchiveOverviewClient({ posts }: ArchiveOverviewClientProps) {
  const allPosts = useUniquePosts(posts);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const filteredPosts = useMemo(() => {
    return allPosts
      .filter((post) => {
        const postDate = new Date(post.published_at);
        const matchMonth =
          selectedMonth !== null
            ? postDate.getMonth().toString() === selectedMonth
            : true;
        const matchYear =
          selectedYear !== null
            ? postDate.getFullYear() === selectedYear
            : true;
        return matchMonth && matchYear;
      })
      .sort((a, b) => {
        const timeA = new Date(a.published_at).getTime();
        const timeB = new Date(b.published_at).getTime();
        return sortOrder === "newest" ? timeB - timeA : timeA - timeB;
      });
  }, [allPosts, selectedMonth, selectedYear, sortOrder]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  const archiveRef = useRef<HTMLDivElement>(null);

  const { handlePageChange } = usePaginationHandler({
    setCurrentPage,
    totalPages,
    targetRef: archiveRef,
  });

  return (
    <motion.section
      ref={archiveRef}
      className="max-w-4xl md:max-w-6xl mx-auto tablet:pt-12"
    >
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
        <div className="md:col-span-3 grid grid-cols-1">
          {currentPosts.length === 0 ? (
            <p className="text-muted-foreground">Keine Beiträge gefunden.</p>
          ) : (
            currentPosts.map((post, idx) => (
              <motion.div key={`${post.id}-${idx}`} className="flex flex-col">
                <PostCard post={post} />
              </motion.div>
            ))
          )}
        </div>

        {totalPages > 1 && (
          <div className="col-span-3 flex justify-center items-center gap-4 pt-4 pb-2 md:pt-12 md:pb-2 text-text">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 cursor-pointer rounded-md bg-accent hover:bg-accent/80 transition disabled:opacity-40 disabled:cursor-default"
            >
              « Zurück
            </button>

            <span className="text-sm">
              Seite {currentPage} von {totalPages}
            </span>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex flex-row justify-center items-center px-4 py-2 text-text-white cursor-pointer rounded-md bg-accent hover:bg-accent/80 transition disabled:opacity-40"
            >
              Weiter »
            </button>
          </div>
        )}
      </motion.section>
    </motion.section>
  );
}
