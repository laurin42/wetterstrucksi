"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import HomeHero from "@/components/home/HomeHero";
import { PostWithMeta } from "@tryghost/content-api";
import { CollapsibleSectionHeader } from "../ui/CollabsibleSectionHeader";
import { PostCard } from "@/components/posts/PostCard";
import { AboutShort } from "../about/AboutShort";
import DonateBox from "./Donation";
import { Contact } from "../Contact";

interface HomePageClientProps {
  posts: PostWithMeta[];
}

export default function HomePageClient({ posts }: HomePageClientProps) {
  const normalizedPosts = posts.map((post) => ({
    ...post,
    id: post.id || post.uuid || crypto.randomUUID(),
  }));

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <>
      <HomeHero posts={normalizedPosts} />
      <div className="md:max-w-6xl tablet:py-16 mx-auto 0">
        <div key="neusteBeitraege">
          <CollapsibleSectionHeader
            title={"Weitere Beiträge"}
            isContentCollabsible={false}
          />
          <>
            {normalizedPosts.slice(3, 9).map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </>

          <div className="flex py-12 items-center justify-center tracking-wider text-lg bg-foreground backdrop-blur-sm md:bg-transparent">
            <Link className="underline text-accent-dark" href="/wetter">
              Alle Beiträge entdecken »
            </Link>
          </div>
        </div>

        <div className="md:mt-4 landscape-no-margin">
          <AboutShort />
        </div>

        <div className="md:mt-4 landscape-no-margin">
          <DonateBox />
        </div>

        <div className="md:mt-4 landscape-no-margin">
          <Contact />
        </div>
      </div>
    </>
  );
}
