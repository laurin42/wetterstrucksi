"use client";
import { FaUniversity, FaPodcast } from "react-icons/fa";
import { FaTemperatureFull, FaRadio } from "react-icons/fa6";

export function AboutBio() {
  const items = [
    {
      icon: <FaUniversity className="text-2xl" />,
      text: (
        <>
          <span className="font-semibold">Studium:</span> Sportwissenschaften
          (Profil Psychologie und Bewegung) B.Sc. seit 2020 an der Uni Bielefeld
        </>
      ),
    },
    {
      icon: <FaPodcast className="text-2xl" />,
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
      icon: <FaTemperatureFull className="text-2xl" />,
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
      icon: <FaRadio className="text-2xl" />,
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
    <div className="space-y-6 px-3">
      <h2 className="text-3xl font-light text-text text-center">
        Wichtigste Eckdaten
      </h2>
      {items.map((item, i) => (
        <div key={i}>
          <div className="p-4 bg-accent/20 rounded-full text-accent shadow-md">
            {item.icon}
          </div>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
