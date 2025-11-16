"use client";

import Image from "next/image";

export default function AboutHero() {
  const backgroundImage = "/images/about/bioHero.webp";

  return (
    <div
      className="relative mx-auto max-w-5xl h-svh tablet-xs:h-116 flex items-end"
      style={{
        backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {backgroundImage && (
        <>
          {" "}
          <Image
            src={backgroundImage}
            alt="Hintergrundbild"
            fill
            sizes="100vw 100vh"
            className="object-cover object-center z-0 tablet-xs:rounded-lg opacity-0 animate-fade-in"
            priority={true}
          />
          <div className="absolute inset-0 bg-black/20 tablet-xs:rounded-lg z-10 opacity-0 animate-fade-in" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 from-0% via-black/50 via-20% to-transparent to-33% z-0 tablet-xs:rounded-lg opacity-0 animate-fade-in" />
        </>
      )}

      <div className="flex flex-col z-10 mx-auto justify-center items-center w-full pb-8">
        <h1 className="text-5xl mb-1 md:text-5xl font-thin text-text-white tracking-wide">
          <em>Über mich</em>
        </h1>

        <h2 className="text-3xl text-text-white font-thin text-left border-b tracking-wider border-text-white/40 md:border-none">
          - Jens Strucks -
        </h2>
      </div>
    </div>
  );
}
