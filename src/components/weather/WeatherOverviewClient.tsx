"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CollapsibleSectionHeader } from "@/components/ui/CollabsibleSectionHeader";
import { PostCard } from "@/components/posts/PostCard";
import { PostWithMeta } from "@tryghost/content-api";
import WeatherHero from "./WeatherHero";

interface WeatherOverviewClientProps {
  posts: {
    rueckblicke: PostWithMeta[];
    updates: PostWithMeta[];
    vorhersagen: PostWithMeta[];
    biowetter: PostWithMeta[];
    privates: PostWithMeta[];
    presseschau: PostWithMeta[];
  };
}

export function WeatherOverviewClient({ posts }: WeatherOverviewClientProps) {
  const [openSections, setOpenSections] = useState({
    vorhersagen: true,
    updates: true,
    rueckblicke: true,
    biowetter: true,
    privates: true,
    presseschau: true,
  });

  const {
    rueckblicke,
    updates,
    vorhersagen,
    biowetter,
    privates,
    presseschau,
  } = posts;

  const toggleSection = (key: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <motion.section className="max-w-4xl md:max-w-6xl mx-auto">
      <WeatherHero />
      <motion.section className="max-w-4xl md:max-w-6xl mx-auto grid grid-cols-1 gap-2">
        <CollapsibleSectionHeader
          title="Vorhersagen"
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
              className="p-8 py-4 bg-foreground-secondary/40"
            >
              <div className="grid md:grid-cols-3 gap-2">
                {vorhersagen.map((post) => (
                  <motion.div key={post.id}>
                    <PostCard post={post} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <CollapsibleSectionHeader
          title="Updates"
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
              className="p-8 py-4 bg-foreground-secondary/40"
            >
              <div className="grid md:grid-cols-3 gap-2">
                {updates.map((post) => (
                  <motion.div key={post.id}>
                    <PostCard post={post} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <CollapsibleSectionHeader
          title="Rückblicke"
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
              className="p-8 py-4 bg-foreground-secondary/40"
            >
              <div className="grid md:grid-cols-3 gap-2">
                {rueckblicke.map((post) => (
                  <motion.div key={post.id}>
                    <PostCard post={post} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <CollapsibleSectionHeader
          title="Biowetter"
          isOpen={openSections.biowetter}
          onToggle={() => toggleSection("biowetter")}
        />
        <AnimatePresence initial={false}>
          {openSections.biowetter && (
            <motion.div
              key="biowetter"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="p-8 py-4 bg-foreground-secondary/40"
            >
              <div className="grid md:grid-cols-3 gap-2">
                {biowetter.map((post) => (
                  <motion.div key={post.id}>
                    <PostCard post={post} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <CollapsibleSectionHeader
          title="Privates"
          isOpen={openSections.privates}
          onToggle={() => toggleSection("privates")}
        />
        <AnimatePresence initial={false}>
          {openSections.privates && (
            <motion.div
              key="privates"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="p-8 py-4 bg-foreground-secondary/40"
            >
              <div className="grid md:grid-cols-3 gap-2">
                {privates.map((post) => (
                  <motion.div key={post.id}>
                    <PostCard post={post} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <CollapsibleSectionHeader
          title="Presseschau"
          isOpen={openSections.presseschau}
          onToggle={() => toggleSection("presseschau")}
        />
        <AnimatePresence initial={false}>
          {openSections.presseschau && (
            <motion.div
              key="presseschau"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="p-8 py-4 bg-foreground-secondary/40"
            >
              <div className="grid md:grid-cols-3 gap-2">
                {presseschau.map((post) => (
                  <motion.div key={post.id}>
                    <PostCard post={post} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>
    </motion.section>
  );
}
