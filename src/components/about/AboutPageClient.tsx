"use client";

import { motion } from "framer-motion";
import AboutHero from "./AboutHero";
import { AboutBio } from "@/components/about/AboutBio";
import { AboutStory } from "./AboutStory";
import { FaqAccordion } from "@/components/about/FaqAccordeon";
import Divider from "../ui/Divider";
import { faqItems } from "@/lib/faq";
import { Contact } from "../Contact";

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
      <Contact />
    </>
  );
}
