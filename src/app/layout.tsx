import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = localFont({
  src: [{ path: "./fonts/inter-var.woff2", style: "normal" }],
  variable: "--font-inter",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
});

export const metadata: Metadata = {
  title: {
    default: "OmnI by Myrtle Europe — Operational Intelligence for Manufacturing",
    template: "%s — OmnI by Myrtle Europe",
  },
  description:
    "OmnI Navigation watches your production line in real time, reasons about what will happen next, and guides operators with clear, explainable actions — before problems become losses.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-warm-bg text-warm-fg font-body">
        {/* Brand gradient accent bar */}
        <div className="h-1 brand-gradient w-full shrink-0" />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
