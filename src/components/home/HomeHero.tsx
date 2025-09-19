"use client";

import { motion } from "framer-motion";
import { BsChevronDoubleDown } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useMounted } from "@/lib/useMounted";

interface HomeHeroProps {
  onScrollDown: () => void;
}

export default function HomeHero({ onScrollDown }: HomeHeroProps) {
  const { theme } = useTheme();
  const mounted = useMounted();

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  const fadeInUp = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const backgroundImage = mounted
    ? theme === "dark"
      ? `url("/images/homeHeroDark.jpg")`
      : `url("/images/homeHeroLight.jpg")`
    : undefined;
  return (
    <motion.section
      className="absolute top-0 left-0 w-full h-screen bg-center flex flex-col justify-between"
      variants={container}
      initial="hidden"
      animate="visible"
      style={{ backgroundImage: backgroundImage }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <motion.div
        className="flex flex-col items-center justify-end mt-40 z-10"
        variants={fadeInUp}
      >
        <h1 className="text-5xl font-light text-white text-center md:text-5xl">
          Willkommen bei Wetterstrucksi
        </h1>
      </motion.div>

      <div className="flex flex-col items-center justify-end mb-10 z-10 space-y-4">
        <motion.div
          className="flex flex-col items-center mb-8"
          variants={fadeInUp}
        >
          <p className="text-white text-xl text-center mb-2">Urlaubszeiten:</p>
          <p className="text-white font-thin text-center">
            1. September – 5. Oktober
          </p>
          <p className="text-white font-thin text-center">
            12. Dezember – 8. Januar
          </p>
          <p className="text-white font-thin text-center">
            (in diesen Zeiträumen kommen die Berichte unregelmäßig)
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center cursor-pointer"
          variants={fadeInUp}
          onClick={onScrollDown}
        >
          <span className="text-white font-thin text-2xl md:text-xl">
            zu aktuellen Wetterprognosen:
          </span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="mt-2"
          >
            <BsChevronDoubleDown size={32} className="text-white" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
