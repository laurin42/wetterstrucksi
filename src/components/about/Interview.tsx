"use client";

import { motion } from "framer-motion";
import { useMotionVariants } from "@/lib/animation/useMotionVariants";

export default function Interview() {
  const { containerVariants, fadeInVariant } = useMotionVariants();

  return (
    <motion.section
      className="max-w-6xl mx-auto bg-card/40 backdrop-blur-md p-8 rounded-md flex flex-col items-center justify-center md:my-16"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
    >
      <motion.div variants={fadeInVariant}>
        <h2 className="text-3xl font-light text-center text-text mb-1">
          Im Gespräch mit dem WDR
        </h2>

        <div className="md:translate-y-8 md:mb-8">
          <div className="mx-auto aspect-video rounded-md overflow-hidden max-w-[1068px] max-h-[768px]">
            <video
              src="/videos/wdrInterview.mp4"
              title="Interview WDR"
              controls
              className="w-full h-full"
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
