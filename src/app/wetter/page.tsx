import { WeatherOverviewClient } from "@/components/wetter/WeatherOverviewClient";
import { getNewestPostsWithTags } from "../api/posts/getPostsWithMeta";
import { Suspense } from "react";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

export default async function WeatherOverviewPage() {
  return (
    <main>
      <Suspense
        fallback={
          <div className="flex h-screen w-full flex-col justify-center items-center">
            <LoadingSpinner />
          </div>
        }
      >
        <WeatherContentFetcher />
      </Suspense>
    </main>
  );
}

async function WeatherContentFetcher() {
  const [rueckblicke, updates, wetter, presseschau, privates] =
    await Promise.all([
      getNewestPostsWithTags("rueckblick"),
      getNewestPostsWithTags([
        "warnlage",
        "warntrend",
        "live-ticker-zu-unwetterlagen",
      ]),
      getNewestPostsWithTags([
        "wetter",
        "aktuelles-wetter",
        "wetterprognose",
        "wetter-kurz-und-kompakt",
        "wetteraussichten",
        "biowetter",
        "mittelfrist",
        "monats-aussichten",
        "astronomisches",
      ]),
      getNewestPostsWithTags([
        "presseschau",
        "studien",
        "spekulatives",
        "situation",
      ]),
      getNewestPostsWithTags(["privates", "allgemein"]),
    ]);

  const posts = { rueckblicke, updates, wetter, presseschau, privates };

  return <WeatherOverviewClient posts={posts} />;
}
