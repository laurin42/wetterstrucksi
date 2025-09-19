import React from "react";
import Link from "next/link";
import Image from "next/image";
import { fixImageUrl } from "@/lib/fixImageUrl";
import { PostWithMeta } from "@tryghost/admin-api";

function truncateWords(text?: string, maxWords?: number) {
  if (!text || !maxWords) return text;
  const words = text.split(" ");
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ") + "...";
}

export function PostCard({ post }: { post: PostWithMeta }) {
  const feature_image_url = fixImageUrl(post.feature_image);
  const imageSrc =
    feature_image_url || "/images/weatherFeatureImageDefault.jpg";

  return (
    <Link
      href={`/posts/${post.slug}`}
      className="block h-[500px] rounded-lg overflow-hidden border border-border shadow-md"
    >
      <div className="relative w-full h-1/2 overflow-hidden">
        <Image
          src={imageSrc}
          alt={post.title || "Feature Image"}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          loading="lazy"
        />
      </div>

      <div className="bg-foreground-secondary h-full p-4 flex flex-col justify-items-end hover:bg-accent-dim transition">
        <div>
          <p className="text-xs text-muted-foreground mb-1">
            {new Date(post.published_at).toLocaleDateString("de-DE", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </p>
          <h2 className="text-lg font-semibold text-text mb-1 line-clamp-2 leading-snug">
            {truncateWords(post.title, 10)}
          </h2>
          {post.plaintext && (
            <p className="text-sm text-text-muted line-clamp-3 leading-relaxed">
              {truncateWords(post.plaintext, 40)}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
