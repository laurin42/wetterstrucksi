"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fixImageUrl } from "@/lib/posts/fixImageUrl";
import { PostWithMeta } from "@tryghost/content-api";
import { useMotionVariants } from "@/lib/animation/useMotionVariants";

interface PostCardMobileCarouselProps {
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

export function PostCardMobileCarousel({
  post,
  className,
  isNewest,
}: PostCardMobileCarouselProps) {
  const feature_image_url = fixImageUrl(post.feature_image);
  const imageSrc =
    feature_image_url || "/images/weatherFeatureImageDefault.webp";
  const { fadeInVariant } = useMotionVariants();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeInVariant}
      custom={{ y: 0, duration: 2.0 }}
      className={`
        rounded-lg
        overflow-hidden
        bg-foreground-secondary/44 backdrop-blur-sm
        shadow-md
        ${className}
  `}
    >
      <Link
        href={`/posts/${post.slug}`}
        className="
          group block w-full
          overflow-hidden transition-all duration-300
          hover:bg-header-background/60 active:scale-95 active:bg-accent
        "
      >
        <div className="relative w-full xxs:aspect-video xs:aspect-[8/6]">
          <Image
            src={imageSrc}
            alt={post.title || "Feature Image"}
            fill
            className="object-cover object-center transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20" />
          {isNewest && (
            <span className="absolute top-0 left-0 bg-accent text-text-white text-xs font-semibold px-2 py-1 rounded-br-md">
              Neuster Beitrag
            </span>
          )}
        </div>

        <div className="flex flex-col px-4 py-6 gap-1 min-h-0">
          <h2 className="text-lg sm:text-base font-semibold text-text line-clamp-1">
            {truncateWords(post.title, 10)}
          </h2>
          {post.og_description && (
            <p className="text-text xxs:line-clamp-3 xs:line-clamp-4">
              {truncateWords(post.og_description, 100)}
            </p>
          )}
          <span className="mt-2 font-thin text-2xl text-accent-dark tracking-wide hover:underline">
            Weiterlesen »
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
