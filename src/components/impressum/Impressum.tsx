"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Impressum() {
  return (
    <motion.section className="tablet-xs:py-16">
      <motion.div className="flex flex-col gap-y-2 max-w-6xl mx-auto bg-foreground-secondary/44 p-4 md:p-16 rounded-t-sm leading-tight">
        <h1 className="w-fit border-b border-text/40 text-3xl font-thin tracking-wider mb-8">
          Impressum
        </h1>
        <strong className="">Angaben gemäß § 5 TMG</strong>
        <p className="flex flex-col max-w-xs">
          Jens Strucks <br /> Möschepfad 16 <br /> 52134 Herzogenrath{" "}
        </p>
        <h2 className="w-fit text-xl font-semibold mt-8">Kontakt</h2>
        <p>
          <strong>Telefon: </strong>+49 (0) 152 24 14 38 26{" "}
        </p>
        <p>
          <strong>E-Mail:</strong> kontakt@wetterstrucksi.de
        </p>
        <p>
          <h2 className="w-fit text-xl font-semibold mt-4">Umsatzsteuer-ID</h2>
          Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:{" "}
          <strong>DE20254073107</strong>
        </p>
        <p>
          <h2 className="w-fit text-xl font-semibold mt-8">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </h2>{" "}
          Jens Strucks Möschepfad 16 52134 Herzogenrath
        </p>
        <p>
          EU-Streitschlichtung Die Europäische Kommission stellt eine{" "}
          <Link
            href="https://consumer-redress.ec.europa.eu/index_de"
            target="_blank"
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
        <h2 className="w-fit text-xl font-semibold mt-8">
          Haftung für Inhalte
        </h2>
        Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf
        diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
        bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
        übermittelte oder gespeicherte fremde Informationen zu überwachen oder
        nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
        hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
        Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
        Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
        entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
        entfernen
        <h2 className="w-fit text-xl font-semibold mt-8">Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
          permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
          konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>
        <h2 className="w-fit text-xl font-semibold mt-8">Urheberrecht</h2>
        <p>
          Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          Soweit Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
          werden die Urheberrechte Dritter beachtet und entsprechende Inhalte
          als solche gekennzeichnet. Solltest du auf eine
          Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden derartige Inhalte umgehend entfernt.
        </p>
      </motion.div>
    </motion.section>
  );
}
