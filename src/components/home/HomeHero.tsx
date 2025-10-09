"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useMounted } from "@/lib/useMounted";

export default function HomeHero() {
  const { theme } = useTheme();
  const mounted = useMounted();
  const backgroundImage = mounted
    ? theme === "dark"
      ? `url("/images/homeHeroDark.jpg")`
      : `url("/images/homeHeroLight.jpg")`
    : undefined;

  return (
    <motion.section
      className="relative w-full px-4 md:px-8 py-4 rounded-t-sm mb-2 md:flex justify-center md:justify-between"
      initial="hidden"
      animate="visible"
      style={{
        minHeight: "80px",
        backgroundImage: backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0 rounded-t-sm" />

      <motion.div className="relative z-10">
        <div className="font-semibold text-text-white text-center md:text-left md:max-w-6/8">
          <h1 className="text-4xl pt-2">Dein Ort für Wetter in Düsseldorf</h1>
        </div>
      </motion.div>

      <div className="flex items-center relative z-10">
        <motion.div className="flex flex-col items-center text-text-white font-semibold text-center">
          <p>Urlaubszeiten:</p>
          <p>1. September – 5. Oktober</p>
          <p>12. Dezember – 8. Januar</p>
          <p className="font-normal">
            (in diesen Zeiträumen kommen die Berichte unregelmäßig)
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
