"use client";

import PostNavigation from "@/components/posts/PostNavigation";
import Post from "@/components/posts/Post";
import { useEffect, useState } from "react";
import { getPostBySlug } from "@/app/api/posts/getPostsWithMeta";
import { PostWithMeta } from "@tryghost/content-api";

interface PostContentClientProps {
  slug: string;
}

export default function PostContentClient({ slug }: PostContentClientProps) {
  const [post, setPost] = useState<PostWithMeta | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPostBySlug(slug)
      .then((data) => setPost(data ?? null))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (!post) return <p>Beitrag nicht gefunden</p>;

  return (
    <>
      <Post post={post} />
      <PostNavigation slug={slug} publishedAt={post.published_at} />
    </>
  );
}
