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
      "OmnI bases guidance on observable signals — events, run rates, context, historical patterns. Every recommendation includes explanation of which signals mattered and why outcomes are likely. It is designed to be inspectable, never a black box.",
  },
  {
    question: "How accurate is OmnI?",
    answer:
      "OmnI is intentionally non-absolute. It presents informed possibilities, learns from outcomes, and improves over time. Human judgment remains essential — OmnI enhances it rather than replacing it.",
  },
  {
    question: "Is OmnI a surveillance tool?",
    answer:
      "No. OmnI does not monitor or evaluate individual operator performance. It focuses on operational conditions, not personal metrics. It is a support system, not surveillance.",
  },
  {
    question: "What if operators disagree with OmnI?",
    answer:
      "The operator always retains control; OmnI never executes actions. Disagreements are respected and incorporated into the learning model to improve future guidance.",
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
    <div
      className={`rounded-[24px] transition-shadow duration-300 ${isOpen ? "neu-pressed" : "neu-flat"}`}
    >
      <button
        onClick={onToggle}
        className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neu-accent focus-visible:ring-offset-2 focus-visible:ring-offset-neu-bg rounded-[24px]"
      >
        <span className="font-display font-bold text-neu-fg">{question}</span>
        <span
          className={`text-neu-accent text-xl transition-transform duration-300 shrink-0 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
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
            <p className="px-6 pb-6 text-neu-muted leading-relaxed">{answer}</p>
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
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-neu-accent mb-6">
              How OmnI Thinks
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neu-fg leading-[1.1] max-w-4xl mx-auto">
              Bridge AI, OI, OT and{" "}
              <span className="text-neu-accent">Human Capital</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-neu-muted leading-relaxed max-w-3xl mx-auto">
              Co-pilot interaction, foresight, and explainable guidance — built on
              three core systems working in harmony.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Architecture Overview - Three Systems */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* OmnI Brain */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block text-sm font-semibold tracking-widest uppercase text-neu-accent mb-4">
                  System 01
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-neu-fg mb-6">
                  OmnI Brain
                </h2>
                <p className="text-xl text-neu-fg font-medium mb-4">
                  Learning Reality from Live Signals
                </p>
                <p className="text-neu-muted leading-relaxed">
                  Continuously absorbs run rates, events, patterns, and anomalies
                  from production. Replaces static thresholds with adaptive,
                  real-time context. The Brain doesn&apos;t wait for reports — it
                  builds understanding as reality unfolds.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="flex items-center justify-center">
                <FloatingElement>
                  <NeuCard className="w-48 h-48 md:w-56 md:h-56 flex items-center justify-center rounded-full">
                    <NeuIconBox size="lg">
                      <span className="text-4xl">🧠</span>
                    </NeuIconBox>
                  </NeuCard>
                </FloatingElement>
              </div>
            </ScrollReveal>
          </div>

          {/* OmnI Cortex */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <ScrollReveal direction="left" className="order-2 lg:order-1">
              <div className="flex items-center justify-center">
                <FloatingElement speed="slow">
                  <NeuCard className="w-48 h-48 md:w-56 md:h-56 flex items-center justify-center rounded-full">
                    <NeuIconBox size="lg">
                      <span className="text-4xl">🔮</span>
                    </NeuIconBox>
                  </NeuCard>
                </FloatingElement>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2} className="order-1 lg:order-2">
              <div>
                <span className="inline-block text-sm font-semibold tracking-widest uppercase text-neu-accent mb-4">
                  System 02
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-neu-fg mb-6">
                  OmnI Cortex
                </h2>
                <p className="text-xl text-neu-fg font-medium mb-4">
                  Visual Reasoning and Prediction
                </p>
                <p className="text-neu-muted leading-relaxed">
                  Simulates possible next steps and outcomes through visual reasoning
                  and prediction. Operators gain foresight into consequences before
                  events occur — turning reactive firefighting into proactive
                  guidance.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Human-Aligned Guidance */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block text-sm font-semibold tracking-widest uppercase text-neu-accent mb-4">
                  System 03
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-neu-fg mb-6">
                  Human-Aligned Guidance
                </h2>
                <p className="text-xl text-neu-fg font-medium mb-4">
                  Operator Co-Pilot (Cobot)
                </p>
                <p className="text-neu-muted leading-relaxed">
                  Natural speech communication (TTS/STT) that functions as a
                  collaborative co-pilot. It listens, suggests, and explains — while
                  keeping the operator in control. Guidance feels human and
                  actionable, not robotic and rigid.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="flex items-center justify-center">
                <FloatingElement delay>
                  <NeuCard className="w-48 h-48 md:w-56 md:h-56 flex items-center justify-center rounded-full">
                    <NeuIconBox size="lg">
                      <span className="text-4xl">🤖</span>
                    </NeuIconBox>
                  </NeuCard>
                </FloatingElement>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Intelligence Loop */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="The Intelligence Loop"
            title="Continuous Learning and Action"
            subtitle="Ingest reality, learn patterns, simulate futures, deliver contextual guidance. Transparent, auditable, and action-focused."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Ingest",
                description: "Absorb live signals from the production floor.",
                icon: "📡",
              },
              {
                step: "02",
                title: "Learn",
                description: "Build patterns from real operational behavior.",
                icon: "📚",
              },
              {
                step: "03",
                title: "Simulate",
                description: "Model possible futures and their consequences.",
                icon: "🔄",
              },
              {
                step: "04",
                title: "Guide",
                description: "Deliver contextual, explainable next steps.",
                icon: "🧭",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 0.1}>
                <NeuCard hover className="p-6 h-full text-center relative overflow-hidden">
                  <span className="absolute top-2 right-4 font-display text-5xl font-extrabold text-neu-accent/10">
                    {item.step}
                  </span>
                  <NeuIconBox size="md" className="mb-4 mx-auto">
                    <span>{item.icon}</span>
                  </NeuIconBox>
                  <h3 className="font-display text-lg font-bold text-neu-fg mb-2">
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
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="For Decision Makers"
            title="What You Get"
          />
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "🧯",
                title: "Less Firefighting",
                description: "Clear foresight into what could go wrong next.",
              },
              {
                icon: "⚡",
                title: "Faster Recovery",
                description: "Operators guided with context-rich, explainable suggestions.",
              },
              {
                icon: "🛡",
                title: "Fewer Repeated Losses",
                description: "Know the operational consequence before it bites your KPIs.",
              },
              {
                icon: "💬",
                title: "Human-Machine Collaboration",
                description: "Natural speech interaction makes insights feel human and actionable.",
              },
            ].map((benefit, i) => (
              <ScrollReveal key={benefit.title} delay={i * 0.1}>
                <NeuCard hover className="p-6 flex gap-5 items-start">
                  <NeuIconBox size="md" className="shrink-0">
                    <span>{benefit.icon}</span>
                  </NeuIconBox>
                  <div>
                    <h3 className="font-display text-lg font-bold text-neu-fg mb-1">
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

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="FAQ"
            title="Frequently Asked Questions"
          />
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
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
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <NeuCard className="p-10 md:p-16 text-center">
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-neu-fg mb-4">
                See OmnI Think in Action
              </h2>
              <p className="text-lg text-neu-muted mb-8 max-w-2xl mx-auto">
                Experience how the Brain, Cortex, and Co-pilot work together on your
                real production data.
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
