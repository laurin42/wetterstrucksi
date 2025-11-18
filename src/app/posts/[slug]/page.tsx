import { getPostBySlug } from "@/app/api/posts/getPostsWithMeta";
import { Metadata } from "next";
import { Suspense } from "react";
import PostContentClient from "@/components/posts/PostPageClient";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { fixImageUrl } from "@/lib/posts/fixImageUrl";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return {};
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://wetterstrucksi.de";
  const cmsUrl = "https://cms.wetterstrucksi.de";
  const ogImageUrl = post.og_image || post.feature_image;

  const cmsOgImageUrl =
    fixImageUrl(ogImageUrl) || `${cmsUrl}/images/default.jpg`;

  const publicPostUrl = `${siteUrl}/posts/${slug}`;

  return {
    title: post.title,
    description: post.custom_excerpt,
    alternates: {
      canonical: publicPostUrl,
    },
    openGraph: {
      title: post.title || "Wetterstrucksi",
      description: post.custom_excerpt || "Dein Ort für Wetter in Düsseldorf",
      url: publicPostUrl,
      type: "article",
      images: [
        {
          url: cmsOgImageUrl,
          width: 1200,
          height: 1200,
          alt: post.title || "Feature Image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title || "Wetterstrucksi",
      description: post.custom_excerpt || "Dein Ort für Wetter in Düsseldorf",
      images: [cmsOgImageUrl],
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
