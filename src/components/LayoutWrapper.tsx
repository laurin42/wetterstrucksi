"use client";

import { ReactNode } from "react";
import Header from "@/components/header/Header";
import Footer from "./footer/Footer";

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="main md:pt-8 md:pb-8">{children}</main>
      <Footer />
    </>
  );
}
