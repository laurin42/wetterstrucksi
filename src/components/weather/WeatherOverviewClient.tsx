"use client";

import { useState } from "react";
import { CollapsibleSectionHeader } from "@/components/ui/CollabsibleSectionHeader";
import { PostCard } from "@/components/posts/PostCard";
import { PostWithMeta } from "@tryghost/admin-api";
import { motion, AnimatePresence } from "framer-motion";

export function WeatherOverviewClient({ posts }: { posts: PostWithMeta[] }) {
  const [openSections, setOpenSections] = useState({
    vorhersagen: true,
    updates: true,
    rueckblicke: true,
  });

  const toggleSection = (key: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filterPostsByTag = (tag: string | string[]) => {
    const tags = Array.isArray(tag) ? tag : [tag];
    return posts
      .filter((post) => post.tags?.some((t) => tags.includes(t.toLowerCase())))
      .sort(
        (a, b) =>
          new Date(b.published_at).getTime() -
          new Date(a.published_at).getTime()
      )
      .slice(0, 3);
  };

  const vorhersagen = filterPostsByTag(["wetter", "wetterprognose"]);
  const rueckblicke = filterPostsByTag(["rückblick"]);
  const updates = filterPostsByTag(["warnlage"]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      <section className="bg-card rounded-md shadow-md overflow-hidden">
        <CollapsibleSectionHeader
          title="Aktuelle Vorhersagen"
          isOpen={openSections.vorhersagen}
          onToggle={() => toggleSection("vorhersagen")}
        />
        <AnimatePresence initial={false}>
          {openSections.vorhersagen && (
            <motion.div
              key="vorhersagen"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="p-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {vorhersagen.length === 0 && (
                  <p className="text-muted-foreground">
                    Keine Beiträge gefunden.
                  </p>
                )}
                {vorhersagen.map((post) => (
                  <motion.div
                    key={post.id}
                    whileHover={{ scale: 1.02 }}
                    className="h-full"
                  >
                    <PostCard post={post} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section className="bg-card rounded-md shadow-md overflow-hidden">
        <CollapsibleSectionHeader
          title="Wichtige Updates"
          isOpen={openSections.updates}
          onToggle={() => toggleSection("updates")}
        />
        <AnimatePresence initial={false}>
          {openSections.updates && (
            <motion.div
              key="updates"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="p-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {updates.length === 0 && (
                  <p className="text-muted-foreground">
                    Keine Beiträge gefunden.
                  </p>
                )}
                {updates.map((post) => (
                  <motion.div
                    key={post.id}
                    whileHover={{ scale: 1.02 }}
                    className="h-full"
                  >
                    <PostCard post={post} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section className="bg-card rounded-md shadow-md overflow-hidden md:col-span-2">
        <CollapsibleSectionHeader
          title="Neueste Rückblicke"
          isOpen={openSections.rueckblicke}
          onToggle={() => toggleSection("rueckblicke")}
        />
        <AnimatePresence initial={false}>
          {openSections.rueckblicke && (
            <motion.div
              key="rueckblicke"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="p-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rueckblicke.length === 0 && (
                  <p className="text-muted-foreground">
                    Keine Beiträge gefunden.
                  </p>
                )}
                {rueckblicke.map((post) => (
                  <motion.div
                    key={post.id}
                    whileHover={{ scale: 1.02 }}
                    className="h-full"
                  >
                    <PostCard post={post} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
