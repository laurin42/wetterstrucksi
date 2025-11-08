"use client";

import { useState, useEffect } from "react";
import {
  WiThermometer,
  WiDaySunny,
  WiDaySunnyOvercast,
  WiCloud,
  WiRainMix,
  WiShowers,
  WiSleet,
  WiRain,
  WiFog,
  WiStrongWind,
  WiStormShowers,
} from "react-icons/wi";
import { SiDrizzle } from "react-icons/si";

import { BsCloudSnow } from "react-icons/bs";
import { TbWind, TbWindsock } from "react-icons/tb";
import { FiSunrise, FiSunset } from "react-icons/fi";
import LoadingSpinner from "../ui/LoadingSpinner";
import { motion, AnimatePresence } from "framer-motion";

type WeatherData = {
  current: {
    temperature_2m: number;
    wind_speed_10m: number;
    wind_direction_10m: number;
    rain: number;
    time: string;
  };
  daily: {
    weather_code: number[];
    sunrise: string[];
    sunset: string[];
  };
};

function getWeatherDescription(code: number) {
  if (code === 0) return { icon: <WiDaySunny />, text: "Sonnig" };
  if (code >= 1 && code <= 3)
    return { icon: <WiDaySunnyOvercast />, text: "Klar bis leicht bewölkt" };
  if (code >= 4 && code <= 9) return { icon: <WiCloud />, text: "Bewölkt" };
  if (code >= 10 && code <= 19)
    return { icon: <WiRainMix />, text: "Neblig / leichter Regen" };
  if (code >= 20 && code <= 29)
    return { icon: <WiShowers />, text: "Leichter Regen" };
  if (code >= 30 && code <= 39)
    return { icon: <WiStrongWind />, text: "Stürmisch" };
  if (code >= 40 && code <= 49) return { icon: <WiFog />, text: "Nebel" };
  if (code >= 50 && code <= 59)
    return { icon: <SiDrizzle />, text: "Sprühregen/Nebel" };
  if (code >= 60 && code <= 69) return { icon: <WiRain />, text: "Regen" };
  if (code >= 70 && code <= 79)
    return { icon: <BsCloudSnow />, text: "Schneefall" };
  if (code >= 80 && code <= 89) return { icon: <WiShowers />, text: "Schauer" };
  if (code >= 90 && code <= 99)
    return { icon: <WiStormShowers />, text: "Gewitter" };
  return { icon: "❓", text: "Unbekannt" };
}

function degreesToCompass(deg: number) {
  const directions = [
    "N",
    "NNO",
    "NO",
    "ONO",
    "O",
    "OSO",
    "SO",
    "SSO",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
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

export default function CurrentWeatherMobile() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch("/api/weather");
        const data: WeatherData = await res.json();
        setWeather(data);
      } catch (error) {
        console.error("Fehler beim Laden", error);
      } finally {
        setLoading(false);
      }
    }
    fetchWeather();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % 3);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  if (loading || !weather || !weather.current) return <LoadingSpinner />;

  const codeRaw = weather.daily.weather_code?.[0] ?? -1;
  const code = Number(codeRaw);
  const { text: weatherText, icon: weatherIcon } = getWeatherDescription(code);

  const items = [
    <div className="flex items-center gap-1 px-4">
      <WiThermometer className="text-2xl" />
      <span>{weather.current.temperature_2m}°C</span>
    </div>,
    <div className="flex items-center text-2xl gap-1 px-4">
      {weatherIcon}
      <span className="text-sm">{weatherText}</span>
    </div>,
    <div className="flex items-center gap-1 px-4">
      <TbWind className="text-2xl" />
      <span>{weather.current.wind_speed_10m} km/h</span>
    </div>,
    <div className="flex items-center gap-1 px-4">
      <TbWindsock className="text-2xl" />
      <span>
        Windrichtung {degreesToCompass(weather.current.wind_direction_10m)}
      </span>
    </div>,
    <div className="flex items-center gap-1 px-4">
      <FiSunrise className="text-2xl" />
      Sonnenaufgang
      <span>
        {new Date(weather.daily.sunrise[0]).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </span>
    </div>,
    <div className="flex items-center gap-1 px-4">
      <FiSunset className="text-2xl" />
      Sonnenuntergang
      <span>
        {new Date(weather.daily.sunset[0]).toLocaleTimeString([], {
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
    items.slice(5, 6),
  ];

  return (
    <div className="flex tablet:hidden w-full overflow-hidden text-text-white justify-center items-center py-2">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0 }}
        >
          <WeatherGroup items={groups[index]} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
