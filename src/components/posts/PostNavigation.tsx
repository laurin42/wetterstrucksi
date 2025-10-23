import Link from "next/link";
import { getPostsWithMeta } from "@/app/api/posts/getPostsWithMeta";
import { PostWithMeta } from "@tryghost/content-api";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

interface PostNavigationProps {
  slug: string;
  publishedAt: string;
}

async function getAdjacentPosts(
  publishedAt: string,
  currentSlug: string
): Promise<{ older: PostWithMeta | null; newer: PostWithMeta | null }> {
  const allPosts = await getPostsWithMeta(9999);

  const sortedPosts = allPosts.sort(
    (a, b) =>
      new Date(b.published_at || 0).getTime() -
      new Date(a.published_at || 0).getTime()
  );

  const currentIndex = sortedPosts.findIndex((p) => p.slug === currentSlug);

  let nextPost: PostWithMeta | null = null;
  let prevPost: PostWithMeta | null = null;

  if (currentIndex !== -1) {
    if (currentIndex < sortedPosts.length - 1) {
      nextPost = sortedPosts[currentIndex + 1];
    }

    if (currentIndex > 0) {
      prevPost = sortedPosts[currentIndex - 1];
    }
  }

  return { older: nextPost, newer: prevPost };
}

export default async function PostNavigation({
  slug,
  publishedAt,
}: PostNavigationProps) {
  const { newer: prev, older: next } = await getAdjacentPosts(
    publishedAt,
    slug
  );

  return (
    <div className="grid grid-cols-2 gap-4 px-4 py-4 md:pt-6 md:pb-0 md:px-0 max-w-6xl mx-auto bg-foreground-secondary/40 md:bg-transparent ">
      <div className="flex justify-start">
        {prev ? (
          <Link
            href={`/posts/${prev.slug}`}
            className="flex justify-center items-center gap-2 px-4 py-3 bg-accent/80 text-text-white rounded-l-sm w-full hover:bg-accent transition duration-300"
          >
            <MdOutlineKeyboardDoubleArrowLeft className="text-2xl md:text-3xl flex-shrink-0" />
            <div className="flex flex-col text-left">
              <span className="text-xs opacity-80">Neuerer Beitrag</span>
              <span className="line-clamp-2 md:line-clamp-none font-semibold">
                {prev.title}
              </span>
            </div>
          </Link>
        ) : (
          <span className="flex items-center justify-start w-full px-4 py-3 text-sm opacity-60">
            Kein neuerer Beitrag
          </span>
        )}
      </div>
      <div className="flex justify-end">
        {next ? (
          <Link
            href={`/posts/${next.slug}`}
            className="flex justify-center items-center gap-2 px-4 py-3 bg-accent/80 text-text-white rounded-r-sm w-full hover:bg-accent transition duration-300"
          >
            <div className="flex flex-col text-right">
              <span className="text-xs opacity-80">Älterer Beitrag</span>
              <span className="line-clamp-2 md:line-clamp-none font-semibold">
                {next.title}
              </span>
            </div>
            <MdOutlineKeyboardDoubleArrowRight className="text-2xl md:text-3xl flex-shrink-0" />
          </Link>
        ) : (
          <span className="flex items-center justify-end w-full px-4 py-3 text-sm opacity-60">
            Kein älterer Beitrag
          </span>
        )}
      </div>
    </div>
  );
}
