import type { Metadata } from "next";
import LayoutWrapper from "@/components/LayoutWrapper";
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
    <html lang="de" className="h-full" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </head>
      <body className="md:bg-background sm:bg-foreground h-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <WeatherProvider>
            <LayoutWrapper>{children}</LayoutWrapper>
          </WeatherProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
