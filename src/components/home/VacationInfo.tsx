import { motion } from "framer-motion";
import { useMotionVariants } from "@/lib/animation/useMotionVariants";

export default function VacationInfo() {
  const backgroundImage = `url("/images/vacationInfo/vacationHero.jpg")`;
  const { sectionAnimation } = useMotionVariants();

  return (
    <motion.section
      className="
      relative w-full flex flex-col items-center 
      md:flex-row justify-center
      h-[calc(100vh-4rem)] md:h-[80vh]
      bg-cover bg-center md:bg-center md:rounded-sm
    "
      style={{ backgroundImage }}
      initial="hidden"
      whileInView="visible"
      variants={sectionAnimation}
    >
      <div className="absolute inset-0 bg-black/44 z-0 md:rounded-sm" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionAnimation}
        className="flex flex-col items-center mx-8 md:mx-0 justify-center p-12  text-text text-center bg-foreground-secondary/44 z-1 rounded-sm backdrop-blur-sm"
      >
        <p className="font-thin text-2xl tracking-wider pb-2 border-b-[1px]">
          Urlaubszeiten:
        </p>
        <div className="pt-2 items-start">
          <p>1. September – 5. Oktober</p>
          <p>12. Dezember – 8. Januar</p>
          <p className="font-normal">
            - in diesen Zeiträumen kommen die Berichte unregelmäßig -
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
