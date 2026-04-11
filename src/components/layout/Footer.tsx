import Image from "next/image";
import Link from "next/link";
import { FOOTER_PRODUCT, FOOTER_COMPANY, SOCIAL, COMPANY } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="mt-24 pb-8">
      <div className="max-w-6xl mx-auto px-5">
        <div className="bg-surface-3 border border-warm-border rounded-lg p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <Image src="/logo.png" alt="OmnI logo" width={28} height={28} />
                <div className="flex flex-col leading-none">
                  <span className="font-display font-semibold text-warm-fg text-[15px] tracking-tight">
                    omni
                  </span>
                  <span className="text-[9px] text-warm-muted tracking-[0.12em] uppercase font-display">
                    by Myrtle Europe
                  </span>
                </div>
              </div>
              <p className="text-sm text-warm-muted leading-relaxed">
                Human-centric operational intelligence that guides decisions
                with confidence, not guesswork.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-display font-medium tracking-[0.15em] uppercase text-warm-fg mb-5">
                Product
              </h3>
              <ul className="space-y-2.5">
                {FOOTER_PRODUCT.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-warm-muted hover:text-warm-hover transition-colors duration-200">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-display font-medium tracking-[0.15em] uppercase text-warm-fg mb-5">
                Company
              </h3>
              <ul className="space-y-2.5">
                {FOOTER_COMPANY.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-warm-muted hover:text-warm-hover transition-colors duration-200">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-display font-medium tracking-[0.15em] uppercase text-warm-fg mb-5">
                Connect
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-warm-muted hover:text-warm-hover transition-colors duration-200 inline-flex items-center gap-1.5">
                    LinkedIn
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${COMPANY.email}`} className="text-sm text-warm-muted hover:text-warm-hover transition-colors duration-200">
                    {COMPANY.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-warm-border text-center">
            <p className="text-xs text-warm-muted">{COMPANY.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
