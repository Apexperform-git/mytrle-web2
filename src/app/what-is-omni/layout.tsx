import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "What is OmnI",
  description: "OmnI is operational intelligence that learns how your line behaves, reasons forward, and guides operators — not a dashboard, not automation, navigation.",
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
