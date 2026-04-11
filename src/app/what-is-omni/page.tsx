"use client";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/animations/ScrollReveal";
import CountUp from "@/components/animations/CountUp";

/* ── Inline SVG icons ─────────────────────────────────────────────── */

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-brand-orange shrink-0 mt-0.5"
  >
    <path d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const XIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-brand-orange"
  >
    <path d="M6 18L18 6M6 6l12 12" />
  </svg>
);

/* ── Data ──────────────────────────────────────────────────────────── */

const frameworkSteps = [
  {
    n: "01",
    title: "Understanding",
    body: "Learn how the operation actually behaves — signals, events, context. Not how it should behave in theory.",
  },
  {
    n: "02",
    title: "Reasoning",
    body: "Simulate near-future scenarios and compare possible actions. Foresight, not hindsight.",
  },
  {
    n: "03",
    title: "Guidance",
    body: "Give clear, explainable steps with expected effect and timing. Operators decide, not the system.",
  },
];

const notCards = [
  {
    title: "Not a Dashboard",
    body: "Dashboards describe the past. OmnI builds a living model of what is happening now and what may happen next.",
  },
  {
    title: "Not an Optimizer",
    body: "OmnI does not take control. It observes, reasons, and supports — the operator always decides.",
  },
  {
    title: "Not a Reporting Layer",
    body: "No more explaining what already happened. OmnI predicts what matters next and guides action.",
  },
];

const targetUsers = [
  {
    n: "01",
    role: "Operators",
    question: "What should I do now?",
    benefits: [
      "Real-time decision support",
      "Clear guidance instead of pressure",
      "Confidence instead of guesswork",
    ],
  },
  {
    n: "02",
    role: "Team Leads",
    question: "What changed and why?",
    benefits: [
      "Understanding instead of blame",
      "Change visibility and causation",
      "Better learning from daily reality",
    ],
  },
  {
    n: "03",
    role: "Supervisors",
    question: "What is likely to break next?",
    benefits: [
      "Predictive operational insights",
      "24/7 visibility wherever they are",
      "Faster stabilization after disturbances",
    ],
  },
];

const painPoints = [
  "Firefighting instead of flow",
  "Data without direction",
  "People blamed for system behavior",
];

const impactBullets = [
  "Operators act with confidence, not guesswork",
  "Teams learn from reality, not reports",
  "Supervisors see what matters, not everything",
];

/* ── Page ──────────────────────────────────────────────────────────── */

export default function WhatIsOmniPage() {
  return (
    <>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          1 · HERO  (light)
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="pt-24 md:pt-36 pb-28 md:pb-40">
        <div className="max-w-6xl mx-auto px-5">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-block text-xs font-display font-medium tracking-[0.15em] uppercase text-brand-plum mb-5">
                What is OmnI
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-[72px] font-semibold tracking-tight text-warm-fg leading-[1.08] mb-7">
                Operational Intelligence that{" "}
                <span className="text-brand-orange">Guides, Not Reports</span>
              </h1>
              <p className="text-lg md:text-xl text-warm-muted leading-relaxed max-w-2xl mx-auto mb-7">
                OmnI NAVIGATION learns how your operation really behaves, reasons
                about what may happen next, and guides people with clear,
                explainable actions.
              </p>
              <p className="text-[15px] font-display font-medium tracking-tight text-warm-fg">
                Not a dashboard. Not automation.{" "}
                <span className="text-brand-orange">Navigation.</span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          2 · CORE FRAMEWORK  (dark)
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="dark-section py-28 md:py-36">
        <div className="max-w-6xl mx-auto px-5">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="inline-block text-xs font-display font-medium tracking-[0.15em] uppercase text-brand-plum mb-3">
                Core Framework
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-[42px] font-semibold tracking-tight leading-[1.15]">
                Understanding. Reasoning. Guidance.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {frameworkSteps.map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 0.12}>
                <div className="rounded-lg border border-dark-border p-7 bg-dark-surface hover:border-warm-border-strong transition-colors duration-200 h-full">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-dark-border text-brand-orange font-display text-xs font-semibold mb-5">
                    {step.n}
                  </span>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-dark-fg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[15px] text-dark-muted leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          3 · PROBLEM STATEMENT  (light)
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-28 md:py-36">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <ScrollReveal>
              <div>
                <SectionHeading
                  tag="The Problem"
                  title="Most factories are not poorly run — they are poorly guided"
                  align="left"
                  className="mb-8"
                />
                <p className="text-[15px] text-warm-muted leading-relaxed mb-6">
                  Plans describe the ideal. Reports explain the past. But
                  operators live in the &ldquo;now&rdquo; &mdash; making
                  decisions every minute without the right context.
                </p>
                <div className="space-y-3">
                  {painPoints.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                      <span className="text-[15px] text-warm-fg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <Card variant="inset" className="p-8 md:p-10">
                <p className="font-display text-xl md:text-2xl font-semibold tracking-tight text-warm-fg leading-snug">
                  &ldquo;If a system cannot explain itself to operators, it is
                  not intelligence &mdash;{" "}
                  <span className="text-brand-orange">it is noise.</span>&rdquo;
                </p>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          4 · WHAT OMNI IS NOT  (dark)
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="dark-section py-28 md:py-36">
        <div className="max-w-6xl mx-auto px-5">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="inline-block text-xs font-display font-medium tracking-[0.15em] uppercase text-brand-plum mb-3">
                Clear Distinction
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-[42px] font-semibold tracking-tight leading-[1.15]">
                What OmnI is not
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {notCards.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.12}>
                <div className="rounded-lg border border-dark-border p-7 bg-dark-surface hover:border-warm-border-strong transition-colors duration-200 h-full">
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-dark-border mb-5">
                    <XIcon />
                  </div>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-dark-fg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-dark-muted leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          5 · TARGET USERS  (light)
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-28 md:py-36">
        <div className="max-w-6xl mx-auto px-5">
          <ScrollReveal>
            <SectionHeading
              tag="Who Benefits"
              title="Built for the people on the floor"
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {targetUsers.map((user, i) => (
              <ScrollReveal key={user.role} delay={i * 0.1}>
                <Card hover className="p-7 h-full">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-surface-3 text-brand-orange font-display text-xs font-semibold mb-5">
                    {user.n}
                  </span>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-warm-fg mb-1">
                    {user.role}
                  </h3>
                  <p className="text-sm text-warm-muted italic mb-4">
                    &ldquo;{user.question}&rdquo;
                  </p>
                  <div className="space-y-2.5">
                    {user.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-2.5">
                        <CheckIcon />
                        <span className="text-[15px] text-warm-fg leading-snug">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          6 · IMPACT  (dark)
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="dark-section py-28 md:py-36">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="rounded-lg border border-dark-border p-12 bg-dark-surface text-center">
                <div className="font-display text-7xl md:text-8xl font-semibold text-brand-orange mb-3 tabular-nums tracking-tight">
                  <CountUp end={50} suffix="%+" />
                </div>
                <p className="text-dark-muted font-display font-medium text-lg">
                  Reduction in Non-Value-Added Time
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-dark-fg mb-5">
                  Good systems make good people better
                </h2>
                <p className="text-[15px] text-dark-muted leading-relaxed mb-7">
                  Bad systems make good people look bad. OmnI creates the
                  conditions where operators can excel &mdash; with clear
                  guidance, real context, and explainable reasoning.
                </p>
                <div className="space-y-3">
                  {impactBullets.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                      <span className="text-[15px] text-dark-muted">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          7 · CTA  (light)
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-28 md:py-36">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-warm-fg leading-[1.12] mb-5">
              Test OmnI on your reality
            </h2>
            <p className="text-warm-muted leading-relaxed mb-10 max-w-xl mx-auto">
              We do not believe in generic demos. OmnI proves itself only on
              real operations. Bring one real line, one real shift, one real
              problem.
            </p>
            <Button href="/contact" variant="accent" size="lg">
              Get in Touch
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
