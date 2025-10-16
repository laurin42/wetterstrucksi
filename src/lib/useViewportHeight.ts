"use client"

import { useEffect, useState } from "react";

export function useViewportHeight() {
  const [vh, setVh] = useState(0);

  useEffect(() => {
    const handleResize = () => setVh(window.innerHeight * 0.01);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return vh;
}
