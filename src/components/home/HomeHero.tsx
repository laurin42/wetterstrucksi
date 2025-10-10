"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useMounted } from "@/lib/useMounted";
import { useMotionVariants } from "@/lib/useMotionVariants";

export default function HomeHero() {
  const { theme } = useTheme();
  const mounted = useMounted();
  const { containerVariants, fadeInVariant } = useMotionVariants();
  const backgroundImage = mounted
    ? theme === "dark"
      ? `url("/images/homeHeroDark.jpg")`
      : `url("/images/homeHeroLight.jpg")`
    : undefined;

  return (
    <motion.section
      className="relative w-full px-4 md:px-8 py-4 rounded-t-sm mb-3 md:flex justify-center md:justify-between"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{
        minHeight: "80px",
        backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0 rounded-t-sm" />

      <motion.div
        className="relative z-10 md:max-w-6/8 text-center md:text-left pt-2"
        variants={fadeInVariant}
      >
        <h1 className="text-4xl font-semibold text-white">
          Dein Ort für Wetter
        </h1>
        <motion.div
          className="relative z-10 md:max-w-6/8 text-center md:text-left pt-2"
          variants={fadeInVariant}
        >
          <h2 className="text-4xl font-semibold text-white">in Düsseldorf</h2>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex items-center relative z-10"
        variants={fadeInVariant}
      >
        <div className="flex flex-col items-center text-white font-semibold text-center">
          <p>Urlaubszeiten:</p>
          <p>1. September – 5. Oktober</p>
          <p>12. Dezember – 8. Januar</p>
          <p className="font-normal">
            (in diesen Zeiträumen kommen die Berichte unregelmäßig)
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
