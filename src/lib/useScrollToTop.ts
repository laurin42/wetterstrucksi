"use client";

import { RefObject, useCallback } from "react";

type Options = {
  setCurrentPage: (p: number) => void;
  totalPages: number;
  targetRef?: RefObject<HTMLElement| null> | null;
  scrollTo?: number;
};

export function usePaginationHandler({
  setCurrentPage,
  totalPages,
  targetRef = null,
  scrollTo = 0,
}: Options) {
  const handlePageChange = useCallback(
    (page: number) => {
      if (page < 1 || page > totalPages) return;

      setCurrentPage(page);

      if (typeof window === "undefined") return;

      requestAnimationFrame(() => {
        if (targetRef?.current) {
          targetRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        } else {
          window.scrollTo({
            top: scrollTo,
            behavior: "smooth",
          });
        }
      });
    },
    [setCurrentPage, totalPages, targetRef, scrollTo]
  );

  return { handlePageChange };
}
