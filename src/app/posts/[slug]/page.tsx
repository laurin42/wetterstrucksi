import PostNavigation from "@/components/posts/PostNavigation";
import Post from "@/components/posts/Post";
import { PostWithMeta } from "@tryghost/admin-api";
import { getPostsWithMeta } from "@/lib/getPostsWithMeta";

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const posts: PostWithMeta[] = await getPostsWithMeta();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <div>Beitrag nicht gefunden</div>;
  }

  return (
    <div>
      <Post post={post} />
      <PostNavigation slug={slug} />
    </div>
  );
}
