"use client";
import useSWR from "swr";
import { createContext, useContext } from "react";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const WeatherContext = createContext<any>(null);

export const WeatherProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data, error } = useSWR("/api/weather", fetcher, {
    refreshInterval: 10 * 60 * 1000,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    suspense: false,
  });

  return (
    <WeatherContext.Provider value={{ data, error }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
