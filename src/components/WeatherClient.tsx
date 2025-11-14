"use client";

import { useState, useEffect } from "react";
import {
  weatherIcons,
  weatherIconsNight,
} from "@/lib/weatherImages/weatherIcons";

interface WeatherClientProps {
  initialData?: any;
}

export function WeatherClient({ initialData }: WeatherClientProps) {
  const [weatherData, setWeatherData] = useState(initialData);

  useEffect(() => {
    if (!initialData) {
      fetch("/api/weather")
        .then((res) => res.json())
        .then(setWeatherData)
        .catch(console.error);
    }
  }, [initialData]);

  if (!weatherData) {
    return (
      <div className="flex items-center gap-2 text-md font-thin text-text border-l-2 border-text/32 px-2 h-8 w-24 animate-pulse bg-gray-300 rounded" />
    );
  }

  const code = weatherData.current.weather_code;
  const isNight = weatherData.current.is_day === 1;

  const iconPath =
    (isNight && weatherIconsNight[code]) ||
    weatherIcons[code] ||
    "/icons/weather/unknown.svg";

  return (
    <div className="flex items-center gap-2 tablet-xs:gap-4 text-md font-thin text-text border-l-2 border-text/32 px-2 tablet-xs:px-4">
      {Math.round(weatherData.current.temperature_2m)}°C
      <img
        src={iconPath}
        alt="Wetter"
        className="h-8 w-8 tablet-xs:h-12 tablet-xs:w-12 weather-icon "
      />
    </div>
  );
}
