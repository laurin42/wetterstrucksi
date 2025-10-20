import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fixImageUrl } from "@/lib/posts/fixImageUrl";
import { PostWithMeta } from "@tryghost/content-api";
import { useMotionVariants } from "@/lib/animation/useMotionVariants";

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

export function PostCard({ post, className, isNewest }: PostCardProps) {
  const feature_image_url = fixImageUrl(post.feature_image);
  const imageSrc =
    feature_image_url || "/images/weatherFeatureImageDefault.jpg";

  const { sectionAnimation, viewportOnce } = useMotionVariants();

  return (
    <motion.div
      viewport={viewportOnce}
      initial="hidden"
      whileInView="visible"
      variants={sectionAnimation}
      className={`block md:flex md:flex-col md:aspect-[3/4] w-full  ... ${className}`}
    >
      <Link
        href={`/posts/${post.slug}`}
        className="block w-full overflow-hidden bg-foreground 
             transition-all duration-420 hover:bg-header-background/60 hover h-full"
      >
        <motion.div className="hidden md:block relative w-full h-72 aspect-[16/9] overflow-hidden items-stretch">
          <Image
            src={imageSrc}
            alt={post.title || "Feature Image"}
            fill
            className="object-cover object-center transition-transform duration-500"
          />

          <div className="absolute inset-0 bg-black/10">
            {isNewest && (
              <span className="absolute top-0 left-0 bg-accent text-text-white text-xs font-semibold px-2 py-1 rounded-br-md">
                Neuster Beitrag
              </span>
            )}
          </div>
        </motion.div>

        <div className="flex flex-row md:flex-col gap-4 px-4 py-4 md:p-5 h-full">
          <div className="flex-1 flex flex-col justify-start">
            {post.published_at && (
              <p className="text-xs text-text-foreground mb-1 font-semibold md:font-thin">
                {new Date(post.published_at).toLocaleDateString("de-DE", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            )}

            <h2 className="text-base text-text mb-2 line-clamp-2 leading-snug md:text-lg font-bold">
              {truncateWords(post.title, 12)}
            </h2>

            {post.og_description && (
              <motion.p className="md:text-sm text-text line-clamp-3 md:line-clamp-3 md:font-normal">
                {truncateWords(post.og_description, 20)}
              </motion.p>
            )}
          </div>

          <motion.div className="w-24 md:w-full h-24 md:h-auto my-auto relative flex-shrink-0">
            <Image
              src={imageSrc}
              alt={post.title || "Feature Image"}
              fill
              className="object-cover rounded-md"
              sizes="(max-width: 768px) 6rem, 33vw"
              loading="lazy"
            />
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}
