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
      className="relative w-full rounded-t-sm px-4 py-2 md:px-8 md:pt-6 md:pb-4 flex flex-col justify-center mb-4 overflow-hidden"
      initial="hidden"
      animate="visible"
      style={{
        minHeight: "80px",
        height: "auto",
        backgroundImage: backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/72 z-0 rounded-t-sm" />

      <motion.div className="relative z-10">
        <div className="font-light text-text-white text-left md:max-w-6/8">
          <h1 className="text-3xl font-semibold md:text-5xl">Archiv</h1>
          <h2 className="text-xl font-thin text-left">
            Stöbere durch Beiträge aus den letzten Jahren
          </h2>
        </div>
      </motion.div>

      <div className="flex items-end relative z-10">
        <motion.div className="flex flex-col items-center text-text-white font-semibold text-center"></motion.div>
      </div>
    </motion.section>
  );
}
