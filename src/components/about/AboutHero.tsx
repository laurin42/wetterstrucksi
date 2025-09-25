"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  const backgroundImage = `url("/images/bioHero.jpg")`;

  return (
    <motion.section
      className="relative w-full h-[60vh] md:h-[70vh] mb-8 md:mb-12 flex items-end"
      initial="hidden"
      animate="visible"
      style={{
        backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <motion.div className="relative z-10 p-6 md:p-12">
        <h1 className="text-4xl mb-1 md:text-5xl text-text-white">Über mich</h1>
        <h2 className="text-xl font-thin text-text-white">
          Jens Strucks alias Wetterstrucksi
        </h2>
      </motion.div>
    </motion.section>
  );
}
