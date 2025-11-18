import { WetterblogClient } from "@/components/wetterblog/WetterblogClient";
import { getAllPostsWithTags } from "@/app/api/posts/getPostsWithMeta";
import { PostWithMeta } from "@tryghost/content-api";
import { categoryMap } from "@/lib/posts/categoryMap";

export const revalidate = 60;

export default async function WetterblogPage() {
  let posts: PostWithMeta[] = [];
  const categories: string[] = Array.from(new Set(Object.values(categoryMap)));
  try {
    posts = await getAllPostsWithTags(categories, 24);
  } catch (error) {
    console.error("Failed to fetch Wetterblog posts:", error);
  }

  return <WetterblogClient posts={posts} initialCategories={categories} />;
}
