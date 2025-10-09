import { NextResponse } from "next/server";
import ContentAPI, { GhostPost, PostWithMeta, GhostTag } from "@tryghost/content-api";
import { fixImageUrl } from "@/lib/fixImageUrl";

const api = new ContentAPI({
  url: process.env.NEXT_PUBLIC_GHOST_API_URL!,
  key: process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY!,
  version: "v5.0",
});

function normalizePosts(posts: GhostPost[]): PostWithMeta[] {
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
      post.tags?.map((tag: GhostTag) => ({
        id: tag.id,
        name: tag.name,
        slug: tag.slug?.toLowerCase(),
      })) ?? [],
  }));
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const page = Number(url.searchParams.get("page") || 1);
  const limit = Number(url.searchParams.get("limit") || 50);

  const posts: GhostPost[] = await api.posts.browse({
    include: ["tags", "authors", "feature_image", "og_image", "twitter_image"],
    page,
    limit,
    order: "published_at DESC",
  });

  const normalized = normalizePosts(posts);

  return NextResponse.json(normalized);
}
