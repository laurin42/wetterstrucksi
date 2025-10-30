import { WeatherOverviewClient } from "@/components/wetter/WeatherOverviewClient";
import { getPostsWithTags } from "../api/posts/getPostsWithMeta";
import { Suspense } from "react";

export default async function WeatherOverviewPage() {
  return (
    <>
      <Suspense>
        <WeatherContentFetcher />
      </Suspense>
    </>
  );
}

async function WeatherContentFetcher() {
  const rueckblicke = await getPostsWithTags("rueckblick");
  const updates = await getPostsWithTags([
    "warnlage",
    "warntrend",
    "live-ticker-zu-unwetterlagen",
  ]);
  const wetter = await getPostsWithTags([
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
  const presseschau = await getPostsWithTags([
    "presseschau",
    "studien",
    "spekulatives",
    "situation",
  ]);
  const privates = await getPostsWithTags(["privates", "allgemein"]);

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
