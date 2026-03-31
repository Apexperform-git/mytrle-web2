"use client";

import NeuCard from "@/components/ui/NeuCard";
import NeuButton from "@/components/ui/NeuButton";
import NeuIconBox from "@/components/ui/NeuIconBox";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/animations/ScrollReveal";
import FloatingElement from "@/components/animations/FloatingElement";
import CountUp from "@/components/animations/CountUp";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block text-sm font-semibold tracking-widest uppercase text-neu-accent mb-6">
                  OmnI NAVIGATION
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-neu-fg leading-[1.1]">
                  Operator in Control.{" "}
                  <span className="text-neu-accent">Reality &lsquo;As Is&rsquo;.</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-neu-muted leading-relaxed max-w-xl">
                  OmnI builds a living understanding of your line, reasons about what
                  may happen next, and gives clear, explainable guidance — without
                  taking control away from the operator.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <NeuButton href="/what-is-omni" size="lg">
                    Discover OmnI
                  </NeuButton>
                  <NeuButton href="/contact" variant="secondary" size="lg">
                    Request a Demo
                  </NeuButton>
                </div>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-neu-muted">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-neu-secondary" />
                    Operators stay in control on the floor
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-neu-secondary" />
                    Supervisors stay informed — 24/7
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative flex items-center justify-center min-h-[320px] md:min-h-[400px]">
                <FloatingElement speed="slow">
                  <div className="w-72 h-72 md:w-96 md:h-96 rounded-full neu-flat absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </FloatingElement>
                <FloatingElement delay>
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full neu-pressed absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </FloatingElement>
                <FloatingElement>
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full neu-flat relative z-10 flex items-center justify-center">
                    <span className="text-neu-accent font-display font-extrabold text-2xl md:text-3xl">
                      OmnI
                    </span>
                  </div>
                </FloatingElement>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* One-Sentence Definition */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <NeuCard className="p-8 md:p-12">
              <p className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-neu-fg leading-relaxed">
                A human-centric operational intelligence that learns how your line
                behaves, reasons forward, and guides decisions — so operators act
                with{" "}
                <span className="text-neu-accent">confidence, not guesswork</span>.
              </p>
            </NeuCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Three Core Pillars */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="How OmnI Works"
            title="From Guessing to Guided"
            subtitle="Three core functions that transform how your operation makes decisions."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "👁",
                title: "Learn Reality",
                description:
                  "Observes live signals and builds a 'world model' of how the line behaves in real conditions.",
              },
              {
                icon: "🧠",
                title: "Reason Forward",
                description:
                  "Compares likely next steps and their consequences so teams can choose the best action.",
              },
              {
                icon: "🤝",
                title: "Guide, Don't Automate",
                description:
                  "Clear explanations and suggested actions — ownership remains with operators and team leads.",
              },
            ].map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={i * 0.15}>
                <NeuCard hover className="p-8 h-full">
                  <NeuIconBox size="lg" className="mb-6">
                    <span>{pillar.icon}</span>
                  </NeuIconBox>
                  <h3 className="font-display text-xl font-bold text-neu-fg mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-neu-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </NeuCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PSP Behavior Change Model */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Behavior Change Model"
            title="Processes. Systems. People."
            subtitle="Improvements stick when processes, systems, and people are aligned around real behavior."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                label: "Processes",
                color: "text-neu-accent",
                description:
                  "Standard work, changeovers, cleaning, escalation routines — what should happen next.",
              },
              {
                label: "Systems",
                color: "text-neu-secondary",
                description:
                  "Signals, context, logs, run-rates, alarms — what is actually happening now.",
              },
              {
                label: "People",
                color: "text-neu-accent-light",
                description:
                  "Operator judgement, collaboration, keeping promises — how actions are chosen and executed.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.15}>
                <NeuCard variant="pressed" className="p-8 h-full">
                  <h3
                    className={`font-display text-2xl font-bold ${item.color} mb-4`}
                  >
                    {item.label}
                  </h3>
                  <p className="text-neu-muted leading-relaxed">
                    {item.description}
                  </p>
                </NeuCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Measurement Framework */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block text-sm font-semibold tracking-widest uppercase text-neu-accent mb-4">
                  Measurable Impact
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-neu-fg mb-6">
                  Cut Non-Value-Added Time by{" "}
                  <span className="text-neu-accent">
                    <CountUp end={50} suffix="%+" className="tabular-nums" />
                  </span>
                </h2>
                <p className="text-neu-muted leading-relaxed mb-8">
                  Reduce NVA, optimize NNVA, and protect VA — while keeping the
                  operator in control.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      label: "VA (Value-Added)",
                      desc: "Time that directly produces value — good output at the right pace.",
                      color: "bg-neu-secondary",
                    },
                    {
                      label: "NVA (Non-Value-Added)",
                      desc: "Losses and waste: micro-stops, waiting, rework, repeated disturbances.",
                      color: "bg-red-400",
                    },
                    {
                      label: "NNVA (Necessary Non-Value-Added)",
                      desc: "Cleaning, preventive maintenance, changeover — essential work that still deserves optimization.",
                      color: "bg-neu-accent",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-3 items-start">
                      <div
                        className={`w-3 h-3 rounded-full ${item.color} mt-1.5 shrink-0`}
                      />
                      <div>
                        <span className="font-medium text-neu-fg">
                          {item.label}
                        </span>
                        <p className="text-sm text-neu-muted">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <NeuCard className="p-10 text-center">
                <div className="font-display text-7xl md:text-8xl font-extrabold text-neu-accent mb-4">
                  <CountUp end={50} suffix="%+" />
                </div>
                <p className="text-lg text-neu-muted font-medium">
                  Reduction in Non-Value-Added Time
                </p>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[
                    { label: "Less Firefighting", value: "VA" },
                    { label: "Faster Recovery", value: "NVA" },
                    { label: "Better OEE", value: "NNVA" },
                  ].map((stat) => (
                    <div key={stat.label} className="neu-pressed-sm rounded-xl p-4">
                      <div className="font-display font-bold text-neu-accent text-sm">
                        {stat.value}
                      </div>
                      <div className="text-xs text-neu-muted mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </NeuCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Outcomes"
            title="What You Get"
            subtitle="Tangible results from day one."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🔥",
                title: "Less Firefighting",
                description:
                  "Earlier signal, clearer next step, fewer repeated losses.",
              },
              {
                icon: "⚡",
                title: "Faster Recovery",
                description:
                  "Guidance is contextual and explainable, not generic advice.",
              },
              {
                icon: "📈",
                title: "Better OEE Behavior",
                description:
                  "NNVA becomes measurable and improvable, without friction.",
              },
              {
                icon: "🎯",
                title: "Measurable Impact",
                description:
                  "One line, one shift — measurable impact from the start.",
              },
            ].map((outcome, i) => (
              <ScrollReveal key={outcome.title} delay={i * 0.1}>
                <NeuCard hover className="p-6 h-full">
                  <NeuIconBox size="md" className="mb-4">
                    <span>{outcome.icon}</span>
                  </NeuIconBox>
                  <h3 className="font-display text-lg font-bold text-neu-fg mb-2">
                    {outcome.title}
                  </h3>
                  <p className="text-sm text-neu-muted leading-relaxed">
                    {outcome.description}
                  </p>
                </NeuCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <NeuCard className="p-10 md:p-16 text-center">
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-neu-fg mb-4">
                Test OmnI on Your Reality
              </h2>
              <p className="text-lg text-neu-muted mb-8 max-w-2xl mx-auto">
                We do not believe in generic demos. Bring one real line, one real
                shift, one real problem. We generate live cases from your reality —
                not from slides.
              </p>
              <NeuButton href="/contact" size="lg">
                Request a Short Demo
              </NeuButton>
            </NeuCard>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
