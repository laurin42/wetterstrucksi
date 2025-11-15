import type { Metadata } from "next";
import { Suspense } from "react";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { WeatherProvider } from "@/components/WeatherContext";

export const metadata: Metadata = {
  title: "Wetterstrucksi  |   Jens Strucks",
  description: "Dein Ort für Wetter in Düsseldorf",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className="h-full"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="md:bg-background sm:bg-foreground h-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <WeatherProvider>
            <Suspense fallback={null}>
              <ScrollToTop />
            </Suspense>
            <Suspense fallback={<div className="h-16" />}>
              <Header />
            </Suspense>

            <main className="min-h-full bg-background-gradient">
              {children}
            </main>
            <Footer />
          </WeatherProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
