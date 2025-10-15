"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useMotionVariants } from "@/lib/animation/useMotionVariants";

export default function DonateBox() {
  const [amount, setAmount] = useState("5");

  const payPalBaseLink =
    process.env.NEXT_PUBLIC_PAYPAL_LINK ||
    "https://www.paypal.com/paypalme/jstrucks";

  const backgroundImage = `url("/images/donationInfo/donationHero.jpg")`;
  const { sectionAnimation } = useMotionVariants();

  return (
    <motion.section
      className="
        relative w-full flex flex-col items-center 
        md:flex-row justify-center 
        h-[calc(100vh-4rem)] md:h-[80vh]
        bg-cover bg-center md:bg-center md:rounded-sm
      "
      style={{ backgroundImage }}
      initial="hidden"
      whileInView="visible"
      variants={sectionAnimation}
    >
      <div className="absolute inset-0 bg-black/44 z-0 md:rounded-sm" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionAnimation}
        className="flex flex-col items-center mx-8 md:mx-0 justify-center p-12 text-text text-center bg-foreground-secondary/44 z-1 rounded-sm backdrop-blur-sm"
      >
        <h3 className="font-thin text-2xl tracking-wider pb-2 border-b-[1px] border-accent/40">
          Deine Spende für mich
        </h3>

        <p className="text-md text-left mb-4 max-w-md py-4 md:pb-8 font-normal">
          Wenn dir meine Wetterseite gefällt und du sie unterstützen möchtest,
          kannst du mir über PayPal gerne eine kleine Spende hinterlassen 🙂
        </p>

        <div className="flex items-center gap-2 mb-6">
          <div className="relative">
            <input
              type="number"
              value={amount}
              min="1"
              onChange={(e) => setAmount(e.target.value)}
              className="
                w-24 text-center px-3 py-2 rounded-md 
                bg-card/60 text-text border border-border/60
                focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-accent/70
                transition-all duration-300 ease-in-out 
                shadow-inner hover:shadow-md hover:border-accent/40
                backdrop-blur-sm
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
            inline-block bg-accent text-white font-semibold 
            px-12 py-3 rounded-md hover:bg-accent/80
            transition-all duration-300 ease-in-out 
            shadow-md hover:shadow-lg active:scale-[0.98]
          "
        >
          Jetzt spenden
        </Link>
      </motion.div>
    </motion.section>
  );
}
