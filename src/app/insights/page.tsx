"use client";

import NeuCard from "@/components/ui/NeuCard";
import NeuButton from "@/components/ui/NeuButton";
import NeuIconBox from "@/components/ui/NeuIconBox";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-neu-accent mb-6">
              Insights
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-neu-fg leading-[1.2] max-w-4xl mx-auto">
              OmnI NAVIGATION does not manage by reports or targets. It watches
              reality as it happens, learns how your line truly behaves, and guides
              operators with clear next steps —{" "}
              <span className="text-neu-accent">before problems become losses.</span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* How We Look at Operations */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <NeuCard variant="pressed" className="p-8 md:p-12">
              <p className="font-display text-xl md:text-2xl font-bold text-neu-fg leading-relaxed">
                Operations are not only a set of KPIs. They are a{" "}
                <span className="text-neu-accent">
                  living system of flow, signals, and human decisions.
                </span>
              </p>
              <p className="mt-4 text-neu-muted">
                Moving away from managing through hindsight toward navigating in the
                present.
              </p>
            </NeuCard>
          </ScrollReveal>
        </div>
      </section>

      {/* 1. Starting from Reality */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block text-sm font-semibold tracking-widest uppercase text-neu-secondary mb-4">
                  01 — Reality &ldquo;As Is&rdquo;
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-neu-fg mb-6">
                  Making the Invisible Visible
                </h2>
                <p className="text-neu-muted leading-relaxed mb-4">
                  Like the mantis shrimp that sees the world through 12 to 16
                  different photoreceptors — detecting ultraviolet and polarised
                  light far beyond human capacity — OmnI uses technology to extend
                  our senses beyond the limits of the human eye and brain.
                </p>
                <p className="text-neu-fg font-medium leading-relaxed">
                  True intelligence does not see more of the same — it reveals what
                  was always there but invisible to us.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <NeuCard className="p-8">
                <NeuIconBox size="lg" className="mb-6 mx-auto">
                  <span className="text-3xl">🦐</span>
                </NeuIconBox>
                <p className="text-center text-neu-muted leading-relaxed">
                  While we see the world by mixing three primary colours, the mantis
                  shrimp has up to 16 different photoreceptors. It can detect
                  ultraviolet light and polarised light — seeing dimensions of
                  reality invisible to us.
                </p>
              </NeuCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. Flow vs Results */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="02 — Observing Flow"
            title="Results Tell You What Happened. Flow Tells You What Will Happen Next."
          />
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <ScrollReveal delay={0}>
              <NeuCard variant="pressed" className="p-8 h-full">
                <h3 className="font-display text-xl font-bold text-red-400 mb-4">
                  Traditional: Results
                </h3>
                <p className="text-neu-muted leading-relaxed">
                  Like measuring the water level once a day — you know what happened
                  but not why or what comes next.
                </p>
              </NeuCard>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <NeuCard className="p-8 h-full">
                <h3 className="font-display text-xl font-bold text-neu-accent mb-4">
                  OmnI: Flow
                </h3>
                <p className="text-neu-muted leading-relaxed">
                  Like watching how the river actually moves — where it narrows,
                  where it gets blocked by debris, where it overflows its banks.
                </p>
              </NeuCard>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <NeuCard className="p-8">
              <h3 className="font-display text-lg font-bold text-neu-fg mb-6">
                How OmnI observes flow:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Watches the real flow, minute by minute",
                  "Learns how this factory actually behaves",
                  "Sees when flow starts to bend, slow, or break",
                  "Suggests the next best action, before red appears",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl neu-pressed-sm">
                    <span className="text-neu-accent font-bold">{i + 1}</span>
                    <span className="text-sm text-neu-fg">{item}</span>
                  </div>
                ))}
              </div>
            </NeuCard>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Signal Integration */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block text-sm font-semibold tracking-widest uppercase text-neu-secondary mb-4">
                  03 — Unified Signals
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-neu-fg mb-6">
                  Events, Stops, Alarms &amp; Behaviour as One Signal Stream
                </h2>
                <p className="text-neu-muted leading-relaxed mb-6">
                  Operations don&apos;t fail because the plan is wrong — they fail
                  because reality changes faster than rules can. OmnI treats events,
                  stops, alarms, and human behavior as one unified signal stream.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="space-y-4">
                {[
                  {
                    title: "Signal Integration",
                    desc: "Machine data, process context, and human actions become one timeline.",
                  },
                  {
                    title: "Pattern Learning",
                    desc: "OmnI learns which small signals usually lead to big losses.",
                  },
                  {
                    title: "Adaptive Guidance",
                    desc: "Advice changes based on this line, this product, this crew, right now.",
                  },
                  {
                    title: "Outcome Reinforcement",
                    desc: "What works is strengthened; what fails is corrected.",
                  },
                ].map((item, i) => (
                  <ScrollReveal key={item.title} delay={i * 0.1}>
                    <NeuCard variant="subtle" className="p-5 flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full neu-pressed-deep flex items-center justify-center text-neu-accent font-bold text-sm shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-neu-fg text-sm mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-neu-muted">{item.desc}</p>
                      </div>
                    </NeuCard>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Floor-Level Benefits */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="On the Floor"
            title="Guidance That Fits Your Shift"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "You don't get generic instructions. You get guidance that fits your shift.",
              "OmnI notices early signals before big problems start.",
              "Advice changes when conditions change — not tomorrow, but during the shift.",
              "Good practices from experienced operators are learned and shared automatically.",
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <NeuCard hover className="p-6 flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-neu-accent mt-2 shrink-0" />
                  <p className="text-neu-fg leading-relaxed">{item}</p>
                </NeuCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Shift Handover */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="04 — Shift Handover"
            title="From Proving the Past to Understanding the Present"
          />
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={0}>
              <NeuCard variant="pressed" className="p-8 h-full">
                <h3 className="font-display text-xl font-bold text-red-400 mb-4">
                  Before
                </h3>
                <p className="text-neu-muted leading-relaxed">
                  Checklist-based, KPI ritual, &ldquo;what went wrong&rdquo;
                  interrogation. Shift handover as blame session.
                </p>
              </NeuCard>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <NeuCard className="p-8 h-full">
                <h3 className="font-display text-xl font-bold text-neu-accent mb-4">
                  After
                </h3>
                <p className="text-neu-muted leading-relaxed mb-4">
                  A visual understanding round — the next shift knows exactly where
                  to look and why:
                </p>
                <ul className="space-y-2">
                  {[
                    "What actually changed in the last hour",
                    "Which actions are still open",
                    "What helped recovery",
                    "Where attention is needed now",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-neu-muted">
                      <span className="text-neu-secondary mt-0.5">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </NeuCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. Quiet Shifts */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <NeuCard className="p-10 md:p-16 text-center">
              <span className="inline-block text-sm font-semibold tracking-widest uppercase text-neu-secondary mb-4">
                05 — The Goal
              </span>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-neu-fg mb-4">
                Quiet Shifts
              </h2>
              <p className="text-lg text-neu-muted max-w-2xl mx-auto leading-relaxed">
                No drama. No heroics. Just stable flow — because small risks were
                handled early. The best shift is the one where nothing went wrong at
                all.
              </p>
            </NeuCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Business Value */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Business Value"
            title="Stop Reacting. Start Guiding."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🔮",
                title: "Predict Next",
                desc: "Instead of explaining what already happened.",
              },
              {
                icon: "📉",
                title: "50% Less NVA",
                desc: "Systematic waste reduction from real operations.",
              },
              {
                icon: "🎙",
                title: "Voice Co-Pilot",
                desc: "Guidance that feels collaborative, not robotic.",
              },
              {
                icon: "🔗",
                title: "Unified Intelligence",
                desc: "AI, OI, OT, and people in one layer.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <NeuCard hover className="p-6 h-full text-center">
                  <NeuIconBox size="md" className="mb-3 mx-auto">
                    <span>{item.icon}</span>
                  </NeuIconBox>
                  <h3 className="font-display text-base font-bold text-neu-fg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neu-muted">{item.desc}</p>
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
                Ready to Navigate, Not Just Report?
              </h2>
              <p className="text-lg text-neu-muted mb-8 max-w-2xl mx-auto">
                Get insights on operational intelligence and decision-making.
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
