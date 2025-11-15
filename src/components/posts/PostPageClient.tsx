"use client";

import PostNavigation from "@/components/posts/PostNavigation";
import Post from "@/components/posts/Post";
import { useEffect, useState } from "react";
import { getPostBySlug } from "@/app/api/posts/getPostsWithMeta";
import { PostWithMeta } from "@tryghost/content-api";
import LoadingSpinner from "../ui/LoadingSpinner";

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

  if (loading)
    return (
      <div className="h-[100svh]">
        <LoadingSpinner />
      </div>
    );
  if (!post)
    return (
      <div>
        Ups, ein Fehler ist aufgetreten. Versuche es gleich nochmal oder
        kontaktiere den Administrator
      </div>
    );

  return (
    <>
      <Post post={post} />
      <PostNavigation slug={slug} publishedAt={post.published_at} />
    </>
  );
}
