import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";
import { Send } from "lucide-react";

export function ContactCta() {
  return (
    <section
      className="relative w-full h-svh flex flex-col items-center 
      justify-center bg-foreground-secondary/44
      "
    >
      <div className="max-w-4xl flex flex-col items-center justify-center px-16 text-left tablet-xs:text-center tablet-xs:text-balance">
        <h2 className="text-4xl font-thin tracking-wider text-left text-text pb-2 mb-8 border-b border-text/40">
          Lasst uns Kontakt aufnehmen
        </h2>
        <p className="leading-relaxed pb-8">
          Mir ist eine übersichtliche und strukturierte Reise durch die
          verschiedenen Bereiche meine Homepage sehr wichtig. Neben den
          inhaltlich qualitativen Berichte zum Wetter wünsche ich mir, dass ihr
          euch hier wohl fühlt und euch gut und gerne zurechtfindet.
        </p>
        <a
          href="/kontakt"
          className="
              group relative inline-flex items-center justify-center w-full tablet-xs:w-2/6
              py-6 rounded-md bg-foreground-secondary/16 
              shadow-sm border border-white/32 text-text/80 text-base md:text-lg font-semibold 
              hover:bg-header-background/32  active:bg-accent/80 
              transition-colors overflow-hidden
            "
        >
          <span
            className="
                absolute inset-0 flex items-center justify-center 
                transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-[-10%]
              "
          >
            Schreib mir
          </span>

          <Send
            className="
                absolute inset-0 m-auto opacity-0 translate-y-[20%] 
                transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0
              "
          />
        </a>

        <div className="flex flex-col items-center justify-around gap-y-4 pt-8">
          <p className="text-2xl font-thin">und folge mir auf</p>
          <div className="flex items-center gap-6 text-3xl text-accent">
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
          </div>
        </div>
      </div>
    </section>
  );
}
