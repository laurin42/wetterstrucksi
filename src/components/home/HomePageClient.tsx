"use client";

import { useState, useEffect } from "react";
import HomeHero from "@/components/home/HomeHero";
import { PostWithMeta } from "@tryghost/content-api";
import { AboutShort } from "./about/AboutShort";
import DonateBox from "../home/Donation";
import { ContactCta } from "../kontakt/ContactCta";
import AboutPage from "./about/AboutPage";
import { useWeather } from "../WeatherContext";
import LoadingSpinner from "../ui/LoadingSpinner";

interface HomePageClientProps {
  posts: PostWithMeta[];
}

export default function HomePageClient({ posts }: HomePageClientProps) {
  const [hydrated, setHydrated] = useState(false);
  const [showFullAbout, setShowFullAbout] = useState(false);
  const { data: weatherData } = useWeather();

  useEffect(() => {
    setHydrated(true);
  }, []);

  const handleShowMore = () => {
    setShowFullAbout((prev) => !prev);
    setTimeout(() => {
      document
        .getElementById("about-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  if (!hydrated || !weatherData) {
    return (
      <div className="h-svh w-svw flex justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      <HomeHero
        posts={posts}
        isVacationTime={false}
        currentWeatherData={weatherData.current}
        currentWeatherCode={weatherData.current.weather_code}
      />

      <AboutShort onShowMore={handleShowMore} />
      {showFullAbout && (
        <div id="about-section" className="animate-fade-in tablet-xs:pt-16">
          <AboutPage />
        </div>
      )}

      <ContactCta />
      <DonateBox />
    </>
  );
}
