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
      className="max-w-6xl mx-auto pt-8 pb-16 tablet-xs:mb-8  space-y-8 h-auto"
    >
      <motion.ol
        initial="hidden"
        animate="visible"
        variants={fadeInVariant}
        custom={{ y: 0, duration: 3.0 }}
        viewport={{ once: false, amount: 0.9 }}
        className="relative border-text/40"
      >
        <div className="relative flex justify-start">
          <div className="absolute top-0 bottom-0 left-1/2 w-[2px] -translate-x-1/2 bg-text/30"></div>

          <div className="absolute w-[20px] h-[20px] top-0 left-1/2 bg-header-background rounded-full -translate-x-1/2 -translate-y-1/2"></div>

          <ol className="w-1/2">
            <li>
              <div className="p-8 mr-24 text-balance bg-foreground-secondary/44 rounded-md">
                <time className="mb-1 text-sm font-normal leading-none text-text/80">
                  2005
                </time>
                <motion.h2
                  initial="hidden"
                  animate="visible"
                  variants={fadeInVariant}
                  custom={{ y: 0, duration: 1.6 }}
                  viewport={{ once: true, amount: 0.1 }}
                  className="w-fit text-3xl font-light text-text pb-2 mb-4 border-b-[1px] border-text/40"
                >
                  Wie alles begann
                </motion.h2>

                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  variants={sectionAnimation}
                  viewport={viewportOnce}
                  className="leading-relaxed pb-4"
                >
                  Meine Leidenschaft für das Wetter begann 2005. Im zarten Alter
                  von 11 erzählte ich meiner Tante davon, wie faszinierend die
                  Wolken sind und um welche Wolke es sich handelt, die ich in
                  einem Buch entdeckt habe. Zuerst habe ich Wolkenformationen
                  mit Radarbilden abgeglichen – so erkannte ich schnell Muster,
                  die mir verrieten, ob es bald regnen könnte.
                </motion.p>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  variants={sectionAnimation}
                  viewport={viewportOnce}
                  className="leading-relaxed"
                >
                  Später beschäftigte ich mich mit Modellberechnungen der
                  Wettermodelle und analysierte diese. So konnte ich mich im
                  Bereich der Wetterprognosen für die kommenden Tage
                  spezialisieren.
                </motion.p>
              </div>
            </li>
          </ol>
        </div>

        <div className="relative flex justify-end -mt-24">
          <div className="absolute top-24 bottom-0 left-1/2 w-[2px] bg-text/30 -translate-x-1/2"></div>

          <div className="absolute w-[20px] h-[20px] top-0 left-1/2 bg-header-background rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <ol className="w-1/2">
            <li>
              <div className="p-8 ml-24 text-balance bg-foreground-secondary/44 rounded-md">
                <time className="mb-1 text-sm font-normal leading-none text-text/80">
                  2010
                </time>
                <motion.h2
                  initial="hidden"
                  whileInView="visible"
                  variants={sectionAnimation}
                  viewport={viewportOnce}
                  className="w-fit text-3xl font-light text-text pb-2 mb-4 border-b-[1px] border-text/40"
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
                  2010 kam mir die Idee, meine Prognosen nicht nur mit Freunden
                  und Familie zu teilen, sondern einer breiteren Masse
                  zugänglich zu machen. 2011 entstand dann die Seite
                  „Wetterstrucksi Düsseldorf“ – heute mit über 10.000 Followern.
                </motion.p>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  variants={sectionAnimation}
                  viewport={viewportOnce}
                  className="leading-relaxed"
                >
                  Durch meine Verbundenheit im Handballverein SG Unterrath in
                  Düsseldorf konnte ich von Anfang an auf eine gewisse
                  Reichweite bauen. Aus anfänglich 500 Menschen wuchs schnell
                  eine lebendige Community.
                </motion.p>
              </div>
            </li>
          </ol>
        </div>

        <div className="relative flex justify-start -mt-12">
          <div className="absolute top-12 bottom-0 left-1/2 w-[2px] bg-text/30 -translate-x-1/2"></div>
          <div className="absolute w-[20px] h-[20px] top-0 left-1/2 bg-header-background rounded-full -translate-x-1/2 -translate-y-1/2"></div>

          <ol className="w-1/2">
            <li>
              <div className="p-8 mr-24 text-balance bg-foreground-secondary/44 rounded-md">
                <time className="mb-1 text-sm font-normal leading-none text-text/80">
                  <time className="mb-1 text-sm font-normal leading-none text-text/80">
                    2016 — 2024
                  </time>
                </time>
                <motion.h2
                  initial="hidden"
                  whileInView="visible"
                  variants={sectionAnimation}
                  viewport={viewportOnce}
                  className="w-fit text-3xl font-light text-text pb-2 mb-4 border-b-[1px] border-text/40"
                >
                  Medien & öffentliche Auftritte
                </motion.h2>

                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  variants={sectionAnimation}
                  viewport={viewportOnce}
                  className="leading-relaxed mb-8"
                >
                  2016 porträtierte mich die Rheinische Post erstmals, weitere
                  Interviews mit WDR, RP-Online und Auftritte im
                  „Rheinpegel“-Podcast folgten. Von September 2022 bis Juli 2024
                  war ich offizieller Wetterexperte bei Antenne Düsseldorf und
                  versorgte die Region mit Prognosen.
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
                      className="w-full h-full mb-1"
                    />
                    <em>Im Gespräch mit dem WDR</em>
                  </div>
                </motion.div>
              </div>
            </li>
          </ol>
        </div>

        <div className="relative flex justify-end -mt-72">
          <div className="absolute top-72 bottom-0 left-1/2 w-[2px] -translate-x-1/2 bg-gradient-to-b from-text/30 to-transparent"></div>

          <div className="absolute w-[20px] h-[20px] top-0 left-1/2 bg-header-background rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <ol className="w-1/2">
            <li>
              <div className="p-8 ml-24 text-balance bg-foreground-secondary/44 rounded-md">
                <time className="mb-1 text-sm font-normal leading-none text-text/80">
                  Aktuell & Ausblick
                </time>
                <motion.h2
                  initial="hidden"
                  whileInView="visible"
                  variants={sectionAnimation}
                  viewport={viewportOnce}
                  className="w-fit text-3xl font-light text-text pb-2 mb-4 border-b-[1px] border-text/40"
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
                  Meine Wetterkanäle sind ein wichtiger Teil meines Lebens.
                  Täglich widme ich ihnen 30 Minuten bis mehrere Stunden:
                  Datenanalysen, Vergleich von Modellen, Erstellen von Grafiken,
                  Pflege der Community oder auch Live-Ticker bei brisanten
                  Wetterlagen.
                </motion.p>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  variants={sectionAnimation}
                  viewport={viewportOnce}
                  className="leading-relaxed md:mb-4 mb-8"
                >
                  Gerade in einer Zeit, die von Reichweite lebt, lege ich Wert
                  auf einen sachlich-nüchternen Ansatz. Dadurch konnte ich mir
                  das Vertrauen vieler Menschen erarbeiten, die meine Prognosen
                  oft als wichtigste Informationsquelle nutzen.
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
                  klassischen Apps oder Portalen. Unterstützung durch Sponsoring
                  und Spenden meiner Community motiviert mich sehr – an dieser
                  Stelle ein herzliches DANKE.
                </motion.p>
              </div>
            </li>
          </ol>
        </div>
      </motion.ol>
      <div className="mt-32 relative flex flex-col w-full justify-center items-center text-center text-balance p-16">
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-accent rounded-xs"></div>
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-accent rounded-xs"></div>

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
          className="leading-relaxed "
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
      </div>
    </motion.section>
  );
}
