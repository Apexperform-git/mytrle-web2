"use client";

import NeuCard from "@/components/ui/NeuCard";
import NeuButton from "@/components/ui/NeuButton";
import NeuIconBox from "@/components/ui/NeuIconBox";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/animations/ScrollReveal";
import FloatingElement from "@/components/animations/FloatingElement";
import CountUp from "@/components/animations/CountUp";

function IconEye() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.64 0 8.577 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.64 0-8.577-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function IconBrain() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
    </svg>
  );
}

function IconHandshake() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  );
}

function IconChart() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  );
}

function IconTarget() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-neu-accent mb-6">
                  OmnI Navigation
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neu-fg leading-[1.08]">
                  Operator in Control.
                  <br />
                  <span className="text-neu-accent">Reality &lsquo;As Is&rsquo;.</span>
                </h1>
                <p className="mt-6 text-lg text-neu-muted leading-relaxed max-w-lg">
                  OmnI builds a living understanding of your line, reasons about
                  what may happen next, and gives clear, explainable guidance —
                  without taking control away from the operator.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <NeuButton href="/what-is-omni" size="lg">
                    Discover OmnI
                  </NeuButton>
                  <NeuButton href="/contact" variant="secondary" size="lg">
                    Request a Demo
                  </NeuButton>
                </div>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-10 text-sm text-neu-muted">
                  <div className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-neu-accent" />
                    Operators stay in control on the floor
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-neu-accent" />
                    Supervisors stay informed — 24/7
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative flex items-center justify-center min-h-[320px] md:min-h-[420px]">
                <FloatingElement speed="slow">
                  <div className="w-72 h-72 md:w-[380px] md:h-[380px] rounded-full neu-flat absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60" />
                </FloatingElement>
                <FloatingElement delay>
                  <div className="w-48 h-48 md:w-60 md:h-60 rounded-full neu-pressed absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </FloatingElement>
                <FloatingElement>
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full neu-flat relative z-10 flex items-center justify-center">
                    <span className="text-neu-accent font-display font-extrabold text-xl md:text-2xl tracking-tight">
                      OmnI
                    </span>
                  </div>
                </FloatingElement>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Definition */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <NeuCard className="p-10 md:p-14">
              <p className="font-display text-xl md:text-2xl lg:text-[28px] font-semibold text-neu-fg leading-relaxed">
                A human-centric operational intelligence that learns how your
                line behaves, reasons forward, and guides decisions — so
                operators act with{" "}
                <span className="text-neu-accent">confidence, not guesswork</span>.
              </p>
            </NeuCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Three Core Pillars */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="How OmnI Works"
            title="From Guessing to Guided"
            subtitle="Three core functions that transform how your operation makes decisions."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <IconEye />,
                title: "Learn Reality",
                description:
                  "Observes live signals and builds a world model of how the line behaves in real conditions.",
              },
              {
                icon: <IconBrain />,
                title: "Reason Forward",
                description:
                  "Compares likely next steps and their consequences so teams can choose the best action.",
              },
              {
                icon: <IconHandshake />,
                title: "Guide, Don't Automate",
                description:
                  "Clear explanations and suggested actions — ownership remains with operators and team leads.",
              },
            ].map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={i * 0.12}>
                <NeuCard hover className="p-8 h-full">
                  <NeuIconBox size="lg" className="mb-6">
                    {pillar.icon}
                  </NeuIconBox>
                  <h3 className="font-display text-lg font-bold text-neu-fg mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-neu-muted leading-relaxed text-[15px]">
                    {pillar.description}
                  </p>
                </NeuCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PSP Behavior Model */}
      <section className="py-20 md:py-28">
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
                description:
                  "Standard work, changeovers, cleaning, escalation routines — what should happen next.",
              },
              {
                label: "Systems",
                description:
                  "Signals, context, logs, run-rates, alarms — what is actually happening now.",
              },
              {
                label: "People",
                description:
                  "Operator judgement, collaboration, keeping promises — how actions are chosen and executed.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.12}>
                <NeuCard variant="pressed" className="p-8 h-full">
                  <div className="w-10 h-10 rounded-xl bg-neu-accent/10 flex items-center justify-center mb-5">
                    <span className="font-display font-bold text-neu-accent text-sm">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-neu-fg mb-3">
                    {item.label}
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

      {/* Impact Stats */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-neu-accent mb-4">
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
                <div className="space-y-5">
                  {[
                    {
                      label: "Value-Added (VA)",
                      desc: "Time that directly produces value — good output at the right pace.",
                      color: "bg-neu-accent",
                    },
                    {
                      label: "Non-Value-Added (NVA)",
                      desc: "Losses and waste: micro-stops, waiting, rework, repeated disturbances.",
                      color: "bg-neu-secondary",
                    },
                    {
                      label: "Necessary Non-Value-Added (NNVA)",
                      desc: "Cleaning, preventive maintenance, changeover — essential work that deserves optimization.",
                      color: "bg-neu-muted",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-3.5 items-start">
                      <div
                        className={`w-2.5 h-2.5 rounded-full ${item.color} mt-1.5 shrink-0`}
                      />
                      <div>
                        <span className="font-medium text-neu-fg text-[15px]">
                          {item.label}
                        </span>
                        <p className="text-sm text-neu-muted mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <NeuCard className="p-10 md:p-12 text-center">
                <div className="font-display text-6xl md:text-7xl font-extrabold text-neu-accent mb-3 tabular-nums">
                  <CountUp end={50} suffix="%+" />
                </div>
                <p className="text-base text-neu-muted font-medium mb-8">
                  Reduction in Non-Value-Added Time
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Less Firefighting" },
                    { label: "Faster Recovery" },
                    { label: "Better OEE" },
                  ].map((stat) => (
                    <div key={stat.label} className="neu-pressed-sm rounded-xl p-4">
                      <div className="text-xs text-neu-muted font-medium">
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
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Outcomes"
            title="What You Get"
            subtitle="Tangible results from day one."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <IconShield />,
                title: "Less Firefighting",
                description: "Earlier signal, clearer next step, fewer repeated losses.",
              },
              {
                icon: <IconBolt />,
                title: "Faster Recovery",
                description: "Guidance is contextual and explainable, not generic advice.",
              },
              {
                icon: <IconChart />,
                title: "Better OEE",
                description: "NNVA becomes measurable and improvable, without friction.",
              },
              {
                icon: <IconTarget />,
                title: "Measurable Impact",
                description: "One line, one shift — measurable impact from the start.",
              },
            ].map((outcome, i) => (
              <ScrollReveal key={outcome.title} delay={i * 0.08}>
                <NeuCard hover className="p-7 h-full">
                  <NeuIconBox size="md" className="mb-5">
                    {outcome.icon}
                  </NeuIconBox>
                  <h3 className="font-display text-base font-bold text-neu-fg mb-2">
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

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <NeuCard className="p-10 md:p-16 text-center">
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-neu-fg mb-4">
                Test OmnI on Your Reality
              </h2>
              <p className="text-base text-neu-muted mb-8 max-w-2xl mx-auto leading-relaxed">
                We do not believe in generic demos. Bring one real line, one
                real shift, one real problem. We generate live cases from your
                reality — not from slides.
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
