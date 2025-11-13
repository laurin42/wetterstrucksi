"use client";

import { useState, useEffect, useRef } from "react";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqBubblesProps {
  items: FaqItem[];
}

interface BubblePos {
  left: number;
  top: number;
}

export function FaqBubbles({ items }: FaqBubblesProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [positions, setPositions] = useState<BubblePos[]>([]);
  const [delays, setDelays] = useState<number[]>([]);

  const bubbleWidth = 320;
  const bubbleHeight = 160;
  const padding = 20;
  const cols = 2;
  const rows = Math.ceil(items.length / cols);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // einmalig zufällige Offsets und Animation-Delays erzeugen
  useEffect(() => {
    if (containerWidth === 0) return;

    const slotWidth = containerWidth / cols;
    const slotHeight = bubbleHeight + padding;

    const newPositions: BubblePos[] = [];
    const newDelays: number[] = [];

    items.forEach((_, index) => {
      const row = Math.floor(index / cols);
      const col = index % cols;

      const maxOffsetX = Math.max(slotWidth - bubbleWidth, 0) / 2;
      const maxOffsetY = Math.max(slotHeight - bubbleHeight, 0) / 2;
      const offsetX = (Math.random() * 2 - 1) * maxOffsetX;
      const offsetY = (Math.random() * 2 - 1) * maxOffsetY;

      const left = col * slotWidth + slotWidth / 2 - bubbleWidth / 2 + offsetX;
      const top =
        row * slotHeight + slotHeight / 2 - bubbleHeight / 2 + offsetY;

      newPositions.push({ left, top });
      newDelays.push(Math.random() * 3);
    });

    setPositions(newPositions);
    setDelays(newDelays);
  }, [containerWidth, items]);

  const slotHeight = bubbleHeight + padding;
  const containerHeight = rows * slotHeight + padding;

  return (
    <div>
      <h1 className="text-4xl mx-auto font-thin tracking-wider w-fit border-b border-text/32 pb-2 mb-16">
        Eure Fragen, Meine Antworten
      </h1>
      <section
        ref={containerRef}
        style={{ height: containerHeight }}
        className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-start overflow-visible"
      >
        {items.map((item, index) => {
          const pos = positions[index];
          if (!pos) return null;

          return (
            <>
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`absolute w-[320px] h-40 flex items-center justify-center rounded-tr-xl rounded-br-xl rounded-bl-xl text-center text-2xl font-thin text-text cursor-pointer select-none p-4 animate-bubble
            border border-transparent hover:border-white/32 
            hover:scale-116 hover:text-header-background 
            transition-all duration-700 ease-in-out`}
                style={{
                  left: pos.left,
                  top: pos.top,
                  animationDelay: `${delays[index]}s`,
                }}
              >
                <p>{item.question}</p>
              </div>
            </>
          );
        })}

        {activeIndex !== null && (
          <div
            onClick={() => setActiveIndex(null)}
            className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-xs z-50 cursor-pointer transition-opacity"
          >
            <div className="relative max-w-5xl max-h-xl bg-foreground-secondary  border border-white/20 rounded-2xl p-16  text-2xl font-thin text-text shadow-lg">
              <MdKeyboardDoubleArrowRight
                size={64}
                className="absolute top-0 left-0 text-header-background/40 m-4"
              />
              <p className="p-4"> {items[activeIndex].answer}</p>
              <MdKeyboardDoubleArrowLeft
                size={64}
                className="absolute bottom-0 right-0 text-header-background/40 m-4"
              />
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
