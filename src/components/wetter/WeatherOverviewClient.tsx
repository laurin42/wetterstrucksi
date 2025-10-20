"use client";

import { useState } from "react";
import { CollapsibleSectionHeader } from "@/components/ui/CollabsibleSectionHeader";
import { PostCard } from "@/components/posts/PostCard";
import { PostWithMeta } from "@tryghost/admin-api";
import WeatherHero from "./WeatherHero";
import { PostCarousel } from "../posts/PostCarousel";

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
      <div key={key} className="mb-6">
        <CollapsibleSectionHeader
          title={title}
          isOpen={openSections[key]}
          onToggle={() => toggleSection(key)}
          isContentCollabsible={false}
        />

        {openSections[key] && (
          <div className="bg-foreground-secondary/44 md:pb-4 md:pt-2 md:mb-2">
            <div className="grid grid-cols-1 md:hidden px-1">
              {gridPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>

            <div className="hidden md:block">
              <PostCarousel posts={posts[key]} />
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="max-w-4xl md:max-w-6xl mx-auto">
      <WeatherHero />
      <div className="grid grid-cols-1 max-w-4xl md:max-w-6xl mx-auto">
        {renderPosts("vorhersagen", "Vorhersagen")}
        {renderPosts("updates", "Updates")}
        {renderPosts("rueckblicke", "Rückblicke")}
        {renderPosts("biowetter", "Biowetter")}
        {renderPosts("privates", "Privates")}
        {renderPosts("presseschau", "Presseschau")}
      </div>
    </section>
  );
}
