"use client";

import { motion } from "framer-motion";
import { useMotionVariants } from "@/lib/animation/useMotionVariants";

export function AboutShort() {
  const { sectionAnimation } = useMotionVariants();
  return (
    <motion.section
      className="relative w-full flex flex-col items-center 
      justify-center bg-foreground-secondary/44 backdrop-blur-sm
        h-[94vh] md:h-auto
      "
      initial="hidden"
      whileInView="visible"
      variants={sectionAnimation}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionAnimation}
        className="flex flex-col items-center mx-8 md:mx-0 justify-center gap-y-8 py-4 md:py-12 md:px-32"
      >
        <h2 className="text-4xl font-thin tracking-wide text-left text-text">
          Über wetterstrucksi.de
        </h2>

        <p className="leading-relaxed">
          Ich bin Jens Strucks und u. a. Hobby-Meteorologe. Auf Facebook und
          Instagram verfolgen mehr als 10.000 Menschen seit 2011 meine täglichen
          Vorhersagen sowie sachlichen Auseinandersetzungen zum Wetter. Dabei
          ist es mir wichtig, einen Wetterdienst zur Verfügung zu stellen, der
          unabhängig arbeitet und die beste Vorhersage für deine Stadt bietet.
        </p>
        <p className="leading-relaxed">
          Mit diesem Vertrauen arbeite ich seit mehr als 10 Jahren sehr
          leidenschaftlich und seriös. Mein Ziel ist es, mit dieser Seite eine
          Wohlfühloase zu schaffen, bei der sich ausgelassen über das Wetter
          unterhalten werden kann.
        </p>
      </motion.div>
    </motion.section>
  );
}
