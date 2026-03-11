import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Calibrato — Prioritize what matters. Ship what counts.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calibrato — Prioritize what matters. Ship what counts.",
    description:
      "Turn customer feedback, company signals, and team input into a clear, data driven roadmap. No gut feelings required.",
    images: ["/og-image.jpg"],
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
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Calibrato" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${geist.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
