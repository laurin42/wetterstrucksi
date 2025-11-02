"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useMounted } from "@/lib/useMounted";
import { useMotionVariants } from "@/lib/animation/useMotionVariants";

export default function ArchiveHero() {
  const { theme } = useTheme();
  const mounted = useMounted();
  const backgroundImage = mounted
    ? theme === "dark"
      ? "/images/archiv/archiveHeroDark.webp"
      : "/images/archiv/archiveHeroLight.webp"
    : undefined;

  const { slideInLeftVariant, fadeInVariant } = useMotionVariants();

  return (
    <motion.section
      variants={fadeInVariant}
      initial="hidden"
      animate="visible"
      custom={{ y: 0, duration: 1.2 }}
      className="relative w-full rounded-t-lg px-4 py-8 h-auto md:px-8 md:pt-8 md:pb-8 flex flex-col justify-center md:mb-2 overflow-hidden"
      style={{
        minHeight: "80px",
        height: "auto",
        backgroundImage: backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {backgroundImage && (
        <>
          {" "}
          <Image
            src={backgroundImage}
            alt="Hintergrundbild"
            fill
            sizes="100vw"
            className="object-cover object-center z-0"
            preload={true}
          />
        </>
      )}
      <div className="absolute inset-0 bg-black/70 z-10" />

      <motion.div
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
        custom={{ y: 0, duration: 1.6 }}
      />

      <div className="relative z-10">
        <div className="font-light text-text-white text-left md:max-w-6/8">
          <motion.h1
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            custom={{ y: 0, duration: 1.6 }}
            className="text-3xl font-semibold md:text-5xl"
          >
            Archiv
          </motion.h1>
          <motion.h2
            variants={slideInLeftVariant}
            initial="hidden"
            animate="visible"
            className="text-xl font-thin text-left"
          >
            Stöbere durch Beiträge aus den letzten Jahren
          </motion.h2>
        </div>
      </div>
    </motion.section>
  );
}
