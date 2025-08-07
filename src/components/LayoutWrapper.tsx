"use client";

import { useState, ReactNode } from "react";
import Header from "@/components/Header";

export default function ClientWrapper({ children }: { children: ReactNode }) {
  const [headerHeight, setHeaderHeight] = useState(0);

  return (
    <>
      <Header onHeightChange={setHeaderHeight} />
      <main style={{ paddingTop: headerHeight }}>{children}</main>
    </>
  );
}
