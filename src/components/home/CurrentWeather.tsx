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

import { TbWind, TbWindsock } from "react-icons/tb";
import { FiSunrise, FiSunset } from "react-icons/fi";
import LoadingSpinner from "../ui/LoadingSpinner";
import { motion, AnimatePresence } from "framer-motion";
import { useWeather } from "../WeatherContext";

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
  const sleet = <WiSleet />;

  if (code === 0)
    return { icon: day ? sun : moon, text: day ? "Sonnig" : "Klar" };
  if (code >= 1 && code <= 3)
    return { icon: partlyCloudy, text: "Leicht bewölkt" };
  if (code >= 4 && code <= 5) return { icon: fog, text: "Dunst" };
  if (code >= 6 && code <= 9) return { icon: fog, text: "Nebel" };
  if (code >= 10 && code <= 12) return { icon: fog, text: "Nebel" };
  if (code >= 13 && code <= 16)
    return { icon: drizzle, text: "Niederschlag möglich" };
  if (code >= 17 && code <= 19)
    return { icon: thunderstorm, text: "Gewitter/Böen" };
  if (code >= 20 && code <= 29)
    return { icon: rain, text: "Leichter bis mäßiger Niederschlag" };
  if (code >= 30 && code <= 39) return { icon: snow, text: "Schneewehen" };
  if (code >= 40 && code <= 54) return { icon: fog, text: "Stark bewölkt" };
  if (code >= 55 && code <= 59) return { icon: drizzle, text: "Sprühregen" };
  if (code >= 60 && code <= 70) return { icon: rain, text: "Regen" };
  if (code >= 70 && code <= 79) return { icon: snow, text: "Schnee" };
  if (code >= 80 && code <= 95)
    return { icon: showers, text: "Regenschauer / Schneeschauer" };
  if (code >= 95 && code <= 99) return { icon: thunderstorm, text: "Gewitter" };

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
  const { data: weather, error } = useWeather();
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
    weather?.current.is_day ?? 1
  );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="w-full text-center text-sm text-text-white/80 bg-header-background/40 backdrop-blur-xs rounded-lg md:text-base font-semibold"
      >
        <div className="py-1 px-4  rounded-t-lg border-b  ">
          <h2 className="flex flex-row items-center justify-center font-semibold text-lg gap-x-2">
            Aktuell{" "}
            <span className="flex flex-row items-center font-thin tablet-xs:hidden">
              {weatherText} <span className="text-3xl">{weatherIcon}</span>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 grid-rows-3 text-sm  ">
          <div className="flex flex-col items-center justify-center border-r border-b border-text-white/60 py-1 h-14">
            <div className="text-xl md:text-2xl">{weatherIcon}</div>
            <span className="truncate text-center">{weatherText}</span>
          </div>

          <div className="flex flex-col items-center justify-center  border-b border-text-white/60 py-1 h-14">
            <WiThermometer className="text-xl md:text-2xl" />
            <span>{weather?.current.temperature_2m}°C</span>
          </div>

          <div className="flex flex-col items-center justify-center border-b border-r border-text-white/60 py-1 h-14">
            <TbWind className="text-xl md:text-2xl" />
            <span>{weather?.current.wind_speed_10m} km/h</span>
          </div>

          <div className="flex flex-col items-center justify-center  border-b border-text-white/60 py-1 h-14">
            <TbWindsock className="text-xl md:text-2xl" />
            <span>
              {degreesToCompass(weather?.current.wind_direction_10m ?? 0)}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center border-r  border-text-white/60 py-1 h-14">
            <FiSunrise className="text-xl md:text-2xl" />
            <span>
              {weather?.daily.sunrise[0]
                ? new Date(weather.daily.sunrise[0]).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                : "--:--"}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center py-1 h-14">
            <FiSunset className="text-xl md:text-2xl" />
            <span>
              {weather?.daily.sunset[0]
                ? new Date(weather.daily.sunset[0]).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                : "--:--"}
            </span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
