"use client";

import { useState, ReactNode } from "react";
import Header from "@/components/header/Header";

export default function ClientWrapper({ children }: { children: ReactNode }) {
  const [headerHeight, setHeaderHeight] = useState(0);

  return (
    <>
      <Header onHeightChange={setHeaderHeight} />
      <main className="main" style={{ paddingTop: headerHeight * 1.2 }}>
        {children}
      </main>
    </>
  );
}
