"use client";

import Image from "next/image";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/animations/ScrollReveal";
import CountUp from "@/components/animations/CountUp";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Product Mockup — dark terminal-style co-pilot UI
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function ProductMockup() {
  return (
    <div className="rounded-xl overflow-hidden shadow-[0_32px_80px_rgba(28,16,36,0.25)] border border-[rgba(255,255,255,0.06)]" style={{ background: "#1C1024" }}>
      {/* Window chrome */}
      <div className="h-10 flex items-center px-4 gap-2 border-b border-[rgba(255,255,255,0.06)]" style={{ background: "#281A32" }}>
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="flex-1 text-center text-[11px] font-mono text-[rgba(240,236,242,0.35)]">
          OmnI Navigation — Production Line 3
        </span>
      </div>

      {/* Co-pilot conversation */}
      <div className="p-5 md:p-7 space-y-5 font-mono text-[13px] md:text-[13.5px] leading-[1.7]">
        <div className="flex items-start gap-3">
          <Image src="/logo.png" alt="" width={18} height={18} className="mt-0.5 shrink-0 rounded-sm opacity-80" />
          <div>
            <span className="text-brand-orange text-[11px] font-semibold tracking-wide uppercase">OmnI</span>
            <p className="text-[#F0ECF2] mt-0.5">Micro-stop pattern detected on Station 7. Frequency up 40% over 45 min.</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Image src="/logo.png" alt="" width={18} height={18} className="mt-0.5 shrink-0 rounded-sm opacity-80" />
          <div>
            <span className="text-brand-orange text-[11px] font-semibold tracking-wide uppercase">OmnI</span>
            <p className="text-[#F0ECF2] mt-0.5">If current trend continues, full stoppage likely within 35 min. <span className="text-brand-orange">Confidence: 82%</span></p>
          </div>
        </div>

        <div className="flex items-start gap-3 pl-0.5">
          <Image src="/logo.png" alt="" width={18} height={18} className="mt-0.5 shrink-0 rounded-sm opacity-80" />
          <div className="rounded-lg px-4 py-3 border border-brand-orange/20" style={{ background: "rgba(230,122,48,0.06)" }}>
            <span className="text-brand-orange text-[11px] font-semibold tracking-wide uppercase">Recommendation</span>
            <p className="text-[#F0ECF2] mt-0.5">Brief cleaning at Station 7 now <span className="text-[rgba(240,236,242,0.5)]">(est. 4 min)</span> could prevent a 40-min recovery.</p>
          </div>
        </div>

        <div className="border-t border-[rgba(255,255,255,0.06)] pt-4 flex items-start gap-3">
          <div className="w-[18px] h-[18px] rounded-sm bg-[#1f8a65] flex items-center justify-center shrink-0 mt-0.5">
            <span className="text-white text-[9px] font-bold">OP</span>
          </div>
          <div>
            <span className="text-[#1f8a65] text-[11px] font-semibold tracking-wide uppercase">Operator</span>
            <p className="text-[#F0ECF2] mt-0.5">Acknowledged. Starting cleaning now.</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Image src="/logo.png" alt="" width={18} height={18} className="mt-0.5 shrink-0 rounded-sm opacity-80" />
          <div>
            <span className="text-brand-orange text-[11px] font-semibold tracking-wide uppercase">OmnI</span>
            <p className="text-[rgba(240,236,242,0.6)] mt-0.5">Monitoring Station 7. Est. recovery: 3–5 min. Next check in 10 min.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Page
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export default function HomePage() {
  return (
    <>
      {/* ━━━ HERO ━━━ */}
      <section className="pt-16 md:pt-28 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-5">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-semibold tracking-tight text-warm-fg leading-[1.1] mb-6">
                The best shift is the one where nothing went{" "}
                <span className="brand-gradient-text">wrong</span>
              </h1>
              <p className="font-display text-lg md:text-xl text-warm-muted leading-relaxed max-w-xl mx-auto mb-10">
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

          <ScrollReveal delay={0.15}>
            <ProductMockup />
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ DARK: THREE PILLARS ━━━ */}
      <section className="dark-section py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-xs font-display font-medium tracking-[0.15em] uppercase text-brand-orange mb-4">
                How OmnI Works
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] font-semibold tracking-tight leading-[1.12]">
                Learn. Reason. Guide.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                n: "01",
                title: "Learn Reality",
                body: "Observes live signals and builds a world model of how the line actually behaves — not how it should in theory.",
              },
              {
                n: "02",
                title: "Reason Forward",
                body: "Compares likely next steps and their consequences so teams can choose the best action before losses occur.",
              },
              {
                n: "03",
                title: "Guide, Don't Automate",
                body: "Delivers clear explanations and suggested actions. The operator always decides.",
              },
            ].map((p, i) => (
              <ScrollReveal key={p.n} delay={i * 0.1}>
                <div className="rounded-lg border border-dark-border p-7 h-full bg-dark-surface hover:border-[rgba(240,236,242,0.2)] transition-colors duration-200">
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

      {/* ━━━ LIGHT: QUOTE ━━━ */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-5">
          <ScrollReveal>
            <div className="text-center">
              <Image src="/logo.png" alt="" width={48} height={48} className="mx-auto mb-8 opacity-30" />
              <p className="font-display text-2xl md:text-3xl lg:text-[34px] leading-[1.35] tracking-tight text-warm-fg font-semibold">
                A human-centric operational intelligence that learns how your
                line behaves, reasons forward, and guides decisions — so
                operators act with{" "}
                <span className="brand-gradient-text">confidence, not guesswork</span>.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ LIGHT: PSP + VA/NVA ━━━ */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <ScrollReveal>
              <div>
                <span className="inline-block text-xs font-display font-medium tracking-[0.15em] uppercase text-brand-plum mb-4">
                  Behavior Change Model
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-warm-fg mb-6 leading-[1.15]">
                  Processes. Systems. People.
                </h2>
                <p className="text-warm-muted leading-relaxed mb-8">
                  Improvements stick when all three are aligned around real
                  behavior — not ideal plans.
                </p>
                <div className="space-y-6">
                  {[
                    { title: "Processes", body: "Standard work, changeovers, cleaning, escalation — what should happen next." },
                    { title: "Systems", body: "Signals, context, logs, run-rates, alarms — what is actually happening now." },
                    { title: "People", body: "Operator judgement, collaboration, promises — how actions are chosen and executed." },
                  ].map((item, i) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-surface-3 text-brand-plum font-display text-[11px] font-semibold shrink-0 mt-0.5">
                        0{i + 1}
                      </span>
                      <div>
                        <h3 className="font-display text-[15px] font-semibold tracking-tight text-warm-fg mb-0.5">{item.title}</h3>
                        <p className="text-sm text-warm-muted leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.12}>
              <Card variant="inset" className="p-7">
                <h3 className="font-display text-sm font-semibold tracking-tight text-warm-fg mb-5 uppercase tracking-[0.05em]">
                  Value breakdown
                </h3>
                <div className="space-y-4">
                  {[
                    { label: "VA", full: "Value-Added", desc: "Direct production time — good output at the right pace", color: "bg-[#1f8a65]" },
                    { label: "NVA", full: "Non-Value-Added", desc: "Micro-stops, waiting, rework, repeated disturbances", color: "bg-brand-orange" },
                    { label: "NNVA", full: "Necessary NVA", desc: "Cleaning, maintenance, changeover — optimize, don't eliminate", color: "bg-brand-plum" },
                  ].map((row) => (
                    <div key={row.label} className="flex items-start gap-3">
                      <span className={`w-2 h-2 rounded-full ${row.color} mt-2 shrink-0`} />
                      <div>
                        <span className="font-display text-[13px] font-semibold text-warm-fg">
                          {row.full}
                          <span className="text-warm-muted font-normal"> ({row.label})</span>
                        </span>
                        <p className="text-sm text-warm-muted leading-relaxed">{row.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-warm-border">
                  <p className="text-sm text-warm-muted leading-relaxed">
                    OmnI reduces NVA, optimizes NNVA, and protects VA — while the
                    operator stays in control.
                  </p>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ━━━ DARK: IMPACT ━━━ */}
      <section className="dark-section py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="inline-block text-xs font-display font-medium tracking-[0.15em] uppercase text-brand-orange mb-4">
                  Measurable Impact
                </span>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.08] mb-5">
                  <span className="brand-gradient-text tabular-nums">
                    <CountUp end={50} suffix="%+" />
                  </span>{" "}
                  less non-value-added time
                </h2>
                <p className="text-dark-muted leading-relaxed mb-8">
                  One line, one shift — that is all it takes to see the
                  difference. No lengthy rollout, no disruption.
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

            <ScrollReveal delay={0.12}>
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
                    <div className="text-sm text-dark-muted leading-snug">{stat.label}</div>
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
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block text-xs font-display font-medium tracking-[0.15em] uppercase text-brand-plum mb-4">
                Outcomes
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-warm-fg leading-[1.15]">
                What you get
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl mx-auto">
            {[
              { title: "Less Firefighting", body: "Earlier signals, clearer next steps, fewer repeated losses. Your team spends time on flow, not crises." },
              { title: "Faster Recovery", body: "Contextual, explainable guidance. Operators know why, not just what — so recovery is confident." },
              { title: "Better OEE", body: "NNVA becomes measurable and improvable. Cleaning, changeover, and maintenance optimized — not just tracked." },
              { title: "Immediate Results", body: "One line, one shift. No lengthy implementation. No disruption to existing workflows." },
            ].map((o, i) => (
              <ScrollReveal key={o.title} delay={i * 0.06}>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2.5 shrink-0" />
                  <div>
                    <h3 className="font-display text-[15px] font-semibold tracking-tight text-warm-fg mb-1">{o.title}</h3>
                    <p className="text-sm text-warm-muted leading-relaxed">{o.body}</p>
                  </div>
                </div>
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
              No generic demos. Bring one real line, one real shift, one real
              problem. We work with your data — not slides.
            </p>
            <Button href="/contact" variant="accent" size="lg">
              Request a Demo
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
