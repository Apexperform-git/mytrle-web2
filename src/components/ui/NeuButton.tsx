"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";
import Link from "next/link";

type NeuButtonProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function NeuButton({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  ...props
}: NeuButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4.5 text-lg",
  };

  const variantClasses = {
    primary:
      "bg-neu-accent text-white neu-flat transition-all duration-300 hover:-translate-y-0.5 hover:neu-flat-hover active:translate-y-[0.5px] active:neu-pressed-sm font-medium",
    secondary:
      "bg-neu-bg text-neu-accent neu-flat transition-all duration-300 hover:-translate-y-0.5 hover:neu-flat-hover active:translate-y-[0.5px] active:neu-pressed-sm font-medium",
    ghost:
      "bg-transparent text-neu-accent hover:text-neu-accent-dark transition-colors duration-300 font-medium underline-offset-4 hover:underline",
  };

  const classes = `
    inline-flex items-center justify-center rounded-2xl cursor-pointer
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neu-accent focus-visible:ring-offset-2 focus-visible:ring-offset-neu-bg
    ${sizeClasses[size]} ${variantClasses[variant]} ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
