"use client";
import AboutHero from "./AboutHero";
import { AboutStoryDesktop } from "./AboutStoryDesktop";
import { AboutStoryMobile } from "./AboutStoryMobile";
import { FaqAccordion } from "@/components/about/FaqAccordeon";
import { faqItems } from "@/lib/faq";
import { ContactCta } from "../kontakt/ContactCta";

export default function AboutPageClient() {
  return (
    <section className="tablet-xs:pb-16">
      <div className="h-[calc(100svh-64px)] max-w-6xl flex items-center mx-auto ">
        <AboutHero />
      </div>
      <div className="hidden tablet-xs:block">
        <AboutStoryDesktop />
      </div>
      <div className="block tablet-xs:hidden">
        <AboutStoryMobile />
      </div>
      <FaqAccordion items={faqItems} />

      <ContactCta />
    </section>
  );
}
