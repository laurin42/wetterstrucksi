import Link from "next/link";
import Image from "next/image";
import { fixImageUrl } from "@/lib/posts/fixImageUrl";
import { PostWithMeta } from "@tryghost/content-api";

interface PostCardProps {
  post: PostWithMeta;
  className?: string;
}

function truncateWords(text?: string, maxWords?: number) {
  if (!text || !maxWords) return text;
  const words = text.split(" ");
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ") + "...";
}

export default function PostCard({ post }: PostCardProps) {
  const href = post.slug ? `/posts/${post.slug}` : "#";

  const imageSrc = fixImageUrl(post.feature_image);

  return (
    <div className="block group hover:bg-header-background/40 border border-transparent hover:border hover:border-text/32 transition duration-240 w-full bg-transparent rounded-sm">
      <Link
        href={href}
        className="block overflow-hidden transition-transform duration-240 active:bg-accent/20"
      >
        <div className="flex p-4 h-full">
          <div className="flex-1 will-change-transform transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:opacity-90 pr-4">
            {post.published_at && (
              <p className="w-fit border-b border-text/32 text-xs text-text-foreground mb-1 font-semibold md:font-thin">
                {new Date(post.published_at).toLocaleDateString("de-DE", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            )}

            <h2 className="text-base text-text mb-2 leading-snug md:text-lg font-bold">
              {post.title}
            </h2>

            {post.og_description && (
              <p className="md:text-sm text-text line-clamp-3 md:line-clamp-8 md:font-normal tablet-xs:max-w-6/8">
                {truncateWords(post.meta_description, 120)}
              </p>
            )}

            {!post.published_at && !post.title && !post.og_description && (
              <div className="min-h-16"></div>
            )}
          </div>

          {imageSrc && (
            <div className="w-24 h-24 tablet-xs:w-32 tablet-xs:h-32 md:w-42 md:h-42 my-auto relative shrink-0 transition duration-300 ease-in">
              <Image
                src={imageSrc}
                overrideSrc={imageSrc}
                alt={post.title || "Feature Image"}
                fill
                className="object-cover rounded-md"
                sizes="(max-width: 768px) 6rem, 33vw"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-md bg-black/10"></div>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
