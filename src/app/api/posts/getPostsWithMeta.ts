import GhostContentAPI, {  PostWithMeta } from "@tryghost/content-api";
import { fixImageUrl } from "@/lib/fixImageUrl";

const api = new GhostContentAPI({
  url: process.env.NEXT_PUBLIC_GHOST_API_URL as string,
  key: process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY as string,
  version: "v5.0",
});

const cache: { [key: string]: { posts: PostWithMeta[]; timestamp: number } } = {};



function normalizePosts(posts: PostWithMeta[]): PostWithMeta[] {
  return posts.map((post) => ({
    ...post,
    feature_image:
      fixImageUrl(post.feature_image) ||
      fixImageUrl(post.og_image) ||
      fixImageUrl(post.twitter_image) ||
      null,
    og_image: fixImageUrl(post.og_image) || null,
    twitter_image: fixImageUrl(post.twitter_image) || null,
    tags:
      post.tags?.map((tag) => ({
        id: tag.id,
        name: tag.name,
        slug: tag.slug.toLowerCase(),
      })) ?? [],
  }));
}


export async function getPostsWithMeta(limit = 24): Promise<PostWithMeta[]> {
  const cacheKey = `latest-${limit}`;
  const now = Date.now();

  if (cache[cacheKey] && now - cache[cacheKey].timestamp < 60_000) {
    return cache[cacheKey].posts;
  }

  const posts = await api.posts.browse({
    include: ["tags", "authors", "feature_image", "og_image", "twitter_image"],
    limit,
    order: "published_at DESC",
  });

  const merged = normalizePosts(posts);
  cache[cacheKey] = { posts: merged, timestamp: now };
  return merged;
}

export async function getPostsPage(
  page: number,
  limit = 24
): Promise<PostWithMeta[]> {
  const cacheKey = `page-${page}-${limit}`;
  const now = Date.now();

  if (cache[cacheKey] && now - cache[cacheKey].timestamp < 60_000) {
    return cache[cacheKey].posts;
  }

  const posts = await api.posts.browse({
    include: ["tags", "authors", "feature_image", "og_image", "twitter_image"],
    limit,
    page,
    order: "published_at DESC",
  });

  const merged = normalizePosts(posts);
  cache[cacheKey] = { posts: merged, timestamp: now };
  return merged;
}




export async function getPostsWithTags(tagsToFilter: string | string[], limit = 1000

): Promise<PostWithMeta[]> {
  const tags = Array.isArray(tagsToFilter) 
    ? tagsToFilter.map(t => t.toLowerCase()) 
    : [tagsToFilter.toLowerCase()];

  const cacheKey = `tags-${tags.join(",")}-${limit}`;
  const now = Date.now();

  if (cache[cacheKey] && now - cache[cacheKey].timestamp < 60_000) {
    return cache[cacheKey].posts;
  }
  
  const allPosts = await api.posts.browse({
    include: ["tags", "authors", "feature_image", "og_image", "twitter_image"],
    limit: "all", 
    order: "published_at DESC",
  });

  
  const normalized = normalizePosts(allPosts);

  
  const filtered = normalized
    .filter(post =>
      post.tags?.some(tag => tags.includes(tag.slug.toLowerCase()))
    )
    .slice(0, limit); 

  cache[cacheKey] = { posts: filtered, timestamp: now };
  return filtered;
}

