"use client";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-28 md:py-40">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <ScrollReveal>
            <span className="inline-block text-xs font-display font-medium tracking-[0.15em] uppercase text-warm-accent mb-5">
              About Us
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-[72px] font-semibold tracking-tight text-warm-fg leading-[1.08] max-w-3xl mx-auto">
              About <span className="text-warm-accent">Myrtle Europe</span>
            </h1>
            <p className="mt-6 text-lg text-warm-muted leading-relaxed max-w-2xl mx-auto">
              We combine proven operational analysis methods with cutting-edge
              intelligence to help manufacturing teams work smarter.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-5">
          <ScrollReveal>
            <Card className="p-8 md:p-12">
              <p className="font-display text-xl md:text-2xl font-semibold tracking-tight text-warm-fg leading-snug text-center">
                Myrtle Europe builds{" "}
                <span className="text-warm-accent">OmnI Navigation</span> — a
                human-centric operational intelligence that learns how your
                operation behaves, reasons forward, and guides decisions so
                operators act with confidence, not guesswork.
              </p>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Method */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <SectionHeading
            tag="Our Method"
            title="Brown Paper Method & Value Stream Mapping"
            subtitle="A powerful combination for analyzing operations, identifying inefficiencies, and improving productivity."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Visual Clarity", body: "Large-scale, visual representation of processes for easy identification of improvement areas." },
              { title: "Real Data Insights", body: "Accurate snapshot of operations using current, up-to-date data ensuring recommendations based on real-world insights." },
              { title: "Effective Communication", body: "Visual tools facilitate clear stakeholder communication on current state and improvements." },
              { title: "Identification of Waste", body: "Identification of both obvious and hidden inefficiencies allowing focus on value-adding operations." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.06}>
                <Card hover className="p-6 flex gap-4 items-start h-full">
                  <span className="mt-0.5 shrink-0 w-5 h-5 rounded bg-surface-3 flex items-center justify-center">
                    <svg className="w-3 h-3 text-warm-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-display text-[15px] font-semibold tracking-tight text-warm-fg mb-1">{item.title}</h3>
                    <p className="text-sm text-warm-muted leading-relaxed">{item.body}</p>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <SectionHeading tag="Process" title="How we work" />
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { n: "01", title: "Data Collection", body: "Gathering real, filled-in operational documents from your actual processes — not theoretical templates." },
              { n: "02", title: 'Creating the "As-Is" Status', body: "Visual layout of processes showing document and information flow as they really are today." },
              { n: "03", title: "Value Stream Mapping", body: "Mapping every process step, highlighting value-added and non-value-added activities." },
              { n: "04", title: "Analysis & Review", body: "Examining cycle times, changeover times, uptime, and workforce involvement." },
              { n: "05", title: "Clear Documentation", body: "Easy-to-understand findings format with mini-flow copies for reference and alignment." },
              { n: "06", title: "Collaborative Improvement", body: "Team engagement ensuring buy-in and collaborative solution development." },
            ].map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 0.05}>
                <Card hover className="p-5 flex gap-4 items-start">
                  <span className="w-10 h-10 rounded-lg bg-surface-4 flex items-center justify-center shrink-0 text-warm-accent font-display text-xs font-semibold">
                    {step.n}
                  </span>
                  <div>
                    <h3 className="font-display text-[15px] font-semibold tracking-tight text-warm-fg mb-0.5">{step.title}</h3>
                    <p className="text-sm text-warm-muted leading-relaxed">{step.body}</p>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-5">
          <ScrollReveal>
            <Card variant="inset" className="p-8 md:p-12 text-center">
              <p className="font-display text-xl md:text-2xl font-semibold tracking-tight text-warm-fg leading-snug">
                The result: a clear, actionable overview highlighting
                improvement areas and facilitating better team communication —
                ensuring inefficiencies are identified and addressed for{" "}
                <span className="text-warm-accent">improved productivity</span>.
              </p>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <SectionHeading
            tag="Technology"
            title="Operational Navigation Platform"
            subtitle="No unclarity about yesterday, knowing where you are, understanding what is expected tomorrow."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "01", title: "Yesterday", body: "Full visibility of actual performance — what really happened." },
              { n: "02", title: "Today", body: "Real-time awareness of current status — where you are right now." },
              { n: "03", title: "Tomorrow", body: "Clear expectations and foresight — what is coming next." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <Card hover className="p-7 text-center h-full">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-surface-3 text-warm-accent font-display text-xs font-semibold mb-4">
                    {item.n}
                  </span>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-warm-fg mb-2">{item.title}</h3>
                  <p className="text-[15px] text-warm-muted leading-relaxed">{item.body}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <SectionHeading tag="Key Metrics" title="OEE and beyond" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "OEE", desc: "Overall Equipment Effectiveness" },
              { label: "Availability", desc: "Uptime and readiness" },
              { label: "Run Rate", desc: "Production speed vs target" },
              { label: "Quality", desc: "First-pass yield rate" },
            ].map((m, i) => (
              <ScrollReveal key={m.label} delay={i * 0.06}>
                <Card className="p-5 text-center">
                  <h3 className="font-display text-lg font-semibold text-warm-accent mb-1">{m.label}</h3>
                  <p className="text-xs text-warm-muted">{m.desc}</p>
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
                Let&apos;s talk about your operations
              </h2>
              <p className="text-warm-muted mb-8 max-w-xl mx-auto leading-relaxed">
                Discover how Myrtle Europe can help your team move from reactive
                firefighting to proactive guidance.
              </p>
              <Button href="/contact" variant="accent" size="lg">
                Get in Touch
              </Button>
            </Card>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
