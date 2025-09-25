import React from "react";
import Link from "next/link";
import Image from "next/image";
import { fixImageUrl } from "@/lib/fixImageUrl";
import { PostWithMeta } from "@tryghost/content-api";

interface PostCardProps {
  post: PostWithMeta;
}

function truncateWords(text?: string, maxWords?: number) {
  if (!text || !maxWords) return text;
  const words = text.split(" ");
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ") + "...";
}

export function PostCard({ post }: PostCardProps) {
  const feature_image_url = fixImageUrl(post.feature_image);
  const imageSrc =
    feature_image_url || "/images/weatherFeatureImageDefault.jpg";

  return (
    <Link
      href={`/posts/${post.slug}`}
      className="block h-[380px] md:h-[500px] overflow-hidden border border-border shadow-md"
    >
      <div className="bg-foreground-secondary h-full flex flex-col justify-start hover:bg-accent-dim/40 transition">
        <div className="relative w-full h-1/2 overflow-hidden">
          <Image
            src={imageSrc}
            alt={post.title || "Feature Image"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        <div className="py-2 px-6">
          {post.published_at && (
            <p className="text-xs text-muted-foreground mt-2">
              {new Date(post.published_at).toLocaleDateString("de-DE", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </p>
          )}

          <h2 className="text-lg font-semibold text-text mb-2 line-clamp-2 leading-snug">
            {truncateWords(post.title, 10)}
          </h2>

          {post.og_description && (
            <p className="text-sm text-text-muted leading-relaxed">
              {truncateWords(post.og_description, 20)}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
