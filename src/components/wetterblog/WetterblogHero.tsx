"use client";

import Image from "next/image";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

export default function WeatherBlogHero() {
  const backgroundImage = "/images/wetterblog/weatherHero.webp";

  return (
    <section
      className="relative flex flex-col h-auto w-full justify-center py-8 px-4 tablet-xs:px-8 tablet-xs:rounded-md tablet-xs:mb-2  overflow-hidden"
      style={{
        minHeight: "80px",
        height: "auto",
        backgroundImage: backgroundImage,
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
            sizes="100vw"
            className="object-cover object-center z-0 opacity-0 animate-fade-in"
            priority={true}
          />
          <div className="absolute inset-0 bg-black/44 z-10 opacity-0 animate-fade-in" />
        </>
      )}

      <div className="relative z-10 text-text-white ">
        <h1 className="text-3xl font-thin md:text-5xl tracking-wide border-b w-fit leading-relaxed">
          Wetterblog
        </h1>
        <h2 className="text-xl font-thin text-left flex items-center pt-1">
          <MdOutlineKeyboardDoubleArrowRight />
          <em>Hier findest Du alle Beiträge</em>
        </h2>
      </div>
    </section>
  );
}
