"use client";

import { motion } from "framer-motion";
import { useMotionVariants } from "@/lib/animation/useMotionVariants";

export default function WeatherHero() {
  const backgroundImage = `url("/images/wetter/weatherHero.webp")`;

  const { fadeInVariant, slideInLeftVariant } = useMotionVariants();

  return (
    <motion.section
      variants={fadeInVariant}
      initial="hidden"
      animate="visible"
      custom={{ y: 0, duration: 1.2 }}
      className="relative w-full md:rounded-t-sm px-4 py-8 md:px-8 flex flex-col justify-center md:mb-2 overflow-hidden"
      style={{
        minHeight: "80px",
        height: "auto",
        backgroundImage: backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
        custom={{ y: 0, duration: 1.6 }}
        className="absolute inset-0 bg-black/66 z-0 md:rounded-t-sm"
      />

      <div className="relative z-10">
        <div className="font-light text-text-white text-left md:mb-0 md:max-w-6/8">
          <motion.h1
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            custom={{ y: 0, duration: 1.6 }}
            className="text-3xl font-semibold md:text-5xl md:mb-2"
          >
            Wetter
          </motion.h1>
          <motion.h2
            variants={slideInLeftVariant}
            initial="hidden"
            animate="visible"
            className="text-xl font-thin text-left"
          >
            Neuste Beiträge, Updates, Rückblicke & Persönliches
          </motion.h2>
        </div>
      </div>
    </motion.section>
  );
}
