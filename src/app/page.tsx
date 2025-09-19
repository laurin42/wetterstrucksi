import { getPostsWithMeta } from "@/lib/getPostsWithMeta";
import HomePageClient from "@/components/home/HomePageClient";

export default async function Home() {
  const posts = await getPostsWithMeta();
  const latestPost = posts[0];
  return (
    <>
      <HomePageClient latestPost={latestPost} />
    </>
  );
}
