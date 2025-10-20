"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useMounted } from "@/lib/useMounted";
import { useMotionVariants } from "@/lib/animation/useMotionVariants";
import { useIsMobile } from "@/lib/useIsMobile";
import { PostCarousel } from "../posts/PostCarousel";
import { PostWithMeta } from "@tryghost/content-api";
import VacationInfo from "./VacationInfo";

interface HomeHeroProps {
  posts: PostWithMeta[];
}

export default function HomeHero({ posts }: HomeHeroProps) {
  const { theme } = useTheme();
  const mounted = useMounted();
  const { containerVariantsSync, fadeInVariant, fadeInVariantVerySlow } =
    useMotionVariants();

  const backgroundImage = mounted
    ? theme === "dark"
      ? `url("/images/home/homeHeroDark.jpg")`
      : `url("/images/home/homeHeroLight.jpg")`
    : undefined;

  const isMobile = useIsMobile();

  return (
    <>
      <motion.section
        className="
    relative w-full flex flex-col items-center 
    md:flex-row md:justify-between 
    px-0 pt-8 md:pb-8 md:px-8 rounded-t-sm md:mb-2
    h-[calc(100vh-4rem)] md:h-auto
    bg-cover bg-center header-padding
  "
        style={{ backgroundImage }}
        initial="hidden"
        animate="visible"
        variants={containerVariantsSync}
      >
        <div className="absolute inset-0 bg-black/60 z-0 rounded-t-sm" />

        <motion.div className="relative z-10 md:max-w-6/8 text-center md:text-left">
          <motion.h1
            variants={fadeInVariant}
            className="text-4xl font-thin md:font-semibold text-white"
          >
            <motion.em
              variants={fadeInVariantVerySlow}
              className="font-semibold"
            >
              Dein
            </motion.em>{" "}
            Ort für Wetter
          </motion.h1>
          <motion.div className="relative z-10 md:max-w-6/8 text-center md:text-left">
            <motion.h2
              variants={fadeInVariant}
              className="text-4xl font-thin md:font-semibold text-white"
            >
              in{" "}
              <motion.em
                variants={fadeInVariantVerySlow}
                className="font-semibold"
              >
                Düsseldorf
              </motion.em>
            </motion.h2>
          </motion.div>
        </motion.div>

        <motion.div
          className="md:hidden w-full relative z-10 pt-8 carousel-padding"
          variants={fadeInVariant}
        >
          {isMobile && (
            <div className="block md:hidden">
              <PostCarousel posts={posts.slice(0, 3)} />
            </div>
          )}
        </motion.div>

        <motion.div className="hidden md:block">
          <VacationInfo />
        </motion.div>
      </motion.section>
    </>
  );
}
