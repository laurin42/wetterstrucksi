import { getPostsWithMeta } from "@/lib/getPostsWithMeta";
import HomePageClient from "@/components/home/HomePageClient";

export default async function Home() {
  const posts = await getPostsWithMeta();
  return (
    <>
      <HomePageClient posts={posts} />
    </>
  );
}
