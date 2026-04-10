"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { COMPANY, SOCIAL } from "@/lib/constants";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="py-28 md:py-40">
        <div className="max-w-6xl mx-auto px-5">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="inline-block text-xs font-display font-medium tracking-[0.15em] uppercase text-warm-accent mb-5">
                Contact
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-[72px] font-semibold tracking-tight text-warm-fg leading-[1.08]">
                Get in{" "}
                <span className="text-warm-accent">touch</span>
              </h1>
              <p className="mt-6 text-lg text-warm-muted leading-relaxed max-w-xl">
                We work with real lines, real shifts, and real challenges. Tell
                us about yours and we will show you what OmnI can do.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form — takes 2 cols */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <Card className="p-8 md:p-10">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div className="w-16 h-16 rounded-lg bg-surface-3 flex items-center justify-center mb-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-8 h-8 text-warm-accent"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </div>
                      <h3 className="font-display text-2xl font-semibold tracking-tight text-warm-fg mb-2">
                        Message Sent
                      </h3>
                      <p className="text-[15px] text-warm-muted leading-relaxed max-w-md">
                        Thank you for reaching out. We will review your message
                        and get back to you within one business day.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        <Input
                          label="Name"
                          name="name"
                          placeholder="Your name"
                          required
                        />
                        <Input
                          label="Email"
                          name="email"
                          type="email"
                          placeholder="you@company.com"
                          required
                        />
                      </div>
                      <Input
                        label="Company"
                        name="company"
                        placeholder="Your company"
                      />
                      <Textarea
                        label="Message"
                        name="message"
                        placeholder="Tell us about your line, your challenge, or what you would like to see..."
                        rows={5}
                      />
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                        <Button variant="accent" size="lg" type="submit">
                          Send Message
                        </Button>
                        <p className="text-xs text-warm-muted leading-relaxed max-w-xs">
                          By submitting this form you agree to our privacy
                          policy. We will never share your data with third
                          parties.
                        </p>
                      </div>
                    </form>
                  )}
                </Card>
              </ScrollReveal>
            </div>

            {/* Right column */}
            <div className="space-y-5">
              <ScrollReveal delay={0.1}>
                <Card className="p-7">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-warm-fg mb-5">
                    Connect With Us
                  </h3>
                  <div className="space-y-4">
                    {/* Email */}
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="flex items-center gap-3 group"
                    >
                      <span className="w-9 h-9 rounded-lg bg-surface-4 flex items-center justify-center shrink-0 text-warm-accent font-display text-sm font-semibold">
                        @
                      </span>
                      <span className="text-[15px] text-warm-fg group-hover:text-warm-hover transition-colors duration-200">
                        {COMPANY.email}
                      </span>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href={SOCIAL.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 group"
                    >
                      <span className="w-9 h-9 rounded-lg bg-surface-4 flex items-center justify-center shrink-0">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="text-warm-accent"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </span>
                      <span className="text-[15px] text-warm-fg group-hover:text-warm-hover transition-colors duration-200 flex items-center gap-1.5">
                        LinkedIn
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          className="text-warm-muted"
                        >
                          <path
                            d="M3.5 2.5H9.5V8.5M9.5 2.5L2.5 9.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.18}>
                <Card variant="inset" className="p-7">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-warm-fg mb-2">
                    Newsletter
                  </h3>
                  <p className="text-sm text-warm-muted leading-relaxed mb-5">
                    Occasional updates on operational intelligence, OmnI
                    development, and manufacturing insights. No spam.
                  </p>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="flex gap-2"
                  >
                    <Input
                      type="email"
                      placeholder="you@company.com"
                      className="flex-1"
                    />
                    <Button variant="accent" size="md">
                      Subscribe
                    </Button>
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
