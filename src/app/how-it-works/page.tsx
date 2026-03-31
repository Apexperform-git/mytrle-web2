"use client";

import NeuCard from "@/components/ui/NeuCard";
import NeuButton from "@/components/ui/NeuButton";
import NeuIconBox from "@/components/ui/NeuIconBox";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-neu-accent mb-6">
              How it Works
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neu-fg leading-[1.08] max-w-4xl mx-auto">
              Reduce Firefighting.{" "}
              <span className="text-neu-accent">Reveal What Matters Next.</span>
            </h1>
            <p className="mt-6 text-lg text-neu-muted leading-relaxed max-w-2xl mx-auto">
              Bridge AI, Operational Intelligence, OT and Human Capital — and
              cut Non-Value-Added time by 50% or more.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Reality */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-neu-accent mb-4">
                  Reality
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-neu-fg mb-6">
                  OmnI Looks at What Is Really Happening
                </h2>
                <p className="text-neu-muted leading-relaxed mb-5">
                  Not what should happen. Not what was planned. But what is
                  happening now. It watches the process flow, the signals, the
                  stops, the rhythm of the line. Minute by minute.
                </p>
                <p className="text-neu-muted leading-relaxed">
                  From this, OmnI learns how your process truly behaves — what
                  works, what causes loss, what helps recovery, and what makes
                  things worse.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <NeuCard className="p-8">
                <div className="space-y-3">
                  {[
                    { label: "What works", mark: "+" },
                    { label: "What causes loss", mark: "!" },
                    { label: "What helps recovery", mark: "~" },
                    { label: "What makes things worse", mark: "-" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 p-4 rounded-2xl neu-pressed-sm"
                    >
                      <div className="w-9 h-9 rounded-xl neu-pressed-deep flex items-center justify-center text-neu-accent font-display font-bold text-sm shrink-0">
                        {item.mark}
                      </div>
                      <span className="font-medium text-neu-fg text-[15px]">{item.label}</span>
                    </div>
                  ))}
                </div>
              </NeuCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Foresight */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left" className="order-2 lg:order-1">
              <NeuCard variant="pressed" className="p-8 md:p-10">
                <p className="text-neu-muted leading-relaxed mb-4">
                  Yesterday, the line looked fine. Same speed. Same product.
                  Same plan. But halfway through the shift, small things started
                  to change. A tiny delay here. A short stop there.
                </p>
                <p className="text-neu-fg font-medium leading-relaxed mb-4">
                  Most systems wait. They only speak up when it&apos;s already
                  wrong.
                </p>
                <p className="text-neu-accent font-display font-semibold text-lg leading-relaxed">
                  OmnI watches differently. It doesn&apos;t wait for a stop. It
                  notices the signs before the stop.
                </p>
              </NeuCard>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2} className="order-1 lg:order-2">
              <div>
                <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-neu-accent mb-4">
                  Foresight
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-neu-fg mb-6">
                  Stay One Step Ahead
                </h2>
                <p className="text-neu-muted leading-relaxed mb-5">
                  OmnI quietly thinks ahead: &ldquo;If we keep going like this,
                  trouble is likely. But if you adjust here, it stays
                  stable.&rdquo; One small change saved almost forty minutes of
                  recovery.
                </p>
                <p className="text-neu-muted leading-relaxed">
                  The best shift is not the one with heroic fixes — it&apos;s
                  the one where nothing went wrong at all.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Capabilities"
            title="Stop Reacting. Start Guiding."
            subtitle="Adaptive learning, real-time context, and natural co-pilot interaction turn data into confident action."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Predict Next",
                description: "Predict what matters next instead of explaining what already happened.",
              },
              {
                title: "Reduce Waste",
                description: "Systematically reduce Non-Value Added waste — at least a 50% reduction.",
              },
              {
                title: "Voice-Enabled",
                description: "Operators empowered with voice-enabled insight so guidance feels collaborative.",
              },
              {
                title: "Unified Layer",
                description: "AI, OI, OT, and your people integrated into one operational intelligence layer.",
              },
            ].map((cap, i) => (
              <ScrollReveal key={cap.title} delay={i * 0.08}>
                <NeuCard hover className="p-7 h-full">
                  <div className="w-10 h-10 rounded-xl bg-neu-accent/10 flex items-center justify-center mb-5">
                    <span className="font-display font-bold text-neu-accent text-sm">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold text-neu-fg mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-neu-muted leading-relaxed">
                    {cap.description}
                  </p>
                </NeuCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Decision Maker Benefits */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="For Decision Makers"
            title="Less Firefighting. Faster Recovery."
            subtitle="More control during the shift — where it matters."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Less Firefighting",
                description: "Clear foresight into what could go wrong next.",
              },
              {
                title: "Faster Recovery",
                description: "Operators guided with context-rich, explainable suggestions.",
              },
              {
                title: "Fewer Repeated Losses",
                description: "Know the operational consequence before it impacts your KPIs.",
              },
              {
                title: "Human-Machine Collaboration",
                description: "Natural speech interaction makes insights actionable at the moment of action.",
              },
            ].map((benefit, i) => (
              <ScrollReveal key={benefit.title} delay={i * 0.08}>
                <NeuCard hover className="p-7 flex gap-5 items-start">
                  <NeuIconBox size="sm" className="shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </NeuIconBox>
                  <div>
                    <h3 className="font-display text-base font-bold text-neu-fg mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-neu-muted leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </NeuCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Methodology"
            title="Brown Paper Method & Value Stream Mapping"
            subtitle="A proven combination for analyzing operations, identifying inefficiencies, and improving productivity."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Data Collection", description: "Gathering real, filled-in operational documents from your actual processes." },
              { step: "02", title: "As-Is Status", description: "Visual layout of processes showing document and information flow as they really are." },
              { step: "03", title: "Value Stream Mapping", description: "Mapping every process step, highlighting value-added and non-value-added activities." },
              { step: "04", title: "Analysis & Review", description: "Examining cycle times, changeover times, uptime, and workforce involvement." },
              { step: "05", title: "Documentation", description: "Easy-to-understand findings with mini-flow copies for clear reference." },
              { step: "06", title: "Collaborative Improvement", description: "Team engagement ensuring buy-in and collaborative solution development." },
            ].map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.06}>
                <NeuCard variant="subtle" className="p-6 h-full relative overflow-hidden">
                  <span className="absolute top-3 right-4 font-display text-5xl font-extrabold text-neu-fg/5">
                    {step.step}
                  </span>
                  <h3 className="font-display text-base font-bold text-neu-fg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neu-muted leading-relaxed">
                    {step.description}
                  </p>
                </NeuCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <NeuCard className="p-10 md:p-16 text-center">
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-neu-fg mb-4">
                See How OmnI Works on Your Line
              </h2>
              <p className="text-base text-neu-muted mb-8 max-w-2xl mx-auto leading-relaxed">
                A short walk-through: one line, one shift, measurable impact.
              </p>
              <NeuButton href="/contact" size="lg">
                Request a Demo
              </NeuButton>
            </NeuCard>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
