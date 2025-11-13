"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full h-auto mx-auto text-text my-8  flex flex-col md:flex-row justify-between items-center gap-6">
      <section className="flex flex-col md:flex-row md:w-6xl md:mx-auto">
        <div className="w-full flex justify-center md:justify-start flex-row gap-4 md:gap-6 items-center">
          <Link
            href="/impressum"
            className="hover:text-accent-dark hover:scale-[1.01] transition-all duration-200"
          >
            Impressum
          </Link>
          <span>|</span>
          <Link
            href="/datenschutz"
            className="hover:text-accent-dark hover:scale-[1.01] transition-all duration-200"
          >
            Datenschutz
          </Link>
        </div>

        <div className="w-full justify-end items-center flex flex-col md:flex-row gap-x-2 text-sm">
          <p>
            © 2025{" "}
            <Link
              href="/about"
              className="hover:text-accent-dark hover:scale-[1.01] transition-all duration-200"
            >
              Jens Strucks
            </Link>{" "}
          </p>
          <span className="hidden md:block">|</span>
          <p>Webdesign & Umsetzung: Laurin Schmidt</p>
        </div>
      </section>
    </footer>
  );
}
