"use client";

import { motion } from "framer-motion";

const sectionAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function AboutStory() {
  return (
    <motion.section
      className="max-w-6xl mx-auto bg-card/40 backdrop-blur-md p-6 rounded-md space-y-8 min-h-[80vh] sm:min-h-screen md:my-16"
      initial="hidden"
      whileInView="visible"
      variants={sectionAnimation}
    >
      <h2 className="text-4xl font-light text-center text-text mb-8 md:mb-12">
        Wie alles begann
      </h2>

      <p className="leading-relaxed">
        Ich bin Jens Strucks und u. a. Hobby-Meteorologe. Auf Facebook und
        Instagram verfolgen mehr als 10.000 Menschen seit 2011 meine täglichen
        Vorhersagen sowie sachlichen Auseinandersetzungen zum Wetter. Dabei ist
        es mir wichtig, einen Wetterdienst zur Verfügung zu stellen, der
        unabhängig arbeitet und die beste Vorhersage für deine Stadt bietet.
      </p>
      <p className="leading-relaxed">
        Mit diesem Vertrauen arbeite ich seit mehr als 10 Jahren sehr
        leidenschaftlich und seriös. Mein Ziel ist es, mit dieser Seite eine
        Wohlfühloase zu schaffen, bei der sich ausgelassen über das Wetter
        unterhalten werden kann.
      </p>

      <p className="leading-relaxed">
        Meine Leidenschaft für das Wetter begann 2005. Im zarten Alter von 11
        erzählte ich meiner Tante davon, wie faszinierend die Wolken sind und um
        welche Wolke es sich handelt, die ich in einem Buch entdeckt habe.
        Zuerst habe ich Wolkenformationen mit Radarbilden abgeglichen – so
        erkannte ich schnell Muster, die mir verrieten, ob es bald regnen
        könnte.
      </p>
      <p className="leading-relaxed md:mb-12">
        Später beschäftigte ich mich mit Modellberechnungen der Wettermodelle
        und analysierte diese. So konnte ich mich im Bereich der Wetterprognosen
        für die kommenden Tage spezialisieren.
      </p>

      <h3 className="text-2xl font-light text-center text-text">
        Der Start von „Wetterstrucksi“
      </h3>
      <p className="leading-relaxed">
        2010 kam mir die Idee, meine Prognosen nicht nur mit Freunden und
        Familie zu teilen, sondern einer breiteren Masse zugänglich zu machen.
        2011 entstand dann die Seite „Wetterstrucksi Düsseldorf“ – heute mit
        über 10.000 Followern.
      </p>
      <p className="leading-relaxed md:mb-12">
        Durch meine Verbundenheit im Handballverein SG Unterrath in Düsseldorf
        konnte ich von Anfang an auf eine gewisse Reichweite bauen. Aus
        anfänglich 500 Menschen wuchs schnell eine lebendige Community.
      </p>

      <h3 className="text-2xl font-light text-center text-text">
        Medien & öffentliche Auftritte
      </h3>
      <p className="leading-relaxed md:mb-12">
        2016 porträtierte mich die Rheinische Post erstmals, weitere Interviews
        mit WDR, RP-Online und Auftritte im „Rheinpegel“-Podcast folgten. Von
        September 2022 bis Juli 2024 war ich offizieller Wetterexperte bei
        Antenne Düsseldorf und versorgte die Region mit Prognosen.
      </p>

      <h3 className="text-2xl font-light text-center text-text">
        Studium & persönlicher Weg
      </h3>
      <p className="leading-relaxed">
        Aktuell studiere ich Sportwissenschaften mit Schwerpunkt Psychologie in
        Bielefeld, mit dem Ziel, Sportpsychologe zu werden. Das Wetter hat mit
        meinem Studium zwar nur am Rande zu tun, dennoch spielen präzise
        Prognosen gerade für Leichtathleten, Segler oder Skifahrer eine wichtige
        Rolle.
      </p>
      <p className="leading-relaxed md:mb-12">
        Meteorologie wollte ich bewusst nicht studieren – das Hobby soll ein
        Hobby bleiben dürfen.
      </p>

      <h3 className="text-2xl font-light text-center text-text">
        Mein Alltag mit dem Wetter
      </h3>
      <p className="leading-relaxed">
        Meine Wetterkanäle sind ein wichtiger Teil meines Lebens. Täglich widme
        ich ihnen 30 Minuten bis mehrere Stunden: Datenanalysen, Vergleich von
        Modellen, Erstellen von Grafiken, Pflege der Community oder auch
        Live-Ticker bei brisanten Wetterlagen.
      </p>
      <p className="leading-relaxed md:mb-12">
        Gerade in einer Zeit, die von Reichweite lebt, lege ich Wert auf einen
        sachlich-nüchternen Ansatz. Dadurch konnte ich mir das Vertrauen vieler
        Menschen erarbeiten, die meine Prognosen oft als wichtigste
        Informationsquelle nutzen.
      </p>

      <h3 className="text-2xl font-light text-center text-text">
        Community & Qualität
      </h3>
      <p className="leading-relaxed">
        Der lokale Bezug auf Düsseldorf und die persönliche Auseinandersetzung
        mit den Wetterkarten unterscheidet mich von klassischen Apps oder
        Portalen. Unterstützung durch Sponsoring und Spenden meiner Community
        motiviert mich sehr – an dieser Stelle ein herzliches DANKE.
      </p>

      <h3 className="text-2xl font-light text-center text-text">Ausblick</h3>
      <p className="leading-relaxed">
        Mein Ziel bleibt, eine Plattform für hochwertigen Austausch rund ums
        Wetter zu schaffen. Der Schritt von Facebook hin zu einer eigenen
        Homepage war für mich ein entscheidender. Seit über 10 Jahren investiere
        ich viel Herzblut in die bestmöglichen Prognosen für Düsseldorf – und
        ich bin noch lange nicht müde.
      </p>
      <p className="leading-relaxed md:mb-12">
        Ich freue mich auf euch – bei gutem wie bei schlechtem Wetter.
      </p>
      <p className="leading-relaxed font-semibold">In Liebe, Jens</p>
    </motion.section>
  );
}
