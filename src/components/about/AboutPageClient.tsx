"use client";
import AboutHero from "./AboutHero";
import { AboutStory } from "./AboutStory";
import { FaqAccordion } from "@/components/about/FaqAccordeon";
import { faqItems } from "@/lib/faq";
import { Contact } from "../Contact";

export default function AboutPageClient() {
  return (
    <section className="tablet-xs:pb-16">
      <div className="h-[calc(100svh-64px)] max-w-6xl flex items-center mx-auto ">
        <AboutHero />
      </div>
      <AboutStory />

      <FaqAccordion items={faqItems} />

      <Contact />
    </section>
  );
}
