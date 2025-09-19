"use client";
import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <motion.div
      className="relative bg-cover bg-center 
                 w-full h-[80vh] sm:h-screen md:h-full 
                 rounded-md shadow-md"
      style={{ backgroundImage: `url(/images/bioHero.jpg)` }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-black/20 rounded-md"></div>
      <div className="absolute inset-0 bg-accent/20 rounded-md"></div>

      <div className="relative z-10 flex flex-col justify-end items-end h-full p-8 md:p-12 md:pb-6 md:px-20">
        <h1 className="text-6xl font-light text-white">Über mich -</h1>
        <h2
          className="text-4xl font-light md:mb-4 text-white"
          style={{ textShadow: "3px 3px 8px rgba(177, 169, 169, 0.4)" }}
        >
          Jens Strucks
        </h2>
      </div>
    </motion.div>
  );
}
