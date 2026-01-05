import Image from "next/image";
import { FaAngleDoubleDown } from "react-icons/fa";

interface AboutShortProps {
  onShowMore: () => void;
}

export function AboutShort({ onShowMore }: AboutShortProps) {
  return (
    <section className="relative w-full min-h-svh flex flex-col items-center justify-center bg-foreground-secondary/44">
      <div className="max-w-4xl p-16">
        <div className="absolute left-0 h-32 w-32 tablet-xs:w-42 tablet-xs:h-42 tablet:w-54 tablet:h-54 sm:bottom-4 md:bottom-8 opacity-80">
          <Image
            src="/images/about/logoAlternative.webp"
            alt="Logo Alternative"
            sizes="(max-width: 640px) 14rem, (max-width: 768px) 15rem, (max-width: 1024px) 16rem, 17rem"
            fill
            priority
            sizes="(max-width: 768px) 250px, 250px"
            className="hidden tablet-xs:block object-contain"
          />
        </div>

        <div className="flex flex-col justify-center w-full items-center">
          <div className="max-w-3xl flex flex-col text-left text-text text-lg font-thin items-start first:items-center last:items-center gap-4">
            <h2 className="text-4xl font-thin tracking-wider pb-2 mb-8 border-b border-text/40">
              Über wetterstrucksi.de
            </h2>

            <p className="leading-relaxed">
              Ich bin Jens Strucks, Hobby-Meteorologe. Auf Facebook und
              Instagram verfolgen mehr als 10.000 Menschen seit 2011 meine
              täglichen Vorhersagen sowie sachlichen Auseinandersetzungen zum
              Wetter. Dabei ist es mir wichtig, einen Wetterdienst zur Verfügung
              zu stellen, der unabhängig arbeitet und die beste Vorhersage für
              deine Stadt bietet.
            </p>

            <p className="leading-relaxed">
              Mit diesem Vertrauen arbeite ich seit mehr als 10 Jahren sehr
              leidenschaftlich und seriös. Mein Ziel ist es, mit dieser Seite
              eine Wohlfühloase zu schaffen, bei der sich ausgelassen über das
              Wetter unterhalten werden kann.
            </p>
          </div>
          <button
            onClick={onShowMore}
            className="
            group relative inline-flex items-center justify-center w-full tablet-xs:w-3/6
            py-6 my-8 cursor-pointer rounded-md bg-foreground-secondary/16 
            shadow-sm border border-white/32 text-text/80 text-base md:text-lg font-semibold 
            hover:shadow-none hover:border-transparent hover:bg-transparent active:scale-116
            transition-all duration-300 ease-in-out overflow-hidden
          "
          >
            <span
              className="
              absolute inset-0 flex items-center justify-center 
              transition-all duration-700 ease-in-out
              opacity-100 translate-y-0
              group-hover:opacity-0 group-hover:-translate-y-full group-active:hidden
            "
            >
              Erfahre hier mehr über mich
            </span>
            <FaAngleDoubleDown
              size={40}
              className=" absolute inset-0 m-auto text-header-background opacity-0
            translate-y-full transition-all duration-400 ease-in-out
            group-hover:opacity-100 group-hover:translate-y-0
            group-active:scale-108 group-active:shadow-none
            group-active:border-transparent group-active:bg-transparent group-active:hidden"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
