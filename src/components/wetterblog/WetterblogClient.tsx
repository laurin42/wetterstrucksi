"use client";

import React, { useState, useMemo, useRef, useEffect, memo } from "react";
import { PostWithMeta } from "@tryghost/content-api";
import WeatherBlogHero from "./WetterblogHero";
import { PostsFilter } from "../posts/filter/PostsFilter";
import { useUniquePosts } from "@/lib/posts/useUniquePosts";
import { FaArrowDownLong } from "react-icons/fa6";
import PostCard from "../posts/PostCard";
import LoadingSpinner from "../ui/LoadingSpinner";

type SortOrder = "newest" | "oldest";

interface WetterblogClientProps {
  posts: PostWithMeta[];
}

function VisiblePosts({ posts }: { posts: PostWithMeta[] }) {
  if (posts.length === 0) {
    return (
      <div className="h-svh w-100% flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      {posts.map((post, idx) => (
        <div key={`${post.id}-${idx}`} className="flex flex-col">
          <PostCard post={post} />
        </div>
      ))}
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

  const postsPerLoad = 6;
  const archiveRef = useRef<HTMLDivElement>(null);

  const filteredPosts = useMemo(() => {
    return allPosts
      .filter((post) => {
        const postDate = new Date(post.published_at);
        const matchMonth =
          selectedMonth !== null
            ? (postDate.getMonth() + 1).toString() === selectedMonth
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

  const loadMore = async () => {
    const nextPosts = filteredPosts.slice(
      visiblePosts.length,
      visiblePosts.length + postsPerLoad
    );

    let updatedPosts = [...visiblePosts, ...nextPosts];

    if (nextPosts.length < postsPerLoad) {
      const res = await fetch(
        `/api/posts?page=${currentPage + 1}&limit=${postsPerLoad}`
      );
      const morePosts: PostWithMeta[] = await res.json();
      updatedPosts = [...updatedPosts, ...morePosts];
    }

    const dedupedPosts = Array.from(
      new Map(updatedPosts.map((p) => [p.id, p])).values()
    );

    setVisiblePosts(dedupedPosts);
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <section
      ref={archiveRef}
      className="max-w-4xl md:max-w-6xl mx-auto tablet-xs:my-16 tablet-xs:p-2 tablet-xs:border border-white/16 tablet-xs:rounded-lg shadow md"
    >
      <WeatherBlogHero />
      <PostsFilter
        selectedMonth={selectedMonth}
        onMonthSelect={setSelectedMonth}
        selectedYear={selectedYear}
        onYearSelect={setSelectedYear}
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
      />

      <section className="grid grid-cols-1 md:grid-cols-3 bg-foreground-secondary/32 tablet-xs:rounded-md tablet-xs:border-none border-t border-text/16">
        <div className="md:col-span-3 grid grid-cols-1">
          <MemoizedVisiblePosts posts={visiblePosts} />
        </div>

        {visiblePosts.length < filteredPosts.length && (
          <div className="col-span-3 flex justify-center items-center py-6">
            <button
              onClick={loadMore}
              className="underline text-accent-dark cursor-pointer hover:text-accent/80 flex items-center gap-2"
            >
              Mehr Beiträge laden <FaArrowDownLong />
            </button>
          </div>
        )}
      </section>
    </section>
  );
};
