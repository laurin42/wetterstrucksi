import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function VacationInfoHeader() {
  const tickerRef = useRef<HTMLDivElement | null>(null);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const el = tickerRef.current;
    if (!el) return;

    let count = 0;

    const handleIter = () => {
      count += 1;
      if (count >= 2) {
        setHide(true);
      }
    };

    el.addEventListener("animationiteration", handleIter);
    return () => el.removeEventListener("animationiteration", handleIter);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: hide ? 0 : 1 }}
      transition={{ duration: 0 }}
      className="
        relative w-full text-center text-white z-50
        overflow-hidden
        bg-header-background/60 backdrop-blur-sm
        sm:bg-transparent sm:backdrop-blur-none
        sm:overflow-visible sm:flex sm:flex-col sm:items-center sm:justify-center
      "
    >
      <div
        ref={tickerRef}
        className={`
          block sm:hidden w-full whitespace-nowrap py-2
          ${hide ? "pointer-events-none" : "animate-ticker"}
        `}
      >
        <span className="inline-block px-4 text-sm font-semibold tracking-wide">
          Urlaub: 12. Dezember – 8. Januar (in diesem Zeitraum kommen die
          Berichte unregelmäßig)
        </span>
      </div>
    </motion.div>
  );
}
