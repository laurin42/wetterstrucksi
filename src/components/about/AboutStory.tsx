"use client";

import { motion } from "framer-motion";
import { useMotionVariants } from "@/lib/animation/useMotionVariants";

export function AboutStory() {
  const { sectionAnimation, viewportOnce, fadeInVariant } = useMotionVariants();

  return (
    <motion.section
      variants={fadeInVariant}
      initial="hidden"
      animate="visible"
      custom={{ y: 0, duration: 1.6 }}
      className="max-w-6xl mx-auto bg-foreground-secondary/88 tablet-xs:rounded-lg tablet-xs:shadow-lg pt-8 pb-16 px-8 tablet-xs:mb-8 tablet-xs:p-24 space-y-8 h-auto"
    >
      <ol className="relative border-s border-text/40">
        <li className="mb-10 ms-8">
          <div className="absolute w-3 h-3 bg-accent rounded-full mt-1.5 -start-1.5 "></div>
          <time className="mb-1 text-sm font-normal leading-none text-text/80">
            2005
          </time>
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={fadeInVariant}
            custom={{ y: 0, duration: 1.6 }}
            viewport={{ once: true, amount: 0.1 }}
            className="w-fit text-3xl font-light text-text pb-4"
          >
            Wie alles begann
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={sectionAnimation}
            viewport={viewportOnce}
            className="leading-relaxed"
          >
            Meine Leidenschaft für das Wetter begann 2005. Im zarten Alter von
            11 erzählte ich meiner Tante davon, wie faszinierend die Wolken sind
            und um welche Wolke es sich handelt, die ich in einem Buch entdeckt
            habe. Zuerst habe ich Wolkenformationen mit Radarbilden abgeglichen
            – so erkannte ich schnell Muster, die mir verrieten, ob es bald
            regnen könnte.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={sectionAnimation}
            viewport={viewportOnce}
            className="leading-relaxed md:mb-44 mb-8"
          >
            Später beschäftigte ich mich mit Modellberechnungen der
            Wettermodelle und analysierte diese. So konnte ich mich im Bereich
            der Wetterprognosen für die kommenden Tage spezialisieren.
          </motion.p>
        </li>

        <li className="mb-10 ms-8">
          <div className="absolute w-3 h-3 bg-accent rounded-full mt-1.5 -start-1.5 "></div>
          <time className="mb-1 text-sm font-normal leading-none text-text/80">
            2010
          </time>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={sectionAnimation}
            viewport={viewportOnce}
            className="w-fit text-3xl mb-4 font-light text-left  text-text "
          >
            Der Start von „Wetterstrucksi“
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={sectionAnimation}
            viewport={viewportOnce}
            className="leading-relaxed"
          >
            2010 kam mir die Idee, meine Prognosen nicht nur mit Freunden und
            Familie zu teilen, sondern einer breiteren Masse zugänglich zu
            machen. 2011 entstand dann die Seite „Wetterstrucksi Düsseldorf“ –
            heute mit über 10.000 Followern.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={sectionAnimation}
            viewport={viewportOnce}
            className="leading-relaxed md:mb-44 mb-8"
          >
            Durch meine Verbundenheit im Handballverein SG Unterrath in
            Düsseldorf konnte ich von Anfang an auf eine gewisse Reichweite
            bauen. Aus anfänglich 500 Menschen wuchs schnell eine lebendige
            Community.
          </motion.p>
        </li>

        <li className="mb-10 ms-8">
          <div className="absolute w-3 h-3 bg-accent rounded-full mt-1.5 -start-1.5 "></div>
          <time className="mb-1 text-sm font-normal leading-none text-text/80">
            2016 - 2024
          </time>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={sectionAnimation}
            viewport={viewportOnce}
            className="w-fit  text-3xl mb-4 font-light text-left md:text-center text-text "
          >
            Medien & öffentliche Auftritte
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={sectionAnimation}
            viewport={viewportOnce}
            className="leading-relaxed md:mb-24 mb-8"
          >
            2016 porträtierte mich die Rheinische Post erstmals, weitere
            Interviews mit WDR, RP-Online und Auftritte im „Rheinpegel“-Podcast
            folgten. Von September 2022 bis Juli 2024 war ich offizieller
            Wetterexperte bei Antenne Düsseldorf und versorgte die Region mit
            Prognosen.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={sectionAnimation}
            className="pb-8"
          >
            <div className="mx-auto mt-2 aspect-video rounded-md max-w-2xl h-5xl md:max-h-3xl">
              <video
                src="/videos/wdrInterview.mp4"
                title="Interview WDR"
                controls
                className="w-full h-full"
              />
              <em>Im Gespräch mit dem WDR</em>
            </div>
          </motion.div>
        </li>

        <li className="mb-10 ms-8">
          <div className="absolute w-3 h-3 bg-accent rounded-full mt-1.5 -start-1.5 "></div>
          <time className="mb-1 text-sm font-normal leading-none text-text/80">
            Aktuell & Ausblick
          </time>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={sectionAnimation}
            viewport={viewportOnce}
            className="w-fit  text-3xl mb-4 font-light text-left md:text-center text-text "
          >
            Mein Alltag mit dem Wetter
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={sectionAnimation}
            viewport={viewportOnce}
            className="leading-relaxed mb-4"
          >
            Meine Wetterkanäle sind ein wichtiger Teil meines Lebens. Täglich
            widme ich ihnen 30 Minuten bis mehrere Stunden: Datenanalysen,
            Vergleich von Modellen, Erstellen von Grafiken, Pflege der Community
            oder auch Live-Ticker bei brisanten Wetterlagen.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={sectionAnimation}
            viewport={viewportOnce}
            className="leading-relaxed md:mb-4 mb-8"
          >
            Gerade in einer Zeit, die von Reichweite lebt, lege ich Wert auf
            einen sachlich-nüchternen Ansatz. Dadurch konnte ich mir das
            Vertrauen vieler Menschen erarbeiten, die meine Prognosen oft als
            wichtigste Informationsquelle nutzen.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={sectionAnimation}
            viewport={viewportOnce}
            className="leading-relaxed md:mb-4 mb-8"
          >
            Der lokale Bezug auf Düsseldorf und die persönliche
            Auseinandersetzung mit den Wetterkarten unterscheidet mich von
            klassischen Apps oder Portalen. Unterstützung durch Sponsoring und
            Spenden meiner Community motiviert mich sehr – an dieser Stelle ein
            herzliches DANKE.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={sectionAnimation}
            viewport={viewportOnce}
            className="leading-relaxed"
          >
            Mein Ziel bleibt, eine Plattform für hochwertigen Austausch rund ums
            Wetter zu schaffen. Der Schritt von Facebook hin zu einer eigenen
            Homepage war für mich ein entscheidender. Seit über 10 Jahren
            investiere ich viel Herzblut in die bestmöglichen Prognosen für
            Düsseldorf – und ich bin noch lange nicht müde.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={sectionAnimation}
            viewport={viewportOnce}
            className="leading-relaxed md:mb-8 mb-8"
          >
            Ich freue mich auf euch – bei gutem wie bei schlechtem Wetter.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={sectionAnimation}
            viewport={viewportOnce}
            className="leading-relaxed font-semibold text-xl pt-4"
          >
            In Liebe, Jens
          </motion.p>
        </li>
      </ol>
    </motion.section>
  );
}
