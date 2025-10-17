"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fixImageUrl } from "@/lib/posts/fixImageUrl";
import { PostWithMeta } from "@tryghost/admin-api";
import { useMotionVariants } from "@/lib/animation/useMotionVariants";

interface PostCardMobileCarouselProps {
  post: PostWithMeta;
  className?: string;
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
}: PostCardMobileCarouselProps) {
  const feature_image_url = fixImageUrl(post.feature_image);
  const imageSrc =
    feature_image_url || "/images/weatherFeatureImageDefault.jpg";
  const { fadeInVariant } = useMotionVariants();

  return (
    <motion.div
      variants={fadeInVariant}
      className={`
    mx-2
    w-[80vw] xs:w-[70vw] sm:w-[66vw]
    flex-shrink-0
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
    hover:bg-header-background/60
  "
      >
        <div className="relative w-full postcard-aspect carousel-padding">
          <Image
            src={imageSrc}
            alt={post.title || "Feature Image"}
            fill
            className="object-cover object-center transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="flex flex-col p-3 gap-1 min-h-0">
          <h2 className="text-lg sm:text-base font-semibold text-text line-clamp-1">
            {truncateWords(post.title, 10)}
          </h2>
          {post.og_description && (
            <p className="text-text line-clamp-3">
              {truncateWords(post.og_description, 15)}
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
