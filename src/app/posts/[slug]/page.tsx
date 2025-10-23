import PostNavigation from "@/components/posts/PostNavigation";
import Post from "@/components/posts/Post";
import { getPostBySlug } from "@/app/api/posts/getPostsWithMeta";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = await getPostBySlug(slug);

  if (!post) {
    return <div>Beitrag nicht gefunden</div>;
  }

  return (
    <div>
      <Post post={post} />
      <PostNavigation slug={slug} publishedAt={post.published_at} />
    </div>
  );
}
