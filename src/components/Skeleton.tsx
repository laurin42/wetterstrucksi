import React from "react";

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width = "100%",
  height = 20,
  className,
}) => {
  return (
    <div
      style={{ width, height }}
      className={`md:bg-transparent animate-pulse rounded ${className}`}
    />
  );
};
