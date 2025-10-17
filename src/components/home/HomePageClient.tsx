"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HomeHero from "@/components/home/HomeHero";
import { PostWithMeta } from "@tryghost/content-api";
import { CollapsibleSectionHeader } from "../ui/CollabsibleSectionHeader";
import { PostCarousel } from "../posts/PostCarousel";
import { PostCard } from "@/components/posts/PostCard";
import { useMotionVariants } from "@/lib/animation/useMotionVariants";
import { useIsMobile } from "@/lib/useIsMobile";
import MorePostsLink from "../posts/MorePostsLink";
import { AboutShort } from "../about/AboutShort";
import DonateBox from "./Donation";

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

  const { sectionAnimation } = useMotionVariants();

  const normalizedPosts = posts.map((post) => ({
    ...post,
    id: post.id || post.uuid || crypto.randomUUID(),
  }));

  const isMobile = useIsMobile();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <motion.section
      variants={sectionAnimation}
      className="md:max-w-6xl mx-auto"
    >
      <HomeHero posts={normalizedPosts} />

      <CollapsibleSectionHeader
        title={isMobile ? "Weitere Beiträge" : "Neueste Beiträge"}
        isOpen={openSections.neusteBeitraege}
        onToggle={() => toggleSection("neusteBeitraege")}
        isContentCollabsible={false}
      />

      {openSections.neusteBeitraege && (
        <motion.div
          key="neusteBeitraege"
          className="md:bg-foreground/44 backdrop-blur-sm md:py-2 md:mb-4"
        >
          {normalizedPosts.length === 0 ? (
            <p className="text-muted-foreground px-4">
              Keine Beiträge gefunden.
            </p>
          ) : (
            <>
              {isMobile && (
                <motion.div className="grid grid-cols-1 px-0">
                  {normalizedPosts.slice(3, 9).map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </motion.div>
              )}

              {!isMobile && (
                <motion.div
                  variants={sectionAnimation}
                  className="hidden md:block"
                >
                  <PostCarousel posts={normalizedPosts.slice(0, 6)} />
                </motion.div>
              )}
              <div className="block md:hidden pt-8 pb-6 bg-foreground backdrop-blur-sm md:bg-transparent">
                <MorePostsLink
                  href="/weather"
                  label="weiterführende Artikel »"
                />
              </div>
            </>
          )}
        </motion.div>
      )}

      <div className="md:mt-4">
        <AboutShort />
      </div>

      <div className="md:mt-4">
        <DonateBox />
      </div>
    </motion.section>
  );
}
