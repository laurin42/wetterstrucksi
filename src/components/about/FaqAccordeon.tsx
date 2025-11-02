"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useMotionVariants } from "@/lib/animation/useMotionVariants";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const { fadeInVariant, viewportOnceSensitive, containerVariantsSmooth } =
    useMotionVariants();

  return (
    <section className="w-full max-w-6xl mx-auto gap-y-4 px-4 py-8 tablet-xs:p-24 bg-foreground-secondary/88 tablet-xs:rounded-lg tablet-xs:shadow-lg">
      <div className="flex flex-col items-center text-center">
        <motion.h1
          initial="hidden"
          animate="visible"
          viewport={viewportOnceSensitive}
          variants={fadeInVariant}
          className="w-fit text-3xl text-text font-thin tracking-wider"
        >
          Eure Fragen?
        </motion.h1>
        <motion.h2
          initial="hidden"
          animate="visible"
          viewport={viewportOnceSensitive}
          variants={fadeInVariant}
          className="w-fit text-3xl text-text font-thin border-b-[1px] border-text/40 pb-2 mb-8 tracking-wider"
        >
          Meine Antworten!
        </motion.h2>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnceSensitive}
        variants={containerVariantsSmooth}
      >
        <Accordion type="single" collapsible>
          {items.map((item, index) => (
            <motion.div key={index} variants={fadeInVariant}>
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className=" py-2"
              >
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
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}
