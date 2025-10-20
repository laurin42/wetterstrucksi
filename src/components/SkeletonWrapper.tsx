"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Skeleton } from "./Skeleton";
import { PostWithMeta } from "@tryghost/admin-api";

interface SkeletonWrapperProps {
  data: PostWithMeta[] | null;
  children?: React.ReactNode;
  minDuration?: number;
}

export const SkeletonWrapper: React.FC<SkeletonWrapperProps> = ({
  data,
  children,
  minDuration = 200,
}) => {
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSkeleton(false), minDuration);
    return () => clearTimeout(timer);
  }, [minDuration]);

  if (showSkeleton || !data || data.length === 0) {
    return (
      <motion.section className="max-w-4xl md:max-w-6xl mx-auto">
        {/* Hero Skeleton */}
        <Skeleton width="100%" height={200} className="mb-4 rounded-md" />

        {/* CollapsibleSectionHeader Skeleton */}
        <Skeleton width="100%" height={36} className="my-4 rounded-md" />

        {/* Posts Grid Skeleton */}
        <motion.section className="grid grid-cols-1 md:grid-cols-3 bg-foreground-secondary/44 pb-4 md:pt-4">
          <div className="px-1 md:pr-8 md:pl-4 md:col-span-3 grid grid-cols-1 md:grid-cols-3 md:gap-y-2 md:pt-0">
            {Array.from({ length: 6 }).map((_, idx) => (
              <motion.div key={idx} className="flex flex-col p-2">
                <Skeleton width="100%" height={150} className="rounded-md" />
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.section>
    );
  }

  return <>{children}</>;
};
