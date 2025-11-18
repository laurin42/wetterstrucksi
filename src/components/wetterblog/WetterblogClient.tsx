"use client";

import React, { useState, useMemo, useRef, useEffect, memo } from "react";
import { PostWithMeta } from "@tryghost/content-api";
import WeatherBlogHero from "./WetterblogHero";
import { PostsFilter } from "../posts/filter/PostsFilter";
import { useUniquePosts } from "@/lib/posts/useUniquePosts";
import { FaArrowDownLong } from "react-icons/fa6";
import PostCard from "../posts/PostCard";
import LoadingSpinner from "../ui/LoadingSpinner";
import { categoryMap } from "@/lib/posts/categoryMap";

type SortOrder = "newest" | "oldest";

interface WetterblogClientProps {
  posts: PostWithMeta[];
  initialCategories: string[];
}

interface PostsApiResponse {
  posts: PostWithMeta[];
  total: number;
  page: number;
  pages: number;
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

export const WetterblogClient = ({
  posts,
  initialCategories,
}: WetterblogClientProps) => {
  const allPosts = useUniquePosts(posts);

  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");
  const [visiblePosts, setVisiblePosts] = useState<PostWithMeta[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [totalPostsCount, setTotalPostsCount] = useState(posts.length);

  const postsPerLoad = 6;
  const archiveRef = useRef<HTMLDivElement>(null);

  const categories = initialCategories;

  const loadMore = async () => {
    const params = new URLSearchParams({
      page: (currentPage + 1).toString(),
      limit: postsPerLoad.toString(),
    });

    if (selectedCategory) {
      params.append("category", selectedCategory);
    }
    if (selectedMonth) {
      params.append("month", selectedMonth);
    }
    if (selectedYear) {
      params.append("year", selectedYear.toString());
    }

    const res = await fetch(`/api/posts?${params.toString()}`);
    const result: PostsApiResponse = await res.json();
    let updatedPosts = [...visiblePosts, ...result.posts];
    const dedupedPosts = Array.from(
      new Map(updatedPosts.map((p) => [p.id, p])).values()
    );

    setVisiblePosts(dedupedPosts);
    setCurrentPage((prev) => prev + 1);
  };

  useEffect(() => {
    const loadFilteredInitialPosts = async () => {
      const params = new URLSearchParams({
        page: "1",
        limit: postsPerLoad.toString(),
        order:
          sortOrder === "newest" ? "published_at DESC" : "published_at ASC",
      });
      if (selectedCategory) params.append("category", selectedCategory);
      if (selectedMonth) params.append("month", selectedMonth);
      if (selectedYear) params.append("year", selectedYear.toString());

      const res = await fetch(`/api/posts?${params.toString()}`);
      const result: PostsApiResponse = await res.json();

      setVisiblePosts(result.posts);
      setCurrentPage(1);
      setTotalPostsCount(result.total);
    };

    loadFilteredInitialPosts();
  }, [selectedMonth, selectedYear, selectedCategory, sortOrder]);

  return (
    <section
      ref={archiveRef}
      className="max-w-4xl md:max-w-6xl mx-auto tablet-xs:my-8 tablet-xs:p-2 tablet-xs:border border-white/16 tablet-xs:rounded-lg shadow md"
    >
      <WeatherBlogHero />
      <PostsFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
        selectedMonth={selectedMonth}
        onMonthSelect={setSelectedMonth}
        selectedYear={selectedYear}
        onYearSelect={setSelectedYear}
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
      />

      <section className="grid grid-cols-1 md:grid-cols-3 bg-foreground-secondary/32 tablet-xs:rounded-md tablet-xs:border-none border-t border-text/16">
        <div className="md:col-span-3 grid grid-cols-1 pt-2 tablet-xs:pt-0">
          <MemoizedVisiblePosts posts={visiblePosts} />
        </div>

        {visiblePosts.length < totalPostsCount && (
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
