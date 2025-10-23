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
      className="max-w-6xl mx-auto bg-foreground-secondary/44 backdrop-blur-md pt-8 pb-16 px-8 space-y-8 h-auto"
    >
      <div className="max-w-4xl mx-auto flex flex-col justify-center">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          custom={{ y: 0, duration: 1.6 }}
          viewport={{ once: true, amount: 0.1 }}
          className="w-fit mx-auto text-4xl font-light text-left md:text-center text-text border-b-[1px] border-text/40 pb-2 mb-16 mt-16"
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
          Meine Leidenschaft für das Wetter begann 2005. Im zarten Alter von 11
          erzählte ich meiner Tante davon, wie faszinierend die Wolken sind und
          um welche Wolke es sich handelt, die ich in einem Buch entdeckt habe.
          Zuerst habe ich Wolkenformationen mit Radarbilden abgeglichen – so
          erkannte ich schnell Muster, die mir verrieten, ob es bald regnen
          könnte.
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={sectionAnimation}
          viewport={viewportOnce}
          className="leading-relaxed md:mb-12 mb-8"
        >
          Später beschäftigte ich mich mit Modellberechnungen der Wettermodelle
          und analysierte diese. So konnte ich mich im Bereich der
          Wetterprognosen für die kommenden Tage spezialisieren.
        </motion.p>

        <motion.h3
          initial="hidden"
          whileInView="visible"
          variants={sectionAnimation}
          viewport={viewportOnce}
          className="w-fit mx-auto text-3xl mb-6 font-light text-left md:text-center text-text border-b-[1px] border-text/40 pb-2"
        >
          Der Start von „Wetterstrucksi“
        </motion.h3>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={sectionAnimation}
          viewport={viewportOnce}
          className="leading-relaxed"
        >
          2010 kam mir die Idee, meine Prognosen nicht nur mit Freunden und
          Familie zu teilen, sondern einer breiteren Masse zugänglich zu machen.
          2011 entstand dann die Seite „Wetterstrucksi Düsseldorf“ – heute mit
          über 10.000 Followern.
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={sectionAnimation}
          viewport={viewportOnce}
          className="leading-relaxed md:mb-12 mb-8"
        >
          Durch meine Verbundenheit im Handballverein SG Unterrath in Düsseldorf
          konnte ich von Anfang an auf eine gewisse Reichweite bauen. Aus
          anfänglich 500 Menschen wuchs schnell eine lebendige Community.
        </motion.p>

        <motion.h3
          initial="hidden"
          whileInView="visible"
          variants={sectionAnimation}
          viewport={viewportOnce}
          className="w-fit mx-auto text-3xl mb-6 font-light text-left md:text-center text-text border-b-[1px] border-text/40 pb-2"
        >
          Medien & öffentliche Auftritte
        </motion.h3>
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
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={sectionAnimation}
          viewport={viewportOnce}
          className="leading-relaxed md:mb-12 mb-8"
        >
          2016 porträtierte mich die Rheinische Post erstmals, weitere
          Interviews mit WDR, RP-Online und Auftritte im „Rheinpegel“-Podcast
          folgten. Von September 2022 bis Juli 2024 war ich offizieller
          Wetterexperte bei Antenne Düsseldorf und versorgte die Region mit
          Prognosen.
        </motion.p>

        <motion.h3
          initial="hidden"
          whileInView="visible"
          variants={sectionAnimation}
          viewport={viewportOnce}
          className="w-fit mx-auto text-3xl mb-6 font-light text-left md:text-center text-text border-b-[1px] border-text/40 pb-2"
        >
          Studium & persönlicher Weg
        </motion.h3>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={sectionAnimation}
          viewport={viewportOnce}
          className="leading-relaxed"
        >
          Aktuell studiere ich Sportwissenschaften mit Schwerpunkt Psychologie
          in Bielefeld, mit dem Ziel, Sportpsychologe zu werden. Das Wetter hat
          mit meinem Studium zwar nur am Rande zu tun, dennoch spielen präzise
          Prognosen gerade für Leichtathleten, Segler oder Skifahrer eine
          wichtige Rolle.
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={sectionAnimation}
          viewport={viewportOnce}
          className="leading-relaxed md:mb-12 mb-8"
        >
          Meteorologie wollte ich bewusst nicht studieren – das Hobby soll ein
          Hobby bleiben dürfen.
        </motion.p>

        <motion.h3
          initial="hidden"
          whileInView="visible"
          variants={sectionAnimation}
          viewport={viewportOnce}
          className="w-fit mx-auto text-3xl mb-6 font-light text-left md:text-center text-text border-b-[1px] border-text/40 pb-2"
        >
          Mein Alltag mit dem Wetter
        </motion.h3>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={sectionAnimation}
          viewport={viewportOnce}
          className="leading-relaxed"
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
          className="leading-relaxed md:mb-12 mb-8"
        >
          Gerade in einer Zeit, die von Reichweite lebt, lege ich Wert auf einen
          sachlich-nüchternen Ansatz. Dadurch konnte ich mir das Vertrauen
          vieler Menschen erarbeiten, die meine Prognosen oft als wichtigste
          Informationsquelle nutzen.
        </motion.p>

        <motion.h3
          initial="hidden"
          whileInView="visible"
          variants={sectionAnimation}
          viewport={viewportOnce}
          className="w-fit mx-auto text-3xl mb-12 font-light text-left md:text-center text-text border-b-[1px] border-text/40 pb-2"
        >
          Community & Qualität
        </motion.h3>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={sectionAnimation}
          viewport={viewportOnce}
          className="leading-relaxed md:mb-12 mb-8"
        >
          Der lokale Bezug auf Düsseldorf und die persönliche Auseinandersetzung
          mit den Wetterkarten unterscheidet mich von klassischen Apps oder
          Portalen. Unterstützung durch Sponsoring und Spenden meiner Community
          motiviert mich sehr – an dieser Stelle ein herzliches DANKE.
        </motion.p>

        <motion.h3
          initial="hidden"
          whileInView="visible"
          variants={sectionAnimation}
          viewport={viewportOnce}
          className="w-fit mx-auto text-3xl mb-6 font-light text-left md:text-center text-text border-b-[1px] border-text/40 pb-2"
        >
          Ausblick
        </motion.h3>
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
          className="leading-relaxed md:mb-12 mb-8"
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
