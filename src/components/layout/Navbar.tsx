"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import NeuButton from "@/components/ui/NeuButton";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-50 bg-neu-bg/90 backdrop-blur-md transition-shadow duration-300
        ${scrolled ? "neu-flat-sm" : ""}
      `}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full neu-pressed-deep flex items-center justify-center">
            <span className="text-neu-accent font-display font-extrabold text-lg">M</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-neu-fg text-sm leading-tight tracking-tight">
              myrtle europe
            </span>
            <span className="text-[10px] text-neu-muted tracking-widest uppercase">
              omni navigation
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neu-accent focus-visible:ring-offset-2 focus-visible:ring-offset-neu-bg
                  ${isActive
                    ? "neu-pressed-sm text-neu-accent"
                    : "text-neu-muted hover:text-neu-fg hover:neu-flat-sm"
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <NeuButton href="/contact" size="sm">
            Get in Touch
          </NeuButton>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden w-12 h-12 rounded-xl neu-flat-sm flex items-center justify-center transition-all duration-300 active:neu-pressed-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neu-accent"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span
              className={`block h-0.5 bg-neu-fg transition-all duration-300 origin-center ${
                mobileOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-neu-fg transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-neu-fg transition-all duration-300 origin-center ${
                mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
