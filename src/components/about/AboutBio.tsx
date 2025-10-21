"use client";
import { motion } from "framer-motion";
import { FaUniversity, FaPodcast } from "react-icons/fa";
import { FaTemperatureFull, FaRadio } from "react-icons/fa6";
import Interview from "./Interview";

export function AboutBio() {
  const items = [
    {
      icon: <FaUniversity className="text-xl md:text-2xl" />,
      text: (
        <>
          <span className="font-semibold">Studium:</span> Sportwissenschaften
          (Profil Psychologie und Bewegung) B.Sc. seit 2020 an der Uni Bielefeld
        </>
      ),
    },
    {
      icon: <FaPodcast className="text-xl md:text-2xl" />,
      text: (
        <>
          <span className="font-semibold">Podcast:</span>{" "}
          <a
            href="https://open.spotify.com/show/6BznGy28h8iGQSSIpxQCfs"
            className="text-accent hover:text-accent-dim"
            target="_blank"
            rel="noreferrer"
          >
            Selbsthilfe – Der Psychologie-Podcast
          </a>{" "}
          seit 2020.
        </>
      ),
    },
    {
      icon: <FaTemperatureFull className="text-xl md:text-2xl" />,
      text: (
        <>
          <span className="font-semibold">Hobby-Meteorologie:</span>{" "}
          <a
            href="https://www.facebook.com/WetterstrucksiD"
            className="text-accent hover:text-accent-dim"
            target="_blank"
            rel="noreferrer"
          >
            Lokal-Wetterdienst Düsseldorf
          </a>{" "}
          seit 2011.
        </>
      ),
    },
    {
      icon: <FaRadio className="text-xl md:text-2xl" />,
      text: (
        <>
          <span className="font-semibold">Wetter-Experte:</span>{" "}
          <a
            href="https://www.antenneduesseldorf.de/"
            className="text-accent hover:text-accent-dim"
            target="_blank"
            rel="noreferrer"
          >
            Antenne Düsseldorf
          </a>{" "}
          2022–2024.
        </>
      ),
    },
  ];

  return (
    <motion.section className="flex flex-col justify-center relative max-w-6xl mx-auto py-8 h-[calc(100svh-64px)] md:h-auto md:bg-foreground-secondary/44">
      <div className="px-4">
        <ul className="space-y-2 text-xl font-thin">
          {items.map((item, i) => (
            <li key={i} className="flex items-center space-x-4">
              <motion.div className="flex-shrink-0 p-3 bg-accent/10 rounded-md text-accent shadow-md">
                {item.icon}
              </motion.div>
              <motion.p className="text-text">{item.text}</motion.p>
            </li>
          ))}
        </ul>
        <Interview />
      </div>
    </motion.section>
  );
}
