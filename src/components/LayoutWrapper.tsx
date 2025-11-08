import { ReactNode, Suspense } from "react";
import Header from "@/components/header/Header";
import Footer from "./footer/Footer";
import { ScrollToTop } from "./ui/ScrollToTop";
import CurrentWeatherMobile from "./header/CurrentWeatherMobile";

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <Suspense fallback={null}>
        <ScrollToTop />
        <Header />
        <CurrentWeatherMobile />
      </Suspense>
      <main className="min-h-full bg-background-gradient ">{children}</main>
      <Footer />
    </>
  );
}
