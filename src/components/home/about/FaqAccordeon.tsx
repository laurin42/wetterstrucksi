"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <section className="w-full max-w-5xl mx-auto gap-y-4 py-16 px-4 tablet-xs:py-16 tablet-xs:px-16 tablet-xs:rounded-lg border border-white/32 shadow-xs shadow-header-background/16 tablet-xs:shadow-lg">
      <div className="flex flex-col items-center text-center ">
        <h1 className="w-fit text-3xl text-text font-thin tracking-wider">
          Eure Fragen?
        </h1>
        <h2 className="w-fit text-3xl text-text font-thin border-b border-text/40 pb-2 mb-8 tracking-wider">
          Meine Antworten!
        </h2>
      </div>
      <div>
        <Accordion type="single" collapsible>
          {items.map((item, index) => (
            <div key={index}>
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className=" py-2"
              >
                <AccordionTrigger
                  className="flex items-center bg-accent-dim/44 md:bg-header-background/44 justify-between text-lg font-medium text-text-white rounded-xl rounded-b-none hover:text-text-white/80 transition cursor-pointer px-4 py-4 "
                  style={{ textDecoration: "none" }}
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 md:mx-0 md:px-8 my-4 py-6 text-base text-text-white/80 rounded-xl rounded-t-none bg-accent/40 md:bg-accent/80  leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
