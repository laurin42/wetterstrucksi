"use client";
import { FaUniversity, FaPodcast } from "react-icons/fa";
import { FaTemperatureFull, FaRadio } from "react-icons/fa6";

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
            className="text-accent hover:text-accent-secondary"
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
            className="text-accent hover:text-accent-secondary"
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
            className="text-accent hover:text-accent-secondary"
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
    <div className="flex flex-col md:justify-center px-4 pt-8 pb-4 md:p-16 relative items-center  w-full h-[60vh] md:h-[70vh] bg-foreground-secondary">
      <h2 className="text-3xl text-text text-left mb-8">Wichtigste Eckdaten</h2>
      <ul className="space-y-4 text-xl font-thin">
        {items.map((item, i) => (
          <li key={i} className="flex items-center space-x-4">
            <div className="flex-shrink-0 p-3 bg-accent/20 rounded-full text-accent shadow-md">
              {item.icon}
            </div>
            <p className="text-text">{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
