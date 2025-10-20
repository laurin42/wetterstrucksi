"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useMotionVariants } from "@/lib/animation/useMotionVariants";

interface MorePostsLinkProps {
  href: string;
  label: string;
  className?: string;
}

export default function MorePostsLink({ href, label }: MorePostsLinkProps) {
  const { fadeInVariant } = useMotionVariants();

  return (
    <motion.div
      variants={fadeInVariant}
      initial="hidden"
      animate="visible"
      className="flex justify-center bg-foreground md:bg-transparent"
    >
      <Link
        href={href}
        className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-accent text-text-white text-base md:text-lg font-semibold hover:bg-accent/80 transition-colors"
      >
        {label}
      </Link>
    </motion.div>
  );
}
