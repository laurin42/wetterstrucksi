import { WetterblogClient } from "@/components/wetterblog/WetterblogClient";
import { getAllPostsWithTags } from "@/app/api/posts/getPostsWithMeta";

export default async function WetterblogPage() {
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

  return (
    <main>
      <WetterblogClient posts={allPosts} />;
    </main>
  );
}
