"use client";

import { ReactNode, Suspense } from "react";
import Footer from "./footer/Footer";
import dynamic from "next/dynamic";
import { ScrollToTop } from "./ui/ScrollToTop";

const Header = dynamic(() => import("@/components/header/Header"), {
  ssr: false,
});
const HomeCurrentWeather = dynamic(
  () => import("../components/home/HomeCurrentWeather"),
  { ssr: false }
);

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <Suspense fallback={null}>
        <ScrollToTop />
        <Header />
        <HomeCurrentWeather />
      </Suspense>
      <main className="min-h-full bg-background-gradient">{children}</main>
      <Footer />
    </>
  );
}
