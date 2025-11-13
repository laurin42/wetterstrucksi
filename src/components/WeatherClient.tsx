"use client";

import { useEffect, useState } from "react";

interface WeatherClientProps {
  initialTemp: number;
}

export function WeatherClient({ initialTemp }: WeatherClientProps) {
  const [temp, setTemp] = useState(initialTemp);

  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await fetch("/api/weather");
      const data = await res.json();
      setTemp(data.current.temperature_2m);
    }, 600_000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-md font-thin text-text border-l px-2">
      {Math.round(temp)}°C
    </div>
  );
}
