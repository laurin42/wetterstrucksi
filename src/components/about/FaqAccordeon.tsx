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
    <div className="w-full max-w-5xl mx-auto gap-y-4 px-16">
      <Accordion type="single" collapsible>
        {items.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className=" py-2">
            <AccordionTrigger
              className="flex items-center bg-accent-dim/44 md:bg-accent-dim/20 justify-between text-lg font-medium text-text rounded-xl rounded-b-none hover:text-accent transition cursor-pointer px-4 py-4 "
              style={{ textDecoration: "none" }}
            >
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="px-4 md:mx-0 md:px-8 my-4 py-6 text-base text-muted-foreground rounded-xl rounded-t-none bg-accent/40 md:bg-accent/20  leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
