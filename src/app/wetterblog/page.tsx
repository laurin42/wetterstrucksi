import { WetterblogClient } from "@/components/wetterblog/WetterblogClient";
import { getAllPostsWithTags } from "@/app/api/posts/getPostsWithMeta";
import { PostWithMeta } from "@tryghost/content-api";

export const revalidate = 60;

export default async function WetterblogPage() {
  let posts: PostWithMeta[] = [];

  try {
    posts = await getAllPostsWithTags([
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
  } catch (error) {
    console.error("Failed to fetch Wetterblog posts:", error);
  }

  return <WetterblogClient posts={posts} />;
}
