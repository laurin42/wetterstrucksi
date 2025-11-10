"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const CurrentWeatherMobile = dynamic(
  () => import("../header/CurrentWeatherMobile"),
  { ssr: false, loading: () => null }
);

export default function HomeCurrentWeather() {
  const pathname = usePathname();

  if (pathname !== "/") return null;

  return <CurrentWeatherMobile />;
}
