import HomePageClient from "@/components/home/HomePageClient";
import { getPostsWithMeta } from "./api/posts/getPostsWithMeta";

export default async function Home() {
  const posts = await getPostsWithMeta();
  return (
    <>
      <HomePageClient posts={posts} />
    </>
  );
}
