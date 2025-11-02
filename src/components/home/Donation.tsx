"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useMotionVariants } from "@/lib/animation/useMotionVariants";

export default function DonateBox() {
  const [amount, setAmount] = useState("5");

  const payPalBaseLink =
    process.env.NEXT_PUBLIC_PAYPAL_LINK ||
    "https://www.paypal.com/paypalme/jstrucks";

  const backgroundImage = `url("/images/donationInfo/donationHeroLight.webp")`;
  const { sectionAnimation } = useMotionVariants();

  return (
    <motion.section
      className="
        relative w-full flex flex-col items-center 
        tablet-xs:flex-row justify-center 
        h-[94vh] tablet-xs:h-[100vh]
        bg-cover bg-center md:bg-center
      "
      style={{ backgroundImage }}
      initial="hidden"
      whileInView="visible"
      variants={sectionAnimation}
    >
      <div className="absolute inset-0 bg-black/44 z-0 " />

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionAnimation}
        className="flex-col items-center mx-4 landsacpe:py-4 sm:px-8 md:mx-0 justify-center xs:pt-2 p-8 text-text text-center bg-foreground-secondary/44 z-1 rounded-sm backdrop-blur-sm"
      >
        <h3 className="font-thin text-3xl tracking-wider pt-2 pb-2 border-b-[1px] border-text/40">
          Deine Spende für mich
        </h3>

        <p className="text-md text-left mb-4 max-w-md pt-4 px-4 pb-4 md:px-8 md:pb-8 font-normal">
          Wenn dir meine Wetterseite gefällt und du sie unterstützen möchtest,
          kannst du mir über PayPal gerne eine kleine Spende hinterlassen 🙂
        </p>

        <div className="flex flex-col items-center gap-2 mb-6">
          <div className="relative">
            <input
              type="number"
              value={amount}
              min="1"
              onChange={(e) => setAmount(e.target.value)}
              className="
                w-24 md:w-32 text-center px-3 py-2 rounded-md 
                bg-card/60 text-text border border-border/60
                focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-accent/70
                transition-all duration-300 ease-in-out 
                shadow-inner hover:shadow-md hover:border-accent/40
                backdrop-blur-2xl
              "
            />
            <span className="absolute -right-10 top-2.5 text-sm text-text-white-transparent select-none">
              € EUR
            </span>
          </div>
        </div>

        <Link
          href={`${payPalBaseLink}/${amount}?country.x=DE&locale.x=de_DE`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center justify-center gap-2
            bg-accent text-white font-semibold 
            px-10 py-3 rounded-full hover:bg-accent/80
            transition-all duration-300 ease-in-out 
            shadow-md hover:shadow-lg active:scale-[0.98]"
        >
          <span>mit</span>
          <Image
            src="/images/donationInfo/payPalLogo.svg"
            alt="PayPal Logo"
            width={100}
            height={100}
            className="h-6 w-auto"
          />{" "}
          <span>bezahlen</span>
        </Link>
      </motion.div>
    </motion.section>
  );
}
