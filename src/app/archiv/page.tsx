import { ArchiveOverviewClient } from "@/components/archive/ArchiveOverviewClient";
import { getAllPostsWithTags } from "@/app/api/posts/getPostsWithMeta";
import { PostWithMeta } from "@tryghost/content-api";
import { Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

export default async function ArchiveOverviewPage() {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex h-screen w-full flex-col justify-center items-center">
            <LoadingSpinner />
          </div>
        }
      >
        <ArchivePostFetcher />
      </Suspense>
    </>
  );
}

async function ArchivePostFetcher() {
  let allPosts: PostWithMeta[] = await getAllPostsWithTags([
    "wetter",
    "aktuelles-wetter",
    "wetterprognose",
    "wetter-kurz-und-kompakt",
    "wetteraussichten",
    "biowetter",
    "mittelfrist",
    "monats-aussichten",
    "presseschau",
    "privates",
    "warntrend",
    "warnlage",
    "spekulatives",
    "rückblick",
    "aussichten",
    "allgemein",
    "astronomisches",
    "live-ticker-zu-unwetterlagen",
    "mittelfrist",
    "monats-aussichten",
    "studien",
  ]);
  return <ArchiveOverviewClient posts={allPosts} />;
}
