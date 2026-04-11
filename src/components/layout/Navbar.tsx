"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";

function OmniLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="4" />
      <circle cx="50" cy="28" r="10" fill="currentColor" />
      <circle cx="30" cy="55" r="10" fill="currentColor" />
      <circle cx="70" cy="55" r="10" fill="currentColor" />
      <circle cx="50" cy="50" r="5" fill="currentColor" />
      <line x1="50" y1="38" x2="50" y2="45" stroke="currentColor" strokeWidth="3" />
      <line x1="39" y1="51" x2="45" y2="50" stroke="currentColor" strokeWidth="3" />
      <line x1="61" y1="51" x2="55" y2="50" stroke="currentColor" strokeWidth="3" />
      <polygon points="50,60 45,72 55,72" fill="currentColor" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-warm-bg/95 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "border-b border-warm-border" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-brand-plum">
            <OmniLogo />
          </span>
          <div className="flex flex-col leading-none">
            <span className="font-display font-semibold text-warm-fg text-[15px] tracking-tight">
              omni
            </span>
            <span className="text-[9px] text-warm-muted tracking-[0.15em] uppercase font-display">
              by Myrtle Europe
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 text-sm font-display font-medium transition-colors duration-200 rounded ${
                pathname === link.href
                  ? "text-brand-plum"
                  : "text-warm-muted hover:text-brand-plum"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button href="/contact" variant="accent" size="sm">Get in Touch</Button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden w-10 h-10 rounded-lg border border-warm-border flex items-center justify-center transition-colors duration-200 hover:border-warm-border-strong"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <div className="w-4 h-3.5 flex flex-col justify-between">
            <span className={`block h-px bg-warm-fg transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`block h-px bg-warm-fg transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-warm-fg transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </div>
        </button>
      </nav>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
