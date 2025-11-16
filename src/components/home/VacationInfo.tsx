import { motion } from "framer-motion";
import { useMotionVariants } from "@/lib/animation/useMotionVariants";

export default function VacationInfo() {
  const { sectionAnimation } = useMotionVariants();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={sectionAnimation}
      className="flex flex-col items-center mx-8 md:mx-0 justify-center py-4 px-8  text-text-white text-center bg-header-background/74 z-1  shadow-md border border-white/32"
    >
      <p className="font-thin text-2xl tracking-wider pb-2 border-b border-white/32">
        Urlaubszeiten:
      </p>
      <div className="pt-2 items-start">
        <p className="font-semibold">12. Dezember – 8. Januar</p>
        <p className="font-normal">
          (in diesem Zeitraum kommen die Berichte unregelmäßig)
        </p>
      </div>
    </motion.div>
  );
}
