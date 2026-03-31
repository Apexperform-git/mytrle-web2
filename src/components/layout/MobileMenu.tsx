"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import NeuButton from "@/components/ui/NeuButton";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  if (!open) return null;

  return (
    <div className="lg:hidden bg-neu-bg neu-flat-sm mx-4 mb-4 rounded-[24px] p-6 space-y-2">
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className={`
              block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300
              ${isActive
                ? "neu-pressed-sm text-neu-accent"
                : "text-neu-muted hover:text-neu-fg"
              }
            `}
          >
            {link.label}
          </Link>
        );
      })}
      <div className="pt-4">
        <NeuButton href="/contact" className="w-full" onClick={onClose}>
          Get in Touch
        </NeuButton>
      </div>
    </div>
  );
}
