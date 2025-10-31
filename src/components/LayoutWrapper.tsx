import { ReactNode, Suspense } from "react";
import Header from "@/components/header/Header";
import Footer from "./footer/Footer";
import { ScrollToTop } from "./ScrollToTop";

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <Suspense fallback={null}>
        <ScrollToTop />
        <Header />
      </Suspense>
      <main className="min-h-full bg-background-gradient ">{children}</main>
      <Footer />
    </>
  );
}
