export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "What is OmnI", href: "/what-is-omni" },
  { label: "How it Works", href: "/how-it-works" },
  { label: "How OmnI Thinks", href: "/how-omni-thinks" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
] as const;

export const FOOTER_PRODUCT = [
  { label: "Home", href: "/" },
  { label: "How OmnI Thinks", href: "/how-omni-thinks" },
  { label: "How it Works", href: "/how-it-works" },
  { label: "Insights", href: "/insights" },
] as const;

export const FOOTER_COMPANY = [
  { label: "About Myrtle Europe", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const SOCIAL = {
  linkedin: "https://www.linkedin.com/company/110151100",
} as const;

export const COMPANY = {
  name: "Myrtle Europe",
  product: "OmnI Navigation",
  email: "info@myrtle-europe.com",
  copyright: `© ${new Date().getFullYear()} Myrtle Europe`,
} as const;
