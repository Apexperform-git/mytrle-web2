"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NeuCard from "@/components/ui/NeuCard";
import NeuButton from "@/components/ui/NeuButton";
import NeuIconBox from "@/components/ui/NeuIconBox";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/animations/ScrollReveal";
import FloatingElement from "@/components/animations/FloatingElement";

const FAQ_ITEMS = [
  {
    question: "Does OmnI act on its own?",
    answer:
      "No. OmnI does not act on its own. It observes live operations, reasons about possible outcomes, and supports human decisions. The operator always decides.",
  },
  {
    question: "How is OmnI different from traditional analytics?",
    answer:
      "Dashboards describe the past. OmnI builds a living model of what is happening now and explores what may happen next — then explains this reasoning in plain language.",
  },
  {
    question: "Is the reasoning transparent and explainable?",
    answer:
      "Every recommendation includes explanation of which signals mattered and why outcomes are likely. OmnI is designed to be inspectable — never a black box.",
  },
  {
    question: "How accurate is OmnI?",
    answer:
      "OmnI presents informed possibilities, learns from outcomes, and improves over time. Human judgment remains essential — OmnI enhances it rather than replacing it.",
  },
  {
    question: "Is OmnI a surveillance tool?",
    answer:
      "No. OmnI does not monitor or evaluate individual operator performance. It focuses on operational conditions, not personal metrics. It is a support system, not surveillance.",
  },
  {
    question: "What if operators disagree with OmnI?",
    answer:
      "The operator always retains control. Disagreements are respected and incorporated into the learning model to improve future guidance.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`rounded-[24px] transition-shadow duration-300 ${isOpen ? "neu-pressed" : "neu-flat"}`}>
      <button
        onClick={onToggle}
        className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neu-accent focus-visible:ring-offset-2 focus-visible:ring-offset-neu-bg rounded-[24px]"
      >
        <span className="font-display font-semibold text-neu-fg text-[15px]">{question}</span>
        <span className={`text-neu-accent text-lg transition-transform duration-300 shrink-0 ${isOpen ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-neu-muted leading-relaxed text-[15px]">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function HowOmniThinksPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-neu-accent mb-6">
              How OmnI Thinks
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neu-fg leading-[1.08] max-w-4xl mx-auto">
              Bridge AI, OI, OT and{" "}
              <span className="text-neu-accent">Human Capital</span>
            </h1>
            <p className="mt-6 text-lg text-neu-muted leading-relaxed max-w-2xl mx-auto">
              Co-pilot interaction, foresight, and explainable guidance — built
              on three core systems working in harmony.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Three Systems */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
          {/* Brain */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-neu-accent mb-4">
                  System 01
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-neu-fg mb-4">
                  OmnI Brain
                </h2>
                <p className="text-base text-neu-fg font-medium mb-4">
                  Learning Reality from Live Signals
                </p>
                <p className="text-neu-muted leading-relaxed text-[15px]">
                  Continuously absorbs run rates, events, patterns, and
                  anomalies from production. Replaces static thresholds with
                  adaptive, real-time context.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="flex items-center justify-center">
                <FloatingElement>
                  <NeuCard className="w-44 h-44 md:w-52 md:h-52 flex items-center justify-center rounded-full">
                    <NeuIconBox size="lg">
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                      </svg>
                    </NeuIconBox>
                  </NeuCard>
                </FloatingElement>
              </div>
            </ScrollReveal>
          </div>

          {/* Cortex */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left" className="order-2 lg:order-1">
              <div className="flex items-center justify-center">
                <FloatingElement speed="slow">
                  <NeuCard className="w-44 h-44 md:w-52 md:h-52 flex items-center justify-center rounded-full">
                    <NeuIconBox size="lg">
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.64 0 8.577 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.64 0-8.577-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </NeuIconBox>
                  </NeuCard>
                </FloatingElement>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2} className="order-1 lg:order-2">
              <div>
                <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-neu-accent mb-4">
                  System 02
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-neu-fg mb-4">
                  OmnI Cortex
                </h2>
                <p className="text-base text-neu-fg font-medium mb-4">
                  Visual Reasoning and Prediction
                </p>
                <p className="text-neu-muted leading-relaxed text-[15px]">
                  Simulates possible next steps and outcomes. Operators gain
                  foresight into consequences before events occur — turning
                  reactive firefighting into proactive guidance.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Cobot */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-neu-accent mb-4">
                  System 03
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-neu-fg mb-4">
                  Human-Aligned Guidance
                </h2>
                <p className="text-base text-neu-fg font-medium mb-4">
                  Operator Co-Pilot
                </p>
                <p className="text-neu-muted leading-relaxed text-[15px]">
                  Natural speech communication that functions as a collaborative
                  co-pilot. It listens, suggests, and explains — while keeping
                  the operator in control.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="flex items-center justify-center">
                <FloatingElement delay>
                  <NeuCard className="w-44 h-44 md:w-52 md:h-52 flex items-center justify-center rounded-full">
                    <NeuIconBox size="lg">
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                      </svg>
                    </NeuIconBox>
                  </NeuCard>
                </FloatingElement>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Intelligence Loop */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="The Intelligence Loop"
            title="Continuous Learning and Action"
            subtitle="Transparent, auditable, and action-focused — never a black box."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Ingest", description: "Absorb live signals from the production floor." },
              { step: "02", title: "Learn", description: "Build patterns from real operational behavior." },
              { step: "03", title: "Simulate", description: "Model possible futures and their consequences." },
              { step: "04", title: "Guide", description: "Deliver contextual, explainable next steps." },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 0.08}>
                <NeuCard hover className="p-7 h-full text-center relative overflow-hidden">
                  <span className="absolute top-2 right-4 font-display text-5xl font-extrabold text-neu-fg/5">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-neu-accent/10 flex items-center justify-center mb-5 mx-auto">
                    <span className="font-display font-bold text-neu-accent text-sm">{item.step}</span>
                  </div>
                  <h3 className="font-display text-base font-bold text-neu-fg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neu-muted leading-relaxed">
                    {item.description}
                  </p>
                </NeuCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Decision Maker Benefits */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="For Decision Makers" title="What You Get" />
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Less Firefighting", description: "Clear foresight into what could go wrong next." },
              { title: "Faster Recovery", description: "Operators guided with context-rich, explainable suggestions." },
              { title: "Fewer Repeated Losses", description: "Know the operational consequence before it impacts your KPIs." },
              { title: "Human-Machine Collaboration", description: "Natural speech interaction makes insights actionable." },
            ].map((benefit, i) => (
              <ScrollReveal key={benefit.title} delay={i * 0.08}>
                <NeuCard hover className="p-7 flex gap-5 items-start">
                  <NeuIconBox size="sm" className="shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </NeuIconBox>
                  <div>
                    <h3 className="font-display text-base font-bold text-neu-fg mb-1">{benefit.title}</h3>
                    <p className="text-sm text-neu-muted leading-relaxed">{benefit.description}</p>
                  </div>
                </NeuCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading tag="FAQ" title="Frequently Asked Questions" />
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <FAQItem
                  question={item.question}
                  answer={item.answer}
                  isOpen={openFAQ === i}
                  onToggle={() => setOpenFAQ(openFAQ === i ? null : i)}
                />
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
                See OmnI Think in Action
              </h2>
              <p className="text-base text-neu-muted mb-8 max-w-2xl mx-auto leading-relaxed">
                Experience how the Brain, Cortex, and Co-pilot work together on
                your real production data.
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
