"use client";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function InsightsPage() {
  return (
    <>
      {/* -------- 1. Hero (light, centered) -------- */}
      <section className="bg-warm-bg py-28 md:py-40">
        <div className="max-w-6xl mx-auto px-5">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-xs font-display font-medium tracking-[0.15em] uppercase text-warm-accent mb-5">
                Insights
              </span>
              <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-warm-fg leading-[1.2]">
                OmnI NAVIGATION does not manage by reports or targets. It watches
                reality as it happens, learns how your line truly behaves, and
                guides operators with clear next steps &mdash;{" "}
                <span className="text-warm-accent">
                  before problems become losses.
                </span>
              </h1>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* -------- 2. Philosophy Quote (dark) -------- */}
      <section className="dark-section py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-5">
          <ScrollReveal>
            <div className="rounded-lg border border-dark-border p-8 md:p-12 bg-dark-surface hover:border-warm-border-strong transition-colors duration-200 text-center">
              <p className="text-lg md:text-xl leading-relaxed text-dark-fg mb-4">
                &ldquo;Operations are not only a set of KPIs. They are a{" "}
                <strong>
                  living system of flow, signals, and human decisions.
                </strong>
                &rdquo;
              </p>
              <p className="text-[15px] text-dark-muted leading-relaxed">
                OmnI helps you navigate in the present &mdash; not explain the
                past.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* -------- 3. 01 — Reality "As Is" (light) -------- */}
      <section className="bg-warm-bg py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <div>
                <span className="inline-block text-xs font-display font-medium tracking-[0.15em] uppercase text-warm-accent mb-4">
                  01 &mdash; Reality &ldquo;As Is&rdquo;
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-warm-fg mb-5">
                  Making the invisible visible
                </h2>
                <p className="text-[15px] text-warm-muted leading-relaxed mb-4">
                  The mantis shrimp has sixteen types of colour receptor. Humans
                  have three. It does not see &ldquo;more&rdquo; &mdash; it sees
                  differently: ultraviolet, polarized light, signals invisible to
                  every other creature on the reef.
                </p>
                <p className="text-[15px] text-warm-muted leading-relaxed mb-4">
                  Most factory systems are built for human-scale vision &mdash;
                  three receptors. They show what is obvious. OmnI is built like
                  the mantis shrimp. It reads signals your current systems cannot
                  separate: micro-timing between events, rhythm changes across
                  shifts, operator patterns no report will ever surface.
                </p>
                <p className="text-[15px] text-warm-fg font-medium leading-relaxed">
                  Reality &ldquo;as is&rdquo; is not about collecting more data.
                  It is about perceiving what was always there &mdash; but never
                  visible.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <Card className="p-8 md:p-10">
                <h3 className="font-display text-lg font-semibold tracking-tight text-warm-fg mb-3">
                  The Mantis Shrimp Principle
                </h3>
                <p className="text-[15px] text-warm-muted leading-relaxed mb-4">
                  With sixteen photoreceptor types, the mantis shrimp does not
                  simply see more colours. It perceives entire dimensions of
                  light &mdash; ultraviolet bands, circular polarization &mdash;
                  that other species cannot detect at all.
                </p>
                <p className="text-[15px] text-warm-muted leading-relaxed">
                  OmnI applies the same principle to operations: not more
                  dashboards, but a fundamentally different way of reading what
                  your line is doing right now.
                </p>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* -------- 4. 02 — Observing Flow (dark) -------- */}
      <section className="dark-section py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5">
          <SectionHeading
            tag="02 — Observing Flow"
            title="How OmnI reads your line"
            subtitle="The difference between measuring results and observing flow."
          />

          {/* Comparison cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <ScrollReveal>
              <div className="rounded-lg border border-dark-border p-7 bg-dark-surface hover:border-warm-border-strong transition-colors duration-200 h-full">
                <h3 className="font-display text-lg font-semibold tracking-tight text-dark-muted mb-3">
                  Traditional: Results
                </h3>
                <ul className="space-y-2.5">
                  {[
                    "Measures output after the fact",
                    "Compares against static targets",
                    "Explains what happened yesterday",
                    "Treats symptoms, not causes",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[15px] text-dark-muted leading-snug"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-dark-muted mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <div className="rounded-lg border border-dark-border p-7 bg-dark-surface hover:border-warm-border-strong transition-colors duration-200 h-full">
                <h3 className="font-display text-lg font-semibold tracking-tight text-warm-accent mb-3">
                  OmnI: Flow
                </h3>
                <ul className="space-y-2.5">
                  {[
                    "Observes rhythm and behaviour in real time",
                    "Detects pattern shifts before they surface as losses",
                    "Guides operators toward better next steps",
                    "Learns continuously from actual conditions",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[15px] text-dark-fg leading-snug"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-warm-accent mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* How OmnI observes flow */}
          <ScrollReveal delay={0.12}>
            <div className="rounded-lg border border-dark-border p-7 md:p-10 bg-dark-surface hover:border-warm-border-strong transition-colors duration-200">
              <h3 className="font-display text-lg font-semibold tracking-tight text-dark-fg mb-6">
                How OmnI observes flow
              </h3>
              <div className="space-y-3">
                {[
                  {
                    n: "1",
                    title: "Signal Ingestion",
                    desc: "Collects live signals from machines, sensors, PLCs, and operator inputs without disrupting existing systems.",
                  },
                  {
                    n: "2",
                    title: "Rhythm Detection",
                    desc: "Maps the natural cadence of your line — cycle times, micro-stops, changeover patterns, shift behaviour.",
                  },
                  {
                    n: "3",
                    title: "Deviation Recognition",
                    desc: "Identifies when flow drifts from its learned rhythm, before deviations compound into visible losses.",
                  },
                  {
                    n: "4",
                    title: "Contextual Correlation",
                    desc: "Connects signals across sources to understand why flow is changing — not just that it changed.",
                  },
                ].map((item) => (
                  <div
                    key={item.n}
                    className="flex items-start gap-4 border border-dark-border rounded-lg p-4"
                  >
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-dark-surface border border-dark-border text-warm-accent font-display text-xs font-semibold shrink-0">
                      {item.n}
                    </span>
                    <div>
                      <h4 className="font-display text-[15px] font-semibold tracking-tight text-dark-fg mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-sm text-dark-muted leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* -------- 5. 03 — Unified Signals (light) -------- */}
      <section className="bg-warm-bg py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <div>
                <span className="inline-block text-xs font-display font-medium tracking-[0.15em] uppercase text-warm-accent mb-4">
                  03 &mdash; Unified Signals
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-warm-fg mb-5">
                  One intelligence, all signals
                </h2>
                <p className="text-[15px] text-warm-muted leading-relaxed">
                  Traditional systems keep data in silos &mdash; quality in one
                  tool, maintenance in another, production in a third. OmnI
                  unifies all signals into a single living model, so guidance is
                  always based on the full picture, not fragments.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="space-y-4">
                {[
                  {
                    n: "01",
                    title: "Signal Integration",
                    desc: "Machine data, operator input, quality events, and environmental signals — combined into one stream.",
                  },
                  {
                    n: "02",
                    title: "Pattern Learning",
                    desc: "OmnI learns what normal looks like for your specific line, shift, and product mix.",
                  },
                  {
                    n: "03",
                    title: "Adaptive Guidance",
                    desc: "Recommendations adjust as conditions change — no static rules, no outdated thresholds.",
                  },
                  {
                    n: "04",
                    title: "Outcome Reinforcement",
                    desc: "Every action taken feeds back into the model, making guidance sharper over time.",
                  },
                ].map((item, i) => (
                  <ScrollReveal key={item.n} delay={0.1 + i * 0.06}>
                    <Card variant="raised" className="p-5">
                      <div className="flex items-start gap-4">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-surface-4 text-warm-accent font-display text-xs font-semibold shrink-0">
                          {item.n}
                        </span>
                        <div>
                          <h4 className="font-display text-[15px] font-semibold tracking-tight text-warm-fg mb-0.5">
                            {item.title}
                          </h4>
                          <p className="text-sm text-warm-muted leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* -------- 6. Floor Benefits (light) -------- */}
      <section className="bg-warm-bg py-20">
        <div className="max-w-6xl mx-auto px-5">
          <SectionHeading
            tag="On the Floor"
            title="Guidance that fits your shift"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "\"I used to spend the first 20 minutes of every shift figuring out what went wrong on the previous one. Now I just look at the screen and know where to start.\"",
              "\"It does not tell me what to do. It tells me what it sees and what it thinks will happen. I decide. That is the difference.\"",
              "\"Changeovers used to be chaos. OmnI shows us the pattern — which steps drift, which ones stay tight. We improved without a single new SOP.\"",
              "\"The night shift used to be invisible. Now supervisors can see what happened, why it happened, and what the team tried. No blame — just learning.\"",
            ].map((quote, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <Card hover className="p-7 h-full">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-warm-accent mt-2 shrink-0" />
                    <p className="text-[15px] text-warm-muted leading-relaxed italic">
                      {quote}
                    </p>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------- 7. 04 — Shift Handover (dark) -------- */}
      <section className="dark-section py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5">
          <SectionHeading
            tag="04 — Shift Handover"
            title="From lost context to living continuity"
          />
          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="rounded-lg border border-dark-border p-7 bg-dark-surface hover:border-warm-border-strong transition-colors duration-200 h-full">
                <h3 className="font-display text-lg font-semibold tracking-tight text-dark-muted mb-4">
                  Before
                </h3>
                <ul className="space-y-3">
                  {[
                    "Verbal handover — key details lost or forgotten",
                    "Incoming shift starts blind, repeats previous mistakes",
                    "No record of what was tried and what worked",
                    "Supervisors reconstruct events from memory",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[15px] text-dark-muted leading-snug"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-dark-muted mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <div className="rounded-lg border border-dark-border p-7 bg-dark-surface hover:border-warm-border-strong transition-colors duration-200 h-full">
                <h3 className="font-display text-lg font-semibold tracking-tight text-dark-fg mb-4">
                  After
                </h3>
                <ul className="space-y-3">
                  {[
                    "Automatic shift summary with key events and actions taken",
                    "Incoming shift sees live context and open guidance",
                    "Full traceability of what was tried, with outcomes",
                    "Supervisors review shifts remotely with complete clarity",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[15px] text-dark-fg leading-snug"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-warm-accent shrink-0 mt-0.5"><path d="M4.5 12.75l6 6 9-13.5" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* -------- 8. Quiet Shifts (light) -------- */}
      <section className="bg-warm-bg py-20">
        <div className="max-w-3xl mx-auto px-5">
          <ScrollReveal>
            <Card className="p-8 md:p-12 text-center">
              <span className="inline-block text-xs font-display font-medium tracking-[0.15em] uppercase text-warm-accent mb-4">
                05 &mdash; The Goal
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-warm-fg mb-4">
                Quiet shifts
              </h2>
              <p className="text-[15px] text-warm-muted leading-relaxed max-w-xl mx-auto">
                The best shifts are not the ones with heroic saves. They are the
                ones where nothing dramatic happens &mdash; because flow was
                stable, guidance was early, and people acted before problems
                compounded. No drama. No firefighting. Just steady, confident
                production.
              </p>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* -------- 9. Business Value (dark) -------- */}
      <section className="dark-section py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5">
          <SectionHeading
            tag="Business Value"
            title="What OmnI delivers"
            subtitle="Measurable impact from the first shift."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                n: "01",
                title: "Predict Next",
                body: "Anticipate disturbances before they become losses. Guidance arrives before the problem does.",
              },
              {
                n: "02",
                title: "50% Less NVA",
                body: "Reduce non-value-added time by targeting the real causes, not the symptoms visible in reports.",
              },
              {
                n: "03",
                title: "Voice Co-Pilot",
                body: "Operators interact naturally. OmnI listens, understands context, and responds with clear next steps.",
              },
              {
                n: "04",
                title: "Unified Intelligence",
                body: "One model that connects quality, production, and maintenance signals into coherent operational guidance.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.n} delay={i * 0.06}>
                <div className="rounded-lg border border-dark-border p-7 bg-dark-surface hover:border-warm-border-strong transition-colors duration-200 h-full">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-dark-surface border border-dark-border text-warm-accent font-display text-xs font-semibold mb-5">
                    {item.n}
                  </span>
                  <h3 className="font-display text-[15px] font-semibold tracking-tight text-dark-fg mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-dark-muted leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------- 10. CTA (light) -------- */}
      <section className="bg-warm-bg py-20">
        <div className="max-w-3xl mx-auto px-5">
          <ScrollReveal>
            <Card className="p-10 md:p-14 text-center">
              <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-warm-fg mb-3">
                See OmnI on your line
              </h2>
              <p className="text-warm-muted mb-8 max-w-xl mx-auto leading-relaxed">
                No slides. No generic demos. We work with your real data, your
                real shifts, and your real challenges. One line is all it takes
                to see the difference.
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
