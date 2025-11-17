"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function DonateBox() {
  const [amount, setAmount] = useState("5");

  const payPalBaseLink =
    process.env.NEXT_PUBLIC_PAYPAL_LINK ||
    "https://www.paypal.com/paypalme/jstrucks";

  return (
    <section className="relative w-full min-h-svh py-8 xxs:py-0 flex flex-col items-center justify-center bg-foreground-secondary/44">
      <div className="absolute right-0 bottom-0 opacity-80">
        <Image
          src="/images/donationInfo/DonationHero.png"
          alt="DonationHero"
          width={600}
          height={600}
          className="hidden tablet-xs:block object-contain"
          priority
        />
      </div>

      <div className="flex-col max-w-lg tablet-xs:p-16 mx-8 p-8 tablet-xs:mx-0 items-center justify-center text-left tablet-xs:text-center text-balance bg-foreground-secondary/16 z-20 rounded-lg border border-white/32 shadow-md">
        <h2 className="text-4xl w-fit font-thin mx-auto tracking-wider text-text pb-2 mb-8 border-b border-text/40">
          Deine Spende für mich
        </h2>

        <p className="text-balance pb-8 text-lg font-thin ">
          Wenn dir meine Wetterseite gefällt und du sie unterstützen möchtest,
          kannst du mir über PayPal gerne eine kleine Spende hinterlassen 🙂
        </p>

        <div className="flex flex-col items-center pb-4">
          <div className="relative">
            <input
              type="number"
              value={amount}
              min="1"
              aria-label="Spendenbetrag in Euro"
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
            bg-background-paypal text-white font-semibold 
            px-12 py-3 rounded-full hover:bg-background-paypal/80
            transition-all duration-300 ease-in-out 
            shadow-md hover:shadow-lg active:scale-[0.98]"
        >
          <span>mit</span>
          <Image
            src="/images/donationInfo/payPalLogo.svg"
            alt="PayPal Logo"
            width={50}
            height={50}
            className="h-4 w-fit"
            priority
          />{" "}
          <span>spenden</span>
        </Link>
      </div>
    </section>
  );
}
