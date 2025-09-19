"use client";

import React from "react";
import Image from "next/image";
import parse, { DOMNode, Element, domToReact } from "html-react-parser";
import { PostWithMeta } from "@tryghost/admin-api";
import { fixImageUrl } from "@/lib/fixImageUrl";
import Divider from "../ui/Divider";

interface PostProps {
  post: PostWithMeta;
}

export default function Post({ post }: PostProps) {
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
            className="object-contain rounded-md"
          />
        );
      }

      if (domNode.name === "h3") {
        const children = domNode.children ?? [];
        return (
          <h3 className="text-3xl font-light leading-relaxed my-4">
            {domToReact(children as DOMNode[], options)}
          </h3>
        );
      }

      if (domNode.name === "p") {
        const children = domNode.children ?? [];
        return (
          <p className="my-4 leading-relaxed">
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
        return <Divider className="clear-both" />;
      }

      if (domNode.name === "li") {
        const children = domNode.children ?? [];
        return (
          <li className="my-4 md:ml-8 leading-relaxed list-disc">
            {domToReact(children as DOMNode[], options)}
          </li>
        );
      }

      return undefined;
    },
  };

  return (
    <section className="">
      <article className="max-w-4xl mx-auto p-6 sm:p-8 bg-card/40 backdrop-blur-md rounded-md shadow-xl">
        {post.published_at && (
          <p className="text-sm font-extralight text-text mb-2">
            {new Date(post.published_at).toLocaleDateString("de-DE", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>
        )}

        <h1 className="text-3xl sm:text-4xl font-light text-text mb-8">
          {post.title}
        </h1>

        <div className="mb-8">
          {post.feature_image && (
            <div className="float-left w-full md:w-1/2 mr-12 mb-4">
              <Image
                src={imageSrc}
                alt={post.title || "Feature Image"}
                width={800}
                height={500}
                className="object-contain rounded-md"
              />
            </div>
          )}

          <div className="prose prose-invert prose-lg prose-headings:font-light text-text max-w-none">
            {parse(post.html, options)}
          </div>
        </div>
      </article>
    </section>
  );
}
