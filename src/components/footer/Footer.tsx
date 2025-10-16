"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      className="
        w-full mx-auto text-text py-8 bg-accent
        flex flex-col md:flex-row justify-between items-center gap-6
      "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Links */}
      <motion.section className="flex md:w-6xl mx-auto">
        <div className="w-full flex flex-row gap-4 text-text-white md:gap-6 items-center">
          <Link
            href="/impressum"
            className="hover:text-header-background hover:scale-[1.01] transition-all duration-200"
          >
            Impressum
          </Link>
          <span>|</span>
          <Link
            href="/datenschutz"
            className="hover:text-header-background hover:scale-[1.01] transition-all duration-200"
          >
            Datenschutz
          </Link>
        </div>

        <div className="w-full justify-end flex flex-col md:flex-row gap-x-2 text-sm text-text-white">
          <p>
            © 2025{" "}
            <Link
              href="/about"
              className="hover:text-header-background hover:scale-[1.01] transition-all duration-200"
            >
              Jens Strucks
            </Link>{" "}
          </p>
          <span className="hidden md:block">|</span>
          <p>Webdesign & Umsetzung: Laurin Schmidt</p>
        </div>
      </motion.section>
    </motion.footer>
  );
}
