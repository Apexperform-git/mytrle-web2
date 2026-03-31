"use client";

import NeuCard from "@/components/ui/NeuCard";
import NeuButton from "@/components/ui/NeuButton";
import NeuIconBox from "@/components/ui/NeuIconBox";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/animations/ScrollReveal";
import CountUp from "@/components/animations/CountUp";

export default function WhatIsOmniPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-neu-accent mb-6">
              What is OmnI
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neu-fg leading-[1.08] max-w-4xl mx-auto">
              Operational Intelligence that{" "}
              <span className="text-neu-accent">Guides, Not Reports</span>
            </h1>
            <p className="mt-6 text-lg text-neu-muted leading-relaxed max-w-2xl mx-auto">
              OmnI NAVIGATION learns how your operation really behaves, reasons
              about what may happen next, and guides people with clear, explainable
              actions.
            </p>
            <p className="mt-3 text-sm text-neu-muted font-medium">
              Not a dashboard. Not automation. Navigation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Understanding → Reasoning → Guidance */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Core Framework"
            title="Understanding. Reasoning. Guidance."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Understanding",
                description:
                  "Learn how the operation actually behaves — signals, events, context. Not how it should behave in theory.",
              },
              {
                step: "02",
                title: "Reasoning",
                description:
                  "Simulate near-future scenarios and compare possible actions. Foresight, not hindsight.",
              },
              {
                step: "03",
                title: "Guidance",
                description:
                  "Give clear, explainable steps with expected effect and timing. Operators decide, not the system.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.12}>
                <NeuCard hover className="p-8 h-full relative overflow-hidden">
                  <span className="absolute top-4 right-6 font-display text-6xl font-extrabold text-neu-fg/5">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-neu-accent/10 flex items-center justify-center mb-6">
                    <span className="font-display font-bold text-neu-accent text-sm">{item.step}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-neu-fg mb-3">
                    {item.title}
                  </h3>
                  <p className="text-neu-muted leading-relaxed text-[15px]">
                    {item.description}
                  </p>
                </NeuCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why OmnI Exists */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <SectionHeading
                  tag="The Problem"
                  title="Most Factories Are Not Poorly Run — They Are Poorly Guided"
                  align="left"
                />
                <p className="text-neu-muted leading-relaxed mb-6">
                  Plans describe the ideal. Reports explain the past. But operators
                  live in the &ldquo;now&rdquo; — making decisions every minute
                  without the right context.
                </p>
                <div className="space-y-3">
                  {[
                    "Firefighting instead of flow",
                    "Data without direction",
                    "People blamed for system behavior",
                  ].map((pain) => (
                    <div key={pain} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-neu-accent shrink-0" />
                      <span className="text-neu-fg text-[15px]">{pain}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <NeuCard variant="pressed" className="p-8 md:p-10">
                <p className="font-display text-xl md:text-2xl font-semibold text-neu-fg leading-relaxed">
                  &ldquo;If a system cannot explain itself to operators, it is not
                  intelligence —{" "}
                  <span className="text-neu-accent">it is noise.</span>&rdquo;
                </p>
              </NeuCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What OmnI Is NOT */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="Clear Distinction" title="What OmnI Is NOT" />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Not a Dashboard",
                description:
                  "Dashboards describe the past. OmnI builds a living model of what is happening now and what may happen next.",
              },
              {
                title: "Not an Optimizer",
                description:
                  "OmnI does not take control. It observes, reasons, and supports — the operator always decides.",
              },
              {
                title: "Not a Reporting Layer",
                description:
                  "No more explaining what already happened. OmnI predicts what matters next and guides action.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.12}>
                <NeuCard variant="pressed" className="p-8 h-full">
                  <div className="w-8 h-8 rounded-lg bg-neu-secondary/10 flex items-center justify-center mb-5">
                    <svg className="w-4 h-4 text-neu-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="font-display text-lg font-bold text-neu-fg mb-3">
                    {item.title}
                  </h3>
                  <p className="text-neu-muted leading-relaxed text-[15px]">
                    {item.description}
                  </p>
                </NeuCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Target Users */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Who Benefits"
            title="Built for the People on the Floor"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                role: "Operators",
                question: "What should I do now?",
                benefits: [
                  "Real-time decision support",
                  "Clear guidance instead of pressure",
                  "Confidence instead of guesswork",
                ],
              },
              {
                role: "Team Leads",
                question: "What changed and why?",
                benefits: [
                  "Understanding instead of blame",
                  "Change visibility and causation",
                  "Better learning from daily reality",
                ],
              },
              {
                role: "Supervisors",
                question: "What is likely to break next?",
                benefits: [
                  "Predictive operational insights",
                  "24/7 visibility wherever they are",
                  "Faster stabilization after disturbances",
                ],
              },
            ].map((user, i) => (
              <ScrollReveal key={user.role} delay={i * 0.12}>
                <NeuCard hover className="p-8 h-full">
                  <div className="w-10 h-10 rounded-xl bg-neu-accent/10 flex items-center justify-center mb-5">
                    <span className="font-display font-bold text-neu-accent text-sm">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-neu-fg mb-1">
                    {user.role}
                  </h3>
                  <p className="text-sm text-neu-accent mb-5 italic">&ldquo;{user.question}&rdquo;</p>
                  <ul className="space-y-2.5">
                    {user.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-neu-muted">
                        <svg className="w-4 h-4 text-neu-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </NeuCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <NeuCard className="p-10 md:p-12 text-center">
                <div className="font-display text-6xl md:text-7xl font-extrabold text-neu-accent mb-3 tabular-nums">
                  <CountUp end={50} suffix="%+" />
                </div>
                <p className="text-base text-neu-muted font-medium">
                  Reduction in Non-Value-Added Time
                </p>
              </NeuCard>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-neu-fg mb-6">
                  Good Systems Make Good People Better
                </h2>
                <p className="text-neu-muted leading-relaxed mb-6">
                  Bad systems make good people look bad. OmnI creates the
                  conditions where operators can excel — with clear guidance,
                  real context, and explainable reasoning.
                </p>
                <div className="space-y-3">
                  {[
                    "Faster stabilization after disturbances",
                    "Better learning from daily reality",
                    "Clear guidance instead of pressure",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-neu-accent shrink-0" />
                      <span className="text-neu-fg text-[15px]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <NeuCard className="p-10 md:p-16 text-center">
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-neu-fg mb-4">
                Test OmnI on Your Reality
              </h2>
              <p className="text-base text-neu-muted mb-8 max-w-2xl mx-auto leading-relaxed">
                We do not believe in generic demos. OmnI proves itself only on
                real operations. Bring one real line, one real shift, one real
                problem.
              </p>
              <NeuButton href="/contact" size="lg">
                Get in Touch
              </NeuButton>
            </NeuCard>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
