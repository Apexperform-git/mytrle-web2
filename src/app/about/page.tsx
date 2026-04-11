"use client";

import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/animations/ScrollReveal";
import CountUp from "@/components/animations/CountUp";

export default function AboutPage() {
  return (
    <>
      {/* -------- 1. Hero (light, centered) -------- */}
      <section className="bg-warm-bg py-28 md:py-40">
        <div className="max-w-6xl mx-auto px-5">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-xs font-display font-medium tracking-[0.15em] uppercase text-brand-plum mb-5">
                About Us
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-[72px] font-semibold tracking-tight text-warm-fg leading-[1.08]">
                About{" "}
                <span className="text-brand-orange">Myrtle Europe</span>
              </h1>
              <p className="mt-6 text-lg text-warm-muted leading-relaxed max-w-xl mx-auto">
                We help manufacturing teams see what is really happening on
                their lines &mdash; and act on it before losses compound.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* -------- 2. Overview Quote (dark) -------- */}
      <section className="dark-section py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-5">
          <ScrollReveal>
            <div className="rounded-lg border border-dark-border p-8 md:p-12 bg-dark-surface hover:border-warm-border-strong transition-colors duration-200 text-center">
              <p className="text-lg md:text-xl leading-relaxed text-dark-fg">
                &ldquo;We built OmnI NAVIGATION because we believe operators
                deserve better than dashboards that explain yesterday. They
                deserve a system that helps them navigate today &mdash; with
                clarity, context, and confidence.&rdquo;
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* -------- 3. Method (light) -------- */}
      <section className="bg-warm-bg py-20">
        <div className="max-w-6xl mx-auto px-5">
          <SectionHeading
            tag="Our Method"
            title="How we see operations"
            subtitle="Four principles that guide everything we build."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Visual Clarity",
                body: "Complex operations become understandable when presented visually. We transform raw data into clear, intuitive representations that anyone on the floor can act on.",
              },
              {
                title: "Real Data Insights",
                body: "We work with your actual signals, your actual shifts, your actual challenges. No synthetic benchmarks, no industry averages — only your reality.",
              },
              {
                title: "Effective Communication",
                body: "Information is only valuable when it reaches the right person at the right time. We design every interaction to reduce noise and increase signal.",
              },
              {
                title: "Identification of Waste",
                body: "Non-value-added time hides in plain sight. We surface micro-losses, repeated disturbances, and hidden patterns that traditional reports miss entirely.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="rounded-lg border border-warm-border bg-surface-2 p-7 h-full hover:border-warm-border-strong transition-colors duration-200">
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded bg-surface-3 flex items-center justify-center shrink-0 mt-0.5 text-brand-orange">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 12.75l6 6 9-13.5" /></svg>
                    </span>
                    <div>
                      <h3 className="font-display text-[15px] font-semibold tracking-tight text-warm-fg mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-[15px] text-warm-muted leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------- 4. Process (dark) -------- */}
      <section className="dark-section py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5">
          <SectionHeading
            tag="Process"
            title="How we work"
            subtitle="A structured approach from observation to measurable improvement."
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                n: "01",
                title: "Observe",
                body: "We start on the floor. Watch the line, talk to operators, understand the rhythm of your operation as it truly runs.",
              },
              {
                n: "02",
                title: "Map",
                body: "Document the current state end to end — every step, every wait, every handoff. The brown paper method reveals what systems hide.",
              },
              {
                n: "03",
                title: "Measure",
                body: "Quantify value-added, non-value-added, and necessary non-value-added time at the activity level. Make invisible losses visible.",
              },
              {
                n: "04",
                title: "Analyse",
                body: "Identify root causes, recurring patterns, and the highest-impact opportunities. Prioritise by feasibility and effect.",
              },
              {
                n: "05",
                title: "Guide",
                body: "Deploy OmnI to deliver real-time, explainable guidance to operators and supervisors — keeping humans in control.",
              },
              {
                n: "06",
                title: "Improve",
                body: "Measure results, refine the model, and expand to additional lines. Continuous learning drives continuous improvement.",
              },
            ].map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 0.06}>
                <div className="rounded-lg border border-dark-border p-7 bg-dark-surface hover:border-warm-border-strong transition-colors duration-200">
                  <div className="flex items-start gap-5">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-dark-surface border border-dark-border text-brand-orange font-display text-sm font-semibold shrink-0">
                      {step.n}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold tracking-tight text-dark-fg mb-1">
                        {step.title}
                      </h3>
                      <p className="text-[15px] text-dark-muted leading-relaxed">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------- 5. Outcome Quote (light) -------- */}
      <section className="bg-warm-bg py-20">
        <div className="max-w-3xl mx-auto px-5">
          <ScrollReveal>
            <div className="rounded-lg border border-warm-border bg-surface-3 p-8 md:p-12 text-center">
              <p className="text-lg md:text-xl leading-relaxed text-warm-fg">
                &ldquo;The outcome is not a report. It is a clear, actionable
                overview of how your operation truly behaves &mdash; and what to
                do next to make it better.&rdquo;
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* -------- 6. Technology (dark) -------- */}
      <section className="dark-section py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5">
          <SectionHeading
            tag="Technology"
            title="Built for the floor"
            subtitle="From manual observation to intelligent, real-time guidance."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                n: "01",
                title: "Yesterday",
                body: "Manual data collection, spreadsheet analysis, batch reports delivered days after the shift. Insights arrived too late to act on.",
              },
              {
                n: "02",
                title: "Today",
                body: "Real-time dashboards and alerts. Better visibility, but still reactive — telling you what happened, not what to do next.",
              },
              {
                n: "03",
                title: "Tomorrow",
                body: "OmnI NAVIGATION: a living model that learns your line, reasons forward, and guides operators with clear, explainable next steps.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.n} delay={i * 0.08}>
                <div className="rounded-lg border border-dark-border p-7 bg-dark-surface hover:border-warm-border-strong transition-colors duration-200 h-full">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-dark-surface border border-dark-border text-brand-orange font-display text-xs font-semibold mb-5">
                    {item.n}
                  </span>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-dark-fg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-dark-muted leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------- 7. Metrics (light) -------- */}
      <section className="bg-warm-bg py-20">
        <div className="max-w-6xl mx-auto px-5">
          <SectionHeading
            tag="Metrics"
            title="What we measure"
            subtitle="The indicators that matter most on the floor."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "OEE",
                body: "Overall Equipment Effectiveness — the composite measure of availability, performance, and quality. OmnI surfaces the micro-losses that erode OEE shift by shift.",
              },
              {
                title: "Availability",
                body: "How much of the planned production time is actually productive. OmnI identifies unplanned stops, slow starts, and hidden downtime patterns before they compound.",
              },
              {
                title: "Run Rate",
                body: "Actual speed versus designed speed. OmnI detects when cycle times drift, correlates the cause, and guides operators to recover pace without sacrificing quality.",
              },
              {
                title: "Quality",
                body: "First-pass yield and rework rates. OmnI connects quality events to upstream conditions, helping teams prevent defects rather than inspect for them.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="rounded-lg border border-warm-border bg-surface-2 p-7 h-full hover:border-warm-border-strong transition-colors duration-200">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-brand-orange mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-warm-muted leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------- 8. CTA (dark) -------- */}
      <section className="dark-section py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-5">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-dark-fg mb-3">
                Let&rsquo;s talk about your line
              </h2>
              <p className="text-dark-muted mb-8 max-w-xl mx-auto leading-relaxed">
                Every operation is different. Tell us about yours and we will
                show you what OmnI can reveal &mdash; with your real data, on
                your real floor.
              </p>
              <Button href="/contact" variant="accent" size="lg">
                Get in Touch
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
