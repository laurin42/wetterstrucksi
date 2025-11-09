"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useMotionVariants } from "@/lib/animation/useMotionVariants";
import { FaArrowRightLong } from "react-icons/fa6";

export function AboutShort() {
  const { sectionAnimation, fadeInVariant } = useMotionVariants();
  return (
    <motion.section
      className="relative w-full flex flex-col items-center 
      justify-around bg-foreground-secondary/44 backdrop-blur-sm
       min-h-[94vh] md:min-h-auto
      "
      initial="hidden"
      whileInView="visible"
      variants={sectionAnimation}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionAnimation}
        className="flex flex-col items-center mx-8 md:mx-0 justify-center gap-y-8 py-12 md:py-12 md:px-40"
      >
        <h2 className="text-4xl font-thin tracking-wider text-left text-text pb-2 border-b border-text/40">
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariant}
          custom={{ y: 0, duration: 1.8 }}
          className="pt-16"
        >
          <Link
            className="inline-flex items-center gap-4 px-6 py-3 rounded-md bg-transparent border-b border-accent/40 text-text/80 text-base md:text-lg font-semibold hover:bg-accent/80 active:bg-accent/80 transition-colors"
            href="/about"
          >
            Hier mehr über mich erfahren
            <FaArrowRightLong />
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
