import { ReactNode } from "react";

type NeuIconBoxProps = {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeMap = {
  sm: "w-10 h-10",
  md: "w-14 h-14",
  lg: "w-16 h-16",
};

export default function NeuIconBox({
  children,
  size = "md",
  className = "",
}: NeuIconBoxProps) {
  return (
    <div
      className={`
        inline-flex items-center justify-center rounded-2xl
        bg-neu-bg neu-pressed-deep text-neu-accent
        ${sizeMap[size]} ${className}
      `}
    >
      {children}
    </div>
  );
}
