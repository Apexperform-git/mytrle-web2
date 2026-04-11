"use client";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/animations/ScrollReveal";
import CountUp from "@/components/animations/CountUp";

/* ── Inline SVG icons ─────────────────────────────────────────────── */

const Check = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-orange"><path d="M4.5 12.75l6 6 9-13.5" /></svg>
);

/* ── Fake product UI ─────────────────────────────────────────────── */

function ProductMockup() {
  return (
    <div className="rounded-lg border border-warm-border overflow-hidden shadow-[0_28px_70px_rgba(0,0,0,0.08)] bg-surface-0">
      {/* Title bar */}
      <div className="h-9 bg-surface-3 border-b border-warm-border flex items-center px-3 gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-surface-4" />
        <span className="w-2.5 h-2.5 rounded-full bg-surface-4" />
        <span className="w-2.5 h-2.5 rounded-full bg-surface-4" />
        <span className="ml-auto text-[10px] font-mono text-warm-muted">OmnI Navigation — Line 3</span>
      </div>
      {/* Content */}
      <div className="p-5 md:p-6 space-y-4 font-mono text-[12px] leading-relaxed">
        <div className="flex items-start gap-3">
          <span className="text-brand-plum shrink-0">omni</span>
          <span className="text-warm-fg">Micro-stop pattern detected on Line 3, Station 7. Frequency has increased 40% over the last 45 minutes.</span>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-brand-plum shrink-0">omni</span>
          <span className="text-warm-fg">If the current trend continues, a full stoppage is likely within 35 minutes. Confidence: 82%</span>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-brand-plum shrink-0">omni</span>
          <span className="text-warm-muted">Recommendation: brief cleaning intervention at Station 7 now (est. 4 min) could prevent a 40-minute recovery later.</span>
        </div>
        <div className="pt-2 border-t border-warm-border flex items-start gap-3">
          <span className="text-[#1f8a65] shrink-0">operator</span>
          <span className="text-warm-fg">Acknowledged. Starting cleaning now.</span>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-brand-plum shrink-0">omni</span>
          <span className="text-warm-fg">Confirmed. Monitoring Station 7. Recovery time estimate: 3–5 minutes. Next advisory in 10 minutes.</span>
        </div>
      </div>
    </div>
  );
}


/* ── Page ──────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ━━━ HERO ━━━ */}
      <section className="pt-20 md:pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-5">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <span className="inline-block text-xs font-display font-medium tracking-[0.15em] uppercase text-brand-plum mb-5">
                OmnI Navigation
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-[72px] font-semibold tracking-tight text-warm-fg leading-[1.08] mb-6">
                The best shift is the one where nothing went{" "}
                <span className="brand-gradient-text">wrong</span>
              </h1>
              <p className="text-lg md:text-xl text-warm-muted leading-relaxed max-w-2xl mx-auto mb-10">
                OmnI watches your line in real time, reasons about what will
                happen next, and guides your operators — before problems
                become losses.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button href="/what-is-omni" variant="accent" size="lg">
                  Discover OmnI
                </Button>
                <Button href="/contact" size="lg">
                  Request a Demo
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Product screenshot / mockup */}
          <ScrollReveal delay={0.2}>
            <ProductMockup />
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ DARK: WHAT OMNI DOES ━━━ */}
      <section className="dark-section py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-xs font-display font-medium tracking-[0.15em] uppercase text-brand-orange mb-3">
                How OmnI Works
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.12]">
                Three core functions that transform your operation
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                n: "01",
                title: "Learn Reality",
                body: "Observes live signals and builds a world model of how the line behaves in real conditions — not theory.",
              },
              {
                n: "02",
                title: "Reason Forward",
                body: "Compares likely next steps and their consequences so teams can choose the best action before losses occur.",
              },
              {
                n: "03",
                title: "Guide, Don't Automate",
                body: "Delivers clear explanations and suggested actions. Ownership remains with operators and team leads.",
              },
            ].map((p, i) => (
              <ScrollReveal key={p.n} delay={i * 0.1}>
                <div className="rounded-lg border border-dark-border p-7 h-full bg-dark-surface hover:border-warm-border-strong transition-colors duration-200">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-dark-border text-brand-orange font-display text-xs font-semibold mb-5">
                    {p.n}
                  </span>
                  <h3 className="font-display text-lg font-semibold tracking-tight mb-2">{p.title}</h3>
                  <p className="text-[15px] text-dark-muted leading-relaxed">{p.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ LIGHT: DEFINITION QUOTE ━━━ */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <ScrollReveal>
            <p className="text-2xl md:text-3xl lg:text-[36px] leading-[1.3] tracking-tight text-warm-fg font-display font-semibold">
              &ldquo;A human-centric operational intelligence that learns how your
              line behaves, reasons forward, and guides decisions — so operators
              act with{" "}
              <span className="brand-gradient-text">confidence, not guesswork</span>.&rdquo;
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ LIGHT: PSP MODEL ━━━ */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <div>
                <span className="inline-block text-xs font-display font-medium tracking-[0.15em] uppercase text-brand-plum mb-4">
                  Behavior Change Model
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-warm-fg mb-5 leading-[1.15]">
                  Processes. Systems. People.
                </h2>
                <p className="text-warm-muted leading-relaxed mb-8">
                  Improvements stick when processes, systems, and people are
                  aligned around real behavior — not ideal plans.
                </p>
                {[
                  { title: "Processes", body: "Standard work, changeovers, cleaning, escalation routines — what should happen next." },
                  { title: "Systems", body: "Signals, context, logs, run-rates, alarms — what is actually happening now." },
                  { title: "People", body: "Operator judgement, collaboration, keeping promises — how actions are chosen and executed." },
                ].map((item) => (
                  <div key={item.title} className="mb-5 last:mb-0">
                    <h3 className="font-display text-[15px] font-semibold tracking-tight text-warm-fg mb-1">{item.title}</h3>
                    <p className="text-sm text-warm-muted leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <Card variant="inset" className="p-8">
                <div className="space-y-4 font-mono text-[12px]">
                  {[
                    { label: "VA", desc: "Value-Added", val: "Direct production time" },
                    { label: "NVA", desc: "Non-Value-Added", val: "Micro-stops, waiting, rework" },
                    { label: "NNVA", desc: "Necessary NVA", val: "Cleaning, maintenance, changeover" },
                  ].map((row) => (
                    <div key={row.label} className="flex items-start gap-3 p-3 rounded bg-surface-4 border border-warm-border">
                      <span className="font-display text-xs font-semibold text-brand-orange w-10 shrink-0">{row.label}</span>
                      <div>
                        <span className="text-warm-fg block">{row.desc}</span>
                        <span className="text-warm-muted">{row.val}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ━━━ DARK: IMPACT STATS ━━━ */}
      <section className="dark-section py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="inline-block text-xs font-display font-medium tracking-[0.15em] uppercase text-brand-orange mb-4">
                  Measurable Impact
                </span>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.08] mb-5">
                  <span className="text-brand-orange tabular-nums">
                    <CountUp end={50} suffix="%+" />
                  </span>{" "}
                  reduction in non-value-added time
                </h2>
                <p className="text-dark-muted leading-relaxed mb-8">
                  Reduce NVA, optimize NNVA, and protect VA — while the operator stays in control.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button href="/how-it-works" variant="accent" size="md">
                    See How it Works
                  </Button>
                  <Button href="/contact" variant="ghost" size="md" className="text-dark-fg hover:text-brand-orange">
                    Request a Demo
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "50%+", label: "Less non-value-added time" },
                  { value: "Real-time", label: "Live signals, not batch reports" },
                  { value: "24/7", label: "Continuous line visibility" },
                  { value: "1 shift", label: "To see measurable impact" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-dark-border bg-dark-surface p-5">
                    <div className="font-display text-2xl md:text-3xl font-semibold text-brand-orange mb-1 tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-sm text-dark-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ━━━ LIGHT: OUTCOMES ━━━ */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5">
          <SectionHeading
            tag="Outcomes"
            title="What you get"
            subtitle="Tangible results from day one."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Less Firefighting", body: "Earlier signal, clearer next step, fewer repeated losses. Your team spends time on flow, not on crises." },
              { title: "Faster Recovery", body: "Guidance is contextual and explainable. Operators know why, not just what — so recovery is faster and more confident." },
              { title: "Better OEE Behavior", body: "NNVA becomes measurable and improvable without friction. Cleaning, changeover, and maintenance are optimized, not just tracked." },
              { title: "Measurable Impact", body: "One line, one shift — measurable impact from the start. No lengthy implementation, no disruption to existing workflows." },
            ].map((o, i) => (
              <ScrollReveal key={o.title} delay={i * 0.08}>
                <Card hover className="p-7 h-full">
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded bg-surface-3 flex items-center justify-center shrink-0 mt-0.5">
                      <Check />
                    </span>
                    <div>
                      <h3 className="font-display text-[15px] font-semibold tracking-tight text-warm-fg mb-1.5">{o.title}</h3>
                      <p className="text-sm text-warm-muted leading-relaxed">{o.body}</p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ DARK: CTA ━━━ */}
      <section className="dark-section py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.12] mb-5">
              Test OmnI on your reality
            </h2>
            <p className="text-dark-muted leading-relaxed mb-10 max-w-xl mx-auto">
              We do not believe in generic demos. Bring one real line, one real
              shift, one real problem. We generate live cases from your reality —
              not from slides.
            </p>
            <Button href="/contact" variant="accent" size="lg">
              Request a Short Demo
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
