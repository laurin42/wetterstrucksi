"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import parse, { DOMNode, Element, domToReact } from "html-react-parser";
import { PostWithMeta } from "@tryghost/admin-api";
import { fixImageUrl } from "@/lib/fixImageUrl";
import Divider from "../ui/Divider";

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

  const imageSrc =
    fixImageUrl(post.feature_image) || "/images/weatherFeatureImageDefault.jpg";

  const options = {
    replace: (domNode: DOMNode) => {
      if (!(domNode instanceof Element)) return;

      if (domNode.name === "img") {
        const src = domNode.attribs.src;
        const alt = domNode.attribs.alt || post.title || "Feature Image";
        return (
          <Image
            src={fixImageUrl(src) || imageSrc}
            alt={alt}
            width={800}
            height={500}
            className="object-contain rounded-md w-full h-auto"
          />
        );
      }

      if (domNode.name === "h3") {
        const children = domNode.children ?? [];
        return (
          <h3 className="text-3xl font-light leading-relaxed my-2 md:mt-8">
            {domToReact(children as DOMNode[], options)}
          </h3>
        );
      }

      if (domNode.name === "p") {
        const children = domNode.children ?? [];
        return (
          <p className="leading-relaxed">
            {domToReact(children as DOMNode[], options)}
          </p>
        );
      }

      if (domNode.name === "a") {
        const children = domNode.children ?? [];
        return (
          <a className="underline text-accent leading-relaxed hover:cursor-pointer hover:text-accent-dim hover:no-underline">
            {domToReact(children as DOMNode[], options)}
          </a>
        );
      }

      if (domNode.name === "hr") {
        return <hr className="border-b border-accent/8 my-6" />;
      }

      if (domNode.name === "li") {
        const children = domNode.children ?? [];
        return (
          <li className="ml-6 leading-relaxed list-disc">
            {domToReact(children as DOMNode[], options)}
          </li>
        );
      }

      return undefined;
    },
  };

  return (
    <section className="max-w-4xl md:max-w-6xl mx-auto">
      <article className="p-4 md:px-16 bg-foreground-secondary/40 shadow-xl max-w-6xl mx-auto text-text">
        {/* Row 1: Title + Date (top-right) */}
        <div className="flex justify-start mb-10">
          <div>
            {formattedDate && (
              <p className="text-sm font-semibold md:font-thin md:text-lg text-muted-foreground">
                {formattedDate}
              </p>
            )}
            <h1 className="tracking-wide text-4xl md:text-5xl font-light">
              {post.title}
            </h1>
          </div>
        </div>

        {/* Content: image is floated on md+ so text will wrap around it */}
        <div className="prose prose-invert prose-lg">
          {post.feature_image && (
            <div className="md:float-left md:w-2/4 md:mr-16 mb-8">
              <Image
                src={imageSrc}
                alt={post.title || "Feature Image"}
                width={800}
                height={800}
                className="object-contain rounded-md w-full h-auto"
              />
            </div>
          )}

          {typeof post.html === "string" && post.html.trim().length > 0 ? (
            parse(post.html, options)
          ) : (
            <p className="italic text-muted-foreground">
              Kein Inhalt verfügbar.
            </p>
          )}

          <div className="clear-both" />
        </div>
      </article>
    </section>
  );
}
