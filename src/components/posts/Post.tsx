"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import parse, { DOMNode, Element, domToReact } from "html-react-parser";
import { PostWithMeta } from "@tryghost/content-api";
import { fixImageUrl } from "@/lib/posts/fixImageUrl";
import LoadingSpinner from "../ui/LoadingSpinner";

interface PostProps {
  post: PostWithMeta;
}

export default function Post({ post }: PostProps) {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    if (post.published_at) {
      const date = new Date(post.published_at);
      const options: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "long",
        year: "numeric",
      };
      setFormattedDate(date.toLocaleDateString("de-DE", options));
    }
  }, [post.published_at]);

  // Saubere URL für Meta-Tags
  const metaImage =
    fixImageUrl(post.feature_image) ||
    "/images/weatherFeatureImageDefault.webp";

  const options = {
    replace: (domNode: DOMNode) => {
      if (!(domNode instanceof Element)) return;

      if (domNode.name === "img") {
        const src = domNode.attribs.src;
        const alt = domNode.attribs.alt || post.title || "Feature Image";

        return (
          <Image
            src={fixImageUrl(src) || metaImage}
            alt={alt}
            width={800}
            height={500}
            className="object-contain rounded-md w-full h-auto"
          />
        );
      }

      if (domNode.name === "h3") {
        return (
          <h3 className="text-3xl font-light mb-6 md:mt-8 text-balance">
            {domToReact(domNode.children as DOMNode[], options)}
          </h3>
        );
      }

      if (domNode.name === "p") {
        return (
          <p className="leading-relaxed pb-4">
            {domToReact(domNode.children as DOMNode[], options)}
          </p>
        );
      }

      if (domNode.name === "hr") {
        return <hr className="border-b border-accent/8 my-6" />;
      }

      if (domNode.name === "li") {
        return (
          <li className="ml-6 leading-relaxed list-disc">
            {domToReact(domNode.children as DOMNode[], options)}
          </li>
        );
      }

      return undefined;
    },
  };

  return (
    <>
      <Head>
        <title>{post.title}</title>

        <meta property="og:title" content={post.title} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_SITE_URL}/posts/${post.slug}`}
        />
        <meta
          property="og:description"
          content={post.custom_excerpt || "Dein Ort für Wetter in Düsseldorf"}
        />
        <meta property="og:image" content={metaImage} />
        <meta property="og:image:alt" content={post.title} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta
          name="twitter:description"
          content={post.custom_excerpt || "Dein Ort für Wetter in Düsseldorf"}
        />
        <meta name="twitter:image" content={metaImage} />
      </Head>

      <section className="max-w-4xl md:max-w-6xl mx-auto tablet-xs:pt-8">
        <article className="tablet-xs:rounded-lg border border-white/32 bg-foreground-secondary/16 shadow-sm shadow-header-background p-8 max-w-6xl mx-auto text-text">
          <div className="flex justify-start tablet-xs:mb-16 mb-0">
            <div>
              {formattedDate && (
                <p className="text-sm font-semibold md:font-thin md:text-lg text-muted-foreground pb-2">
                  {formattedDate}
                </p>
              )}
              <h1 className="tracking-wide w-fit text-4xl md:text-5xl font-light mb-4 tablet-xs:mb-0 pb-2 text-balance border-b border-text/40">
                {post.title}
              </h1>
            </div>
          </div>

          <div className="prose prose-invert prose-lg">
            {post.feature_image && (
              <div className="md:float-left md:w-2/4 md:mr-16 mb-8">
                <Image
                  src={metaImage}
                  alt={post.title || "Feature Image"}
                  width={1200}
                  height={675}
                  className="object-contain rounded-md w-full h-auto"
                  priority
                  quality={100}
                />
              </div>
            )}

            {typeof post.html === "string" && post.html.trim().length > 0 ? (
              parse(post.html, options)
            ) : (
              <LoadingSpinner />
            )}

            <div className="clear-both" />
          </div>
        </article>
      </section>
    </>
  );
}
