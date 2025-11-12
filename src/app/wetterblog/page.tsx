import { WetterblogClient } from "@/components/wetterblog/WetterblogClient";
import { getAllPostsWithTags } from "@/app/api/posts/getPostsWithMeta";
import { Suspense } from "react";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

export default async function WetterblogPage() {
  return (
    <main>
      <Suspense
        fallback={
          <div className="flex h-screen w-full flex-col justify-center items-center">
            <LoadingSpinner />
          </div>
        }
      >
        <WetterblogPostFetcher />
      </Suspense>
    </main>
  );
}

async function WetterblogPostFetcher() {
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

  return <WetterblogClient posts={allPosts} />;
}
