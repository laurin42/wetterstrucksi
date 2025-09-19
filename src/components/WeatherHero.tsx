export function WeatherHero() {
  return (
    <section
      className="rounded-md relative text-text-white flex items-center justify-center shadow-md bg-cover"
      style={{ backgroundImage: `url(/images/weatherHero.jpg)` }}
    >
      <div className="absolute inset-0 bg-accent-dim/70 rounded-md"></div>
      <div className="absolute inset-0 bg-black/40 rounded-md"></div>

      <div className="p-8 relative z-10 rounded-md overflow-hidden max-w-3xl text-center">
        <h1
          className="text-5xl font-light mb-4"
          style={{ textShadow: "3px 3px 8px rgba(177, 169, 169, 0.4)" }}
        >
          Wetter
        </h1>
        <p className="text-lg font-light">
          Hier findest du Prognosen, Analysen und Rückblicke rund ums Wetter.
          Die Inhalte richten sich an Wetterinteressierte, Laien und Profis
          gleichermaßen.
        </p>
      </div>
    </section>
  );
}
