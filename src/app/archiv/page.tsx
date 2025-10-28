import { ArchiveOverviewClient } from "@/components/archive/ArchiveOverviewClient";
import { getPostsWithTags } from "@/app/api/posts/getPostsWithMeta";
import { PostWithMeta } from "@tryghost/content-api";

export const revalidate = 60;

export default async function ArchiveOverviewPage() {
  const allPosts: PostWithMeta[] = await getPostsWithTags([
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

  return (
    <>
      <ArchiveOverviewClient posts={allPosts} />
    </>
  );
}
