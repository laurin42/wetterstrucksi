import Image from "next/image";
import Link from "next/link";
import { ThemeAndMenu } from "./ThemeAndMenu";
import { WeatherClient } from "../WeatherClient";

async function getWeatherData() {
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=51.2217&longitude=6.7762&daily=sunrise,sunset&current=weather_code,temperature_2m,is_day&timezone=Europe%2FBerlin",
    {
      next: { revalidate: 600 },
    }
  );
  if (!response.ok) {
    console.error("failed to fetch:", response.statusText);
    return null;
  }

  const data = await response.json();
  return data;
}

export default async function Header() {
  const initialData = await getWeatherData();
  return (
    <header className="sticky top-0 left-0 right-0 w-full z-50 bg-foreground text-text shadow-md h-16 flex items-center justify-between tablet-xs:px-4 px-2">
      <div className="flex flex-row items-center gap-2 text-xs xs:text-sm md:text-xl font-semibold leading-relaxed tracking-wider xxs:tracking-widest">
        <Link
          className="flex flex-row items-center gap-2 hover:text-header-background transition-colors duration-300"
          href="/"
        >
          <Image
            src="/images/logo/wetterstrucksiLogoLight.webp"
            alt="Logo"
            width={120}
            height={120}
            className="h-8 xxs:h-12 w-auto"
            loading="eager"
          />
          <h1 className="">Wetterstrucksi.de</h1>
        </Link>

        <WeatherClient initialData={initialData} />
      </div>
      <ThemeAndMenu />
    </header>
  );
}
