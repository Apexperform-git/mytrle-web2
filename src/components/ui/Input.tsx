import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & { label?: string };
type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & { label?: string };

export function Input({ label, className = "", ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-display font-medium text-warm-fg tracking-tight">
          {label}
        </label>
      )}
      <input
        className={`w-full bg-transparent border border-warm-border rounded-lg px-4 py-3 text-warm-fg placeholder:text-warm-muted transition-colors duration-200 focus:border-warm-border-strong focus:outline-none ${className}`}
        {...props}
      />
    </div>
  );
}

export function Textarea({ label, className = "", ...props }: TextareaProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-display font-medium text-warm-fg tracking-tight">
          {label}
        </label>
      )}
      <textarea
        className={`w-full bg-transparent border border-warm-border rounded-lg px-4 py-3 text-warm-fg placeholder:text-warm-muted transition-colors duration-200 resize-y min-h-[120px] focus:border-warm-border-strong focus:outline-none ${className}`}
        {...props}
      />
    </div>
  );
}
