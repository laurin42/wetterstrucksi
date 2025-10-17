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
    <div className="grid grid-cols-2 gap-4 px-4 py-4 md:pt-6 md:pb-0 md:px-0 max-w-6xl mx-auto bg-foreground-secondary/40 md:bg-transparent ">
      <div className="flex justify-end">
        {prev ? (
          <Link
            href={`/posts/${prev.slug}`}
            className="flex justify-center items-center gap-2 px-4 py-3 bg-accent/80 rounded-l-sm w-full hover:bg-accent transition duration-300"
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
            className="flex justify-center items-center gap-2 px-4 py-3 bg-accent/80 rounded-r-sm w-full hover:bg-accent transition duration-300"
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
