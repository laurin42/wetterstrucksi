"use client";

import { useEffect, useState, useRef, forwardRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useMounted } from "@/lib/useMounted";
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
import { mainMenu } from "@/data/navigation";

interface HeaderProps {
  onHeightChange?: (height: number) => void;
}

const Header = forwardRef<HTMLElement, HeaderProps>(
  ({ onHeightChange }, ref) => {
    const { theme, setTheme } = useTheme();
    const mounted = useMounted();

    const innerRef = useRef<HTMLElement>(null);
    const headerRef = (ref as React.RefObject<HTMLElement>) || innerRef;

    const [menuOpen, setMenuOpen] = useState(false);
    const [scrollDirection, setScrollDirection] = useState<
      "up" | "down" | null
    >(null);
    const lastScrollY = useRef(0);

    useEffect(() => {
      if (!headerRef.current) return;
      const observer = new ResizeObserver(([entry]) => {
        onHeightChange?.(entry.contentRect.height);
      });
      observer.observe(headerRef.current);
      return () => observer.disconnect();
    }, [onHeightChange, headerRef]);

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
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setMenuOpen((prev) => !prev);
    const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

    return (
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 bg-foreground-secondary text-text transition-transform duration-300 shadow-md
        ${scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"}
        max-h-[100px]
      `}
      >
        <div className="flex justify-between items-center px-4">
          <section className="flex flex-nowrap items-center space-x-4">
            <Link href="/">
              {mounted && (
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
              )}
            </Link>
            <div className="hidden sm:flex flex-row whitespace-nowrap">
              <Link
                href="/about"
                className="font-bold hover:text-accent cursor-pointer transition-colors duration-420 ease-in-out"
              >
                Jens Strucks
              </Link>
              <p className="px-2">|</p>
              <p>Dein Ort für Wetter in Düsseldorf</p>
            </div>
          </section>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-6">
              {mainMenu.map((item) => (
                <NavigationMenu key={item.title}>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <Link href={item.href}>
                        <NavigationMenuTrigger className="inline-flex items-center px-4 py-6 text-text text-lg rounded-md bg-foreground-secondary hover:cursor-pointer transition-colors duration-420 ease-in-out">
                          {item.title}
                        </NavigationMenuTrigger>
                      </Link>
                      {item.subItems.length > 0 && (
                        <NavigationMenuContent className="p-4 rounded-md shadow-lg w-[300px] bg-foreground text-text">
                          <ul className="grid gap-3 w-50">
                            {item.subItems.map((sub) => (
                              <li key={sub.title}>
                                <NavigationMenuLink
                                  href={sub.href}
                                  className="block px-3 py-2 rounded-md hover:bg-accent-dim transition-colors duration-420 ease-in-out"
                                >
                                  {sub.title}
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      )}
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              ))}
            </div>
            <button
              onClick={toggleTheme}
              aria-label="Theme wechseln"
              className="transition-colors duration-420 ease-in-out hover:cursor-pointer"
            >
              {theme === "dark" ? (
                <MdLightMode size={32} />
              ) : (
                <MdDarkMode size={32} />
              )}
            </button>

            <button
              onClick={toggleMenu}
              aria-label="Menü öffnen/schließen"
              className="md:hidden"
            >
              {menuOpen ? <MdClose size={42} /> : <MdMenu size={42} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-foreground-secondary text-text z-50 p-4 flex flex-col space-y-4 md:hidden shadow-md">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {mainMenu.map((item) =>
                item.subItems.length > 0 ? (
                  <AccordionItem key={item.title} value={item.title}>
                    <AccordionTrigger className="w-full text-left px-4 py-2 rounded-md bg-foreground-secondary hover:bg-muted flex justify-between items-center transition-colors duration-420 ease-in-out">
                      <Link
                        href={item.href}
                        className="flex-grow text-left text-2xl font-light"
                      >
                        {item.title}
                      </Link>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col space-y-2 mt-2">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.title}
                          href={sub.href}
                          className="px-8 py-2 rounded hover:bg-muted transition-colors duration-420 ease-in-out text-xl font-extralight"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ) : (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="block px-4 py-2 rounded-md hover:bg-muted transition-colors duration-420 ease-in-out text-2xl font-light"
                  >
                    {item.title}
                  </Link>
                )
              )}
            </Accordion>
          </div>
        )}
      </header>
    );
  }
);

Header.displayName = "Header";

export default Header;
