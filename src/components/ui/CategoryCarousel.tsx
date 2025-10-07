"use client";

import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import type { EmblaCarouselType } from "embla-carousel";
import { useCallback, useEffect, useState } from "react";
import { PostWithMeta } from "@tryghost/content-api";
import { PostCard } from "@/components/posts/PostCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function chunkArray<T>(arr: T[], chunkSize: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
}

interface CategoryCarouselProps {
  posts: PostWithMeta[];
}

export function CategoryCarousel({ posts }: CategoryCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: "start",
      dragFree: true,
    },
    [WheelGesturesPlugin()]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
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

  const slides = chunkArray(posts, 3);

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden cursor-grab">
        <div className="flex">
          {slides.map((group, index) => (
            <div key={index} className="flex w-full px-7 py-2">
              {group.map((post) => (
                <div key={post.id} className="w-1/3">
                  <PostCard post={post} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        aria-label="Vorheriger Beitrag"
        className="hidden md:flex absolute -left-32 top-1/2 -translate-y-1/2"
      >
        <MdChevronLeft
          size={64}
          className="text-text-white-transparent hover:text-accent/40 hover:cursor-pointer hover:scale-116 transition duration-420"
        />
      </button>

      <button
        onClick={scrollNext}
        aria-label="Nächster Beitrag"
        className="hidden md:flex absolute -right-32 top-1/2 -translate-y-1/2"
      >
        <MdChevronRight
          size={64}
          className="text-text-white-transparent hover:text-accent/40 hover:cursor-pointer hover:scale-116 transition duration-420"
        />
      </button>

      <div className="hidden md:flex justify-center mt-4 space-x-2">
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
    </div>
  );
}
