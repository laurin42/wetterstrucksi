import AboutHero from "./AboutHero";
import { AboutStoryDesktop } from "./AboutStoryDesktop";
import { AboutStoryMobile } from "./AboutStoryMobile";
import { FaqAccordion } from "@/components/home/about/FaqAccordeon";
import { faqItems } from "@/lib/faq";

export default function AboutPage() {
  return (
    <section>
      <div className="max-w-5xl h-full mx-auto md:shadow-xs shadow-header-background/32 tablet-xs:border border-white/32 tablet-xs:rounded-md tablet-xs:my-16 tablet-xs:p-4">
        <AboutHero />
        <div className="hidden tablet-xs:block my-8">
          <AboutStoryDesktop />
        </div>
      </div>
      <div className="block tablet-xs:hidden">
        <AboutStoryMobile />
      </div>
      <FaqAccordion items={faqItems} />
    </section>
  );
}
