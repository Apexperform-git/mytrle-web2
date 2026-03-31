"use client";

import { ReactNode } from "react";

type NeuCardProps = {
  variant?: "flat" | "pressed" | "subtle" | "pressed-deep";
  hover?: boolean;
  className?: string;
  children: ReactNode;
};

const shadowMap = {
  flat: "neu-flat",
  pressed: "neu-pressed",
  "pressed-deep": "neu-pressed-deep",
  subtle: "neu-flat-sm",
};

export default function NeuCard({
  variant = "flat",
  hover = false,
  className = "",
  children,
}: NeuCardProps) {
  return (
    <div
      className={`
        bg-neu-bg rounded-[32px] ${shadowMap[variant]}
        ${hover ? "transition-all duration-300 hover:-translate-y-1 hover:neu-flat-hover" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
