"use client";

import { motion } from "framer-motion";
import { useMotionVariants } from "@/lib/animation/useMotionVariants";

export default function AboutHero() {
  const backgroundImage = `url("/images/about/bioHero.jpg")`;

  const { sectionAnimation, slideInLeftVariant, viewportOnce } =
    useMotionVariants();

  return (
    <div
      className="relative max-w-6xl md:mx-auto h-[calc(100svh-64px)] md:h-[64vh] flex items-end md:pb-0 rounded-t-md"
      style={{
        backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0 rounded-t-md" />

      <div className="relative z-10 px-4 md:px-32">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={sectionAnimation}
          viewport={viewportOnce}
          className="text-5xl mb-1 md:text-5xl font-thin text-text-white tracking-wide"
        >
          <em>Über mich</em>
        </motion.h1>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={slideInLeftVariant}
          viewport={viewportOnce}
          className="text-2xl text-text-white font-thin text-left pb-2 mb-4 border-b-[1px] border-text-white/40 md:border-none"
        >
          <span className="tracking-wide">Jens Strucks </span>alias
          Wetterstrucksi
        </motion.h2>
      </div>
    </div>
  );
}
