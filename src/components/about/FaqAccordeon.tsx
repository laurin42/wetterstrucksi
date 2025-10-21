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
    <div className="w-full max-w-5xl mx-auto">
      <Accordion type="single" collapsible className="space-y-4">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-b border-border/50"
          >
            <AccordionTrigger
              className="flex items-center justify-between text-lg font-medium text-text rounded-lg hover:text-accent transition cursor-pointer px-2 md:px-16 py-6"
              style={{ textDecoration: "none" }}
            >
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="px-4 md:mx-16 my-4 mr-4 py-6 text-base text-muted-foreground rounded-xl rounded-tr-none bg-accent/40 leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
