import React from "react";
import Link from "next/link";
import Image from "next/image";
import { fixImageUrl } from "@/lib/posts/fixImageUrl";
import { PostWithMeta } from "@tryghost/content-api";

interface PostCardProps {
  post: PostWithMeta;
  className?: string;
  isNewest?: boolean;
}

function truncateWords(text?: string, maxWords?: number) {
  if (!text || !maxWords) return text;
  const words = text.split(" ");
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ") + "...";
}

export function PostCard({ post, isNewest }: PostCardProps) {
  const href = post.slug ? `/posts/${post.slug}` : "#";

  const imageSrc = fixImageUrl(post.feature_image);

  return (
    <div className="block group hover:bg-header-background/40 transition duration-240 w-full bg-foreground-secondary/44 py-2">
      <Link
        href={href}
        className="block overflow-hidden transition-transform duration-240 active:bg-accent/20"
      >
        <div className="flex flex-col px-4 md:pl-8 py-2 md:py-4 h-full">
          <div className="flex md:pr-8 h-full">
            <div className="... will-change-transform transition-all duration-300 ease-out group-hover:translate-y-[-2px] group-hover:opacity-90">
              {post.published_at && (
                <p className="w-fit border-b-[1px] border-header-background/60 text-xs text-text-foreground mb-1 font-semibold md:font-thin  ">
                  {new Date(post.published_at).toLocaleDateString("de-DE", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              )}

              <h2 className="text-base text-text mb-2 line-clamp-3 md:line-clamp-1 leading-snug md:text-lg font-bold">
                {truncateWords(post.title, 20)}
              </h2>

              {post.og_description && (
                <p className="md:text-sm text-text line-clamp-3 md:line-clamp-8 md:font-normal tablet-xs:max-w-6/8">
                  {truncateWords(post.meta_description, 120)}
                </p>
              )}
            </div>
            {imageSrc && (
              <div className="w-24 h-24 tablet-xs:w-32 tablet-xs:h-32 md:w-42 md:h-42 my-auto relative flex-shrink-0 group-hover:scale-104 transition duration-300 ease-in">
                <Image
                  src={imageSrc}
                  overrideSrc={imageSrc}
                  alt={post.title || "Feature Image"}
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 6rem, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-md bg-black/10">
                  {isNewest && (
                    <span className="absolute top-0 left-0 bg-accent text-text-white text-xs font-semibold px-2 py-1 rounded-br-md">
                      Neuster Beitrag
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
