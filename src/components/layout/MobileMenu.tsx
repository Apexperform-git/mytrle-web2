"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";

type Props = { open: boolean; onClose: () => void };

export default function MobileMenu({ open, onClose }: Props) {
  const pathname = usePathname();
  if (!open) return null;

  return (
    <div className="lg:hidden bg-warm-bg border border-warm-border mx-4 mb-3 rounded-lg p-5 shadow-[0_4px_28px_rgba(38,37,30,0.06)]">
      <div className="space-y-1">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className={`block px-3 py-2.5 rounded text-[15px] font-display font-medium transition-colors duration-200 ${
              pathname === link.href
                ? "text-brand-plum bg-surface-3"
                : "text-warm-muted hover:text-warm-hover"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="pt-4 mt-3 border-t border-warm-border">
        <Button href="/contact" className="w-full" onClick={onClose}>
          Get in Touch
        </Button>
      </div>
    </div>
  );
}
