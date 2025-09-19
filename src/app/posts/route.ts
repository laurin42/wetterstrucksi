// app/api/postsWithMeta/route.ts
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";
import { NextResponse } from "next/server";

const dbPath = path.resolve(
  "C:/Users/lauri/ghostDemo/content/data/ghost-local.db"
);

export async function GET() {
  try {
    const db = await open({ filename: dbPath, driver: sqlite3.Database });

    const posts = await db.all(`
      SELECT id, title, slug, feature_image, published_at, plaintext
      FROM posts
    `);

    const metaRows = await db.all(`
      SELECT post_id, og_image, twitter_image
      FROM posts_meta
    `);

    const tagRows = await db.all(`
      SELECT pt.post_id, t.name as tag_name
      FROM posts_tags pt
      LEFT JOIN tags t ON pt.tag_id = t.id
    `);

    const metaMap = new Map();
    for (const row of metaRows) metaMap.set(row.post_id, { og_image: row.og_image, twitter_image: row.twitter_image });

    const tagMap = new Map();
    for (const row of tagRows) {
      if (!tagMap.has(row.post_id)) tagMap.set(row.post_id, []);
      if (row.tag_name) tagMap.get(row.post_id)?.push(row.tag_name.toLowerCase());
    }

const mergedPosts = posts.map(post => {
  const meta = metaMap.get(post.id);
  const tags: { name: string }[] = (tagMap.get(post.id) || []).map((name: string) => ({ name }));
  return {
    ...post,
    feature_image: post.feature_image || meta?.og_image || meta?.twitter_image || null,
    og_image: meta?.og_image || null,
    twitter_image: meta?.twitter_image || null,
    tags,
  };
});



    await db.close();
    return NextResponse.json(mergedPosts);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Daten konnten nicht geladen werden." }, { status: 500 });
  }
}
