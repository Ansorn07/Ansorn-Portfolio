import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import type { Metadata } from "next";
import "./globals.css";

import { nasalization } from "./fonts";
import keywords from "./keywords";

export const metadata: Metadata = {
  title: "A.S.Babji Rao",
  description:
    "A digital samurai forging powerful web experiences. Focused on speed, elegance, and precision through code.",
  authors: [
    {
      name: "A.S.Babji Rao",
      url: "https://ansorn-portfolio.vercel.app/",
    },
  ],
  creator: "A.S.Babji Rao",
  referrer: "origin-when-cross-origin",
  keywords: keywords,
  openGraph: {
    title: "A.S.Babji Rao",
    description:
      "A digital samurai forging powerful web experiences. Focused on speed, elegance, and precision through code.",
    images: [{ url: "/logo.svg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "A.S.Babji Rao",
    description:
      "A digital samurai forging powerful web experiences. Focused on speed and precision through code.",
    images: [{ url: "/logo.svg" }],
    creator: "@a.s.babji.rao",
  },
  alternates: {
    canonical: "/",
  },
  icons: "/logo.svg",
  metadataBase: new URL("https://ansorn-portfolio.vercel.app/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nasalization.className} bg-black text-white scroll-smooth`}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
