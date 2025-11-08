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
import { BsCloudSnow } from "react-icons/bs";
import { TbWind, TbWindsock } from "react-icons/tb";
import { FiSunrise, FiSunset } from "react-icons/fi";
import LoadingSpinner from "../ui/LoadingSpinner";
import { motion } from "framer-motion";

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
  if (code == 0) return { icon: <WiDaySunny />, text: "Sonnig" };
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
    return { icon: <WiSleet />, text: "Sprühregen" };
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
  const index = Math.round(deg / 22.5) % 16;
  return directions[index];
}

export default function CurrentWeather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

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

  if (loading || !weather || !weather.current) return <LoadingSpinner />;

  const codeRaw = weather.daily.weather_code?.[0] ?? -1;
  const code = Number(codeRaw);
  const { text: weatherText, icon: weatherIcon } = getWeatherDescription(code);

  return (
    <div className="w-full text-center text-sm text-text-white/80 bg-transparent backdrop-blur-xs rounded-lg md:text-base ">
      <div className="py-1 px-4  bg-header-background/100  rounded-t-lg">
        <h2 className="flex flex-row items-center font-semibold text-lg gap-x-2">
          Aktuell{" "}
          <span className="flex flex-row items-center font-thin tablet-xs:hidden">
            {weatherText} <span className="text-3xl">{weatherIcon}</span>
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 text-xs md:text-sm  border-text/32">
        <div className="flex flex-col items-center justify-center border-r border-b border-text/16 py-1 h-14">
          <div className="text-xl md:text-2xl">{weatherIcon}</div>
          <span className="truncate text-center">{weatherText}</span>
        </div>

        <div className="flex flex-col items-center justify-center  border-b border-text/16 py-1 h-14">
          <WiThermometer className="text-xl md:text-2xl" />
          <span>{weather.current.temperature_2m}°C</span>
        </div>

        <div className="flex flex-col items-center justify-center border-b border-r border-text/16 py-1 h-14">
          <TbWind className="text-xl md:text-2xl" />
          <span>{weather.current.wind_speed_10m} km/h</span>
        </div>

        <div className="flex flex-col items-center justify-center  border-b border-text/16 py-1 h-14">
          <TbWindsock className="text-xl md:text-2xl" />
          <span>{degreesToCompass(weather.current.wind_direction_10m)}</span>
        </div>

        <div className="flex flex-col items-center justify-center border-r  border-text/16 py-1 h-14">
          <FiSunrise className="text-xl md:text-2xl" />
          <span>
            {new Date(weather.daily.sunrise[0]).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>

        <div className="flex flex-col items-center justify-center py-1 h-14">
          <FiSunset className="text-xl md:text-2xl" />
          <span>
            {new Date(weather.daily.sunset[0]).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
      </div>
    </div>
  );
}
