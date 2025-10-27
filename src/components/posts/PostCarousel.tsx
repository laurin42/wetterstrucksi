"use client";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import type { EmblaCarouselType } from "embla-carousel";
import { useCallback, useEffect, useState } from "react";
import { PostWithMeta } from "@tryghost/content-api";
import { PostCard } from "@/components/posts/PostCard";
import { PostCardMobileCarousel } from "@/components/posts/PostCardMobileCarousel";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import clsx from "clsx";

interface PostCarouselProps {
  posts: PostWithMeta[];
  className?: string;
  isNewest?: boolean;
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

  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [isMobile, emblaApi]);

  return (
    <>
      {" "}
      <div className="relative">
        <div ref={emblaRef} className="overflow-hidden cursor-grab md:px-1">
          <div className="flex">
            {normalizedPosts.map((post, index) => (
              <div
                key={post.id}
                className="flex-shrink-0 w-2/3 tablet-xs:w-2/6 tablet-xs:px-1 mx-auto flex justify-center"
              >
                <PostCardMobileCarousel
                  post={post}
                  className="flex-1"
                  isNewest={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
