"use client";

import { ReactNode } from "react";

type FloatingElementProps = {
  children: ReactNode;
  speed?: "normal" | "slow";
  delay?: boolean;
  className?: string;
};

export default function FloatingElement({
  children,
  speed = "normal",
  delay = false,
  className = "",
}: FloatingElementProps) {
  const animClass =
    speed === "slow"
      ? "animate-float-slow"
      : delay
        ? "animate-float-delay"
        : "animate-float";

  return <div className={`${animClass} ${className}`}>{children}</div>;
}
