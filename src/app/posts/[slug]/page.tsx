import { getPostBySlug } from "@/app/api/posts/getPostsWithMeta";
import { Metadata } from "next";
import { Suspense } from "react";
import PostContentClient from "@/components/posts/PostPageClient";
import LoadingSpinner from "@/components/LoadingSpinner";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return {};

  const ogImageUrl = post.og_image || post.feature_image;

  return {
    openGraph: {
      images: ogImageUrl ? [ogImageUrl] : [],
    },
  };
}

export default function PostPage({ params }: PostPageProps) {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex h-screen w-full flex-col justify-center items-center">
            <LoadingSpinner />
          </div>
        }
      >
        <PostsContentFetcher params={params} />
      </Suspense>
    </div>
  );
}

async function PostsContentFetcher({ params }: PostPageProps) {
  const { slug } = await params;

  try {
    const post = await getPostBySlug(slug);
    if (!post) return <div>Beitrag nicht gefunden</div>;
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return <PostContentClient slug="" />;
  }

  return <PostContentClient slug={slug} />;
}
