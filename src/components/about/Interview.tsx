"use client";

import { motion } from "framer-motion";
import { useMotionVariants } from "@/lib/animation/useMotionVariants";
import Link from "next/link";

export default function Interview() {
  const { containerVariants } = useMotionVariants();

  return (
    <motion.section
      className="h-auto bg-foreground-secondary/44 max-w-6xl mx-auto py-4 px-8 md:px-0 flex flex-col items-center justify-around"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
    >
      <h2 className="text-4xl font-thin tracking-wide text-left text-text">
        Im Gespräch mit dem WDR
      </h2>
      <div className="mx-auto aspect-video rounded-md overflow-hidden max-w-4xl h-5xl md:max-h-3xl">
        <video
          src="/videos/wdrInterview.mp4"
          title="Interview WDR"
          controls
          className="w-full h-full"
        />
      </div>
    </motion.section>
  );
}
