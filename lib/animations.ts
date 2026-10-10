/**
 * Bespoke Framer Motion spring curves & animation variants
 * Crafted for tactile editorial toy feel (Stripe-grade polish meets playful academic rigor)
 */

export const springTactile = {
  type: "spring" as const,
  stiffness: 400,
  damping: 25,
};

export const springGentle = {
  type: "spring" as const,
  stiffness: 260,
  damping: 20,
};

export const springBouncy = {
  type: "spring" as const,
  stiffness: 500,
  damping: 15,
};

// Tactile button micro-interaction
export const tactileButton = {
  initial: { scale: 1 },
  hover: { scale: 1.02, transition: springTactile },
  tap: { scale: 0.96, transition: { duration: 0.08 } },
};

// Editorial Card entrance
export const cardEntrance = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: custom * 0.06,
      ...springGentle,
    },
  }),
};

// Mascot reactive mood variants
export const mascotBounce = {
  idle: {
    y: [0, -3, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  cheer: {
    y: [0, -12, 0, -8, 0],
    rotate: [0, -4, 4, -2, 0],
    transition: {
      duration: 0.6,
      ...springBouncy,
    },
  },
  thinking: {
    rotate: [0, -6, 6, 0],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

// Checklist check-pop animation
export const checkPop = {
  uncheck: { scale: 0.8, opacity: 0 },
  check: {
    scale: [0.7, 1.25, 1],
    opacity: 1,
    transition: springBouncy,
  },
};
