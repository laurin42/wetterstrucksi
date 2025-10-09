import { ArchiveOverviewClient } from "@/components/archive/ArchiveOverviewClient";
import { getPostsWithTags } from "@/app/api/posts/getPostsWithMeta";
import { PostWithMeta } from "@tryghost/content-api";

export const revalidate = 60;

export default async function ArchiveOverviewPage() {
  const rueckblicke: PostWithMeta[] = await getPostsWithTags("rueckblick");
  const updates: PostWithMeta[] = await getPostsWithTags("warnlage");
  const vorhersagen: PostWithMeta[] = await getPostsWithTags([
    "wetter",
    "aktuelles wetter",
    "wetterprognose",
    "wetter kurz und kompakt",
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
  ]);
  const biowetter: PostWithMeta[] = await getPostsWithTags(["biowetter"]);
  const presseschau: PostWithMeta[] = await getPostsWithTags(["presseschau"]);
  const privates: PostWithMeta[] = await getPostsWithTags(["privates"]);

  const allPosts: PostWithMeta[] = [
    ...rueckblicke,
    ...updates,
    ...vorhersagen,
    ...biowetter,
    ...presseschau,
    ...privates,
  ];

  return <ArchiveOverviewClient posts={allPosts} />;
}
