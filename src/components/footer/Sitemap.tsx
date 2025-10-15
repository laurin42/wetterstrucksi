"use client";

import Link from "next/link";
import React from "react";

const routes = [
  { path: "/", label: "Startseite" },
  { path: "/wetter", label: "Wetter" },
  { path: "/archiv", label: "Archiv" },
  { path: "/über mich", label: "Über mich" },
];

interface SitemapProps {
  showSitemap?: boolean;
}

const Sitemap: React.FC<SitemapProps> = ({ showSitemap = true }) => {
  if (!showSitemap) return null;
  return (
    <nav aria-label="Sitemap" className="mt-4">
      <ul className="flex flex-col gap-2">
        {routes.map((route) => (
          <li key={route.path}>
            <Link href={route.path} className="text-blue-600 hover:underline">
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sitemap;
