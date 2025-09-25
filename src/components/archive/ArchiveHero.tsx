"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useMounted } from "@/lib/useMounted";

export default function ArchiveHero() {
  const { theme } = useTheme();
  const mounted = useMounted();
  const backgroundImage = mounted
    ? theme === "dark"
      ? `url("/images/archiveHeroDark.jpg")`
      : `url("/images/archiveHeroLight.jpg")`
    : undefined;

  return (
    <motion.section
      className="relative max-w-6xl m-auto p-8 mb-2 md:flex md:justify-between md:mb-4"
      initial="hidden"
      animate="visible"
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/66 z-0" />

      <motion.div className="relative z-10">
        <div className="font-light text-text-white text-center md:text-left mb-4 md:mb-0 md:max-w-6/8">
          <h1 className="text-4xl mb-1 md:text-5xl md:mb-2">Archiv</h1>
          <h2 className="text-xl pt-2 font-thin text-left">
            Stöbere hier durch alle Beiträge aus den letzten Jahren
          </h2>
        </div>
      </motion.div>

      <div className="flex items-end relative z-10">
        <motion.div className="flex flex-col items-center text-text-white font-semibold text-center"></motion.div>
      </div>
    </motion.section>
  );
}
