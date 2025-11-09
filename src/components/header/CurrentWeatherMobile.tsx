"use client";

import { useState, useEffect } from "react";
import {
  WiThermometer,
  WiDaySunny,
  WiNightClear,
  WiDaySunnyOvercast,
  WiNightAltPartlyCloudy,
  WiCloudy,
  WiFog,
  WiDayRain,
  WiNightAltRain,
  WiDayShowers,
  WiNightAltShowers,
  WiDaySnow,
  WiNightAltSnow,
  WiDayThunderstorm,
  WiNightAltThunderstorm,
  WiSleet,
} from "react-icons/wi";
import { SiDrizzle } from "react-icons/si";

import { BsCloudSnow } from "react-icons/bs";
import { TbWind, TbWindsock } from "react-icons/tb";
import { FiSunrise, FiSunset } from "react-icons/fi";
import LoadingSpinner from "../ui/LoadingSpinner";
import { motion, AnimatePresence } from "framer-motion";
import useSWR from "swr";

type WeatherData = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;

  current_units: {
    time: string;
    interval: string;
    temperature_2m: string;
    rain: string;
    weather_code: string;
    wind_speed_10m: string;
    wind_direction_10m: string;
    is_day: string;
  };

  current: {
    time: string;
    interval: number;
    temperature_2m: number;
    rain: number;
    weather_code: number;
    wind_speed_10m: number;
    wind_direction_10m: number;
    is_day: number;
  };

  daily_units: {
    time: string;
    sunrise: string;
    sunset: string;
    uv_index_max: string;
  };

  daily: {
    time: string[];
    sunrise: string[];
    sunset: string[];
    uv_index_max: number[];
  };
};

function getWeatherDescription(code: number, isDay: number) {
  const day = isDay === 1;

  const sun = <WiDaySunny />;
  const moon = <WiNightClear />;
  const partlyCloudy = day ? (
    <WiDaySunnyOvercast />
  ) : (
    <WiNightAltPartlyCloudy />
  );
  const cloudy = <WiCloudy />;
  const fog = <WiFog />;
  const drizzle = <SiDrizzle />;
  const rain = day ? <WiDayRain /> : <WiNightAltRain />;
  const showers = day ? <WiDayShowers /> : <WiNightAltShowers />;
  const snow = day ? <WiDaySnow /> : <WiNightAltSnow />;
  const thunderstorm = day ? <WiDayThunderstorm /> : <WiNightAltThunderstorm />;
  if (code === 0)
    return { icon: day ? sun : moon, text: day ? "Sonnig" : "Klar" };
  if (code >= 1 && code <= 3)
    return { icon: partlyCloudy, text: "Leicht bewölkt" };
  if (code === 45 || code === 48) return { icon: fog, text: "Nebel" };
  if (code >= 51 && code <= 57) return { icon: drizzle, text: "Sprühregen" };
  if (code >= 61 && code <= 65) return { icon: rain, text: "Regen" };
  if (code >= 66 && code <= 67)
    return { icon: <WiSleet />, text: "Gefrierender Regen" };
  if (code >= 71 && code <= 77) return { icon: snow, text: "Schnee" };
  if (code >= 80 && code <= 82) return { icon: showers, text: "Regenschauer" };
  if (code >= 85 && code <= 86) return { icon: snow, text: "Schneeschauer" };
  if (code >= 95 && code <= 99) return { icon: thunderstorm, text: "Gewitter" };

  return { icon: "❓", text: "Unbekannt" };
}

function degreesToCompass(deg: number) {
  const directions = [
    "Nord",
    "Nord-Nordost",
    "Nordost",
    "Ost-Nordost",
    "Ost",
    "Ost-Südost",
    "Südost",
    "Süd-Südost",
    "Süd",
    "Süd-Südwest",
    "Südwest",
    "West-Südwest",
    "West",
    "West-Nordwest",
    "Nordwest",
    "Nord-Nordwest",
  ];
  return directions[Math.round(deg / 22.5) % 16];
}

function WeatherGroup({ items }: { items: any[] }) {
  return (
    <div className="flex justify-center gap-8">
      {items.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </div>
  );
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function CurrentWeatherMobile() {
  const { data: weather, error } = useSWR<WeatherData>(
    "/api/weather",
    fetcher,
    {
      refreshInterval: 10 * 60 * 1000,
    }
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % 4),
      8000
    );
    return () => clearInterval(interval);
  }, []);

  if (!weather && !error) return <LoadingSpinner />;

  const code = Number(weather?.current.weather_code);
  const { text: weatherText, icon: weatherIcon } = getWeatherDescription(
    code,
    weather?.current.is_day || 1
  );

  const items = [
    <div className="flex items-center gap-1 px-4">
      <WiThermometer className="text-2xl" />
      <span className="text-sm">{weather?.current.temperature_2m}°C</span>
    </div>,
    <div className="flex items-center text-2xl gap-1 px-4">
      {weatherIcon}
      <span className="text-sm">{weatherText}</span>
    </div>,
    <div className="flex items-center gap-1 px-4">
      <TbWind className="text-2xl" />
      <span className="text-sm">{weather?.current.wind_speed_10m} km/h</span>
    </div>,
    <div className="flex items-center gap-1 px-4">
      <TbWindsock className="text-2xl" />
      <span className="text-sm">
        {degreesToCompass(weather?.current.wind_direction_10m ?? 0)}
      </span>
    </div>,
    <div className="flex items-center gap-1 px-4">
      <FiSunrise className="text-2xl" />
      <span className="text-sm">
        Sonnenaufgang:
        {new Date(weather?.daily.sunrise[0] ?? "").toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </span>
    </div>,
    <div className="flex items-center gap-1 px-4">
      <FiSunset className="text-2xl" />
      <span className="text-sm">
        Sonnenuntergang:
        {new Date(weather?.daily.sunset[0] ?? "").toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </span>
    </div>,
  ];

  const groups = [
    items.slice(0, 2),
    items.slice(2, 4),
    items.slice(4, 5),
    items.slice(5),
  ];

  return (
    <div className="flex tablet:hidden w-full bg-header-background/40 backdrop-blur-xs overflow-hidden text-text-white justify-center items-center py-1">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0 }}
        >
          <WeatherGroup items={groups[index] || []} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
