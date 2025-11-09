"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fixImageUrl } from "@/lib/posts/fixImageUrl";
import { PostWithMeta } from "@tryghost/content-api";
import { useMotionVariants } from "@/lib/animation/useMotionVariants";

interface CarouselPostCardProps {
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

export function CarouselPostCard({
  post,
  className,
  isNewest,
}: CarouselPostCardProps) {
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
        group
        active:scale-98
        transition-all duration-300
        rounded-lg tablet-xs:rounded-lg
        overflow-hidden
        bg-foreground-secondary/88 backdrop-blur-sm
        shadow-md
        w-full max-w-[200px] xxxs:max-w-[16rem] xxs:max-w-xs xxs:h-auto  xs:max-w-xs sm:max-w-sm tablet-xs:max-w-xs tablet:max-w-sm 
        max-h-30/32
        landscapeCard
        mx-auto shrink-0
        ${className}
      `}
    >
      <Link
        href={`/posts/${post.slug}`}
        className="
          group block w-full h-full pb-2
          overflow-hidden transition-all duration-300
          hover:bg-header-background/60 active:bg-accent
        "
      >
        <div className="relative w-full aspect-5/6 landscape:aspect-square xxs:aspect-video xs:aspect-8/6">
          <Image
            src={imageSrc}
            alt={post.title || "Feature Image"}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            priority
            className="object-cover object-center transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20" />
          {isNewest && (
            <span className="absolute top-0 right-0 bg-header-background text-text-white text-md font-semibold p-1 rounded-bl-lg rounded-tr-lg">
              Neuester Beitrag
            </span>
          )}
        </div>
        <div className="flex flex-col justify-between px-4 py-4 landscape:py-2  gap-1 min-h-0">
          {post.published_at && (
            <div className="hidden xs:block">
              <p className="w-fit border-b border-header-background/80 text-xs text-text-foreground mb-1 font-semibold md:font-thin  ">
                {new Date(post.published_at).toLocaleDateString("de-DE", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>
          )}
          <div className="hidden xxs:block">
            <h2 className="text-lg sm:text-base font-semibold text-text line-clamp-1">
              {truncateWords(post.title, 16)}
            </h2>
          </div>

          {post.og_description && (
            <div className="hidden xs:block">
              <p className="text-text xs:line-clamp-2 sm:line-clamp-4">
                {truncateWords(post.og_description, 100)}
              </p>
              <div className="pt-4 pb-4 tablet-xs:pb-8 tablet-xs:pt-2">
                <span className="group mt-0 xs:mt-2 font-thin text-2xl text-accent-dark hover:text-text-white/60 tracking-wide hover:scale-101 transition-all duration-160 ease-in-out">
                  Weiterlesen »
                </span>
              </div>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
