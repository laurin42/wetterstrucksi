// app/api/postsWithMeta/page.tsx
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";

const dbPath = path.resolve(process.cwd(), "content/data/ghost-local.db");

export default async function Page() {
  try {
    const db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });

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

    const metaMap = new Map<
      string,
      { og_image: string | null; twitter_image: string | null }
    >();
    for (const row of metaRows) {
      metaMap.set(row.post_id, {
        og_image: row.og_image,
        twitter_image: row.twitter_image,
      });
    }

    const tagMap = new Map<string, string[]>();
    for (const row of tagRows) {
      if (!tagMap.has(row.post_id)) tagMap.set(row.post_id, []);
      if (row.tag_name)
        tagMap.get(row.post_id)?.push(row.tag_name.toLowerCase());
    }

    const mergedPosts = posts.map((post) => {
      const meta = metaMap.get(post.id);
      const tags = tagMap.get(post.id) || [];
      return {
        ...post,
        feature_image:
          post.feature_image || meta?.og_image || meta?.twitter_image || null,
        og_image: meta?.og_image || null,
        twitter_image: meta?.twitter_image || null,
        tags,
      };
    });

    await db.close();

    // Gibt die Daten als JSON zurück, wenn du die Seite z.B. für fetch verwenden willst
    return <pre>{JSON.stringify(mergedPosts, null, 2)}</pre>;
  } catch (err) {
    console.error(err);
    return <p>Daten konnten nicht geladen werden.</p>;
  }
}
