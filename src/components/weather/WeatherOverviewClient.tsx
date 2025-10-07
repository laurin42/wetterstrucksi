"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CollapsibleSectionHeader } from "@/components/ui/CollabsibleSectionHeader";
import { PostCard } from "@/components/posts/PostCard";
import { PostWithMeta } from "@tryghost/content-api";
import WeatherHero from "./WeatherHero";
import { CategoryCarousel } from "../ui/CategoryCarousel";

interface WeatherOverviewClientProps {
  posts: {
    rueckblicke: PostWithMeta[];
    updates: PostWithMeta[];
    vorhersagen: PostWithMeta[];
    biowetter: PostWithMeta[];
    privates: PostWithMeta[];
    presseschau: PostWithMeta[];
  };
}

export function WeatherOverviewClient({ posts }: WeatherOverviewClientProps) {
  const [openSections, setOpenSections] = useState({
    vorhersagen: true,
    updates: true,
    rueckblicke: true,
    biowetter: true,
    privates: true,
    presseschau: true,
  });

  const toggleSection = (key: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const renderPosts = (key: keyof typeof posts, title: string) => {
    const gridPosts = posts[key].slice(0, 3);

    return (
      <>
        <CollapsibleSectionHeader
          title={title}
          isOpen={openSections[key]}
          onToggle={() => toggleSection(key)}
          isContentCollabsible={false}
        />
        <AnimatePresence initial={false}>
          {openSections[key] && (
            <motion.div
              key={key}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-foreground-secondary/44 pb-2 pt-2 md:pb-4 md:mb-2"
            >
              <div className="grid grid-cols-1 px-1 md:hidden">
                {gridPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>

              <div className="hidden md:block">
                <CategoryCarousel posts={posts[key]} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  };

  return (
    <motion.section className="max-w-4xl md:max-w-6xl mx-auto">
      <WeatherHero />
      <motion.section className="max-w-4xl md:max-w-6xl mx-auto grid grid-cols-1">
        {renderPosts("vorhersagen", "Vorhersagen")}
        {renderPosts("updates", "Updates")}
        {renderPosts("rueckblicke", "Rückblicke")}
        {renderPosts("biowetter", "Biowetter")}
        {renderPosts("privates", "Privates")}
        {renderPosts("presseschau", "Presseschau")}
      </motion.section>
    </motion.section>
  );
}
