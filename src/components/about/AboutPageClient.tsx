"use client";
import AboutHero from "./AboutHero";
import { AboutStory } from "./AboutStory";
import { FaqAccordion } from "@/components/about/FaqAccordeon";
import { faqItems } from "@/lib/faq";
import { Contact } from "../Contact";

export default function AboutPageClient() {
  return (
    <>
      <AboutHero />
      <AboutStory />

      <section className="md:bg-foreground-secondary/44 bg-foreground/88 backdrop-blur-md md:mt-2 p-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-center text-text mb-8">
          Häufig gestellte Fragen
        </h2>
        <FaqAccordion items={faqItems} />
      </section>

      <Contact />
    </>
  );
}
