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
      className={`bg-card-transparent/40 animate-pulse rounded ${className}`}
    />
  );
};
