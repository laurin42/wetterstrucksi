import { useMotionVariants } from "@/lib/animation/useMotionVariants";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";

export function ContactCta() {
  const { sectionAnimation, viewportOnce } = useMotionVariants();
  return (
    <section className="flex flex-col max-w-6xl justify-center bg-foreground-secondary/88 backdrop-blur-sm  text-center mx-auto min-h-[94vh] tablet-xs:min-h-auto tablet-xs:mt-4 landscape-no-margin">
      <div className="flex flex-col items-center mx-8 md:mx-0 justify-center gap-y-8 py-4 md:py-24 md:px-40">
        <motion.h2
          variants={sectionAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="w-fit text-center text-3xl font-light text-text tracking-wider mb-6 pb-2 border-b-[1px] border-text/40"
        >
          Lasst uns Kontakt aufnehmen
        </motion.h2>
        <motion.p
          variants={sectionAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="leading-relaxed text-balance"
        >
          Mir ist eine übersichtliche und strukturierte Reise durch die
          verschiedenen Bereiche meine Homepage sehr wichtig. Neben den
          inhaltlich qualitativen Berichte zum Wetter wünsche ich mir, dass ihr
          euch hier wohl fühlt und euch gut und gerne zurechtfindet.
        </motion.p>
        <motion.a
          variants={sectionAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          href="/kontakt"
          className="max-w-xl inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-text-white text-base md:text-lg font-semibold hover:bg-accent/80 transition-colors"
        >
          Schreibt mir
        </motion.a>
        <div className="flex flex-col items-center justify-around gap-y-4 pt-6">
          <motion.p
            variants={sectionAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-2xl font-thin tracking-wide"
          >
            oder folgt mir auf
          </motion.p>
          <motion.div
            variants={sectionAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex items-center gap-6 text-3xl text-accent"
          >
            <a
              href="https://www.facebook.com/WetterstrucksiD"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="cursor-pointer"
            >
              <FaFacebook className="hover:text-accent/80 transition-colors" />
            </a>
            <a
              href="https://www.instagram.com/wetterstrucksiduesseldorf/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="cursor-pointer"
            >
              <FaInstagram className="hover:text-accent/80 transition-colors" />
            </a>
            <a
              href="https://x.com/wetterstrucksi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="cursor-pointer"
            >
              <FaXTwitter className="hover:text-accent/80 transition-colors" />
            </a>

            <a
              href="https://www.linkedin.com/in/jensstrucks/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="cursor-pointer"
            >
              <FaLinkedin className="hover:text-accent/80 transition-colors" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
