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

  const isMobile = useIsMobile();
  const [hydrated, setHydrated] = useState(false);

  const { fadeInVariant, containerVariants, viewportOnce } =
    useMotionVariants();

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <section className="md:max-w-6xl mx-auto">
      <HomeHero posts={normalizedPosts} />

      {openSections.neusteBeitraege && (
        <div
          key="neusteBeitraege"
          className="md:bg-foreground-secondary/44 backdrop-blur-sm md:py-2 md:mb-4"
        >
          {normalizedPosts.length === 0 ? (
            <p className="text-muted-foreground px-4">
              Keine Beiträge gefunden.
            </p>
          ) : (
            <>
              {isMobile && (
                <>
                  <CollapsibleSectionHeader
                    title={isMobile ? "Weitere Beiträge" : "Neueste Beiträge"}
                    isOpen={openSections.neusteBeitraege}
                    onToggle={() => toggleSection("neusteBeitraege")}
                    isContentCollabsible={false}
                  />
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="grid grid-cols-1 px-0 md:grid-cols-3 md:gap-2"
                  >
                    {normalizedPosts.slice(3, 9).map((post) => (
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        variants={fadeInVariant}
                        custom={{ y: 0, duration: 0.8 }}
                        key={post.id}
                      >
                        <PostCard post={post} />
                      </motion.div>
                    ))}
                  </motion.div>
                </>
              )}

              {!isMobile && (
                <div className="hidden md:block home-hero-carousel">
                  <PostCarousel posts={normalizedPosts.slice(0, 6)} />
                </div>
              )}
              <motion.div className="flex md:hidden py-8 items-center justify-center tracking-wider text-lg bg-foreground backdrop-blur-sm md:bg-transparent">
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
    </section>
  );
}
