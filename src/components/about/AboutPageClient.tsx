"use client";

import { motion } from "framer-motion";
import AboutHero from "./AboutHero";
import { AboutBio } from "@/components/about/AboutBio";
import { AboutStory } from "./AboutStory";
import { FaqAccordion } from "@/components/about/FaqAccordeon";
import Divider from "../ui/Divider";
import { faqItems } from "@/lib/faq";

export default function AboutPageClient() {
  const sectionAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    }),
  };

  return (
    <>
      <motion.section
        className="max-w-7xl mx-auto grid grid-cols-1 items-start md:items-center md:grid-cols-2 "
        initial="hidden"
        whileInView="visible"
        variants={sectionAnimation}
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div
          className="h-6/8"
          variants={sectionAnimation}
          viewport={{ once: true, amount: 0.2 }}
        >
          <AboutHero />
        </motion.div>

        <motion.div className="h-6/8" variants={sectionAnimation}>
          <AboutBio />
        </motion.div>
      </motion.section>

      <Divider />

      <motion.section
        className="max-w-6xl mx-auto bg-card/40 backdrop-blur-md p-8 rounded-md flex flex-col items-center justify-center md:my-16"
        initial="hidden"
        whileInView="visible"
        variants={sectionAnimation}
      >
        <h2 className="text-3xl font-light text-center text-text mb-1">
          Im Gespräch mit dem WDR
        </h2>

        <div className="md:translate-y-8 md:mb-8">
          <div className="mx-auto aspect-video rounded-md overflow-hidden max-w-[1068px] max-h-[768px]">
            <video
              src="/videos/wdrInterview.mp4"
              title="Interview WDR"
              controls
              className="w-full h-full"
            />
          </div>
        </div>
      </motion.section>

      <Divider />

      <AboutStory />

      <Divider />

      <motion.section
        className="bg-card/40 backdrop-blur-md p-8 max-w-6xl mx-auto md:my-16 rounded-md"
        variants={sectionAnimation}
        initial="hidden"
        whileInView="visible"
      >
        <h2 className="text-3xl font-light text-center text-text mb-8 md:mb-12">
          Häufig gestellte Fragen
        </h2>
        <FaqAccordion items={faqItems} />
      </motion.section>

      <Divider />

      <motion.section
        className="flex flex-col justify-start text-center mx-auto min-h-[24vh]"
        variants={sectionAnimation}
        initial="hidden"
        whileInView="visible"
      >
        <h2 className="text-3xl font-light text-text mb-6">
          Lust, in Kontakt zu treten?
        </h2>
        <a
          href="/contact"
          className="mx-auto px-6 py-3 rounded-full bg-accent text-text-white font-medium shadow-md hover:bg-accent-dim transition max-w-[240px]"
        >
          Schreib mir eine Nachricht
        </a>
      </motion.section>
    </>
  );
}
