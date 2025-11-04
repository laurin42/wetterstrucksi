"use client";

import { CollapsibleSectionHeader } from "@/components/ui/CollabsibleSectionHeader";
import { PostCard } from "@/components/posts/PostCard";
import { PostWithMeta } from "@tryghost/content-api";
import WeatherHero from "./WeatherHero";

interface WeatherOverviewClientProps {
  posts: {
    rueckblicke: PostWithMeta[];
    updates: PostWithMeta[];
    wetter: PostWithMeta[];
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
        <div className="bg-foreground-secondary/44">
          <div className="grid grid-cols-1">
            {gridPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="max-w-4xl md:max-w-6xl mx-auto tablet:pt-12 tablet-xs:px-2 tablet-xs:pb-16">
      <WeatherHero />
      <div className="grid grid-cols-1 tablet-xs:gap-y-2 max-w-4xl md:max-w-6xl mx-auto">
        {renderPosts("wetter", "Vorhersagen")}
        {renderPosts("updates", "Updates & Warnungen")}
        {renderPosts("rueckblicke", "Rückblicke")}
        {renderPosts("presseschau", "Presseschau & Studien")}
        {renderPosts("privates", "Privates")}
      </div>
    </section>
  );
}
