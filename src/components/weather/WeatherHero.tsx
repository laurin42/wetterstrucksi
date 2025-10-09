"use client";

import { motion } from "framer-motion";

export default function WeatherHero() {
  const backgroundImage = `url("/images/weatherHeroLight.jpg")`;

  return (
    <motion.section
      className="relative w-full rounded-t-sm px-4 py-2 md:px-8 md:pt-6 md:pb-4 flex flex-col justify-center mb-2 overflow-hidden"
      style={{
        minHeight: "80px",
        height: "auto",
        backgroundImage: backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/66 z-0 rounded-t-sm" />

      <motion.div className="relative z-10">
        <div className="font-light text-text-white text-left md:mb-0 md:max-w-6/8">
          <h1 className="text-3xl font-semibold md:text-5xl md:mb-2">Wetter</h1>
          <h2 className="text-xl font-thin text-left">
            Neuste Beiträge, Updates, Rückblicke & Persönliches
          </h2>
        </div>
      </motion.div>

      <div className="flex items-end relative z-10">
        <motion.div className="flex flex-col items-center text-text-white font-semibold text-center"></motion.div>
      </div>
    </motion.section>
  );
}
