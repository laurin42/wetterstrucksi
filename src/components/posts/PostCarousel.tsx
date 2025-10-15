"use client";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import type { EmblaCarouselType } from "embla-carousel";
import { useCallback, useEffect, useState } from "react";
import { PostWithMeta } from "@tryghost/content-api";
import { PostCard } from "@/components/posts/PostCard";
import { PostCardMobileCarousel } from "@/components/posts/PostCardMobileCarousel";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import clsx from "clsx";
import { useMotionVariants } from "@/lib/animation/useMotionVariants";

interface PostCarouselProps {
  posts: PostWithMeta[];
  className?: string;
}

export function PostCarousel({ posts, className }: PostCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: false,
    },
    [WheelGesturesPlugin()]
  );

  const { sectionAnimation, containerVariants } = useMotionVariants();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  const normalizedPosts = posts.map((post) => ({
    ...post,
    id: post.id || post.uuid || crypto.randomUUID(),
  }));

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", () => onSelect(emblaApi));
    emblaApi.on("reInit", () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi, onSelect]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      className={clsx("relative", className)}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionAnimation}
        ref={emblaRef}
        className="overflow-hidden cursor-grab"
      >
        <div className="flex">
          {normalizedPosts.map((post) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={sectionAnimation}
              key={post.id}
              className={clsx(
                "flex-shrink-0 px-1",
                isMobile ? "w-full flex justify-center" : "w-1/3"
              )}
            >
              {isMobile ? (
                <PostCardMobileCarousel post={post} className="mx-auto" />
              ) : (
                <PostCard post={post} />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <button
        onClick={scrollPrev}
        aria-label="Vorheriger Beitrag"
        className="absolute md:-left-12 left-0 top-1/2 z-10"
      >
        <MdChevronLeft
          size={48}
          className="text-text-white-transparent hover:text-accent/40 hover:cursor-pointer hover:scale-110 transition duration-300"
        />
      </button>

      <button
        onClick={scrollNext}
        aria-label="Nächster Beitrag"
        className="absolute md:-right-12 right-0 top-1/2  z-10"
      >
        <MdChevronRight
          size={48}
          className="text-text-white-transparent hover:text-accent/40 hover:cursor-pointer hover:scale-110 transition duration-300"
        />
      </button>

      {!isMobile && (
        <div className="flex justify-center mt-8 space-x-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`cursor-pointer w-3 h-3 rounded-full transition-colors duration-300 ${
                index === selectedIndex
                  ? "bg-accent"
                  : "bg-muted hover:bg-accent/60"
              }`}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}
