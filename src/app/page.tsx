import HomePageClient from "@/components/home/HomePageClient";
import { getPostsWithMeta } from "./api/posts/getPostsWithMeta";
import { SkeletonWrapper } from "@/components/SkeletonWrapper";

export default async function Home() {
  let posts = null;

  try {
    posts = await getPostsWithMeta();
  } catch {
    posts = null;
  }

  return (
    <SkeletonWrapper data={posts} minDuration={500}>
      {posts && <HomePageClient posts={posts} />}
    </SkeletonWrapper>
  );
}
