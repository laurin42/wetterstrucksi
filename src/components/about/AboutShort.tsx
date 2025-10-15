"use client";

import { motion } from "framer-motion";
import MorePostsLink from "../posts/MorePostsLink";
import { useMotionVariants } from "@/lib/animation/useMotionVariants";

export function AboutShort() {
  const { sectionAnimation } = useMotionVariants();
  return (
    <motion.section
      className="relative w-full flex flex-col items-center 
      justify-start bg-foreground
      h-[calc(100vh-4rem)] md:h-[70vh]"
      initial="hidden"
      whileInView="visible"
      variants={sectionAnimation}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionAnimation}
        className="flex flex-col items-center mx-8 md:mx-0 justify-center pt-16 md:py-12 md:px-32"
      >
        <h2 className="text-4xl font-thin tracking-wide text-center text-text mb-16">
          Über wetterstrucksi.de
        </h2>

        <p className="leading-relaxed mb-8">
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
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionAnimation}
        className="mt-16 md:mt-16"
      >
        <MorePostsLink href="/about" label="Erfahre hier mehr über mich »" />
      </motion.div>
    </motion.section>
  );
}
