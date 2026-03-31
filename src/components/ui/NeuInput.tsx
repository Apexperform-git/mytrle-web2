"use client";

import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type NeuInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

type NeuTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
};

export function NeuInput({ label, className = "", ...props }: NeuInputProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-neu-fg">{label}</label>
      )}
      <input
        className={`
          w-full bg-neu-bg rounded-2xl px-5 py-3.5 text-neu-fg placeholder:text-neu-placeholder
          neu-pressed transition-shadow duration-300
          focus:neu-pressed-deep focus:outline-none focus:ring-2 focus:ring-neu-accent focus:ring-offset-2 focus:ring-offset-neu-bg
          ${className}
        `}
        {...props}
      />
    </div>
  );
}

export function NeuTextarea({
  label,
  className = "",
  ...props
}: NeuTextareaProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-neu-fg">{label}</label>
      )}
      <textarea
        className={`
          w-full bg-neu-bg rounded-2xl px-5 py-3.5 text-neu-fg placeholder:text-neu-placeholder
          neu-pressed transition-shadow duration-300 resize-y min-h-[120px]
          focus:neu-pressed-deep focus:outline-none focus:ring-2 focus:ring-neu-accent focus:ring-offset-2 focus:ring-offset-neu-bg
          ${className}
        `}
        {...props}
      />
    </div>
  );
}
