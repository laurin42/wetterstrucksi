"use client";

import React, {
  useState,
  useMemo,
  useRef,
  useEffect,
  Suspense,
  lazy,
} from "react";
import { motion } from "framer-motion";
import { PostWithMeta } from "@tryghost/content-api";
import ArchiveHero from "./WetterblogHero";
import { PostsFilter } from "../posts/filter/PostsFilter";
import { useUniquePosts } from "@/lib/posts/useUniquePosts";
import { FaArrowDownLong } from "react-icons/fa6";

const PostCard = lazy(() => import("../posts/PostCard"));

type SortOrder = "newest" | "oldest";

interface WetterblogClientProps {
  posts: PostWithMeta[];
}

function VisiblePosts({ posts }: { posts: PostWithMeta[] }) {
  return (
    <>
      {posts.length === 0 ? (
        <p className="text-muted-foreground">Keine Beiträge gefunden.</p>
      ) : (
        posts.map((post, idx) => (
          <motion.div key={`${post.id}-${idx}`} className="flex flex-col">
            <Suspense
              fallback={<div className="h-48 w-full animate-pulse bg-muted" />}
            >
              <PostCard post={post} />
            </Suspense>
          </motion.div>
        ))
      )}
    </>
  );
}

const MemoizedVisiblePosts = React.memo(VisiblePosts);

export const WetterblogClient = ({ posts }: WetterblogClientProps) => {
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
          <MemoizedVisiblePosts posts={visiblePosts} />
        </div>

        {visiblePosts.length < filteredPosts.length && (
          <div className="col-span-3 flex bg-foreground-secondary/44 justify-center items-center py-6">
            <button
              onClick={loadMore}
              className="underline text-accent-dark cursor-pointer hover:text-accent/80 flex items-center gap-2"
            >
              Mehr Beiträge laden <FaArrowDownLong />
            </button>
          </div>
        )}
      </motion.section>
    </motion.section>
  );
};
