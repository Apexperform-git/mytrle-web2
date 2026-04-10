"use client";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/animations/ScrollReveal";
import CountUp from "@/components/animations/CountUp";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-28 md:py-40">
        <div className="max-w-6xl mx-auto px-5">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="inline-block text-xs font-display font-medium tracking-[0.15em] uppercase text-warm-accent mb-5">
                OmnI Navigation
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-[72px] font-semibold tracking-tight text-warm-fg leading-[1.08]">
                Operator in control.
                <br />
                <span className="text-warm-accent">Reality &lsquo;as is&rsquo;.</span>
              </h1>
              <p className="mt-6 text-lg text-warm-muted leading-relaxed max-w-xl">
                OmnI builds a living understanding of your line, reasons about
                what may happen next, and gives clear, explainable guidance —
                without taking control away from the operator.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="/what-is-omni" variant="accent" size="lg">
                  Discover OmnI
                </Button>
                <Button href="/contact" size="lg">
                  Request a Demo
                </Button>
              </div>
              <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-8 text-sm text-warm-muted">
                <span className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-warm-accent" />
                  Operators stay in control on the floor
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-warm-accent" />
                  Supervisors stay informed — 24/7
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Definition */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-5">
          <ScrollReveal>
            <Card variant="inset" className="p-8 md:p-12">
              <p className="font-display text-xl md:text-2xl font-semibold tracking-tight text-warm-fg leading-snug">
                A human-centric operational intelligence that learns how your
                line behaves, reasons forward, and guides decisions — so
                operators act with{" "}
                <span className="text-warm-accent">confidence, not guesswork</span>.
              </p>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <SectionHeading
            tag="How OmnI Works"
            title="From guessing to guided"
            subtitle="Three core functions that transform how your operation makes decisions."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                n: "01",
                title: "Learn Reality",
                body: "Observes live signals and builds a world model of how the line behaves in real conditions.",
              },
              {
                n: "02",
                title: "Reason Forward",
                body: "Compares likely next steps and their consequences so teams can choose the best action.",
              },
              {
                n: "03",
                title: "Guide, Don't Automate",
                body: "Clear explanations and suggested actions — ownership remains with operators and team leads.",
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
                  <p className="text-[15px] text-warm-muted leading-relaxed">{p.body}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PSP Model */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <SectionHeading
            tag="Behavior Change Model"
            title="Processes. Systems. People."
            subtitle="Improvements stick when processes, systems, and people are aligned around real behavior."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Processes", body: "Standard work, changeovers, cleaning, escalation routines — what should happen next." },
              { title: "Systems", body: "Signals, context, logs, run-rates, alarms — what is actually happening now." },
              { title: "People", body: "Operator judgement, collaboration, keeping promises — how actions are chosen and executed." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <Card variant="inset" className="p-7 h-full">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-warm-fg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-warm-muted leading-relaxed">{item.body}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stat */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <span className="inline-block text-xs font-display font-medium tracking-[0.15em] uppercase text-warm-accent mb-4">
                  Measurable Impact
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-warm-fg mb-5">
                  Cut non-value-added time by{" "}
                  <span className="text-warm-accent">
                    <CountUp end={50} suffix="%+" className="tabular-nums" />
                  </span>
                </h2>
                <p className="text-warm-muted leading-relaxed mb-6">
                  Reduce NVA, optimize NNVA, and protect VA — while keeping the
                  operator in control.
                </p>
                <div className="space-y-3">
                  {[
                    { label: "Value-Added (VA)", desc: "Time that directly produces value — good output at the right pace." },
                    { label: "Non-Value-Added (NVA)", desc: "Losses and waste: micro-stops, waiting, rework, repeated disturbances." },
                    { label: "Necessary NVA (NNVA)", desc: "Cleaning, preventive maintenance, changeover — essential work that deserves optimization." },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-3 items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-warm-accent mt-2 shrink-0" />
                      <div>
                        <span className="text-[15px] font-medium text-warm-fg">{item.label}</span>
                        <p className="text-sm text-warm-muted">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <Card className="p-10 text-center">
                <div className="font-display text-6xl md:text-7xl font-semibold text-warm-accent mb-2 tabular-nums tracking-tight">
                  <CountUp end={50} suffix="%+" />
                </div>
                <p className="text-warm-muted font-medium">Reduction in Non-Value-Added Time</p>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <SectionHeading tag="Outcomes" title="What you get" subtitle="Tangible results from day one." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Less Firefighting", body: "Earlier signal, clearer next step, fewer repeated losses." },
              { title: "Faster Recovery", body: "Guidance is contextual and explainable, not generic advice." },
              { title: "Better OEE", body: "NNVA becomes measurable and improvable, without friction." },
              { title: "Measurable Impact", body: "One line, one shift — measurable impact from the start." },
            ].map((o, i) => (
              <ScrollReveal key={o.title} delay={i * 0.06}>
                <Card hover className="p-6 h-full">
                  <h3 className="font-display text-[15px] font-semibold tracking-tight text-warm-fg mb-1.5">
                    {o.title}
                  </h3>
                  <p className="text-sm text-warm-muted leading-relaxed">{o.body}</p>
                </Card>
              </ScrollReveal>
            ))}
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
                We do not believe in generic demos. Bring one real line, one
                real shift, one real problem. We generate live cases from your
                reality — not from slides.
              </p>
              <Button href="/contact" variant="accent" size="lg">
                Request a Short Demo
              </Button>
            </Card>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
