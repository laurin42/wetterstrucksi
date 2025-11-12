"use client";

import { useState, useEffect } from "react";
import HomeHero from "@/components/home/HomeHero";
import { PostWithMeta } from "@tryghost/content-api";
import { AboutShort } from "../home/AboutShort";
import DonateBox from "../home/Donation";
import { ContactCta } from "../kontakt/ContactCta";

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
      <AboutShort />
      <DonateBox />
      <ContactCta />
    </>
  );
}
