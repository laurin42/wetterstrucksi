"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import HomeHero from "@/components/home/HomeHero";
import { PostWithMeta } from "@tryghost/content-api";
import { CollapsibleSectionHeader } from "../ui/CollabsibleSectionHeader";
import { PostCarousel } from "../posts/PostCarousel";
import { PostCard } from "@/components/posts/PostCard";
import { useIsMobile } from "@/lib/useIsMobile";
import { useMotionVariants } from "@/lib/animation/useMotionVariants";
import { AboutShort } from "../about/AboutShort";
import DonateBox from "./Donation";
import { Contact } from "../Contact";

interface HomePageClientProps {
  posts: PostWithMeta[];
}

export default function HomePageClient({ posts }: HomePageClientProps) {
  const [openSections, setOpenSections] = useState({
    neusteBeitraege: true,
  });

  const toggleSection = (key: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const normalizedPosts = posts.map((post) => ({
    ...post,
    id: post.id || post.uuid || crypto.randomUUID(),
  }));

  const [hydrated, setHydrated] = useState(false);

  const { fadeInVariant, containerVariants, viewportOnce } =
    useMotionVariants();

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <>
      <HomeHero posts={normalizedPosts} />
      <div className="md:max-w-6xl tablet-xs:pt-16 mx-auto">
        {openSections.neusteBeitraege && (
          <div key="neusteBeitraege">
            {normalizedPosts.length === 0 ? (
              <p className="text-muted-foreground px-4">
                Keine Beiträge gefunden.
              </p>
            ) : (
              <>
                <>
                  <CollapsibleSectionHeader
                    title={"Weitere Beiträge"}
                    isOpen={openSections.neusteBeitraege}
                    onToggle={() => toggleSection("neusteBeitraege")}
                    isContentCollabsible={false}
                  />

                  {normalizedPosts.slice(3, 9).map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </>

                <motion.div className="flex py-8 items-center justify-center tracking-wider text-lg bg-foreground backdrop-blur-sm md:bg-transparent">
                  <Link className="underline text-accent-dark" href="/wetter">
                    Alle Beiträge entdecken »
                  </Link>
                </motion.div>
              </>
            )}
          </div>
        )}

        <div className="md:mt-4">
          <AboutShort />
        </div>

        <div className="md:mt-4">
          <DonateBox />
        </div>

        <div className="md:mt-4">
          <Contact />
        </div>
      </div>
    </>
  );
}
