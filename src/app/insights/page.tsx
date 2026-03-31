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
      <section className="py-24 md:py-36">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-neu-accent mb-6">
              Insights
            </span>
            <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-neu-fg leading-[1.3] max-w-3xl mx-auto">
              OmnI NAVIGATION does not manage by reports or targets. It watches
              reality as it happens, learns how your line truly behaves, and
              guides operators with clear next steps —{" "}
              <span className="text-neu-accent">
                before problems become losses.
              </span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <NeuCard variant="pressed" className="p-10 md:p-14">
              <p className="font-display text-xl md:text-2xl font-semibold text-neu-fg leading-relaxed">
                Operations are not only a set of KPIs. They are a{" "}
                <span className="text-neu-accent">
                  living system of flow, signals, and human decisions.
                </span>
              </p>
              <p className="mt-4 text-neu-muted text-[15px]">
                Moving away from managing through hindsight toward navigating in
                the present.
              </p>
            </NeuCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Reality As Is */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-neu-accent mb-4">
                  01 — Reality &ldquo;As Is&rdquo;
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-neu-fg mb-6">
                  Making the Invisible Visible
                </h2>
                <p className="text-neu-muted leading-relaxed mb-4 text-[15px]">
                  Like the mantis shrimp that perceives the world through 16
                  different photoreceptors — detecting ultraviolet and polarised
                  light far beyond human capacity — OmnI uses technology to
                  extend our senses beyond the limits of the human eye and
                  brain.
                </p>
                <p className="text-neu-fg font-medium leading-relaxed text-[15px]">
                  True intelligence does not see more of the same — it reveals
                  what was always there but invisible to us.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <NeuCard className="p-8 md:p-10 text-center">
                <p className="text-neu-muted leading-relaxed text-[15px]">
                  While we see the world by mixing three primary colours, the
                  mantis shrimp has up to 16 different photoreceptors. It can
                  detect ultraviolet light and polarised light — seeing
                  dimensions of reality invisible to us.
                </p>
              </NeuCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Flow vs Results */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="02 — Observing Flow"
            title="Results Tell You What Happened. Flow Tells You What Happens Next."
          />
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <ScrollReveal>
              <NeuCard variant="pressed" className="p-8 h-full">
                <h3 className="font-display text-lg font-bold text-neu-secondary mb-4">
                  Traditional: Results
                </h3>
                <p className="text-neu-muted leading-relaxed text-[15px]">
                  Like measuring the water level once a day — you know what
                  happened but not why or what comes next.
                </p>
              </NeuCard>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <NeuCard className="p-8 h-full">
                <h3 className="font-display text-lg font-bold text-neu-accent mb-4">
                  OmnI: Flow
                </h3>
                <p className="text-neu-muted leading-relaxed text-[15px]">
                  Like watching how the river actually moves — where it narrows,
                  where it gets blocked, where it overflows.
                </p>
              </NeuCard>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <NeuCard className="p-8">
              <h3 className="font-display text-base font-bold text-neu-fg mb-5">
                How OmnI observes flow
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Watches the real flow, minute by minute",
                  "Learns how this factory actually behaves",
                  "Sees when flow starts to bend, slow, or break",
                  "Suggests the next best action, before red appears",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl neu-pressed-sm">
                    <span className="text-neu-accent font-display font-bold text-sm w-5 shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-sm text-neu-fg">{item}</span>
                  </div>
                ))}
              </div>
            </NeuCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Signal Integration */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-neu-accent mb-4">
                  03 — Unified Signals
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-neu-fg mb-6">
                  One Unified Signal Stream
                </h2>
                <p className="text-neu-muted leading-relaxed text-[15px]">
                  Operations don&apos;t fail because the plan is wrong — they
                  fail because reality changes faster than rules can. OmnI
                  treats events, stops, alarms, and human behavior as one
                  unified signal stream.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="space-y-3">
                {[
                  { title: "Signal Integration", desc: "Machine data, process context, and human actions become one timeline." },
                  { title: "Pattern Learning", desc: "OmnI learns which small signals usually lead to big losses." },
                  { title: "Adaptive Guidance", desc: "Advice changes based on this line, this product, this crew, right now." },
                  { title: "Outcome Reinforcement", desc: "What works is strengthened; what fails is corrected." },
                ].map((item, i) => (
                  <NeuCard key={item.title} variant="subtle" className="p-5 flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-lg neu-pressed-deep flex items-center justify-center text-neu-accent font-display font-bold text-xs shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-neu-fg text-sm mb-0.5">{item.title}</h4>
                      <p className="text-sm text-neu-muted">{item.desc}</p>
                    </div>
                  </NeuCard>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Floor Benefits */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="On the Floor" title="Guidance That Fits Your Shift" />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "You don't get generic instructions. You get guidance that fits your shift.",
              "OmnI notices early signals before big problems start.",
              "Advice changes when conditions change — not tomorrow, but during the shift.",
              "Good practices from experienced operators are learned and shared automatically.",
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <NeuCard hover className="p-6 flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-neu-accent mt-2.5 shrink-0" />
                  <p className="text-neu-fg leading-relaxed text-[15px]">{item}</p>
                </NeuCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Shift Handover */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="04 — Shift Handover"
            title="From Proving the Past to Understanding the Present"
          />
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <NeuCard variant="pressed" className="p-8 h-full">
                <h3 className="font-display text-lg font-bold text-neu-secondary mb-4">Before</h3>
                <p className="text-neu-muted leading-relaxed text-[15px]">
                  Checklist-based, KPI ritual, &ldquo;what went wrong&rdquo;
                  interrogation. Shift handover as blame session.
                </p>
              </NeuCard>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <NeuCard className="p-8 h-full">
                <h3 className="font-display text-lg font-bold text-neu-accent mb-4">After</h3>
                <p className="text-neu-muted leading-relaxed mb-4 text-[15px]">
                  A visual understanding round — the next shift knows exactly
                  where to look and why:
                </p>
                <ul className="space-y-2">
                  {[
                    "What actually changed in the last hour",
                    "Which actions are still open",
                    "What helped recovery",
                    "Where attention is needed now",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-neu-muted">
                      <svg className="w-4 h-4 text-neu-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </NeuCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quiet Shifts */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <NeuCard className="p-10 md:p-16 text-center">
              <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-neu-accent mb-4">
                05 — The Goal
              </span>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-neu-fg mb-4">
                Quiet Shifts
              </h2>
              <p className="text-base text-neu-muted max-w-2xl mx-auto leading-relaxed">
                No drama. No heroics. Just stable flow — because small risks
                were handled early. The best shift is the one where nothing went
                wrong at all.
              </p>
            </NeuCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Business Value */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="Business Value" title="Stop Reacting. Start Guiding." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Predict Next", desc: "Instead of explaining what already happened." },
              { title: "50% Less NVA", desc: "Systematic waste reduction from real operations." },
              { title: "Voice Co-Pilot", desc: "Guidance that feels collaborative, not robotic." },
              { title: "Unified Intelligence", desc: "AI, OI, OT, and people in one layer." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <NeuCard hover className="p-7 h-full text-center">
                  <div className="w-10 h-10 rounded-xl bg-neu-accent/10 flex items-center justify-center mb-4 mx-auto">
                    <span className="font-display font-bold text-neu-accent text-sm">0{i + 1}</span>
                  </div>
                  <h3 className="font-display text-base font-bold text-neu-fg mb-1">{item.title}</h3>
                  <p className="text-sm text-neu-muted">{item.desc}</p>
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
                Ready to Navigate, Not Just Report?
              </h2>
              <p className="text-base text-neu-muted mb-8 max-w-2xl mx-auto leading-relaxed">
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
