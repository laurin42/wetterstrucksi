"use client";

import { ReactNode } from "react";
import Header from "@/components/header/Header";

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="main pt-16 md:pt-20">{children}</main>
    </>
  );
}
