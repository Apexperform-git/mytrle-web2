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
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-neu-accent mb-6">
              How it Works
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neu-fg leading-[1.1] max-w-4xl mx-auto">
              Reduce Firefighting.{" "}
              <span className="text-neu-accent">Reveal What Matters Next.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-neu-muted leading-relaxed max-w-3xl mx-auto">
              Bridge AI, Operational Intelligence, OT and Human Capital — and cut
              Non-Value-Added time by 50% or more.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Reality Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block text-sm font-semibold tracking-widest uppercase text-neu-secondary mb-4">
                  Reality
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-neu-fg mb-6">
                  OmnI Looks at What Is Really Happening
                </h2>
                <p className="text-neu-muted leading-relaxed mb-6">
                  Not what should happen. Not what was planned. But what is happening
                  now. It watches the process flow, the signals, the stops, the
                  rhythm of the line. Minute by minute. Hour by hour. Day by day.
                </p>
                <p className="text-neu-muted leading-relaxed">
                  From this, OmnI learns how your process truly behaves. Over time,
                  it builds understanding of what works, what causes loss, what helps
                  recovery, and what makes things worse.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <NeuCard className="p-8">
                <div className="space-y-4">
                  {[
                    { label: "What works", icon: "✓" },
                    { label: "What causes loss", icon: "⚠" },
                    { label: "What helps recovery", icon: "↻" },
                    { label: "What makes things worse", icon: "✕" },
                  ].map((item, i) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 p-4 rounded-2xl neu-pressed-sm"
                    >
                      <div className="w-10 h-10 rounded-full neu-pressed-deep flex items-center justify-center text-neu-accent font-bold">
                        {item.icon}
                      </div>
                      <span className="font-medium text-neu-fg">{item.label}</span>
                    </div>
                  ))}
                </div>
              </NeuCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Foresight Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left" className="order-2 lg:order-1">
              <NeuCard variant="pressed" className="p-8 md:p-10">
                <p className="text-neu-muted leading-relaxed mb-4">
                  Yesterday, the line looked fine. Same speed. Same product. Same
                  plan. But halfway through the shift, small things started to
                  change. A tiny delay here. A short stop there. Nothing serious —
                  yet.
                </p>
                <p className="text-neu-fg font-medium leading-relaxed mb-4">
                  Most systems wait. They only speak up when it&apos;s already wrong.
                </p>
                <p className="text-neu-accent font-display font-bold text-lg">
                  OmnI watches differently. It doesn&apos;t wait for a stop. It
                  notices the signs before the stop.
                </p>
              </NeuCard>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2} className="order-1 lg:order-2">
              <div>
                <span className="inline-block text-sm font-semibold tracking-widest uppercase text-neu-secondary mb-4">
                  Foresight
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-neu-fg mb-6">
                  Helping You Stay One Step Ahead
                </h2>
                <p className="text-neu-muted leading-relaxed mb-6">
                  OmnI quietly thinks ahead: &ldquo;If we keep going like this,
                  trouble is likely. But if you slow just a little here, it stays
                  stable.&rdquo; One small slowdown saved a long stop later — almost
                  forty minutes of recovery that never had to happen.
                </p>
                <p className="text-neu-muted leading-relaxed">
                  Because the best shift is not the one with heroic fixes — it&apos;s
                  the one where nothing went wrong at all.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Capabilities"
            title="Stop Reacting. Start Guiding."
            subtitle="With adaptive learning, real-time context, and natural operator co-pilot interaction, OmnI turns data into confident action."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🔮",
                title: "Predict Next",
                description:
                  "Predict what matters next instead of explaining what already happened.",
              },
              {
                icon: "📉",
                title: "Reduce Waste",
                description:
                  "Systematically reduce Non-Value Added waste — at least a 50% reduction.",
              },
              {
                icon: "🎙",
                title: "Voice-Enabled",
                description:
                  "Empower operators with voice-enabled insight (TTS/STT) — guidance feels like a collaborative co-pilot.",
              },
              {
                icon: "🔗",
                title: "Unified Layer",
                description:
                  "Integrate AI, OI, OT, and your people into a unified operational intelligence layer.",
              },
            ].map((cap, i) => (
              <ScrollReveal key={cap.title} delay={i * 0.1}>
                <NeuCard hover className="p-6 h-full">
                  <NeuIconBox size="md" className="mb-4">
                    <span>{cap.icon}</span>
                  </NeuIconBox>
                  <h3 className="font-display text-lg font-bold text-neu-fg mb-2">
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
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="For Decision Makers"
            title="Less Firefighting. Faster Recovery. Fewer Repeated Losses."
            subtitle="More control during the shift — where it matters."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "🧯",
                title: "Less Firefighting",
                description:
                  "Clear foresight into what could go wrong next.",
              },
              {
                icon: "⚡",
                title: "Faster Recovery",
                description:
                  "Operators guided with context-rich, explainable suggestions.",
              },
              {
                icon: "🛡",
                title: "Fewer Repeated Losses",
                description:
                  "Know the operational consequence before it bites your KPIs.",
              },
              {
                icon: "💬",
                title: "Human-Machine Collaboration",
                description:
                  "Natural speech interaction makes insights feel human and actionable at the moment of action.",
              },
            ].map((benefit, i) => (
              <ScrollReveal key={benefit.title} delay={i * 0.1}>
                <NeuCard hover className="p-8 flex gap-6 items-start">
                  <NeuIconBox size="md" className="shrink-0">
                    <span>{benefit.icon}</span>
                  </NeuIconBox>
                  <div>
                    <h3 className="font-display text-lg font-bold text-neu-fg mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-neu-muted leading-relaxed">
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
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Methodology"
            title="Brown Paper Method & Value Stream Mapping"
            subtitle="A proven combination for analyzing current operations, identifying inefficiencies, and improving productivity."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Data Collection",
                description: "Gathering real, filled-in operational documents from your actual processes.",
              },
              {
                step: "02",
                title: "As-Is Status",
                description: "Visual layout of processes showing document and information flow as they really are.",
              },
              {
                step: "03",
                title: "Value Stream Mapping",
                description: "Mapping every process step, highlighting value-added and non-value-added activities.",
              },
              {
                step: "04",
                title: "Analysis & Review",
                description: "Examining cycle times, changeover times, uptime, and workforce involvement.",
              },
              {
                step: "05",
                title: "Documentation",
                description: "Easy-to-understand findings with mini-flow copies for clear reference.",
              },
              {
                step: "06",
                title: "Collaborative Improvement",
                description: "Team engagement ensuring buy-in and collaborative solution development.",
              },
            ].map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.08}>
                <NeuCard variant="subtle" className="p-6 h-full relative overflow-hidden">
                  <span className="absolute top-3 right-4 font-display text-5xl font-extrabold text-neu-accent/10">
                    {step.step}
                  </span>
                  <h3 className="font-display text-lg font-bold text-neu-fg mb-2">
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
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <NeuCard className="p-10 md:p-16 text-center">
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-neu-fg mb-4">
                See How OmnI Works on Your Line
              </h2>
              <p className="text-lg text-neu-muted mb-8 max-w-2xl mx-auto">
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
