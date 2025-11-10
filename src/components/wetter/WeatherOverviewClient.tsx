"use client";

import { Suspense, lazy, memo } from "react";
import { CollapsibleSectionHeader } from "@/components/ui/CollabsibleSectionHeader";
import { PostWithMeta } from "@tryghost/content-api";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

const WeatherHero = lazy(() => import("./WeatherHero"));
const PostCard = lazy(() => import("@/components/posts/PostCard"));

interface WeatherOverviewClientProps {
  posts: {
    rueckblicke: PostWithMeta[];
    updates: PostWithMeta[];
    wetter: PostWithMeta[];
    privates: PostWithMeta[];
    presseschau: PostWithMeta[];
  };
}

const PostsGrid = memo(
  ({ posts, title }: { posts: PostWithMeta[]; title: string }) => {
    const gridPosts = posts.slice(0, 3);

    return (
      <div>
        <CollapsibleSectionHeader title={title} isContentCollabsible={false} />
        <div className="bg-foreground-secondary/44">
          <div className="grid grid-cols-1">
            {gridPosts.map((post) => (
              <Suspense
                key={post.id}
                fallback={
                  <div className="h-24 w-full animate-pulse bg-muted" />
                }
              >
                <PostCard post={post} />
              </Suspense>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

export function WeatherOverviewClient({ posts }: WeatherOverviewClientProps) {
  return (
    <section className="max-w-4xl md:max-w-6xl mx-auto tablet:pt-12 tablet-xs:px-2 tablet-xs:pb-16">
      <Suspense fallback={<LoadingSpinner />}>
        <WeatherHero />
      </Suspense>

      <div className="grid grid-cols-1 tablet-xs:gap-y-2 max-w-4xl md:max-w-6xl mx-auto">
        <PostsGrid posts={posts.wetter} title="Vorhersagen" />
        <PostsGrid posts={posts.updates} title="Updates & Warnungen" />
        <PostsGrid posts={posts.rueckblicke} title="Rückblicke" />
        <PostsGrid posts={posts.presseschau} title="Presseschau & Studien" />
        <PostsGrid posts={posts.privates} title="Privates" />
      </div>
    </section>
  );
}
