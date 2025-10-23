"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Skeleton } from "./Skeleton";
import { PostWithMeta } from "@tryghost/content-api";

type LayoutType = "home" | "weather" | "archive" | "default";

interface SkeletonWrapperProps {
  data?: PostWithMeta[] | null;
  children?: React.ReactNode;
  minDuration?: number;
  layoutType: LayoutType;
}

const HomeSkeleton: React.FC = () => (
  <motion.section className="max-w-4xl md:max-w-6xl mx-auto">
    <div className="relative h-[calc(100svh-64px)] md:h-auto md:mb-4">
      <div className="hidden md:block bg-foreground-secondary/44">
        <Skeleton width="100%" height={174} className="rounded-md" />
      </div>

      <div className="block md:hidden h-full">
        <div className="h-full w-full p-6 flex flex-col justify-start bg-foreground-secondary/44 rounded-md">
          <div className="flex flex-col items-center mb-4 pt-8 space-y-3">
            <Skeleton width="85%" height={40} className="rounded-lg" />
            <Skeleton width="75%" height={40} className="rounded-lg" />
          </div>

          <div className="w-full pb-4">
            <div className="flex space-x-2 overflow-clip">
              <Skeleton
                height={520}
                className="flex-shrink-0 rounded-lg flex-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <motion.section className="grid grid-cols-1 md:grid-cols-3 bg-foreground-secondary/44 pb-4 md:pt-4">
      <div className="px-1 md:pr-8 md:pl-4 md:col-span-3 grid grid-cols-1 md:grid-cols-3 md:gap-y-2 md:pt-0">
        {Array.from({ length: 6 }).map((_, idx) => (
          <motion.div key={idx} className="flex flex-col p-2">
            <Skeleton width="100%" height={372} className="rounded-md" />
          </motion.div>
        ))}
      </div>
    </motion.section>
  </motion.section>
);

const WeatherSkeleton: React.FC = () => (
  <motion.section className="max-w-4xl md:max-w-6xl mx-auto pt-4">
    <div className="flex justify-between items-center mb-6 p-4 bg-foreground-secondary/44 rounded-lg">
      <Skeleton
        width="400px"
        height={134}
        className="rounded-t-sm pb-2 bg-transparent"
      />
    </div>
    <div className="flex justify-between items-center mb-6 p-4 bg-foreground-secondary/44 rounded-lg">
      <Skeleton width="140px" height={174} />
    </div>
    <div className="space-y-6">
      {Array.from({ length: 8 }).map((_, idx) => (
        <div
          key={idx}
          className="p-4 bg-foreground-secondary/44 rounded-lg flex space-x-4"
        >
          <Skeleton
            width="150px"
            height={100}
            className="flex-shrink-0 rounded-md hidden md:block"
          />
          <div className="flex-grow space-y-2">
            <Skeleton width="80%" height={24} />
            <Skeleton width="100%" height={16} />
            <Skeleton width="90%" height={16} />
            <Skeleton width="40%" height={16} />
          </div>
        </div>
      ))}
    </div>
  </motion.section>
);

const ArchiveSkeleton: React.FC = () => (
  <motion.section className="max-w-4xl md:max-w-6xl mx-auto pt-4">
    <div className="flex justify-between items-center mb-6 p-4 bg-foreground-secondary/44 rounded-lg">
      <Skeleton width="200px" height={134} className="rounded-t-sm pb-2" />
    </div>
    <div className="flex justify-between items-center mb-6 p-4 bg-foreground-secondary/44 rounded-lg">
      <Skeleton width="140px" height={174} />
    </div>
    <div className="space-y-6">
      {Array.from({ length: 8 }).map((_, idx) => (
        <div
          key={idx}
          className="p-4 bg-foreground-secondary/44 rounded-lg flex space-x-4"
        >
          <Skeleton
            width="150px"
            height={100}
            className="flex-shrink-0 rounded-md hidden md:block"
          />
          <div className="flex-grow space-y-2">
            <Skeleton width="80%" height={24} />
            <Skeleton width="100%" height={16} />
            <Skeleton width="90%" height={16} />
            <Skeleton width="40%" height={16} />
          </div>
        </div>
      ))}
    </div>
  </motion.section>
);

const RenderSkeleton: React.FC<{ layoutType: LayoutType }> = ({
  layoutType,
}) => {
  switch (layoutType) {
    case "weather":
      return <WeatherSkeleton />;
    case "archive":
      return <ArchiveSkeleton />;
    case "home":
    case "default":
    default:
      return <HomeSkeleton />;
  }
};

export const SkeletonWrapper: React.FC<SkeletonWrapperProps> = ({
  data,
  children,
  minDuration = 500,
  layoutType,
}) => {
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    if (data) {
      const timer = setTimeout(() => setShowSkeleton(false), minDuration);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        if (!data) {
          setShowSkeleton(true);
        }
      }, minDuration);
      return () => clearTimeout(timer);
    }
  }, [data, minDuration]);

  if (showSkeleton || !data) {
    return <RenderSkeleton layoutType={layoutType} />;
  }

  return <>{children}</>;
};
