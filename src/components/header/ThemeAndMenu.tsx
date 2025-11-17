"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { MdLightMode, MdDarkMode, MdMenu, MdClose } from "react-icons/md";
import { mainMenu } from "@/data/navigation";
import { useMounted } from "@/lib/useMounted";

export function ThemeAndMenu() {
  const { resolvedTheme, setTheme } = useTheme();
  const [displayTheme, setDisplayTheme] = useState<
    "light" | "dark" | undefined
  >();
  const mounted = useMounted();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuLinkClasses =
    "flex flex-row items-center gap-4 justify-center text-text text-2xl font-thin bg-transparent hover:text-accent transition-colors duration-300 ease-in-out";

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
      <div className="absolute right-4 md:right-2 flex items-center justify-center space-x-4 z-50">
        <nav className="hidden tablet-sm:flex space-x-6">
          {mainMenu.map((item) => (
            <a key={item.title} href={item.href} className={menuLinkClasses}>
              {item.title}
            </a>
          ))}
        </nav>

        <button
          onClick={toggleTheme}
          aria-label="Theme wechseln"
          className="hidden tablet-sm:block cursor-pointer hover:text-header-background transition-color duration-300"
        >
          {mounted ? (
            displayTheme === "dark" ? (
              <MdLightMode size={32} />
            ) : (
              <MdDarkMode size={32} />
            )
          ) : null}
        </button>

        <button
          className="tablet-sm:hidden"
          onClick={toggleMenu}
          aria-label="Menü öffnen/schließen"
        >
          {menuOpen ? <MdClose size={36} /> : <MdMenu size={36} />}
        </button>
      </div>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 top-16 z-40 bg-black/32"
            onClick={() => setMenuOpen(false)}
          />

          <nav className="fixed top-16 left-0 w-full bg-foreground text-text z-50 p-4 flex flex-col space-y-4  shadow-md">
            <button
              onClick={toggleTheme}
              aria-label="Theme wechseln"
              className="cursor-pointer hover:text-header-background text-xl font-thin transition-color duration-300 px-4 pb-2 mb-4 border-b"
            >
              {mounted ? (
                displayTheme === "dark" ? (
                  <p className="flex flex-col justify-center items-center">
                    <MdLightMode size={32} />- Dunkler Modus -
                  </p>
                ) : (
                  <p className="flex flex-col justify-center items-center">
                    <MdDarkMode size={32} />- Heller Modus -
                  </p>
                )
              ) : null}
            </button>
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
