import { ArchiveOverviewClient } from "@/components/archive/ArchiveOverviewClient";
import { getPostsWithTags } from "@/app/api/posts/getPostsWithMeta";
import { PostWithMeta } from "@tryghost/content-api";
import { SkeletonWrapper } from "@/components/SkeletonWrapper";

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
    <SkeletonWrapper data={allPosts} layoutType="archive" minDuration={200}>
      <ArchiveOverviewClient posts={allPosts} />
    </SkeletonWrapper>
  );
}
