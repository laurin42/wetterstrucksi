import { Suspense } from "react";
import HomePageClient from "@/components/home/HomePageClient";
import { getPostsWithMeta } from "./api/posts/getPostsWithMeta";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div>Loading the main content...</div>}>
        <PostsContentFetcher />
      </Suspense>
    </main>
  );
}

async function PostsContentFetcher() {
  let posts = null;

  try {
    posts = await getPostsWithMeta();
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return <HomePageClient posts={[]} />;
  }

  return <HomePageClient posts={posts ?? []} />;
}
