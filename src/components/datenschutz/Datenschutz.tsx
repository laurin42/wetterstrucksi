"use client";

import { motion } from "framer-motion";

export default function Datenschutz() {
  return (
    <motion.section className="tablet-xs:py-16">
      <motion.div className="flex flex-col gap-y-2 max-w-6xl mx-auto rounded-md tablet-xs:shadow-md shadow-header-background/32 tablet-xs:border border-white/32 p-4 tablet-xs:p-8">
        <h1 className="w-fit border-b border-text/40 text-3xl font-thin tracking-wider mb-8">
          Datenschutzerklärung
        </h1>

        <p className="flex flex-col max-w-xs">
          Diese Datenschutzerklärung informiert dich über die Art, den Umfang
          und den Zweck der Verarbeitung personenbezogener Daten auf dieser
          Website gemäß Art. 13 DSGVO.
        </p>
        <h2 className="w-fit text-xl font-semibold mt-8">
          Verantwortliche Stelle
        </h2>

        <p className="flex flex-col max-w-xs">
          Jens Strucks <br />
          Möschepfad 16 <br />
          52134 Herzogenrath
        </p>
        <p>
          <strong>Telefon: </strong>+49 (0) 152 24 14 38 26
        </p>
        <p>
          <strong>E-Mail:</strong> kontakt@wetterstrucksi.de
        </p>

        <h2 className="w-fit text-xl font-semibold mt-8">
          Allgemeine Hinweise zur Datenverarbeitung
        </h2>
        <p>
          Wir verarbeiten personenbezogene Daten der Besucher dieser Website
          nur, soweit dies zur Bereitstellung einer funktionsfähigen Website
          sowie zur Darstellung unserer Inhalte und Leistungen erforderlich ist.
          Die Verarbeitung erfolgt auf Grundlage der DSGVO, des BDSG sowie
          weiterer einschlägiger Datenschutzgesetze.
        </p>

        <h2 className="w-fit text-xl font-semibold mt-8">
          Erhebung von Server-Logfiles
        </h2>
        <p>
          Der Hosting-Dienstleister dieser Website erhebt und speichert
          automatisch Daten in sogenannten Server-Logfiles. Diese werden von
          deinem Browser automatisch übermittelt:
        </p>
        <ul className="list-disc list-inside">
          <li>IP-Adresse</li>
          <li>Datum und Uhrzeit der Anfrage</li>
          <li>Browsertyp und Browserversion</li>
          <li> Hostname des zugreifenden Rechners</li>
          <li>Betriebssystem</li>
          <li>Referrer-URL</li>
        </ul>
        <p>
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
          (berechtigtes Interesse an sicherem und stabilem Betrieb der Website).
        </p>
        <p>
          <strong>Datenlöschung:</strong> Logfiles werden automatisch nach einem
          technisch üblichen Zeitraum gelöscht, sofern keine
          sicherheitsrelevante Prüfung erforderlich ist.
        </p>

        <h2 className="w-fit text-xl font-semibold mt-8">Cookies</h2>
        <p>
          Unsere Website verwendet technisch notwendige Cookies, die für den
          Betrieb der Seite erforderlich sind (z. B. zur sicheren Bereitstellung
          von Inhalten oder zur Verwaltung von Einstellungen).
        </p>
        <p>
          <strong>Rechtsgrundlage:</strong>
          Art. 6 Abs. 1 lit. f DSGVO oder Art. 6 Abs. 1 lit. b DSGVO. Cookies,
          die nicht technisch notwendig sind, kommen nicht zum Einsatz – es sei
          denn, du verwendest später ein Analyse- oder Marketingtool. Dann
          erweitern wir diesen Abschnitt entsprechend.
        </p>

        <h2 className="w-fit text-xl font-semibold mt-8">Kontaktaufnahme</h2>
        <p>
          Wenn Sie mich per E-Mail kontaktieren, werden die von Ihnen
          übermittelten Daten (z.&nbsp;B. Name, E-Mail-Adresse, Nachricht)
          ausschließlich zur Bearbeitung Ihrer Anfrage verwendet. Nach Abschluss
          der Bearbeitung werden die Daten gelöscht, sofern keine gesetzlichen
          Aufbewahrungspflichten bestehen.
        </p>

        <h2 className="w-fit text-xl font-semibold mt-8">API / Beiträge</h2>
        <p>
          Die Website nutzt eine eigene API zur Bereitstellung von Beiträgen und
          Inhalten. Dabei werden keine personenbezogenen Daten der Besucher
          gespeichert oder analysiert. Die Kommunikation erfolgt ausschließlich
          zwischen Ihrem Browser und meinem Server.
        </p>

        <h2 className="w-fit text-xl font-semibold mt-8">
          Wetterdaten (Open-Meteo API)
        </h2>
        <p>
          Wir nutzen den externen Dienst „Open-Meteo“{" "}
          <a
            className="text-header-background"
            href="https://open-meteo.com"
            target="blank"
          >
            https://open-meteo.com
          </a>{" "}
          zur Bereitstellung von Wetterdaten. Die Abfrage erfolgt ausschließlich
          über unseren eigenen Server, sodass keine personenbezogenen Daten der
          Nutzer (z. B. IP-Adresse) an Open-Meteo übermittelt werden. Open-Meteo
          speichert nach eigenen Angaben keine personenbezogenen Daten und setzt
          keine Cookies.
        </p>

        <h2 className="w-fit text-xl font-semibold mt-8">
          Weitergabe von Daten
        </h2>
        <p>Wir übermitteln personenbezogene Daten nur an Dritte, wenn:</p>
        <ul>
          <li>du eingewilligt hast,</li>
          <li>dies zur Vertragserfüllung notwendig ist,</li>
          <li>wir gesetzlich dazu verpflichtet sind,</li>
          <li>
            oder wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO
            haben.
          </li>
        </ul>
        <p>In allen Fällen achten wir auf Datensparsamkeit</p>

        <h2 className="w-fit text-xl font-semibold mt-8">
          Speicherung und Löschung von Daten
        </h2>
        <p>
          Wir speichern personenbezogene Daten nur so lange, wie dies für den
          jeweiligen Zweck erforderlich ist oder wie wir gesetzlich dazu
          verpflichtet sind. Danach werden die Daten gelöscht oder anonymisiert.
        </p>

        <h2 className="w-fit text-xl font-semibold mt-8">
          Dir stehen folgende Rechte nach der DSGVO zu:
        </h2>
        <p>Dirst gemäß DSGVO folgende Rechte:</p>
        <ul className="list-disc list-inside">
          <li>
            <strong>Auskunft</strong> (Art. 15 DSGVO)
          </li>
          <li>
            <strong>Berichtigung</strong> (Art. 16 DSGVO)
          </li>
          <li>
            <strong>Löschung</strong> „Recht auf Vergessenwerden“ (Art. 17
            DSGVO)
          </li>
          <li>
            <strong>Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)
          </li>
          <li>
            <strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)
          </li>
          <li>
            <strong>Widerspruch</strong> gegen Verarbeitung nach Art. 6 Abs. 1
            lit. e/f DSGVO (Art. 21 DSGVO)
          </li>
          <li>
            <strong>Beschwerde</strong> bei einer Datenschutzbehörde (Art. 77
            DSGVO)
          </li>
        </ul>
        <p>
          Zuständige Aufsichtsbehörde in NRW: Landesbeauftragte für Datenschutz
          und Informationsfreiheit Nordrhein-Westfalen (LDI NRW)
        </p>

        <h2 className="w-fit text-xl font-semibold mt-8">Datensicherheit</h2>
        <p>
          Wir nutzen technische und organisatorische Maßnahmen (TLS/SSL), um
          deine Daten gegen Verlust, Zerstörung, Zugriff oder Manipulation zu
          schützen. Eine verschlüsselte Verbindung erkennst du an „https://“ und
          dem Schloss-Symbol in der Browserzeile.
        </p>

        <h2 className="w-fit text-xl font-semibold mt-8">
          Bildnachweise / Credits
        </h2>
        <p>
          Einige Bilder und Grafiken auf dieser Website stammen teilweise von
          Pixabay (https://pixabay.com/) und werden gemäß der Pixabay-Lizenz
          verwendet. Vielen Dank an die jeweiligen Urheber.
        </p>

        <h2 className="w-fit text-xl font-semibold mt-8">
          Änderung dieser Datenschutzerklärung
        </h2>
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf
          anzupassen, um sie aktuellen rechtlichen Anforderungen oder Änderungen
          unserer Leistungen anzupassen.
        </p>
      </motion.div>
    </motion.section>
  );
}
