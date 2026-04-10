"use client";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/animations/ScrollReveal";
import CountUp from "@/components/animations/CountUp";

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-4 h-4 text-warm-accent shrink-0 mt-0.5"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-4 h-4 text-warm-accent"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function WhatIsOmniPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-28 md:py-40">
        <div className="max-w-6xl mx-auto px-5">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="inline-block text-xs font-display font-medium tracking-[0.15em] uppercase text-warm-accent mb-5">
                What is OmnI
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-[72px] font-semibold tracking-tight text-warm-fg leading-[1.08]">
                Operational Intelligence that{" "}
                <span className="text-warm-accent">Guides, Not Reports</span>
              </h1>
              <p className="mt-6 text-lg text-warm-muted leading-relaxed max-w-xl">
                OmnI NAVIGATION learns how your operation really behaves, reasons
                about what may happen next, and guides people with clear,
                explainable actions.
              </p>
              <p className="mt-6 text-[15px] font-display font-medium tracking-tight text-warm-fg">
                Not a dashboard. Not automation. Navigation.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Framework */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <SectionHeading
            tag="Core Framework"
            title="Understanding. Reasoning. Guidance."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                n: "01",
                title: "Understanding",
                body: "Learn how the operation actually behaves \u2014 signals, events, context. Not how it should behave in theory.",
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
            ].map((p, i) => (
              <ScrollReveal key={p.n} delay={i * 0.08}>
                <Card hover className="p-7 h-full">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-surface-3 text-warm-accent font-display text-xs font-semibold mb-5">
                    {p.n}
                  </span>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-warm-fg mb-2">
                    {p.title}
                  </h3>
                  <p className="text-[15px] text-warm-muted leading-relaxed">
                    {p.body}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
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
                  {[
                    "Firefighting instead of flow",
                    "Data without direction",
                    "People blamed for system behavior",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-warm-accent shrink-0" />
                      <span className="text-[15px] text-warm-fg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <Card variant="inset" className="p-8 md:p-10">
                <p className="font-display text-xl md:text-2xl font-semibold tracking-tight text-warm-fg leading-snug">
                  &ldquo;If a system cannot explain itself to operators, it is
                  not intelligence &mdash;{" "}
                  <span className="text-warm-accent">it is noise.</span>&rdquo;
                </p>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What OmnI Is NOT */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <SectionHeading
            tag="Clear Distinction"
            title="What OmnI is not"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Not a Dashboard",
                body: "Dashboards describe the past. OmnI builds a living model of what is happening now and what may happen next.",
              },
              {
                title: "Not an Optimizer",
                body: "OmnI does not take control. It observes, reasons, and supports \u2014 the operator always decides.",
              },
              {
                title: "Not a Reporting Layer",
                body: "No more explaining what already happened. OmnI predicts what matters next and guides action.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <Card variant="inset" className="p-7 h-full">
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded bg-surface-4 mb-5">
                    <XIcon />
                  </div>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-warm-fg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-warm-muted leading-relaxed">
                    {item.body}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Target Users */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <SectionHeading
            tag="Who Benefits"
            title="Built for the people on the floor"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
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
            ].map((user, i) => (
              <ScrollReveal key={user.role} delay={i * 0.08}>
                <Card hover className="p-7 h-full">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-surface-3 text-warm-accent font-display text-xs font-semibold mb-5">
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

      {/* Impact */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <Card className="p-10 text-center">
                <div className="font-display text-6xl md:text-7xl font-semibold text-warm-accent mb-2 tabular-nums tracking-tight">
                  <CountUp end={50} suffix="%+" />
                </div>
                <p className="text-warm-muted font-medium">
                  Reduction in Non-Value-Added Time
                </p>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-warm-fg mb-5">
                  Good systems make good people better
                </h2>
                <p className="text-[15px] text-warm-muted leading-relaxed mb-6">
                  Bad systems make good people look bad. OmnI creates the
                  conditions where operators can excel &mdash; with clear
                  guidance, real context, and explainable reasoning.
                </p>
                <div className="space-y-3">
                  {[
                    "Operators act with confidence, not guesswork",
                    "Teams learn from reality, not reports",
                    "Supervisors see what matters, not everything",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-warm-accent shrink-0" />
                      <span className="text-[15px] text-warm-fg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-5">
          <ScrollReveal>
            <Card className="p-10 md:p-14 text-center">
              <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-warm-fg mb-3">
                Test OmnI on your reality
              </h2>
              <p className="text-warm-muted mb-8 max-w-xl mx-auto leading-relaxed">
                We do not believe in generic demos. OmnI proves itself only on
                real operations. Bring one real line, one real shift, one real
                problem.
              </p>
              <Button href="/contact" variant="accent" size="lg">
                Get in Touch
              </Button>
            </Card>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
