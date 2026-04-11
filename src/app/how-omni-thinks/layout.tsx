import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "How OmnI Thinks",
  description: "Three systems — Brain, Cortex, and Co-Pilot — work together to absorb live signals, reason about outcomes, and guide operators in plain language.",
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
