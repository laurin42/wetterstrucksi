import Image from "next/image";
import Link from "next/link";
import { ThemeAndMenu } from "./ThemeAndMenu";
import { WeatherClient } from "../WeatherClient";

async function getWeather() {
  const res = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m&timezone=Europe%2FBerlin",
    { next: { revalidate: 600 } }
  );
  return res.json();
}

export default async function Header() {
  const weather = await getWeather();

  return (
    <header className="sticky top-0 left-0 right-0 w-full z-50 bg-foreground text-text shadow-md h-16 flex items-center justify-between tablet-xs:px-4 px-2">
      <div className="flex flex-row items-center gap-2 tablet-xs:text-2xl font-semibold tracking-wide">
        <Link className="flex flex-row items-center gap-2" href="/">
          <Image
            src="/images/logo/wetterstrucksiLogoLight.webp"
            alt="Logo"
            width={120}
            height={120}
            className="h-12 w-auto"
          />
          Wetterstrucksi.de
        </Link>
        <WeatherClient initialTemp={weather.current.temperature_2m} />
      </div>

      <ThemeAndMenu />
    </header>
  );
}
