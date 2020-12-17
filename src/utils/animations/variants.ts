export const logoVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.3,
    },
  },
  hidden: { opacity: 0, scale: 0 },
}

export const contentWrapperVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.75,
      when: "beforeChildren",
      staggerChildren: 0.4,
      ease: "easeIn",
    },
  },
}

export const fadeIn = {
  hidden: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 1,
      ease: "easeIn",
    },
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeIn",
    },
  },
}

export const fromLeftToRight = {
  hidden: { x: "-100%", scale: 0, opacity: 0 },
  show: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
}

export const fromRightToLeft = {
  hidden: { x: "100%", scale: 0, opacity: 0 },
  show: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
}

export const fadeInWithStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.25,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
}

export const modalFadeIn = {
  hidden: { opacity: 0, display: "none" },
  show: {
    opacity: 1,
    display: "flex",
    transition: {
      duration: 0.35,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
}
