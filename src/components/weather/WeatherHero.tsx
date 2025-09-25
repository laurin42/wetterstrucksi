"use client";

import { motion } from "framer-motion";

export default function WeatherHero() {
  const backgroundImage = `url("/images/weatherHeroLight.jpg")`;

  return (
    <motion.section
      className="relative w-full p-8 mb-2 md:flex md:justify-between md:mb-4"
      initial="hidden"
      animate="visible"
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <motion.div className="relative z-10">
        <div className="font-light text-text-white text-center md:text-left mb-4 md:mb-0 md:max-w-6/8">
          <h1 className="text-4xl mb-1 md:text-5xl md:mb-2">Wetterbereich</h1>
          <h2 className="text-xl pt-2 font-thin text-left">
            Hier findet Ihr die neusten Beiträge, Updates, Rückblicke und
            persönliche Postiungs
          </h2>
        </div>
      </motion.div>

      <div className="flex items-end relative z-10">
        <motion.div className="flex flex-col items-center text-text-white font-semibold text-center"></motion.div>
      </div>
    </motion.section>
  );
}
