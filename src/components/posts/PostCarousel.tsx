"use client";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import type { EmblaCarouselType } from "embla-carousel";
import { useCallback, useEffect, useState } from "react";
import { PostWithMeta } from "@tryghost/content-api";
import { PostCardMobileCarousel } from "@/components/posts/PostCardMobileCarousel";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

interface PostCarouselProps {
  posts: PostWithMeta[];
  isNewest?: boolean;
}

export function PostCarousel({ posts }: PostCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: false },
    [WheelGesturesPlugin()]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

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
    <div className="relative flex flex-col items-center">
      <div
        ref={emblaRef}
        className="overflow-hidden cursor-grab md:px-1 w-full"
      >
        <div className="flex touch-pan-y">
          {normalizedPosts.map((post, index) => (
            <div
              key={post.id}
              className="flex-shrink-0 px-4 tablet-xs:px-2 w-full flex justify-center"
            >
              <PostCardMobileCarousel
                post={post}
                className="flex-1"
                isNewest={index === 0}
              />
            </div>
          ))}
        </div>
        <div className="hidden landscape:hidden tablet-xs:flex absolute w-full top-74 justify-between mt-4">
          <button
            onClick={scrollPrev}
            className="absolute left-6 tablet-xs:relative group text-text-white/80 "
            aria-label="Previous"
          >
            <MdChevronLeft className="group-hover:text-header-background active:text-header-background cursor-pointer hover:scale-140 transition-transform duration-300 text-6xl" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-8 tablet-xs:relative group text-text-white/80 "
            aria-label="Next"
          >
            <MdChevronRight className="group-hover:text-header-background active:text-header-background cursor-pointer hover:scale-140 transition-transform duration-300 text-6xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
