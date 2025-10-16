"use client";

import { ReactNode } from "react";
import Header from "@/components/header/Header";
import Footer from "./footer/Footer";

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div className="scroll-container h-[100vh] overflow-y-auto">
        <main className="main">{children}</main>
      </div>
      <Footer />
    </>
  );
}
