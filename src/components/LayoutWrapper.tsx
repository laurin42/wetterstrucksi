"use client";

import { ReactNode, Suspense } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import { ScrollToTop } from "./ui/ScrollToTop";

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <Suspense fallback={null}>
        <ScrollToTop />
      </Suspense>
      <Header />
      <main className="min-h-full bg-background-gradient">{children}</main>
      <Footer />
    </>
  );
}
