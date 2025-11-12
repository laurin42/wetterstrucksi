"use client";

import Link from "next/link";
import { PostWithMeta } from "@tryghost/content-api";

interface NewestPostCard {
  post: PostWithMeta;
  isNewest?: boolean;
  isLast?: boolean;
  className?: string;
}

function truncateWords(text?: string, maxWords?: number) {
  if (!text || !maxWords) return text;
  const words = text.split(" ");
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ") + "...";
}

export function NewestPostCard({ post, className }: NewestPostCard) {
  return (
    <div
      className={`
       border border-white/32 rounded-lg
        overflow-hidden
        bg-accent-secondary transition-all duration-1000
        shadow-2xl
        w-full h-auto
        landscapeCard
        shrink-0
        }

        ${className}
      `}
    >
      <Link
        href={`/posts/${post.slug}`}
        className="
          group block w-full h-full
          overflow-hidden transition-color duration-300
          hover:bg-header-background/32 active:bg-accent
        "
      >
        <div className="flex flex-col justify-between p-4 gap-1.5 text-text-white text-balance">
          {post.published_at && post.og_description && post.og_description && (
            <>
              {" "}
              <p className="text-sm font-semibold md:font-thin">
                {new Date(post.published_at).toLocaleDateString("de-DE", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>
              <h2 className="text-lg font-semibold">
                {truncateWords(post.title, 16)}
              </h2>
              <p className="border-t border-white/32 pt-2 line-clamp-6 tablet-xs:line-clamp-0">
                {post.og_description}
              </p>
            </>
          )}
        </div>
      </Link>
    </div>
  );
}
