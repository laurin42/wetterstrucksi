import { Variants } from "framer-motion";

export function useMotionVariants() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const containerVariantsSync: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.0 },
    },
  };

  const fadeInVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInVariantSlow: Variants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const fadeInVariantVerySlow: Variants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2.4, ease: "easeOut" },
    },
  };

    const fadeInVariantExtremeSlow: Variants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 4.2, ease: "easeIn" },
    },
  };

  const slideInLeftVariant: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeIn", delay: 1.4 },
    },
  };



  const sectionAnimation: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const sidebarVariants: Variants = {
    closed: { height: 0, opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    open: { height: "auto", opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const viewportOnce = { once: true, amount: 0.2 };

  return {
    containerVariants,
    containerVariantsSync,
    fadeInVariant,
    fadeInVariantSlow,
    fadeInVariantVerySlow,
    fadeInVariantExtremeSlow,
    slideInLeftVariant,
    sectionAnimation,
    sidebarVariants,
    viewportOnce
  };
}
