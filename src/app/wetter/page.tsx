import { WeatherOverviewClient } from "@/components/wetter/WeatherOverviewClient";
import { getNewestPostsWithTags } from "../api/posts/getPostsWithMeta";
import { Suspense } from "react";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

export default async function WeatherOverviewPage() {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex h-screen w-full flex-col justify-center items-center">
            <LoadingSpinner />
          </div>
        }
      >
        <WeatherContentFetcher />
      </Suspense>
    </>
  );
}

async function WeatherContentFetcher() {
  const rueckblicke = await getNewestPostsWithTags("rueckblick");
  const updates = await getNewestPostsWithTags([
    "warnlage",
    "warntrend",
    "live-ticker-zu-unwetterlagen",
  ]);
  const wetter = await getNewestPostsWithTags([
    "wetter",
    "aktuelles-wetter",
    "wetterprognose",
    "wetter-kurz-und-kompakt",
    "wetteraussichten",
    "aussichten",
    "biowetter",
    "mittelfrist",
    "monats-aussichten",
    "astronomisches",
  ]);
  const presseschau = await getNewestPostsWithTags([
    "presseschau",
    "studien",
    "spekulatives",
    "situation",
  ]);
  const privates = await getNewestPostsWithTags(["privates", "allgemein"]);

  const posts = {
    rueckblicke,
    updates,
    wetter,
    presseschau,
    privates,
  };

  return (
    <>
      <WeatherOverviewClient posts={posts} />
    </>
  );
}
