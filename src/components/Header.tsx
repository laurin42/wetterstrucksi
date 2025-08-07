"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { MdLightMode, MdDarkMode, MdMenu, MdClose } from "react-icons/md";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Header({
  onHeightChange,
}: {
  onHeightChange?: (height: number) => void;
}) {
  const headerRef = useRef<HTMLElement>(null);

  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (!headerRef.current) return;
    const observer = new ResizeObserver(([entry]) => {
      onHeightChange?.(entry.contentRect.height);
    });
    observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, [onHeightChange]);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme =
      storedTheme === "dark" || (!storedTheme && prefersDark)
        ? "dark"
        : "light";

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection("up");
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 bg-background text-text transition-transform duration-300
        ${scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"}
        max-h-[100px]
      `}
    >
      <div className="flex justify-between items-center px-4 py-2">
        <section className="flex flex-nowrap items-center space-x-4">
          <Link href="/home">
            <Image
              src={
                theme === "dark"
                  ? "/images/heroImageDark.png"
                  : "/images/heroImageLight.png"
              }
              width={124}
              height={124}
              alt="wetterstrucksi logo"
              priority
            />
          </Link>
          <div className="hidden sm:flex flex-row whitespace-nowrap">
            <Link href="/überMich" className="font-bold">
              Jens Strucks
            </Link>
            <p className="px-2">|</p>
            <p>Dein Ort für Wetter in Düsseldorf</p>
          </div>
        </section>

        <div className="hidden md:flex items-center space-x-6 p-4 bg-background text-text justify-end">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="inline-flex items-center px-4 py-6 text-text text-lg rounded-md bg-background hover:bg-muted">
                  Wetter
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-4 rounded-md shadow-lg w-[300px] bg-background text-text">
                  <ul className="grid gap-3 w-50">
                    <li>
                      <NavigationMenuLink
                        href="/wetter/heute"
                        className="block px-3 py-2 rounded-md hover:bg-muted"
                      >
                        Vorhersagen
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/wetter/vorhersagen"
                        className="block px-3 py-2 rounded-md hover:bg-muted"
                      >
                        Updates
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/wetter/rueckblicke"
                        className="block px-3 py-2 rounded-md hover:bg-muted"
                      >
                        Rückblicke
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/wetter/allgemeines"
                        className="block px-3 py-2 rounded-md hover:bg-muted"
                      >
                        Allgemeines
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="inline-flex items-center px-4 py-6 rounded-md bg-background text-text text-lg hover:bg-muted">
                  Archiv
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-4 rounded-md shadow-lg w-[300px] bg-background text-text">
                  <ul className="grid gap-3 w-50">
                    <li>
                      <NavigationMenuLink
                        href="/services/consulting"
                        className="block px-3 py-2 rounded-md hover:bg-muted"
                      >
                        2025
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/services/support"
                        className="block px-3 py-2 rounded-md hover:bg-muted"
                      >
                        2024
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            href="/about"
            className="inline-flex items-center px-4 py-3 text-md rounded-md border border-transparent hover:border-muted"
          >
            Über mich
          </Link>

          <button
            onClick={toggleTheme}
            aria-label="Theme wechseln"
            className="ml-4 px-3 py-1 rounded bg-background text-muted hover:cursor-pointer"
          >
            {theme === "dark" ? (
              <MdLightMode size={24} />
            ) : (
              <MdDarkMode size={24} />
            )}
          </button>
        </div>

        <div className="flex md:hidden items-center space-x-4">
          <button onClick={toggleTheme} aria-label="Theme wechseln">
            {theme === "dark" ? (
              <MdLightMode size={24} />
            ) : (
              <MdDarkMode size={24} />
            )}
          </button>
          <button onClick={toggleMenu} aria-label="Menü öffnen/schließen">
            {menuOpen ? <MdClose size={42} /> : <MdMenu size={42} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-background text-text z-50 p-4 flex flex-col space-y-4 md:hidden shadow-md">
            <Accordion type="single" collapsible className="w-full space-y-2">
              <AccordionItem value="wetter">
                <AccordionTrigger className="w-full text-left px-4 py-2 rounded-md bg-background hover:bg-muted">
                  Wetter
                </AccordionTrigger>
                <AccordionContent className="flex flex-col space-y-2 mt-2">
                  <Link
                    href="/wetter/heute"
                    onClick={toggleMenu}
                    className="px-4 py-2 rounded hover:bg-muted"
                  >
                    Heute
                  </Link>
                  <Link
                    href="/wetter/vorhersagen"
                    onClick={toggleMenu}
                    className="px-4 py-2 rounded hover:bg-muted"
                  >
                    Vorhersagen
                  </Link>
                  <Link
                    href="/wetter/rueckblicke"
                    onClick={toggleMenu}
                    className="px-4 py-2 rounded hover:bg-muted"
                  >
                    Rückblicke
                  </Link>
                  <Link
                    href="/wetter/allgemeines"
                    onClick={toggleMenu}
                    className="px-4 py-2 rounded hover:bg-muted"
                  >
                    Allgemeines
                  </Link>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="archiv">
                <AccordionTrigger className="w-full text-left px-4 py-2 rounded-md bg-background hover:bg-muted">
                  Archiv
                </AccordionTrigger>
                <AccordionContent className="flex flex-col space-y-2 mt-2">
                  <Link
                    href="/services/consulting"
                    onClick={toggleMenu}
                    className="px-4 py-2 rounded hover:bg-muted"
                  >
                    2025
                  </Link>
                  <Link
                    href="/services/support"
                    onClick={toggleMenu}
                    className="px-4 py-2 rounded hover:bg-muted"
                  >
                    2024
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Link
              href="/about"
              onClick={toggleMenu}
              className="block px-4 py-2 rounded-md hover:bg-muted"
            >
              Über uns
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
