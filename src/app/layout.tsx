import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const instrumentSans = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

const siteName = "Get Migrated";
const siteDescription =
  "Move from Nepal to Australia with a trusted corridor specialist. Get clear, practical guidance so you can take each step with confidence.";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000";

function getMetadataBase() {
  try {
    return new URL(siteUrl);
  } catch {
    return new URL("http://localhost:3000");
  }
}

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: "Nepal to Australia Migration Guidance | Get Migrated",
    template: "%s | Get Migrated",
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Nepal to Australia Migration Guidance | Get Migrated",
    description: siteDescription,
    siteName,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Get Migrated - Nepal to Australia guidance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nepal to Australia Migration Guidance | Get Migrated",
    description: siteDescription,
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};
const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        instrumentSans.variable,
        fraunces.variable,
        ibmPlexMono.variable,
        "font-sans"
      )}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-cloud)]">{children}</body>
    </html>
  );
}
