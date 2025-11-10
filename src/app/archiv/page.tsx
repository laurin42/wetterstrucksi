import { ArchiveOverviewClient } from "@/components/archiv/ArchiveOverviewClient";
import { getAllPostsWithTags } from "@/app/api/posts/getPostsWithMeta";
import { Suspense } from "react";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

export default async function ArchiveOverviewPage() {
  return (
    <main>
      <Suspense
        fallback={
          <div className="flex h-screen w-full flex-col justify-center items-center">
            <LoadingSpinner />
          </div>
        }
      >
        <ArchivePostFetcher />
      </Suspense>
    </main>
  );
}

async function ArchivePostFetcher() {
  const allPosts = await getAllPostsWithTags([
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
    "studien",
  ]);

  return <ArchiveOverviewClient posts={allPosts} />;
}
