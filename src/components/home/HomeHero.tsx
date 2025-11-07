"use client";

import Image from "next/image";
import { easeIn, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useMounted } from "@/lib/useMounted";
import { useMotionVariants } from "@/lib/animation/useMotionVariants";
import { useIsVacationTime } from "@/lib/useIsVacationTime";
import { PostCarousel } from "../posts/PostCarousel";
import { PostWithMeta } from "@tryghost/content-api";
import VacationInfo from "./VacationInfo";
import CurrentWeather from "./CurrentWeather";
import CurrentWeatherMobile from "./CurrentWeatherMobile";
interface HomeHeroProps {
  posts: PostWithMeta[];
}

export default function HomeHero({ posts }: HomeHeroProps) {
  const { theme } = useTheme();
  const mounted = useMounted();
  const { containerVariantsSync, fadeInVariant } = useMotionVariants();
  const isVacationTime = useIsVacationTime();

  const backgroundImage = mounted
    ? theme === "dark"
      ? "/images/home/homeHeroDark.webp"
      : "/images/home/homeHeroLight.webp"
    : undefined;

  return (
    <motion.section
      className="relative w-full h-[calc(100svh-64px)] landscapeScreen flex items-start sm:items-center tablet-xs:items-center justify-center bg-cover bg-center"
      initial="hidden"
      animate="visible"
      variants={containerVariantsSync}
    >
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt="Hintergrundbild"
            fill
            sizes="100vw"
            className="object-cover object-center z-0"
            preload={true}
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
        </>
      )}

      <div className="z-11 absolute tablet-xs:hidden w-full backdrop-blur py-2">
        <CurrentWeatherMobile />
      </div>
      <div className="relative flex flex-col tablet:flex-row landscapeView items-center justify-center max-w-6xl w-full z-20 px-4 tablet-xs:px-16 tablet:px-0 xxxs:pt-16 pt-32 tablet-xs:pt-0 mx-auto gap-y-2">
        <div className="relative z-10 w-full md:w-1/2 landscape:w-1/2 xxs:pb-0 flex flex-col gap-y-8  items-center text-center text-4xl landscapeFont tablet-xs:text-5xl font-thin text-white">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <motion.em
                className="font-semibold inline-block"
                initial={{ scale: 1 }}
                animate={{ scale: 1.05 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 14,
                  delay: 1.6,
                }}
              >
                Dein
              </motion.em>{" "}
              Ort für Wetter
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
            >
              in{" "}
              <motion.em
                className="font-semibold inline-block"
                initial={{ scale: 1 }}
                animate={{ scale: 1.05 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 14,
                  delay: 2.0,
                }}
              >
                Düsseldorf
              </motion.em>
            </motion.h2>
          </div>
          <div className="hidden tablet-xs:block px-6 w-full">
            <CurrentWeather />
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          custom={{ y: 0, duration: 1.8 }}
          className="flex z-0 w-full md:w-1/2 landscape:w-1/2 flex-col items-center"
        >
          <PostCarousel posts={posts.slice(0, 3)} />
          {isVacationTime && (
            <div className="hidden md:block mt-6">
              <VacationInfo />
            </div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
