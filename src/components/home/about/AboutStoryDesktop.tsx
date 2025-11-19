"use client";

interface TimelineItem {
  year: string;
  title: string;
  content: string[];
  videoSrc?: string;
  videoCaption?: string;
  align?: "start" | "end";
}

const timelineItems: TimelineItem[] = [
  {
    year: "2005",
    title: "Wie alles begann",
    content: [
      "Meine Leidenschaft für das Wetter begann 2005. Im zarten Alter von 11 erzählte ich meiner Tante davon, wie faszinierend die Wolken sind und um welche Wolke es sich handelt, die ich in einem Buch entdeckt habe. Zuerst habe ich Wolkenformationen mit Radarbilden abgeglichen – so erkannte ich schnell Muster, die mir verrieten, ob es bald regnen könnte.",
      "Später beschäftigte ich mich mit Modellberechnungen der Wettermodelle und analysierte diese. So konnte ich mich im Bereich der Wetterprognosen für die kommenden Tage spezialisieren.",
    ],
    align: "start",
  },
  {
    year: "2010",
    title: "Der Start von „Wetterstrucksi“",
    content: [
      "2010 kam mir die Idee, meine Prognosen nicht nur mit Freunden und Familie zu teilen, sondern einer breiteren Masse zugänglich zu machen. 2011 entstand dann die Seite „Wetterstrucksi Düsseldorf“ – heute mit über 10.000 Followern.",
      "Durch meine Verbundenheit im Handballverein SG Unterrath in Düsseldorf konnte ich von Anfang an auf eine gewisse Reichweite bauen. Aus anfänglich 500 Menschen wuchs schnell eine lebendige Community.",
    ],
    align: "end",
  },
  {
    year: "2016 – 2024",
    title: "Medien & öffentliche Auftritte",
    content: [
      "2016 porträtierte mich die Rheinische Post erstmals, weitere Interviews mit WDR, RP-Online und Auftritte im „Rheinpegel“-Podcast folgten. Von September 2022 bis Juli 2024 war ich offizieller Wetterexperte bei Antenne Düsseldorf und versorgte die Region mit Prognosen.",
    ],
    videoSrc: "/videos/wdrInterview.mp4",
    videoCaption: "Im Gespräch mit dem WDR",
    align: "start",
  },
  {
    year: "Aktuell & Ausblick",
    title: "Mein Alltag mit dem Wetter",
    content: [
      "Meine Wetterkanäle sind ein wichtiger Teil meines Lebens. Täglich widme ich ihnen 30 Minuten bis mehrere Stunden: Datenanalysen, Vergleich von Modellen, Erstellen von Grafiken, Pflege der Community oder auch Live-Ticker bei brisanten Wetterlagen.",
      "Gerade in einer Zeit, die von Reichweite lebt, lege ich Wert auf einen sachlich-nüchternen Ansatz. Dadurch konnte ich mir das Vertrauen vieler Menschen erarbeiten, die meine Prognosen oft als wichtigste Informationsquelle nutzen.",
      "Der lokale Bezug auf Düsseldorf und die persönliche Auseinandersetzung mit den Wetterkarten unterscheidet mich von klassischen Apps oder Portalen. Unterstützung durch Sponsoring und Spenden meiner Community motiviert mich sehr – an dieser Stelle ein herzliches DANKE.",
    ],
    align: "end",
  },
];

export function AboutStoryDesktop() {
  return (
    <section className="max-w-6xl mx-auto pt-8 pb-8 tablet-xs:mb-8 space-y-8 h-auto">
      <div className="relative border-text/40 text-md font-thin">
        {timelineItems.map((item, index) => {
          const isStart = item.align === "start";

          const isLast = index === timelineItems.length - 1;
          const lineClass = isLast
            ? "bg-gradient-to-b from-text/30 via-text/30 via-80% to-text/0"
            : "bg-text/32";

          return (
            <div
              key={index}
              className={`relative flex ${
                isStart ? "justify-start" : "justify-end"
              } first:mt-0 first:pt-0 -mt-32`}
            >
              <div
                className={`
            mt-8 absolute z-0 top-0 bottom-24 left-1/2 w-0.5 -translate-x-1/2 pointer-events-none
            ${lineClass}
          `}
              ></div>

              {/* Timeline circle */}
              <div className="absolute z-0 w-5 h-5 top-8 left-1/2 bg-header-background rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

              <div className={`w-1/2`}>
                <div
                  className={`p-8 ${
                    isStart ? "mr-24" : "ml-24"
                  } text-balance bg-foreground-secondary/44 rounded-md`}
                >
                  <time className="mb-1 text-sm font-normal leading-none text-text/80">
                    {item.year}
                  </time>
                  <h2 className="w-fit text-3xl font-light text-text pb-2 mb-4 border-b border-text/40">
                    {item.title}
                  </h2>
                  {item.content.map((paragraph, idx) => (
                    <p key={idx} className="leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                  {item.videoSrc && (
                    <div className="pb-8">
                      <div className="mx-auto mt-2 aspect-video rounded-md max-w-2xl h-5xl md:max-h-3xl">
                        <video
                          src={item.videoSrc}
                          title={item.videoCaption}
                          controls
                          className="w-full h-full mb-1"
                        />
                        <em>{item.videoCaption}</em>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-32 relative flex flex-col w-full justify-center items-center text-center font-light text-lg text-balance p-16">
        <div className="absolute z-0 top-2 left-2 tablet-xs:left-8 w-8 h-8 border-t-4 border-l-4 border-accent/80 rounded-xs"></div>
        <div className="absolute z-0 bottom-2 right-2 tablet-xs:right-8 w-8 h-8 border-b-4 border-r-4 border-accent/80 rounded-xs"></div>

        <p className="leading-relaxed">
          Mein Ziel bleibt, eine Plattform für hochwertigen Austausch rund ums
          Wetter zu schaffen. Der Schritt von Facebook hin zu einer eigenen
          Homepage war für mich ein entscheidender. Seit über 10 Jahren
          investiere ich viel Herzblut in die bestmöglichen Prognosen für
          Düsseldorf – und ich bin noch lange nicht müde.
        </p>

        <p className="leading-relaxed">
          Ich freue mich auf euch – bei gutem wie bei schlechtem Wetter.
        </p>

        <p className="leading-relaxed font-semibold text-xl pt-4">
          In Liebe, Jens
        </p>
      </div>
    </section>
  );
}
