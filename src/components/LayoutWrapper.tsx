"use client";

import { ReactNode } from "react";
import Header from "@/components/header/Header";
import Footer from "./footer/Footer";
import { ScrollToTop } from "./ScrollToTop";

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
}
