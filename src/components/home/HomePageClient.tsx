"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HomeHero from "@/components/home/HomeHero";
import { PostWithMeta } from "@tryghost/content-api";
import { CollapsibleSectionHeader } from "../ui/CollabsibleSectionHeader";
import { CategoryCarousel } from "../ui/CategoryCarousel";
import { PostCard } from "@/components/posts/PostCard";
import { useMotionVariants } from "@/lib/useMotionVariants";

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

  const { containerVariants, fadeInVariant } = useMotionVariants();

  return (
    <motion.section className="max-w-4xl md:max-w-6xl mx-auto">
      <HomeHero />

      <AnimatePresence>
        <CollapsibleSectionHeader
          title="Neueste Beiträge"
          isOpen={openSections.neusteBeitraege}
          onToggle={() => toggleSection("neusteBeitraege")}
          isContentCollabsible={false}
        />

        {openSections.neusteBeitraege && (
          <motion.div
            key="neusteBeitraege"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="bg-foreground-secondary/44 pb-4 pt-2"
          >
            {posts.length === 0 ? (
              <p className="text-muted-foreground px-4">
                Keine Beiträge gefunden.
              </p>
            ) : (
              <>
                <motion.div className="grid grid-cols-1 px-1 md:hidden">
                  {posts.slice(0, 6).map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </motion.div>

                <div className="hidden md:block">
                  <CategoryCarousel posts={posts.slice(0, 9)} />
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
