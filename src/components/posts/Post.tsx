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

  const imageSrc =
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
            src={fixImageUrl(src) || imageSrc}
            alt={alt}
            width={800}
            height={500}
            className="object-contain rounded-md w-full h-auto"
          />
        );
      }

      const oldUrls = ["jensstrucks.blog", "https://jensstrucks.blog"];
      const isAbspannLink = oldUrls.some((url) =>
        domNode.attribs.href?.includes(url)
      );

      if (domNode.name === "h3") {
        const children = domNode.children ?? [];
        return (
          <h3 className="text-3xl font-light mb-6 md:mt-8 text-balance">
            {domToReact(children as DOMNode[], options)}
          </h3>
        );
      }

      if (domNode.name === "p") {
        const children = domNode.children ?? [];
        return (
          <p className="leading-relaxed pb-4">
            {domToReact(children as DOMNode[], options)}
          </p>
        );
      }

      if (domNode.name === "p") {
        const children = domNode.children ?? [];
        const text = domToReact(children as DOMNode[], options);

        // Spezieller Abspann-Block
        if (
          domNode.children?.some((c) => c.type?.includes("jensstrucks.blog"))
        ) {
          return (
            <div className="space-y-4 leading-relaxed text-text-white">
              <p className="font-semibold text-lg">Abspann:</p>

              <p>
                Vielen Dank, dass du bis zum Schluss dabei warst – das bedeutet
                mir echt viel! Ich hoffe, der Beitrag hat dir gefallen und dir
                einen echten Mehrwert geboten.
              </p>

              <p>
                Die Erstellung solcher Wetterberichte kostet mich täglich rund
                eine Stunde Arbeit – Recherche, Schreiben, Grafiken und
                Postproduktion inklusive.
              </p>

              <p>
                Wenn du meine Arbeit unterstützen möchtest, freue ich mich über
                deine Hilfe – ganz egal in welcher Form:
              </p>

              <ul className="list-disc list-inside space-y-1">
                <li>
                  📎 Teile meine{" "}
                  <a
                    href="https://wetterstrucksi.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-accent"
                  >
                    wetterstrucksi.de
                  </a>
                  , meine{" "}
                  <a
                    href="https://www.facebook.com/WetterstrucksiD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-accent"
                  >
                    Facebook-Seite
                  </a>{" "}
                  oder mein{" "}
                  <a
                    href="https://www.instagram.com/wetterstrucksiduesseldorf/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-accent"
                  >
                    Instagram-Profil
                  </a>
                </li>
                <li>
                  📲 Die neuesten Beiträge aufs Handy über meinen WhatsApp-Kanal
                </li>
                <li>
                  🎧 Höre und empfehle meinen Wetter-Podcast auf{" "}
                  <a
                    href="https://open.spotify.com/show/your-podcast-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-accent"
                  >
                    Spotify
                  </a>{" "}
                  oder meinen eigenen Podcast
                </li>
                <li>
                  💰 Unterstütze mich finanziell – jeder Beitrag hilft, egal wie
                  klein:
                  <ul className="list-none pl-4">
                    <li>• PayPal</li>
                    <li>
                      • Banküberweisung:
                      <br />
                      Kontoinhaber: Jens Strucks
                      <br />
                      IBAN: DE71 3905 0000 1077 4740 45
                    </li>
                  </ul>
                </li>
              </ul>

              <p>
                Danke für deinen Support und bis zum nächsten Wetter-Update! 🍀
                Jens
              </p>
            </div>
          );
        }

        return <p className="leading-relaxed">{text}</p>;
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
    <>
      <Head>
        <title>{post.title}</title>
        <meta property="og:title" content={post.title} />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content={post.og_image || post.feature_image || undefined}
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_SITE_URL}/posts/${post.slug}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta
          name="twitter:image"
          content={post.twitter_image || post.feature_image || undefined}
        />
      </Head>

      <section className="max-w-4xl md:max-w-6xl mx-auto tablet-xs:pt-16">
        <article className="p-8 tablet-xs:px-32 bg-foreground-secondary/40 max-w-6xl mx-auto text-text">
          <div className="flex justify-start tablet-xs:mb-16 mb-0">
            <div>
              {formattedDate && (
                <p className="text-sm font-semibold md:font-thin md:text-lg text-muted-foreground">
                  {formattedDate}
                </p>
              )}
              <h1 className="tracking-wide text-4xl md:text-5xl font-light mb-4 tablet-xs:mb-0 pb-2 text-balance border-b border-text/40">
                {post.title}
              </h1>
            </div>
          </div>

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
              <LoadingSpinner />
            )}

            <div className="clear-both" />
          </div>
        </article>
      </section>
    </>
  );
}
