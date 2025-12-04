import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function VacationInfo() {
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
      transition={{ duration: 0.6 }}
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

      <div className="hidden sm:flex sm:flex-col sm:items-center sm:justify-center sm:py-2 sm:px-4">
        <div className="absolute bottom-2 right-0 h-42 w-42 opacity-80">
          <Image
            src="/images/vacation/vacationLogo.png"
            alt="Logo Alternative"
            sizes="(max-width: 640px) 14rem, (max-width: 768px) 15rem, (max-width: 1024px) 16rem, 17rem"
            fill
            priority
            className="object-contain"
          />
        </div>
        <h3 className="text-xl sm:text-2xl tracking-wider">Urlaub</h3>
        <p className="font-semibold">12. Dezember – 8. Januar</p>
        <p> (in diesem Zeitraum kommen die Berichte unregelmäßig)</p>
      </div>
    </motion.div>
  );
}
