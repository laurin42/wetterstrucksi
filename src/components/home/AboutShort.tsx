import Link from "next/link";

export function AboutShort() {
  return (
    <section
      className="relative w-full h-svh flex flex-col items-center 
      justify-center bg-foreground-secondary/44
      "
    >
      <div className="max-w-6xl flex flex-col items-center justify-center px-16 text-left tablet-xs:text-center tablet-xs:text-balance">
        <h2 className="text-4xl font-thin tracking-wider text-left text-text pb-2 mb-8 border-b border-text/40">
          Über wetterstrucksi.de
        </h2>

        <p className="leading-relaxed">
          Ich bin Jens Strucks, Hobby-Meteorologe. Auf Facebook und Instagram
          verfolgen mehr als 10.000 Menschen seit 2011 meine täglichen
          Vorhersagen sowie sachlichen Auseinandersetzungen zum Wetter. Dabei
          ist es mir wichtig, einen Wetterdienst zur Verfügung zu stellen, der
          unabhängig arbeitet und die beste Vorhersage für deine Stadt bietet.
        </p>
        <p className="leading-relaxed mb-8">
          Mit diesem Vertrauen arbeite ich seit mehr als 10 Jahren sehr
          leidenschaftlich und seriös. Mein Ziel ist es, mit dieser Seite eine
          Wohlfühloase zu schaffen, bei der sich ausgelassen über das Wetter
          unterhalten werden kann.
        </p>
      </div>
    </section>
  );
}
