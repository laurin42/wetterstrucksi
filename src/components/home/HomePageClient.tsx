"use client";

import { useState, useEffect } from "react";
import HomeHero from "@/components/home/HomeHero";
import { PostWithMeta } from "@tryghost/content-api";
import { CollapsibleSectionHeader } from "../ui/CollabsibleSectionHeader";
import { PostCard } from "@/components/posts/PostCard";
import { AboutShort } from "../home/AboutShort";
import DonateBox from "../home/Donation";
import { ContactCta } from "../kontakt/ContactCta";

interface HomePageClientProps {
  posts: PostWithMeta[];
}

export default function HomePageClient({ posts }: HomePageClientProps) {
  const [visibleCount, setVisibleCount] = useState(6);
  const normalizedPosts = posts.map((post) => ({
    ...post,
    id: post.id || post.uuid || crypto.randomUUID(),
  }));

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <>
      <HomeHero posts={normalizedPosts} />
      <div className="md:max-w-6xl tablet:pt-16 pb-24 mx-auto 0">
        <div key="neusteBeitraege">
          <CollapsibleSectionHeader
            title={"Weitere Beiträge"}
            isContentCollabsible={false}
          />
          <>
            {normalizedPosts.slice(3, 3 + visibleCount).map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </>

          <div className="flex py-4 items-center justify-center tracking-wider text-lg bg-foreground-secondary/44 backdrop-blur-sm md:transparent">
            <button
              onClick={handleLoadMore}
              className="underline text-accent-dark cursor-pointer hover:text-accent/80"
            >
              Mehr Beiträge laden ▾
            </button>
          </div>
        </div>

        <div className="md:mt-8 landscape-no-margin">
          <AboutShort />
        </div>

        <div className="md:mt-8 landscape-no-margin">
          <DonateBox />
        </div>

        <div className="md:mt-8 landscape-no-margin">
          <ContactCta />
        </div>
      </div>
    </>
  );
}
