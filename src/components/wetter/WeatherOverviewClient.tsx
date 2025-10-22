"use client";

import { CollapsibleSectionHeader } from "@/components/ui/CollabsibleSectionHeader";
import { PostCard } from "@/components/posts/PostCard";
import { PostWithMeta } from "@tryghost/content-api";
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
  const renderPosts = (key: keyof typeof posts, title: string) => {
    const gridPosts = posts[key].slice(0, 3);

    return (
      <div>
        <CollapsibleSectionHeader title={title} isContentCollabsible={false} />

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
