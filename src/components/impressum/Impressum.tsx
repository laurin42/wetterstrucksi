"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Impressum() {
  return (
    <motion.section>
      <motion.div className="flex flex-col gap-y-2 max-w-6xl mx-auto bg-foreground-secondary/44 p-4">
        <h1 className="text-4xl font-thin tracking-wider pb-2 mb-4 md:mb-8">
          Impressum
        </h1>
        <strong>Angaben gemäß § 5 TMG</strong>
        <h2 className="text-2xl font-thin tracking-wider border-b-[1px] border-text/40 py-2 mb-4">
          Kontakt
        </h2>
        <p className="flex flex-col max-w-xs">
          Jens Strucks Pestalozzistraße 3 52134 Herzogenrath{" "}
          <p>Telefon: +49 (0) 152 24 14 38 26 </p>
          <p>E-Mail: kontakt@wetterstrucksi.de</p>
        </p>
        <p className="flex flex-col max-w-xs">
          Handelsregister: reiche ich nach Registergericht: Amtsgericht
          Bielefeld
          <p>
            Umsatzsteuer-ID Umsatzsteuer-Identifikationsnummer gemäß § 27 a
            Umsatzsteuergesetz: reiche ich nach
          </p>
        </p>
        <p>
          Redaktionell Verantwortlicher Jens Strucks Kreuzberger Str. 13 33619
          Bielefeld
        </p>
        <p>
          EU-Streitschlichtung Die Europäische Kommission stellt eine{" "}
          <Link
            href="https://ec.europa.eu/consumers/odr"
            className="underline text-accent"
          >
            Plattform{" "}
          </Link>
          zur Online-Streitbeilegung (OS) bereit: . Unsere E-Mail-Adresse finden
          Sie oben im Impressum.
        </p>
        <p>Verbraucherstreitbeilegung/Universalschlichtungsstelle</p>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
        <h2 className="text-2xl font-thin tracking-wider border-b-[1px] border-text/40 py-2 mb-4">
          Haftung für Inhalte
        </h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
          Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
          hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
          Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
          Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
          Inhalte umgehend entfernen. Haftung für Links Unser Angebot enthält
          Links zu externen Websites Dritter, auf deren Inhalte wir keinen
          Einfluss haben. Deshalb können wir für diese fremden Inhalte auch
          keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist
          stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
          Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt
          der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle
          der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
          Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
          Rechtsverletzungen werden wir derartige Linksumgehend entfernen.
        </p>
        <h2 className="text-2xl font-thin tracking-wider border-b-[1px] border-text/40 py-2 mb-4">
          Urheberrecht
        </h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.{" "}
        </p>
      </motion.div>
    </motion.section>
  );
}
