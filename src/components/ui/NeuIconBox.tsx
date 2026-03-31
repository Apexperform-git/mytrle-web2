import { ReactNode } from "react";

type NeuIconBoxProps = {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeMap = {
  sm: "w-12 h-12 text-xl",
  md: "w-16 h-16 text-2xl",
  lg: "w-20 h-20 text-3xl",
};

export default function NeuIconBox({
  children,
  size = "md",
  className = "",
}: NeuIconBoxProps) {
  return (
    <div
      className={`
        inline-flex items-center justify-center rounded-full
        bg-neu-bg neu-pressed-deep text-neu-accent
        ${sizeMap[size]} ${className}
      `}
    >
      {children}
    </div>
  );
}
