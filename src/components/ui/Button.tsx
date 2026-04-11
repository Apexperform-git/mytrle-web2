"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";
import Link from "next/link";

type ButtonProps = {
  variant?: "primary" | "accent" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-[15px]",
    lg: "px-8 py-3.5 text-base",
  };

  const variants = {
    primary:
      "bg-surface-2 text-warm-fg border border-warm-border hover:text-brand-plum font-display font-medium tracking-tight",
    accent:
      "bg-brand-orange text-white border border-transparent hover:bg-brand-orange-dark font-display font-medium tracking-tight",
    ghost:
      "bg-transparent text-warm-fg hover:text-brand-plum font-display font-medium",
  };

  const base = `inline-flex items-center justify-center rounded-lg cursor-pointer transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-plum focus-visible:ring-offset-2 focus-visible:ring-offset-warm-bg`;

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

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
