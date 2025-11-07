"use client";

import { useState, useEffect } from "react";
import LoadingSpinner from "../ui/LoadingSpinner";

type WeatherData = {
  current: {
    temperature_2m: number;
    wind_speed_10m: number;
    wind_direction_10m: number;
    rain: number;
    time: string;
  };
  daily: {
    sunrise: string[];
    sunset: string[];
  };
};

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
        console.error("Fehler beim laden", error);
      } finally {
        setLoading(false);
      }
    }
    fetchWeather();
  }, []);

  if (loading || !weather || !weather.current) return <LoadingSpinner />;

  return (
    <div>
      <p>{weather.current.temperature_2m}</p>
      <p>{weather.current.rain}</p>
      <p>{weather.current.wind_direction_10m}</p>
      <p>{weather.current.wind_speed_10m}</p>
      <p>{weather.daily.sunrise}</p>
      <p>{weather.daily.sunset}</p>
    </div>
  );
}
