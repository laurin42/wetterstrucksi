import { PostCard } from "@/components/posts/PostCard";
import { Sidebar } from "@/components/Sidebar";
import { FaAngleUp } from "react-icons/fa6";
import { getPostsWithMeta } from "@/lib/getPostsWithMeta";

export const revalidate = 60;

export default async function ArchivOverviewPage() {
  const posts = await getPostsWithMeta();
  const sortedPosts = [...posts].sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

  return (
    <div className="md:grid md:gap-4 md:grid-cols-2">
      <section className="text-text md:bg-cover">
        <div className="bg-card-transparent rounded-t-md text-2xl text-text-white font-light p-4 mb-0.75 lg:pb-2 h-16 flex items-center justify-between">
          <span>Sortieren nach</span>
          <FaAngleUp />
        </div>
        <div className="bg-card-transparent rounded-b-md">
          <Sidebar />
        </div>
      </section>

      <div className="grid gap-0.5 md:grid-cols-3 md:flex md:flex-wrap md:gap-0.5">
        {sortedPosts.map((post) => (
          <div key={post.id} className="flex-1 min-w-[120px] min-h-[260px]">
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
