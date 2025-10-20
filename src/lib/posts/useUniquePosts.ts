import { useEffect, useState } from "react";
import { PostWithMeta } from "@tryghost/content-api";

export function useUniquePosts(posts: PostWithMeta[]) {
  const [uniquePosts, setUniquePosts] = useState<PostWithMeta[]>([]);

  useEffect(() => {
    const deduped = Array.from(new Map(posts.map((p) => [p.id, p])).values());
    setUniquePosts(deduped);
  }, [posts]);

  return uniquePosts;
}
