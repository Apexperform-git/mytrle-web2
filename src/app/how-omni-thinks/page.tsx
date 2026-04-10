"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/animations/ScrollReveal";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const systems = [
  {
    num: "01",
    label: "OmnI Brain",
    title: "Learning Reality from Live Signals",
    body: "OmnI Brain absorbs run rates, events, patterns, and anomalies from the line in real time. It replaces static thresholds with adaptive context \u2014 so the system understands what normal actually looks like right now, not what it looked like last quarter.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.09 6.26L20 10l-5.91 1.74L12 18l-2.09-6.26L4 10l5.91-1.74L12 2z" />
      </svg>
    ),
  },
  {
    num: "02",
    label: "OmnI Cortex",
    title: "Visual Reasoning and Prediction",
    body: "OmnI Cortex simulates possible next steps and their likely consequences before they happen. Operators gain foresight \u2014 not just hindsight \u2014 so decisions are informed by what could happen, not only what already did.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    reversed: true,
  },
  {
    num: "03",
    label: "Human-Aligned Guidance",
    title: "Operator Co-Pilot",
    body: "OmnI communicates in natural speech as a collaborative co-pilot. It explains what it sees, why it matters, and what could help \u2014 without dictating. The operator always decides.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
];

const loopSteps = [
  {
    num: "01",
    title: "Ingest",
    body: "Live signals from sensors, SCADA, MES and operator inputs flow into OmnI continuously.",
  },
  {
    num: "02",
    title: "Learn",
    body: "The Brain builds and refines a living model of how the line actually behaves under current conditions.",
  },
  {
    num: "03",
    title: "Simulate",
    body: "The Cortex evaluates possible next states and ranks them by likelihood and impact.",
  },
  {
    num: "04",
    title: "Guide",
    body: "Clear, explainable recommendations reach the operator \u2014 who decides the next move.",
  },
];

const benefits = [
  {
    title: "Less Firefighting",
    body: "Shift from reactive scrambles to proactive, signal-driven decisions that prevent losses before they cascade.",
  },
  {
    title: "Faster Recovery",
    body: "Contextual guidance means teams resolve issues in minutes instead of hours, with fewer missteps along the way.",
  },
  {
    title: "Fewer Repeated Losses",
    body: "OmnI remembers what worked and what didn\u2019t, so the same problems stop recurring shift after shift.",
  },
  {
    title: "Human-Machine Collaboration",
    body: "Operators bring judgement, OmnI brings memory and foresight. Together they outperform either alone.",
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Does OmnI act on its own?",
    a: "No. OmnI is a co-pilot, not an autopilot. It observes, reasons, and recommends \u2014 but the operator always makes the final decision. Control never leaves the floor.",
  },
  {
    q: "How is OmnI different from traditional analytics?",
    a: "Dashboards describe what happened in the past. OmnI builds a living model of how your line behaves right now, reasons forward about what could happen next, and offers guidance before problems arrive.",
  },
  {
    q: "Is the reasoning transparent?",
    a: "Every recommendation OmnI makes explains which signals mattered, why they were significant, and what trade-offs exist. There is no black box \u2014 operators and supervisors can always see the logic.",
  },
  {
    q: "How accurate is OmnI?",
    a: "OmnI does not claim certainty. It presents informed possibilities ranked by likelihood. As it observes more of your line\u2019s behaviour, its model improves and its recommendations become sharper over time.",
  },
  {
    q: "Is OmnI a surveillance tool?",
    a: "No. OmnI focuses on process conditions \u2014 run rates, temperatures, cycle times, patterns \u2014 not on personal performance metrics. It is designed to support operators, not monitor them.",
  },
  {
    q: "What if operators disagree with a recommendation?",
    a: "The operator retains full control and can override any suggestion. When they do, OmnI incorporates that disagreement as a learning signal, refining its future guidance.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function HowOmniThinksPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <>
      {/* -------- Hero -------- */}
      <section className="py-28 md:py-40">
        <div className="max-w-6xl mx-auto px-5">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="inline-block text-xs font-display font-medium tracking-[0.15em] uppercase text-warm-accent mb-5">
                How OmnI Thinks
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-[72px] font-semibold tracking-tight text-warm-fg leading-[1.08]">
                Bridge AI, OI, OT and{" "}
                <span className="text-warm-accent">Human Capital</span>
              </h1>
              <p className="mt-6 text-lg text-warm-muted leading-relaxed max-w-xl">
                OmnI is a co-pilot that interacts with your operators, builds
                foresight from live signals, and delivers explainable guidance
                &mdash; so the right decisions happen faster, with humans in
                control.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* -------- Three Systems -------- */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <SectionHeading
            tag="Architecture"
            title="Three systems, one intelligence"
            subtitle="Each layer builds on the one before it &mdash; from raw signals to human-ready guidance."
          />

          <div className="flex flex-col gap-20">
            {systems.map((sys, i) => {
              const textBlock = (
                <div className="flex flex-col justify-center">
                  <span className="inline-block text-xs font-display font-medium tracking-[0.15em] uppercase text-warm-accent mb-3">
                    System {sys.num} &mdash; {sys.label}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-warm-fg mb-4">
                    {sys.title}
                  </h3>
                  <p className="text-[15px] text-warm-muted leading-relaxed">
                    {sys.body}
                  </p>
                </div>
              );

              const cardBlock = (
                <Card className="p-10 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-lg bg-surface-3 flex items-center justify-center text-warm-accent">
                    {sys.icon}
                  </div>
                </Card>
              );

              return (
                <ScrollReveal key={sys.num} delay={i * 0.08}>
                  <div className="grid md:grid-cols-2 gap-10 items-center">
                    {sys.reversed ? (
                      <>
                        {cardBlock}
                        {textBlock}
                      </>
                    ) : (
                      <>
                        {textBlock}
                        {cardBlock}
                      </>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* -------- Intelligence Loop -------- */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <SectionHeading
            tag="Intelligence Loop"
            title="A continuous cycle of learning"
            subtitle="OmnI never stops observing, reasoning, and refining &mdash; every shift sharpens the model."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {loopSteps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.08}>
                <Card hover className="p-7 h-full">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-surface-3 text-warm-accent font-display text-xs font-semibold mb-5">
                    {step.num}
                  </span>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-warm-fg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[15px] text-warm-muted leading-relaxed">
                    {step.body}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------- Decision Maker Benefits -------- */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <SectionHeading
            tag="For Decision Makers"
            title="Why it matters to the business"
            subtitle="Tangible outcomes that leadership can measure from day one."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 0.06}>
                <Card hover className="p-7 h-full">
                  <div className="flex gap-4 items-start">
                    <span className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-surface-3 flex items-center justify-center text-warm-accent">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-display text-[15px] font-semibold tracking-tight text-warm-fg mb-1.5">
                        {b.title}
                      </h3>
                      <p className="text-[15px] text-warm-muted leading-relaxed">
                        {b.body}
                      </p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------- FAQ -------- */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <SectionHeading
            tag="FAQ"
            title="Frequently asked questions"
          />

          <div className="max-w-3xl mx-auto flex flex-col gap-3">
            {faqs.map((faq, i) => {
              const isOpen = openFAQ === i;
              return (
                <ScrollReveal key={i} delay={i * 0.04}>
                  <div
                    className={`rounded-lg border border-warm-border transition-colors duration-200 ${
                      isOpen ? "bg-surface-2" : ""
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFAQ(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                    >
                      <span className="font-display text-[15px] font-semibold tracking-tight text-warm-fg">
                        {faq.q}
                      </span>
                      <span
                        className="shrink-0 text-warm-muted transition-transform duration-200"
                        style={{
                          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        }}
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <line x1="8" y1="2" x2="8" y2="14" />
                          <line x1="2" y1="8" x2="14" y2="8" />
                        </svg>
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-5 text-[15px] text-warm-muted leading-relaxed">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* -------- CTA -------- */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-5">
          <ScrollReveal>
            <Card className="p-10 md:p-14 text-center">
              <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-warm-fg mb-3">
                See OmnI think in action
              </h2>
              <p className="text-warm-muted mb-8 max-w-xl mx-auto leading-relaxed">
                Bring a real line, a real shift, and a real problem. We will show
                you how OmnI reasons through it &mdash; live.
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
