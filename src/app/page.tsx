import HomePageClient from "@/components/home/HomePageClient";
import { getPostsWithMeta } from "./api/posts/getPostsWithMeta";

export default async function Home() {
  let posts = null;

  try {
    posts = await getPostsWithMeta();
  } catch {
    posts = null;
  }

  return <>{posts && <HomePageClient posts={posts} />}</>;
}
