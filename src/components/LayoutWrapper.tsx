"use client";

import { ReactNode } from "react";
import Header from "@/components/header/Header";

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="main mt-16 md:mt-20">{children}</main>
    </>
  );
}
