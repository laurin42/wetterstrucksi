import Image from "next/image";
import { useMounted } from "@/lib/useMounted";
import { useIsVacationTime } from "@/lib/useIsVacationTime";
import { NewestPostCard } from "../posts/NewestPostCard";
import { PostWithMeta } from "@tryghost/content-api";
import VacationInfo from "./VacationInfo";
import { weatherCodeToImage } from "@/lib/weatherImages/weatherImages";

interface HomeHeroProps {
  posts: PostWithMeta[];
  currentWeatherData: {
    time: string;
    is_day: number;
  };
  currentWeatherCode: number;
  isVacationTime?: boolean;
}

export default function HomeHero({
  posts,
  currentWeatherData,
  currentWeatherCode,
}: HomeHeroProps) {
  const mounted = useMounted();
  const isVacationTime = useIsVacationTime();

  const isNight = currentWeatherData?.is_day === 0;

  const month = currentWeatherData?.time
    ? Number(currentWeatherData.time.slice(5, 7))
    : 11;

  const isWinter = [11, 12, 1, 2].includes(month);

  function getWeatherBackgroundImage(
    code: number,
    night: boolean,
    winter: boolean
  ) {
    const baseImage =
      weatherCodeToImage[code] || "/images/home/homeHeroLight.webp";

    let folder = "";
    if (night && winter) folder = "nightWinter";
    else if (night) folder = "night";
    else if (winter) folder = "winter";

    if (!folder) return baseImage;

    const fileName = baseImage.split("/").pop();
    return `/images/weatherImages/${folder}/${fileName}`;
  }

  const backgroundImage = mounted
    ? getWeatherBackgroundImage(currentWeatherCode, isNight ?? false, isWinter)
    : undefined;

  const normalizedPosts = posts.map((post) => ({
    ...post,
    id: post.id || post.uuid || crypto.randomUUID(),
  }));

  return (
    <section className="relative w-full h-[calc(100svh-64px)] landscapeScreen flex items-start sm:items-center tablet-xs:items-center justify-center bg-cover bg-center">
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt="Hintergrundbild"
            fill
            sizes="100vw"
            className="object-cover object-center z-0 opacity-0 animate-fade-in animation-delay-02"
            preload={true}
            placeholder="blur"
            blurDataURL={backgroundImage}
          />
          <div className="absolute inset-0 bg-black/60 z-10 opacity-0 animate-fade-in animation-delay-02" />
        </>
      )}

      <div className="max-w-6xl h-full relative flex flex-col tablet:flex-row landscapeView items-center justify-center z-20 mx-auto px-8 tablet-xs:px-16 gap-y-8">
        <div className="relative w-full flex flex-col items-center text-balance text-4xl landscapeFont tablet-xs:text-5xl font-thin text-white">
          <h1 className="opacity-0 animate-fade-in animation-delay-04">
            <em className="font-semibold tracking-wide">Dein</em> Ort für Wetter
          </h1>

          <h2 className="opacity-0 animate-fade-in animation-delay-08">
            in <em className="font-semibold tracking-wide">Düsseldorf</em>
          </h2>
        </div>

        <div className="w-full flex flex-col items-center z-0 p-4 opacity-0 animate-fade-in animation-delay-12">
          {isVacationTime && (
            <div className="mb-6 w-full">
              <VacationInfo />
            </div>
          )}
          {normalizedPosts.slice(0, 1).map((post) => (
            <div key={post.id} className="w-full flex justify-center shrink-0">
              <NewestPostCard post={post} className="flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
