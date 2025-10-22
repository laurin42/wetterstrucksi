import {  Easing, Variants } from "framer-motion";

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
  hidden: (custom: { y?: number } = {}) => ({
    opacity: 0,
    y: custom.y ?? 20, 
  }),
  visible: (custom: { duration?: number; ease?: Easing } = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom.duration ?? 0.6,
      ease: custom.ease ?? "easeOut",
    },
  }),
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

  const mobileMenuVariants: Variants = {
        closed: { 
            height: 0, 
            opacity: 0, 
            transition: { 
                duration: 0.1, 
                ease: "easeOut",
                when: "afterChildren", 
            } 
        },
        open: { 
            height: "auto", 
            opacity: 1, 
            transition: {
                duration: 0.1, 
                ease: "easeIn",
                when: "beforeChildren",
                
                staggerChildren: 0.15,
                delayChildren: 0.1, 
            } 
        },
    };

  const viewportOnce = { once: true, amount: 0.2 };

  return {
    containerVariants,
    containerVariantsSync,
    fadeInVariant,
    slideInLeftVariant,
    sectionAnimation,
    sidebarVariants,
    viewportOnce,
    mobileMenuVariants,
  };
}
