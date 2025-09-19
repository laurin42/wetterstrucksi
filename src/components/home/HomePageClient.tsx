"use client";
import { useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { useHeader } from "../header/HeaderContext";
import HomeHero from "@/components/home/HomeHero";
import { PostWithMeta } from "@tryghost/admin-api";
import { PostCard } from "../posts/PostCard";
import Post from "../posts/Post";

interface HomePageClientProps {
  latestPost: PostWithMeta;
}

export default function HomePageClient({ latestPost }: HomePageClientProps) {
  const { headerRef } = useHeader();
  const latestRef = useRef<HTMLDivElement>(null);

  const sectionAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    }),
  };

  useLayoutEffect(() => {
    if (latestRef.current && headerRef.current) {
      latestRef.current.style.scrollMarginTop = `${headerRef.current.offsetHeight}px`;
    }
  }, [headerRef]);

  const scrollToLatest = () => {
    latestRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <HomeHero onScrollDown={scrollToLatest} />
      <div style={{ height: "90dvh" }}></div>
      <motion.section
        ref={latestRef}
        initial="hidden"
        className="w-full"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionAnimation}
      >
        <Post post={latestPost} />
      </motion.section>
    </>
  );
}
