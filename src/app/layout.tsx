import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const siteUrl = "https://calibrato.app";

export const metadata: Metadata = {
  title: {
    default: "Calibrato — Prioritize what matters. Ship what counts.",
    template: "%s | Calibrato",
  },
  description:
    "Turn customer feedback, company signals, and team input into a clear, data driven roadmap. Calibrato uses RICE scoring with automatic signal computation so your product team always knows what to build next.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Calibrato",
    title: "Calibrato — Prioritize what matters. Ship what counts.",
    description:
      "Turn customer feedback, company signals, and team input into a clear, data driven roadmap. No gut feelings required.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calibrato — Prioritize what matters. Ship what counts.",
    description:
      "Turn customer feedback, company signals, and team input into a clear, data driven roadmap. No gut feelings required.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  keywords: [
    "product prioritization",
    "product roadmap",
    "RICE scoring",
    "product management",
    "customer feedback",
    "roadmap planning",
    "B2B SaaS",
    "product team",
    "feature prioritization",
    "changelog",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
