"use client";

import { useState } from "react";
import NeuCard from "@/components/ui/NeuCard";
import NeuButton from "@/components/ui/NeuButton";
import { NeuInput, NeuTextarea } from "@/components/ui/NeuInput";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { COMPANY, SOCIAL_LINKS } from "@/lib/constants";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-neu-accent mb-6">
              Contact
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neu-fg leading-[1.1] max-w-4xl mx-auto">
              Get in <span className="text-neu-accent">Touch</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-neu-muted leading-relaxed max-w-2xl mx-auto">
              Bring one real line, one real shift, one real problem. We generate
              live cases from your reality — not from slides.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <NeuCard className="p-8 md:p-12">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 rounded-full neu-pressed-deep flex items-center justify-center mx-auto mb-6">
                        <span className="text-neu-secondary text-3xl">&#10003;</span>
                      </div>
                      <h3 className="font-display text-2xl font-bold text-neu-fg mb-2">
                        Message Sent
                      </h3>
                      <p className="text-neu-muted">
                        Thank you for reaching out. We&apos;ll get back to you shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <NeuInput
                          label="Your Name"
                          name="name"
                          placeholder="John Doe"
                          required
                        />
                        <NeuInput
                          label="Your Email"
                          name="email"
                          type="email"
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                      <NeuInput
                        label="Company"
                        name="company"
                        placeholder="Your company name"
                      />
                      <NeuTextarea
                        label="Your Message"
                        name="message"
                        placeholder="Tell us about your operation and what you'd like to achieve..."
                        rows={5}
                      />
                      <div className="pt-2">
                        <NeuButton type="submit" size="lg" className="w-full md:w-auto">
                          Send Message
                        </NeuButton>
                      </div>
                      <p className="text-xs text-neu-muted">
                        We respect your privacy and only send updates about OmnI and
                        operational guidance.
                      </p>
                    </form>
                  )}
                </NeuCard>
              </ScrollReveal>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <ScrollReveal delay={0.2}>
                <NeuCard className="p-8">
                  <h3 className="font-display text-lg font-bold text-neu-fg mb-6">
                    Connect With Us
                  </h3>
                  <div className="space-y-4">
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="flex items-center gap-3 text-neu-muted hover:text-neu-accent transition-colors duration-300"
                    >
                      <div className="w-10 h-10 rounded-full neu-pressed-deep flex items-center justify-center shrink-0">
                        <span className="text-neu-accent">@</span>
                      </div>
                      <span className="text-sm">{COMPANY.email}</span>
                    </a>
                    <a
                      href={SOCIAL_LINKS.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-neu-muted hover:text-neu-accent transition-colors duration-300"
                    >
                      <div className="w-10 h-10 rounded-full neu-pressed-deep flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 text-neu-accent" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </div>
                      <span className="text-sm">LinkedIn</span>
                    </a>
                  </div>
                </NeuCard>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <NeuCard variant="pressed" className="p-8">
                  <h3 className="font-display text-lg font-bold text-neu-fg mb-3">
                    Newsletter
                  </h3>
                  <p className="text-sm text-neu-muted mb-4">
                    Get insights on operational intelligence and decision-making.
                  </p>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="flex gap-2"
                  >
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="flex-1 bg-neu-bg rounded-xl px-4 py-2.5 text-sm text-neu-fg placeholder:text-neu-placeholder neu-pressed-sm focus:outline-none focus:ring-2 focus:ring-neu-accent focus:ring-offset-2 focus:ring-offset-neu-bg"
                    />
                    <NeuButton type="submit" size="sm">
                      Subscribe
                    </NeuButton>
                  </form>
                </NeuCard>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
