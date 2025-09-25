"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HomeHero from "@/components/home/HomeHero";
import { PostWithMeta } from "@tryghost/content-api";
import { PostCard } from "../posts/PostCard";
import { CollapsibleSectionHeader } from "../ui/CollabsibleSectionHeader";

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

  return (
    <motion.section className="max-w-4xl md:max-w-6xl mx-auto">
      <HomeHero />

      <AnimatePresence>
        <CollapsibleSectionHeader
          title="Neueste Beiträge"
          isOpen={openSections.neusteBeitraege}
          onToggle={() => toggleSection("neusteBeitraege")}
        />
        {openSections.neusteBeitraege && (
          <motion.div
            key="neusteBeitraege"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="p-8 py-4 bg-foreground-secondary/40"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {posts.length === 0 ? (
                <p className="text-muted-foreground">
                  Keine Beiträge gefunden.
                </p>
              ) : (
                posts.map((post) => (
                  <motion.div
                    key={post.id}
                    whileHover={{ scale: 1.02 }}
                    className="h-full"
                  >
                    <PostCard post={post} />
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
