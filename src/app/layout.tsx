import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = localFont({
  src: [
    {
      path: "./fonts/inter-var.woff2",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
});

const interBody = localFont({
  src: [
    {
      path: "./fonts/inter-var.woff2",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
});

export const metadata: Metadata = {
  title: {
    default: "Myrtle Europe | OmnI NAVIGATION",
    template: "%s | Myrtle Europe",
  },
  description:
    "Human-centric operational intelligence that learns how your line behaves, reasons forward, and guides decisions — so operators act with confidence, not guesswork.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interBody.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-neu-bg text-neu-fg font-body">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
