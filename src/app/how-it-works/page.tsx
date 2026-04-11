"use client";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function HowItWorksPage() {
  return (
    <>
      {/* ━━━ LIGHT: HERO ━━━ */}
      <section className="py-28 md:py-40">
        <div className="max-w-6xl mx-auto px-5">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block text-xs font-display font-medium tracking-[0.15em] uppercase text-brand-plum mb-5">
                How it Works
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-[72px] font-semibold tracking-tight text-warm-fg leading-[1.08]">
                Reduce firefighting.
                <br />
                <span className="text-brand-orange">
                  Reveal what matters next.
                </span>
              </h1>
              <p className="mt-6 text-lg text-warm-muted leading-relaxed max-w-xl mx-auto">
                Bridge AI, Operational Intelligence, OT and Human Capital
                &mdash; and cut Non-Value-Added time by 50% or more.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ DARK: REALITY ━━━ */}
      <section className="dark-section py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <div>
                <span className="inline-block text-xs font-display font-medium tracking-[0.15em] uppercase text-brand-plum mb-4">
                  Reality
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-dark-fg mb-5">
                  OmnI looks at what is really happening
                </h2>
                <p className="text-[15px] text-dark-muted leading-relaxed mb-4">
                  Rather than relying on batch reports or end-of-shift
                  summaries, OmnI watches your process flow minute by minute.
                  It captures the full picture &mdash; from machine signals
                  and operator actions to environmental context &mdash; and
                  builds a living model of how your line actually behaves.
                </p>
                <p className="text-[15px] text-dark-muted leading-relaxed">
                  Over time it learns what normal looks like for each product,
                  each shift, each configuration. It recognises deviations
                  before they cascade and connects upstream causes to
                  downstream effects, so your teams can act on reality instead
                  of assumption.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.12}>
              <div className="space-y-3">
                {[
                  { mark: "+", label: "What works" },
                  { mark: "!", label: "What causes loss" },
                  { mark: "~", label: "What helps recovery" },
                  { mark: "-", label: "What makes things worse" },
                ].map((item) => (
                  <div
                    key={item.mark}
                    className="rounded-lg border border-dark-border p-7 bg-dark-surface hover:border-warm-border-strong transition-colors duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-8 h-8 rounded bg-dark-surface flex items-center justify-center text-brand-orange font-display text-sm font-semibold shrink-0 border border-dark-border">
                        {item.mark}
                      </span>
                      <span className="text-[15px] text-dark-fg font-medium">
                        {item.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ━━━ LIGHT: FORESIGHT ━━━ */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal className="order-2 lg:order-1">
              <Card variant="inset" className="p-8 md:p-10">
                <p className="text-[15px] text-warm-muted leading-relaxed mb-4">
                  When a micro-stop pattern emerges on Line 3, OmnI does not
                  simply flag the anomaly. It reasons about what is likely to
                  happen next based on thousands of similar sequences it has
                  already observed.
                </p>
                <p className="text-[15px] text-warm-muted leading-relaxed mb-4">
                  It might suggest that the current behaviour leads to a
                  full stoppage within 40 minutes &mdash; and that a brief
                  cleaning intervention now has an 80% chance of preventing
                  it. The operator sees the reasoning, not just the
                  recommendation.
                </p>
                <p className="text-[15px] text-warm-muted leading-relaxed">
                  This is not prediction for prediction&rsquo;s sake. It is
                  foresight designed to keep humans ahead of the process,
                  making better decisions with less stress and fewer
                  surprises.
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.12} className="order-1 lg:order-2">
              <div>
                <span className="inline-block text-xs font-display font-medium tracking-[0.15em] uppercase text-brand-plum mb-4">
                  Foresight
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-warm-fg mb-5">
                  Stay one step ahead
                </h2>
                <p className="text-[15px] text-warm-muted leading-relaxed mb-4">
                  Knowing what happened is useful. Knowing what is about to
                  happen is transformative. OmnI continuously compares
                  possible next steps and their likely consequences, giving
                  teams the foresight to prevent losses rather than recover
                  from them.
                </p>
                <p className="text-[15px] text-warm-muted leading-relaxed">
                  Every suggestion comes with an explanation: why this action,
                  why now, and what the alternatives are. The operator decides.
                  OmnI illuminates the path.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ━━━ DARK: CAPABILITIES ━━━ */}
      <section className="dark-section py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block text-xs font-display font-medium tracking-[0.15em] uppercase text-brand-plum mb-3">
                Capabilities
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-[42px] font-semibold tracking-tight leading-[1.15]">
                Stop reacting. Start guiding.
              </h2>
              <p className="mt-4 text-base md:text-lg text-dark-muted max-w-3xl mx-auto leading-relaxed">
                Four capabilities that turn operational data into operator advantage.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                n: "01",
                title: "Predict Next",
                body: "Continuously compare likely next events, flag emerging risks, and suggest the highest-impact action before a loss occurs.",
              },
              {
                n: "02",
                title: "Reduce Waste",
                body: "Identify and quantify non-value-added time at the activity level. Surface the micro-losses that batch reports miss.",
              },
              {
                n: "03",
                title: "Voice-Enabled",
                body: "Operators interact with OmnI through natural voice queries on the floor, keeping hands free and attention on the process.",
              },
              {
                n: "04",
                title: "Unified Layer",
                body: "Bridge OT signals, planning systems, and human context into a single operational picture that every role can act on.",
              },
            ].map((cap, i) => (
              <ScrollReveal key={cap.n} delay={i * 0.08}>
                <div className="rounded-lg border border-dark-border p-7 bg-dark-surface hover:border-warm-border-strong transition-colors duration-200 h-full">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-dark-border text-brand-orange font-display text-xs font-semibold mb-5">
                    {cap.n}
                  </span>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-dark-fg mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-[15px] text-dark-muted leading-relaxed">
                    {cap.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ LIGHT: DECISION MAKER BENEFITS ━━━ */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5">
          <SectionHeading
            tag="For Decision Makers"
            title="Less firefighting. Faster recovery."
            subtitle="More control during the shift — where it matters."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Less Firefighting",
                body: "Earlier signals and clearer next steps mean fewer emergencies and less reactive chaos on the floor.",
              },
              {
                title: "Faster Recovery",
                body: "Contextual, explainable guidance helps teams recover from disruptions in minutes instead of hours.",
              },
              {
                title: "Fewer Repeated Losses",
                body: "Patterns that cause recurring waste are surfaced, documented, and systematically eliminated.",
              },
              {
                title: "Human-Machine Collaboration",
                body: "OmnI amplifies operator judgement rather than replacing it, building trust and adoption from the start.",
              },
            ].map((benefit, i) => (
              <ScrollReveal key={benefit.title} delay={i * 0.08}>
                <Card hover className="p-7 h-full">
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded bg-surface-3 flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-brand-orange"
                      >
                        <path d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-display text-[15px] font-semibold tracking-tight text-warm-fg mb-1.5">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-warm-muted leading-relaxed">
                        {benefit.body}
                      </p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ DARK: METHODOLOGY ━━━ */}
      <section className="dark-section py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block text-xs font-display font-medium tracking-[0.15em] uppercase text-brand-plum mb-3">
                Methodology
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-[42px] font-semibold tracking-tight leading-[1.15]">
                Brown Paper Method &amp; Value Stream Mapping
              </h2>
              <p className="mt-4 text-base md:text-lg text-dark-muted max-w-3xl mx-auto leading-relaxed">
                A proven, structured approach to understanding your operation before optimising it.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                n: "01",
                title: "Data Collection",
                body: "Gather live signals, operator input, and contextual data from the line to build an accurate picture of current performance.",
              },
              {
                n: "02",
                title: "As-Is Status",
                body: "Map the current state of the process end to end, capturing every step, wait, and handoff as it actually happens today.",
              },
              {
                n: "03",
                title: "Value Stream Mapping",
                body: "Distinguish value-added, non-value-added, and necessary non-value-added activities across the full flow.",
              },
              {
                n: "04",
                title: "Analysis & Review",
                body: "Quantify losses, identify root causes, and prioritise improvement opportunities by impact and feasibility.",
              },
              {
                n: "05",
                title: "Documentation",
                body: "Create clear, visual documentation of findings that every stakeholder can understand and act on.",
              },
              {
                n: "06",
                title: "Collaborative Improvement",
                body: "Work with operators, team leads, and management to design and implement changes that stick.",
              },
            ].map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 0.06}>
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

      {/* ━━━ LIGHT: CTA ━━━ */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-5">
          <ScrollReveal>
            <Card className="p-10 md:p-14 text-center">
              <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-warm-fg mb-3">
                See how OmnI works on your line
              </h2>
              <p className="text-warm-muted mb-8 max-w-xl mx-auto leading-relaxed">
                Bring one real line, one real shift, one real challenge. We
                generate live insights from your reality &mdash; not from
                slides or simulations.
              </p>
              <Button href="/contact" variant="accent" size="lg">
                Request a Demo
              </Button>
            </Card>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
