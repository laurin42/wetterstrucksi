"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { PostCard } from "@/components/posts/PostCard";
import { PostWithMeta } from "@tryghost/content-api";
import ArchiveHero from "./ArchiveHero";
import { PostsFilter } from "../posts/filter/PostsFilter";
import { useUniquePosts } from "@/lib/posts/useUniquePosts";
import { FaArrowDownLong } from "react-icons/fa6";

type SortOrder = "newest" | "oldest";

interface ArchiveOverviewClientProps {
  posts: PostWithMeta[];
}

export function ArchiveOverviewClient({ posts }: ArchiveOverviewClientProps) {
  const allPosts = useUniquePosts(posts);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");
  const [visiblePosts, setVisiblePosts] = useState<PostWithMeta[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerLoad = 9;

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

  useEffect(() => {
    const initialPosts = filteredPosts.slice(0, postsPerLoad);
    setVisiblePosts(initialPosts);
    setCurrentPage(1);
  }, [filteredPosts]);

  const loadMore = () => {
    const nextPosts = filteredPosts.slice(
      visiblePosts.length,
      visiblePosts.length + postsPerLoad
    );
    setVisiblePosts((prev) => [...prev, ...nextPosts]);
  };

  const archiveRef = useRef<HTMLDivElement>(null);

  return (
    <motion.section
      ref={archiveRef}
      className="max-w-4xl md:max-w-6xl mx-auto tablet:pt-12 tablet:pb-24 pb-0"
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

      <motion.section className="grid grid-cols-1 md:grid-cols-3 bg-foreground-secondary/44">
        <div className="md:col-span-3 grid grid-cols-1">
          {visiblePosts.length === 0 ? (
            <p className="text-muted-foreground">Keine Beiträge gefunden.</p>
          ) : (
            visiblePosts.map((post, idx) => (
              <motion.div key={`${post.id}-${idx}`} className="flex flex-col">
                <PostCard post={post} />
              </motion.div>
            ))
          )}
        </div>

        {visiblePosts.length < filteredPosts.length && (
          <div className="col-span-3 flex bg-foreground-secondary/44 justify-center items-center py-6">
            <button
              onClick={loadMore}
              className="underline text-accent-dark cursor-pointer hover:text-accent/80"
            >
              Mehr Beiträge laden ▾
            </button>
          </div>
        )}
      </motion.section>
    </motion.section>
  );
}
