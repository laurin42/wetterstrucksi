import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useMounted } from "@/lib/useMounted";
import { useIsVacationTime } from "@/lib/useIsVacationTime";
import { NewestPostCard } from "../posts/NewestPostCard";
import { PostWithMeta } from "@tryghost/content-api";
import VacationInfo from "./VacationInfo";
interface HomeHeroProps {
  posts: PostWithMeta[];
}

export default function HomeHero({ posts }: HomeHeroProps) {
  const { theme } = useTheme();
  const mounted = useMounted();
  const isVacationTime = useIsVacationTime();

  const backgroundImage = mounted
    ? theme === "dark"
      ? "/images/home/homeHeroDark.webp"
      : "/images/home/homeHeroLight.webp"
    : undefined;

  const normalizedPosts = posts.map((posts) => ({
    ...posts,
    id: posts.id || posts.uuid || crypto.randomUUID(),
  }));

  return (
    <section className="relative w-full h-[calc(100svh-64px)] landscapeScreen flex items-start  sm:items-center tablet-xs:items-center justify-center bg-cover bg-center">
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt="Hintergrundbild"
            fill
            sizes="100vw"
            className="object-cover object-center z-0"
            preload={true}
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
        </>
      )}

      <div className="max-w-6xl h-full relative flex flex-col tablet:flex-row landscapeView items-center justify-center z-20 mx-auto gap-y-8">
        <div className="relative w-full flex flex-col items-center text-balance text-4xl landscapeFont tablet-xs:text-5xl font-thin text-white">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.6, ease: "easeOut" }}
          >
            <em className="font-semibold tracking-wide">Dein</em> Ort für Wetter
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 1.6 }}
          >
            in <em className="font-semibold tracking-wide">Düsseldorf</em>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeIn", delay: 2.0 }}
          className="w-full flex flex-col items-center z-0 p-4"
        >
          {normalizedPosts.slice(0, 1).map((post) => (
            <div key={post.id} className="w-full flex justify-center shrink-0">
              <NewestPostCard post={post} className="flex-1" />
            </div>
          ))}
          {isVacationTime && (
            <div className="hidden md:block mt-6">
              <VacationInfo />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
