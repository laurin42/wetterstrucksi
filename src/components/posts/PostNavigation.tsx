"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";
import { getPostsWithMeta } from "@/app/api/posts/getPostsWithMeta";
import { PostWithMeta } from "@tryghost/content-api";
import LoadingSpinner from "../ui/LoadingSpinner";

interface PostNavigationClientProps {
  slug: string;
  publishedAt: string;
}

export default function PostNavigation({
  slug,
  publishedAt,
}: PostNavigationClientProps) {
  const [adjacent, setAdjacent] = useState<{
    older: PostWithMeta | null;
    newer: PostWithMeta | null;
  } | null>(null);

  useEffect(() => {
    async function fetchAdjacent() {
      const allPosts = await getPostsWithMeta(9999);
      const sorted = allPosts.sort(
        (a, b) =>
          new Date(b.published_at || 0).getTime() -
          new Date(a.published_at || 0).getTime()
      );
      const currentIndex = sorted.findIndex((p) => p.slug === slug);
      let nextPost: PostWithMeta | null = null;
      let prevPost: PostWithMeta | null = null;
      if (currentIndex !== -1) {
        if (currentIndex < sorted.length - 1)
          nextPost = sorted[currentIndex + 1];
        if (currentIndex > 0) prevPost = sorted[currentIndex - 1];
      }
      setAdjacent({ older: nextPost, newer: prevPost });
    }
    fetchAdjacent();
  }, [slug]);

  if (!adjacent)
    return (
      <div className="h-full py-16">
        <LoadingSpinner />
      </div>
    );

  const { newer: prev, older: next } = adjacent;

  return (
    <div className="grid grid-cols-2 gap-4 px-4 py-4 md:pt-6 md:px-0 max-w-6xl mx-auto bg-foreground-secondary/40 md:bg-transparent tablet-xs:pb-16">
      <div className="flex justify-start">
        {prev ? (
          <Link
            href={`/posts/${prev.slug}`}
            className="flex justify-start items-center gap-2 px-4 py-3 bg-accent/80 text-text-white rounded-l-sm w-full hover:bg-accent hover:ring-1 ring-white/32 transition duration-300"
          >
            <MdOutlineKeyboardDoubleArrowLeft className="text-2xl md:text-3xl shrink-0" />
            <div className="flex flex-col text-left">
              <span className="hidden tablet-xs:block text-xs opacity-80">
                Neuerer Beitrag
              </span>
              <span className="line-clamp-2 md:line-clamp-none font-semibold">
                {prev.title}
              </span>
            </div>
          </Link>
        ) : (
          <span className="flex items-center justify-center w-full px-4 py-3 text-sm opacity-60">
            Kein neuerer Beitrag
          </span>
        )}
      </div>

      <div className="flex justify-end">
        {next ? (
          <Link
            href={`/posts/${next.slug}`}
            className="flex justify-end items-center gap-2 px-4 py-3 bg-accent/80 text-text-white rounded-r-sm w-full hover:bg-accent hover:ring-1 ring-white/32 transition duration-300"
          >
            <div className="flex flex-col text-right">
              <span className="hidden tablet-xs:block text-xs opacity-80">
                Älterer Beitrag
              </span>
              <span className="line-clamp-3 md:line-clamp-none font-semibold">
                {next.title}
              </span>
            </div>
            <MdOutlineKeyboardDoubleArrowRight className="text-2xl md:text-3xl shrink-0" />
          </Link>
        ) : (
          <span className="flex items-center justify-center w-full px-4 py-3 text-sm opacity-60">
            Kein älterer Beitrag
          </span>
        )}
      </div>
    </div>
  );
}
