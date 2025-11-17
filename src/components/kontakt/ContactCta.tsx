import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";
import { Send } from "lucide-react";

export function ContactCta() {
  return (
    <section className="relative w-full min-h-svh flex justify-center items-center my-8">
      <div className="max-w-3xl w-full flex flex-col items-start first:items-center px-4 xs:px-16 tablet-xs:px-16 gap-6">
        <h2 className="text-4xl font-thin tracking-wider text-left text-text pb-2 mb-8 border-b border-text/40">
          Lasst uns Kontakt aufnehmen
        </h2>

        <p className="leading-relaxed text-lg font-thin pb-8 text-left">
          Mir ist eine übersichtliche und strukturierte Reise durch die
          verschiedenen Bereiche meiner Homepage sehr wichtig. Neben den
          inhaltlich qualitativen Berichten zum Wetter wünsche ich mir, dass ihr
          euch hier wohlfühlt und euch gut und gerne zurechtfindet.
        </p>

        <a
          href="/kontakt"
          className="group relative inline-flex items-center justify-center w-full tablet-xs:w-3/6
            py-6 rounded-md bg-foreground-secondary/16 
            shadow-sm border border-white/32 text-text/80 text-base md:text-lg font-semibold 
            hover:shadow-none hover:border-transparent hover:bg-transparent active:scale-116
            transition-all duration-300 ease-in-out overflow-hidden"
        >
          <span
            className="absolute inset-0 flex items-center justify-center 
              transition-all duration-700 ease-in-out
              opacity-100 translate-y-0
              group-hover:opacity-0 group-hover:-translate-y-full"
          >
            Schreib mir eine Nachricht
          </span>

          <Send
            size={40}
            className="absolute inset-0 m-auto text-header-background
              opacity-0 translate-y-full
              transition-all duration-400 ease-in-out
              group-hover:opacity-100 group-hover:translate-y-0 group-active:scale-108 group-active:shadow-none group-active:border-transparent group-active:bg-transparent"
          />
        </a>

        <div className="flex flex-col items-start tablet-xs:items-center gap-4 pt-16">
          <p className="text-2xl font-thin text-left tablet-xs:text-center">
            und folge mir auf
          </p>
          <div className="flex items-center gap-6 text-3xl text-accent">
            <a
              href="https://www.facebook.com/WetterstrucksiD"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="cursor-pointer hover:scale-108 transition-transform duration-75"
            >
              <FaFacebook className="hover:text-accent/80 transition-colors" />
            </a>
            <a
              href="https://www.instagram.com/wetterstrucksiduesseldorf/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="cursor-pointer hover:scale-108 transition-transform duration-75"
            >
              <FaInstagram className="hover:text-accent/80 transition-colors" />
            </a>
            <a
              href="https://x.com/wetterstrucksi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="cursor-pointer hover:scale-108 transition-transform duration-75"
            >
              <FaXTwitter className="hover:text-accent/80 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/jensstrucks/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="cursor-pointer hover:scale-108 transition-transform duration-75"
            >
              <FaLinkedin className="hover:text-accent/80 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
