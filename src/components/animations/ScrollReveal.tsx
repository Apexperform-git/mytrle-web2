"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type ScrollRevealProps = {
  children: ReactNode;
  direction?: "up" | "left" | "right";
  delay?: number;
  className?: string;
};

const directionMap = {
  up: { y: 24, x: 0 },
  left: { y: 0, x: -40 },
  right: { y: 0, x: 40 },
};

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const offset = directionMap[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
