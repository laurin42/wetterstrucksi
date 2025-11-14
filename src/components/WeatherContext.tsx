"use client";

import useSWR from "swr";
import { createContext, useContext, ReactNode } from "react";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

interface CurrentWeather {
  temperature_2m: number;
  weather_code: number;
  time: string;
  is_day: number;
}

interface WeatherData {
  latitude: number;
  longitude: number;
  current: CurrentWeather;
}

interface WeatherContextType {
  data: WeatherData | null | undefined;
  error: any;
}

interface WeatherContextType {
  data: WeatherData | null | undefined;
  error: any;
}

export const WeatherContext = createContext<WeatherContextType>({
  data: null,
  error: null,
});

export const WeatherProvider = ({
  children,
  initialData,
}: {
  children: ReactNode;
  initialData?: WeatherData | null;
}) => {
  const swrConfig = {
    refreshInterval: 10 * 60 * 1000,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    suspense: false,

    ...(initialData !== undefined &&
      initialData !== null && { fallbackData: initialData }),
  };

  const { data, error } = useSWR<WeatherData>(
    "/api/weather",
    fetcher,
    swrConfig
  );

  return (
    <WeatherContext.Provider value={{ data, error }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
