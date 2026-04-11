import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Myrtle Europe",
  description: "Myrtle Europe builds OmnI Navigation — operational intelligence that helps manufacturing teams move from reactive firefighting to proactive guidance.",
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
