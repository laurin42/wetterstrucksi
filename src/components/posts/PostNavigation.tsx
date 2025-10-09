import Link from "next/link";
import { getPostsWithMeta } from "@/app/api/posts/getPostsWithMeta";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

export default async function PostNavigation({ slug }: { slug: string }) {
  const posts = await getPostsWithMeta();
  const index = posts.findIndex((p) => p.slug === slug);
  const prev = index > 0 ? posts[index - 1] : null;
  const next = index < posts.length - 1 ? posts[index + 1] : null;

  return (
    <div className="grid grid-cols-2 gap-2 mt-4 max-w-4xl mx-auto">
      <div className="flex justify-end">
        {prev ? (
          <Link
            href={`/posts/${prev.slug}`}
            className="flex items-center justify-center gap-2 px-4 py-3 md:px-6 md:py-4 bg-header-background/44 rounded-l-md text-center w-full hover:bg-accent-dim transition duration-300"
          >
            <MdOutlineKeyboardDoubleArrowLeft className="text-2xl md:text-3xl flex-shrink-0" />
            <span className="line-clamp-2 md:line-clamp-none">
              {prev.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
      </div>

      <div className="flex justify-end">
        {next ? (
          <Link
            href={`/posts/${next.slug}`}
            className="flex items-center justify-center gap-2 px-4 py-3 md:px-6 md:py-4 bg-header-background/44 rounded-r-md text-center w-full hover:bg-accent-dim transition duration-300"
          >
            <span className="line-clamp-2 md:line-clamp-none">
              {next.title}
            </span>
            <MdOutlineKeyboardDoubleArrowRight className="text-2xl md:text-3xl flex-shrink-0" />
          </Link>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}
