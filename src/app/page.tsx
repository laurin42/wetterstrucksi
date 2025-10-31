import { Suspense } from "react";
import Image from "next/image";
import HomePageClient from "@/components/home/HomePageClient";
import { getPostsWithMeta } from "./api/posts/getPostsWithMeta";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function Home() {
  return (
    <main>
      <Suspense
        fallback={
          <div className="flex h-screen w-full flex-col justify-center items-center">
            <LoadingSpinner />
          </div>
        }
      >
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
