"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { COMPANY, SOCIAL } from "@/lib/constants";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="py-28 md:py-40">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <ScrollReveal>
            <span className="inline-block text-xs font-display font-medium tracking-[0.15em] uppercase text-warm-accent mb-5">
              Contact
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-[72px] font-semibold tracking-tight text-warm-fg leading-[1.08]">
              Get in <span className="text-warm-accent">touch</span>
            </h1>
            <p className="mt-6 text-lg text-warm-muted leading-relaxed max-w-2xl mx-auto">
              Bring one real line, one real shift, one real problem. We generate
              live cases from your reality — not from slides.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <Card className="p-7 md:p-10">
                  {submitted ? (
                    <div className="text-center py-12">
                      <span className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-surface-3 mb-5">
                        <svg className="w-6 h-6 text-warm-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </span>
                      <h3 className="font-display text-xl font-semibold text-warm-fg mb-1">
                        Message sent
                      </h3>
                      <p className="text-warm-muted text-[15px]">
                        Thank you for reaching out. We&apos;ll get back to you shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        <Input label="Your Name" name="name" placeholder="John Doe" required />
                        <Input label="Your Email" name="email" type="email" placeholder="john@company.com" required />
                      </div>
                      <Input label="Company" name="company" placeholder="Your company name" />
                      <Textarea label="Your Message" name="message" placeholder="Tell us about your operation and what you'd like to achieve..." rows={5} />
                      <div className="pt-1">
                        <Button type="submit" variant="accent" size="lg" className="w-full md:w-auto">
                          Send Message
                        </Button>
                      </div>
                      <p className="text-xs text-warm-muted">
                        We respect your privacy and only send updates about OmnI and operational guidance.
                      </p>
                    </form>
                  )}
                </Card>
              </ScrollReveal>
            </div>

            <div className="space-y-5">
              <ScrollReveal delay={0.1}>
                <Card className="p-6">
                  <h3 className="font-display text-[15px] font-semibold tracking-tight text-warm-fg mb-5">
                    Connect with us
                  </h3>
                  <div className="space-y-3">
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="flex items-center gap-3 text-warm-muted hover:text-warm-hover transition-colors duration-200"
                    >
                      <span className="w-8 h-8 rounded-lg bg-surface-4 flex items-center justify-center shrink-0 text-warm-accent text-xs font-display font-semibold">
                        @
                      </span>
                      <span className="text-sm">{COMPANY.email}</span>
                    </a>
                    <a
                      href={SOCIAL.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-warm-muted hover:text-warm-hover transition-colors duration-200"
                    >
                      <span className="w-8 h-8 rounded-lg bg-surface-4 flex items-center justify-center shrink-0">
                        <svg className="w-3.5 h-3.5 text-warm-accent" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </span>
                      <span className="text-sm">LinkedIn</span>
                    </a>
                  </div>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <Card variant="inset" className="p-6">
                  <h3 className="font-display text-[15px] font-semibold tracking-tight text-warm-fg mb-2">
                    Newsletter
                  </h3>
                  <p className="text-sm text-warm-muted mb-4">
                    Get insights on operational intelligence and decision-making.
                  </p>
                  <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="flex-1 bg-transparent border border-warm-border rounded-lg px-3 py-2 text-sm text-warm-fg placeholder:text-warm-muted focus:border-warm-border-strong focus:outline-none transition-colors duration-200"
                    />
                    <Button type="submit" size="sm">Subscribe</Button>
                  </form>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
