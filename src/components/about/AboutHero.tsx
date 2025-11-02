"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMotionVariants } from "@/lib/animation/useMotionVariants";

export default function AboutHero() {
  const backgroundImage = "/images/about/bioHero.jpg";

  const { sectionAnimation, slideInLeftVariant, viewportOnce, fadeInVariant } =
    useMotionVariants();

  return (
    <motion.div
      variants={fadeInVariant}
      initial="hidden"
      animate="visible"
      custom={{ y: 0, duration: 1.2 }}
      className="relative w-full h-[calc(100svh-64px)] md:h-[74dvh] flex items-end pb-0"
      style={{
        backgroundImage,
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
            className="object-cover object-center z-0 tablet-xs:rounded-lg"
            preload={true}
          />
        </>
      )}
      <div className="absolute inset-0 bg-black/20 tablet-xs:rounded-lg z-10" />

      <motion.div
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
        custom={{ y: 0, duration: 1.6 }}
        className="absolute inset-0 bg-gradient-to-t from-black/80 from-0% via-black/50 via-20% to-transparent to-33% z-0 tablet-xs:rounded-lg"
      />

      <div className="flex flex-col z-10 mx-auto justify-center items-center w-full pb-8">
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
          className="text-3xl text-text-white font-thin text-left border-b-[1px] tracking-wider border-text-white/40 md:border-none"
        >
          - Jens Strucks -
        </motion.h2>
      </div>
    </motion.div>
  );
}
