import { NextResponse } from "next/server";
import ContentAPI, { GhostPost, PostWithMeta, GhostTag } from "@tryghost/content-api";
import { fixImageUrl } from "@/lib/posts/fixImageUrl";
import { getSlugsByCategoryDisplayName } from "@/lib/posts/categoryMap";

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
  const selectedCategoryDisplayName = url.searchParams.get("category");
  const selectedMonth = url.searchParams.get("month");
  let selectedYear = url.searchParams.get("year");

  if (selectedMonth && !selectedYear) {
    selectedYear = String(new Date().getFullYear()); 
  }

  const sortOrder = url.searchParams.get("order") || "newest";
  const orderParam = sortOrder === "oldest" ? "published_at ASC" : "published_at DESC";

  const filterParts: string[] = [];

  if (selectedCategoryDisplayName) {
    const tagSlugs = getSlugsByCategoryDisplayName(selectedCategoryDisplayName);
    if (tagSlugs.length > 0) {
      filterParts.push(`tag:[${tagSlugs.join(",")}]`);
    }
  }

  if (selectedYear && selectedMonth) {
    const startOfMonth = `${selectedYear}-${String(Number(selectedMonth)).padStart(2, "0")}-01`;
    let nextMonth = Number(selectedMonth) + 1;
    let nextYear = Number(selectedYear);

    if (nextMonth > 12) {
      nextMonth = 1;
      nextYear++;
    }

    const startOfNextMonth = `${nextYear}-${String(nextMonth).padStart(2, "0")}-01`;

    filterParts.push(`published_at:>='${startOfMonth}'`);
    filterParts.push(`published_at:<'${startOfNextMonth}'`);
  }
  else if (selectedYear) {
    const startOfYear = `${selectedYear}-01-01`;
    const endOfYear = `${Number(selectedYear) + 1}-01-01`;

    filterParts.push(`published_at:>='${startOfYear}'`);
    filterParts.push(`published_at:<'${endOfYear}'`);
  }

  const ghostFilter = filterParts.join("+") || undefined;

  const ghostPage = await api.posts.browse({
    include: ["tags", "authors", "feature_image", "og_image", "twitter_image"],
    page,
    limit,
    order: orderParam,
    filter: ghostFilter,
  });

  let posts = ghostPage;
  let total = ghostPage.meta?.pagination?.total || 0;
  let totalPages = ghostPage.meta?.pagination?.pages || 1;
  let currentPage = ghostPage.meta?.pagination?.page || 1;

  const normalized = normalizePosts(posts);

  return NextResponse.json({
    posts: normalized,
    total,
    page: currentPage,
    pages: totalPages,
  });
}
