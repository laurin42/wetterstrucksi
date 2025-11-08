import { ReactNode } from "react";
import Header from "@/components/header/Header";
import Footer from "./footer/Footer";
import { ScrollToTop } from "./ui/ScrollToTop";
import HomeCurrentWeather from "./home/HomeCurrentWeather";

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <HomeCurrentWeather />
      <main className="min-h-full bg-background-gradient">{children}</main>
      <Footer />
    </>
  );
}
