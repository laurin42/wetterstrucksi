"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { MdLightMode, MdDarkMode, MdMenu, MdClose } from "react-icons/md";
import { mainMenu } from "@/data/navigation";
import { useMounted } from "@/lib/useMounted";
import { useIsMobile } from "@/lib/useIsMobile";

export function ThemeAndMenu() {
  const { resolvedTheme, setTheme } = useTheme();
  const [displayTheme, setDisplayTheme] = useState<
    "light" | "dark" | undefined
  >();
  const mounted = useMounted();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const menuLinkClasses =
    "inline-flex items-center px-4 py-2 text-text text-3xl font-thin bg-transparent hover:text-accent transition-colors duration-300 ease-in-out";

  useEffect(() => setMenuOpen(false), [pathname]);
  useEffect(() => {
    if (mounted) setDisplayTheme(resolvedTheme as "light" | "dark");
  }, [resolvedTheme, mounted]);

  const toggleTheme = () => {
    const next: "light" | "dark" = displayTheme === "dark" ? "light" : "dark";
    setDisplayTheme(next);
    setTheme(next);
  };
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <div className="absolute right-4 md:right-8 flex items-center space-x-4 z-50">
        <nav className="hidden xl:flex space-x-6">
          {mainMenu.map((item) => (
            <a key={item.title} href={item.href} className={menuLinkClasses}>
              {item.title}
            </a>
          ))}
        </nav>

        <button onClick={toggleTheme} aria-label="Theme wechseln">
          {mounted ? (
            displayTheme === "dark" ? (
              <MdLightMode size={28} />
            ) : (
              <MdDarkMode size={28} />
            )
          ) : null}
        </button>

        {isMobile && (
          <button onClick={toggleMenu} aria-label="Menü öffnen/schließen">
            {menuOpen ? <MdClose size={36} /> : <MdMenu size={36} />}
          </button>
        )}
      </div>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/30"
            onClick={() => setMenuOpen(false)}
          />

          <nav className="fixed top-16 left-0 w-full bg-foreground text-text z-50 p-8 flex flex-col space-y-4 md:hidden shadow-md">
            {mainMenu.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={menuLinkClasses}
                onClick={() => setMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <Link
              href="/impressum"
              className={menuLinkClasses}
              onClick={() => setMenuOpen(false)}
            >
              Impressum
            </Link>
          </nav>
        </>
      )}
    </>
  );
}
