"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PostCard } from "@/components/posts/PostCard";
import { PostWithMeta } from "@tryghost/content-api";
import ArchiveHero from "./ArchiveHero";
import { Sidebar } from "@/components/Sidebar";

interface ArchivePageProps {
  posts: {
    rueckblicke: PostWithMeta[];
    updates: PostWithMeta[];
    vorhersagen: PostWithMeta[];
    biowetter: PostWithMeta[];
    privates: PostWithMeta[];
    presseschau: PostWithMeta[];
  };
}

type CategoryKey =
  | "rueckblicke"
  | "updates"
  | "vorhersagen"
  | "biowetter"
  | "privates"
  | "presseschau";

type SortOrder = "newest" | "oldest";

export function ArchiveOverviewClient({ posts }: ArchivePageProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey | null>(
    null
  );
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");

  const categories: Record<CategoryKey, string> = {
    vorhersagen: "Vorhersagen",
    updates: "Updates",
    rueckblicke: "Rückblicke",
    biowetter: "Biowetter",
    privates: "Privates",
    presseschau: "Presseschau",
  };

  const allPosts = Object.entries(posts).flatMap(([cat, arr]) =>
    arr.map((p) => ({ ...p, category: cat as CategoryKey }))
  );

  let filtered = selectedCategory
    ? allPosts.filter((p) => p.category === selectedCategory)
    : allPosts;

  filtered = filtered.sort((a, b) => {
    const timeA = new Date(a.published_at).getTime();
    const timeB = new Date(b.published_at).getTime();
    return sortOrder === "newest" ? timeB - timeA : timeA - timeB;
  });

  return (
    <>
      {" "}
      <ArchiveHero />
      <motion.section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <Sidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onCategorySelect={(cat) =>
              setSelectedCategory(cat as CategoryKey | null)
            }
            sortOrder={sortOrder}
            onSortChange={setSortOrder}
          />
        </div>

        <div className="md:col-span-3 grid md:grid-cols-3 gap-4">
          {filtered.map((post) => (
            <motion.div key={post.id}>
              <PostCard post={post} />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
