"use client";
import AboutHero from "./AboutHero";
import { AboutStory } from "./AboutStory";
import { FaqAccordion } from "@/components/about/FaqAccordeon";
import { faqItems } from "@/lib/faq";
import { Contact } from "../Contact";

export default function AboutPageClient() {
  return (
    <section>
      <div className="tablet-xs:h-screen max-w-6xl flex items-start tablet-xs:pt-12 mx-auto">
        <AboutHero />
      </div>
      <AboutStory />

      <FaqAccordion items={faqItems} />

      <Contact />
    </section>
  );
}
