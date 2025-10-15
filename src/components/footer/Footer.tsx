"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      className="
        w-full bg-header-background text-text
        px-6 py-8 md:px-12 md:mt-4 md:py-10
        flex flex-col md:flex-row justify-between items-center gap-6
        md:rounded-sm
      "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Links */}
      <div className="flex flex-row gap-4 text-text-white md:gap-6 items-center">
        <Link
          href="/impressum"
          className="hover:text-accent hover:scale-[1.02] transition-all duration-200"
        >
          Impressum
        </Link>
        <span>|</span>
        <Link
          href="/datenschutz"
          className="hover:text-accent hover:scale-[1.02] transition-all duration-200"
        >
          Datenschutz
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-x-2 text-sm text-text-white text-center md:text-right">
        <p>© 2025 Jens Strucks </p>
        <span className="hidden md:block">|</span>
        <p>Webdesign & Umsetzung: Laurin Schmidt</p>
      </div>
    </motion.footer>
  );
}
