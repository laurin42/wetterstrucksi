import GhostContentAPI from "@tryghost/content-api";
import { PostWithMeta } from "@tryghost/admin-api";
import { fixImageUrl } from "./fixImageUrl";

let cache: { posts: PostWithMeta[]; timestamp: number } | null = null;

const api = new GhostContentAPI({
  url: process.env.NEXT_PUBLIC_GHOST_API_URL as string, 
  key: process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY as string, 
  version: "v5.0",
});

export async function getPostsWithMeta(): Promise<PostWithMeta[]> {
  const now = Date.now();

  if (cache && now - cache.timestamp < 60_000) {
    return cache.posts;
  }

  const posts = await api.posts.browse({
    include: ["tags", "authors"],
    limit: "all",
    order: "published_at DESC",
  });

  const mergedPosts: PostWithMeta[] = posts.map((post) => {
    return {
      ...post,
      feature_image:
        fixImageUrl(post.feature_image) ||
        fixImageUrl(post.og_image) ||
        fixImageUrl(post.twitter_image) ||
        null,
      og_image: fixImageUrl(post.og_image) || null,
      twitter_image: fixImageUrl(post.twitter_image) || null,
      tags: post.tags?.map((t) => t.name.toLowerCase()) || [],
    } as PostWithMeta;
  });

  cache = { posts: mergedPosts, timestamp: now };

  return mergedPosts;
}
