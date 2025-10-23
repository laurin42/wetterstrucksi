"use client";

import { motion } from "framer-motion";

export default function Datenschutz() {
  return (
    <motion.section>
      <motion.div className="flex flex-col gap-y-2 max-w-6xl mx-auto bg-foreground-secondary/44 p-4 md:p-16">
        <h1 className="text-4xl font-thin tracking-wider pb-2 mb-4 md:mb-8">
          Datenschutzerklärung
        </h1>

        <h2 className="text-2xl font-thin tracking-wider border-b border-text/40 py-2 mb-4">
          1. Verantwortlicher
        </h2>
        <p className="max-w-xl">
          Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser
          Website ist:
        </p>
        <p className="max-w-xs">
          Jens Strucks
          <br />
          Pestalozzistraße&nbsp;3
          <br />
          52134&nbsp;Herzogenrath
          <br />
          E-Mail:&nbsp;
          <a
            href="mailto:kontakt@wetterstrucksi.de"
            className="underline text-accent"
          >
            kontakt@wetterstrucksi.de
          </a>
        </p>

        <h2 className="text-2xl font-thin tracking-wider border-b border-text/40 py-2 mb-4">
          2. Allgemeines zur Datenverarbeitung
        </h2>
        <p>
          Der Schutz Ihrer persönlichen Daten ist mir wichtig. Ich verarbeite
          personenbezogene Daten nur, soweit dies zur Bereitstellung einer
          funktionsfähigen Website und der angebotenen Inhalte notwendig ist.
          Eine Weitergabe an Dritte erfolgt nicht.
        </p>

        <h2 className="text-2xl font-thin tracking-wider border-b border-text/40 py-2 mb-4">
          3. Server-Log-Dateien
        </h2>
        <p>
          Beim Aufruf dieser Website werden durch den Hostinganbieter
          automatisch Informationen erfasst, die Ihr Browser übermittelt. Dazu
          gehören:
        </p>
        <ul className="list-disc list-inside">
          <li>IP-Adresse</li>
          <li>Datum und Uhrzeit der Anfrage</li>
          <li>Browsertyp und Browserversion</li>
          <li>Betriebssystem</li>
          <li>Referrer-URL</li>
        </ul>
        <p>
          Diese Daten werden ausschließlich zur Sicherstellung des technischen
          Betriebs und zur Abwehr von Angriffen verarbeitet. Eine
          Zusammenführung dieser Daten mit anderen Quellen erfolgt nicht. Die
          Speicherung erfolgt für kurze Zeit und wird automatisch gelöscht.
        </p>

        <h2 className="text-2xl font-thin tracking-wider border-b border-text/40 py-2 mb-4">
          4. Eigene API / Beiträge
        </h2>
        <p>
          Die Website nutzt eine eigene API zur Bereitstellung von Beiträgen und
          Inhalten. Dabei werden keine personenbezogenen Daten der Besucher
          gespeichert oder analysiert. Die Kommunikation erfolgt ausschließlich
          zwischen Ihrem Browser und meinem Server.
        </p>

        <h2 className="text-2xl font-thin tracking-wider border-b border-text/40 py-2 mb-4">
          5. Keine Cookies und keine Tracking-Tools
        </h2>
        <p>
          Diese Website verwendet keine Cookies, keine Analyse-Tools (wie Google
          Analytics) und keine Tracking-Mechanismen. Ihr Besuch wird nicht
          ausgewertet oder zu Marketingzwecken gespeichert.
        </p>

        <h2 className="text-2xl font-thin tracking-wider border-b border-text/40 py-2 mb-4">
          6. Kontaktaufnahme
        </h2>
        <p>
          Wenn Sie mich per E-Mail kontaktieren, werden die von Ihnen
          übermittelten Daten (z.&nbsp;B. Name, E-Mail-Adresse, Nachricht)
          ausschließlich zur Bearbeitung Ihrer Anfrage verwendet. Nach Abschluss
          der Bearbeitung werden die Daten gelöscht, sofern keine gesetzlichen
          Aufbewahrungspflichten bestehen.
        </p>

        <h2 className="text-2xl font-thin tracking-wider border-b border-text/40 py-2 mb-4">
          7. Rechte der betroffenen Personen
        </h2>
        <p>Sie haben gemäß DSGVO folgende Rechte:</p>
        <ul className="list-disc list-inside">
          <li>Auskunft über Ihre gespeicherten Daten</li>
          <li>Berichtigung unrichtiger Daten</li>
          <li>Löschung Ihrer Daten</li>
          <li>Einschränkung der Verarbeitung</li>
          <li>Widerspruch gegen die Verarbeitung</li>
          <li>Beschwerderecht bei einer Datenschutzaufsichtsbehörde</li>
        </ul>

        <h2 className="text-2xl font-thin tracking-wider border-b border-text/40 py-2 mb-4">
          8. Bildnachweise / Credits
        </h2>
        <p>
          Einige Bilder und Grafiken auf dieser Website stammen teilweise von
          Pixabay (https://pixabay.com/) und werden gemäß der Pixabay-Lizenz
          verwendet. Vielen Dank an die jeweiligen Urheber.
        </p>

        <h2 className="text-2xl font-thin tracking-wider border-b border-text/40 py-2 mb-4">
          9. Änderung dieser Datenschutzerklärung
        </h2>
        <p>
          Ich behalte mir vor, diese Datenschutzerklärung zu aktualisieren, um
          sie an geänderte rechtliche Anforderungen oder technische Änderungen
          anzupassen. Es gilt die jeweils aktuelle Version auf dieser Website.
        </p>
      </motion.div>
    </motion.section>
  );
}
