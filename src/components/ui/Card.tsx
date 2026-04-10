"use client";

import { ReactNode } from "react";

type CardProps = {
  variant?: "default" | "raised" | "inset";
  hover?: boolean;
  className?: string;
  children: ReactNode;
};

const variantStyles = {
  default: "bg-surface-2 border border-warm-border",
  raised: "bg-surface-0 border border-warm-border shadow-[0_2px_28px_rgba(38,37,30,0.04)]",
  inset: "bg-surface-3 border border-warm-border",
};

export default function Card({
  variant = "default",
  hover = false,
  className = "",
  children,
}: CardProps) {
  return (
    <div
      className={`
        rounded-lg ${variantStyles[variant]}
        ${hover ? "transition-all duration-200 hover:border-warm-border-strong hover:-translate-y-0.5" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
