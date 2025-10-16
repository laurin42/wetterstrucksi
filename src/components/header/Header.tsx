"use client";

import { useEffect, useState, useRef, forwardRef } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdLightMode, MdDarkMode, MdMenu, MdClose } from "react-icons/md";
import { mainMenu } from "@/data/navigation";
import { useMounted } from "@/lib/useMounted";
import { useMotionVariants } from "@/lib/animation/useMotionVariants";

const Header = forwardRef<HTMLElement>(() => {
  const { resolvedTheme, setTheme } = useTheme();
  const [displayTheme, setDisplayTheme] = useState<
    "light" | "dark" | undefined
  >();
  const mounted = useMounted();
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  const { fadeInVariantVerySlow } = useMotionVariants();

  const menuLinkClasses =
    "inline-flex items-center px-4 py-2 text-text text-3xl font-thin bg-transparent hover:cursor-pointer hover:text-accent transition-colors duration-300 ease-in-out";

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mounted) setDisplayTheme(resolvedTheme as "light" | "dark" | undefined);
  }, [resolvedTheme, mounted]);

  const toggleTheme = () => {
    const next: "light" | "dark" = displayTheme === "dark" ? "light" : "dark";
    setDisplayTheme(next);
    setTheme(next);
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header
      className="sticky top-0 left-0 right-0 z-50 bg-foreground text-text transition-transform duration-300 shadow-md
      h-16"
    >
      <section className="flex items-center h-full px-2 md:px-8 lg:px-16 relative">
        <div className="pr-2 md:absolute md:left-16 md:top-1/2 md:-translate-y-1/2 md:p-0">
          {mounted ? (
            <Link href="/">
              <Image
                src={
                  displayTheme === "dark"
                    ? "/images/logo/wetterstrucksiLogoDark.png"
                    : "/images/logo/wetterstrucksiLogoLight.png"
                }
                alt="wetterstrucksi logo"
                width={120}
                height={120}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>
          ) : (
            <div className="h-12 w-[120px]" />
          )}
        </div>

        <motion.div
          variants={fadeInVariantVerySlow}
          initial="hidden"
          animate="visible"
          className="mx-auto w-full max-w-6xl flex items-center justify-start"
        >
          <Link href="/">
            <h1 className="text-xl md:text-2xl font-semibold hover:text-accent transition-colors duration-300 ease-in-out">
              wetterstrucksi.de
            </h1>
          </Link>
        </motion.div>

        <motion.div
          variants={fadeInVariantVerySlow}
          initial="hidden"
          animate="visible"
          className="absolute right-4 md:right-8 flex items-center space-x-4"
        >
          <nav className="hidden md:flex items-center space-x-6">
            {mainMenu.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={menuLinkClasses}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <button
            onClick={toggleTheme}
            aria-label="Theme wechseln"
            className="transition-colors duration-300 cursor-pointer hover:text-accent"
          >
            <span
              className={`${
                mounted ? "opacity-100" : "opacity-0"
              } transition-opacity duration-300`}
            >
              {displayTheme === "dark" ? (
                <MdLightMode size={28} />
              ) : (
                <MdDarkMode size={28} />
              )}
            </span>
          </button>

          <button
            onClick={toggleMenu}
            aria-label="Menü öffnen/schließen"
            className="md:hidden"
          >
            {menuOpen ? <MdClose size={36} /> : <MdMenu size={36} />}
          </button>
        </motion.div>
      </section>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/30"
            onClick={() => setMenuOpen(false)}
          />
          <nav className="absolute top-full left-0 w-full bg-foreground text-text z-50 p-8 md:p-4 flex flex-col space-y-4 md:hidden shadow-md">
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
          </nav>
        </>
      )}
    </header>
  );
});

Header.displayName = "Header";
export default Header;
