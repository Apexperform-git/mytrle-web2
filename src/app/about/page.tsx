"use client";

import NeuCard from "@/components/ui/NeuCard";
import NeuButton from "@/components/ui/NeuButton";
import NeuIconBox from "@/components/ui/NeuIconBox";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-neu-accent mb-6">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neu-fg leading-[1.1] max-w-4xl mx-auto">
              About <span className="text-neu-accent">Myrtle Europe</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-neu-muted leading-relaxed max-w-3xl mx-auto">
              We combine proven operational analysis methods with cutting-edge
              intelligence to help manufacturing teams work smarter, not harder.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <NeuCard className="p-8 md:p-12">
              <p className="font-display text-xl md:text-2xl font-bold text-neu-fg leading-relaxed text-center">
                Myrtle Europe builds{" "}
                <span className="text-neu-accent">OmnI NAVIGATION</span> — a
                human-centric operational intelligence that learns how your
                operation behaves, reasons forward, and guides decisions so that
                operators act with confidence, not guesswork.
              </p>
            </NeuCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Brown Paper Method */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Our Method"
            title="Brown Paper Method & Value Stream Mapping"
            subtitle="A powerful combination for analyzing current operations, identifying inefficiencies, and improving productivity."
          />

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: "👁",
                title: "Visual Clarity",
                description:
                  "Large-scale, visual representation of processes for easy identification of improvement areas.",
              },
              {
                icon: "📊",
                title: "Real Data Insights",
                description:
                  "Accurate snapshot of operations using current, up-to-date data ensuring recommendations based on real-world insights.",
              },
              {
                icon: "💬",
                title: "Effective Communication",
                description:
                  "Visual tools facilitate clear stakeholder communication on current state and improvements.",
              },
              {
                icon: "🔍",
                title: "Identification of Waste",
                description:
                  "Identification of both obvious and hidden inefficiencies allowing focus on value-adding operations.",
              },
            ].map((benefit, i) => (
              <ScrollReveal key={benefit.title} delay={i * 0.1}>
                <NeuCard hover className="p-8 flex gap-5 items-start h-full">
                  <NeuIconBox size="md" className="shrink-0">
                    <span>{benefit.icon}</span>
                  </NeuIconBox>
                  <div>
                    <h3 className="font-display text-lg font-bold text-neu-fg mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-neu-muted leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </NeuCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="Process" title="How We Work" />
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Data Collection",
                description:
                  "Gathering real, filled-in operational documents from your actual processes — not theoretical templates.",
              },
              {
                step: "02",
                title: 'Creating the "As-Is" Status',
                description:
                  "Visual layout of processes showing document and information flow as they really are today.",
              },
              {
                step: "03",
                title: "Value Stream Mapping",
                description:
                  "Mapping every process step, highlighting value-added and non-value-added activities across the full stream.",
              },
              {
                step: "04",
                title: "Analysis & Review",
                description:
                  "Examining cycle times, changeover times, uptime, and workforce involvement with collaborative discussion.",
              },
              {
                step: "05",
                title: "Clear Documentation",
                description:
                  "Easy-to-understand findings format with mini-flow copies for reference and alignment.",
              },
              {
                step: "06",
                title: "Collaborative Improvement",
                description:
                  "Team engagement ensuring buy-in and collaborative solution development with actionable next steps.",
              },
            ].map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.08}>
                <NeuCard
                  className="p-6 flex gap-6 items-start"
                  hover
                >
                  <div className="w-14 h-14 rounded-2xl neu-pressed-deep flex items-center justify-center shrink-0">
                    <span className="font-display font-extrabold text-neu-accent text-lg">
                      {step.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-neu-fg mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-neu-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </NeuCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <NeuCard variant="pressed" className="p-8 md:p-12 text-center">
              <p className="font-display text-xl md:text-2xl font-bold text-neu-fg leading-relaxed">
                The result: a clear, actionable overview highlighting improvement
                areas and facilitating better team communication — ensuring
                inefficiencies are identified and addressed for{" "}
                <span className="text-neu-accent">improved productivity</span>.
              </p>
            </NeuCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Technology */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Technology"
            title="Operational Navigation Platform"
            subtitle="No unclarity about yesterday, knowing where you are, understanding what is expected tomorrow."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📅",
                title: "Yesterday",
                description: "Full visibility of actual performance — what really happened.",
              },
              {
                icon: "📍",
                title: "Today",
                description: "Real-time awareness of current status — where you are right now.",
              },
              {
                icon: "🔭",
                title: "Tomorrow",
                description: "Clear expectations and foresight — what is coming next.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.15}>
                <NeuCard hover className="p-8 text-center h-full">
                  <NeuIconBox size="lg" className="mb-4 mx-auto">
                    <span>{item.icon}</span>
                  </NeuIconBox>
                  <h3 className="font-display text-xl font-bold text-neu-fg mb-2">
                    {item.title}
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

      {/* Metrics Tracked */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Key Metrics"
            title="OEE and Beyond"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "OEE", desc: "Overall Equipment Effectiveness" },
              { label: "Availability", desc: "Uptime and readiness" },
              { label: "Run Rate", desc: "Production speed vs target" },
              { label: "Quality", desc: "First-pass yield rate" },
            ].map((metric, i) => (
              <ScrollReveal key={metric.label} delay={i * 0.1}>
                <NeuCard className="p-6 text-center">
                  <h3 className="font-display text-xl font-bold text-neu-accent mb-2">
                    {metric.label}
                  </h3>
                  <p className="text-xs text-neu-muted">{metric.desc}</p>
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
                Let&apos;s Talk About Your Operations
              </h2>
              <p className="text-lg text-neu-muted mb-8 max-w-2xl mx-auto">
                Discover how Myrtle Europe can help your team move from reactive
                firefighting to proactive guidance.
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
