import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://isfs-website.vercel.app"),
  title: {
    default: "Dubai Waterproofing Contractor | ISFS Technical Services LLC",
    template: "%s | ISFS Technical Services LLC",
  },
  description:
    "ISFS Technical Services LLC is a Dubai waterproofing and roofing contractor providing PU waterproofing, membrane systems, wet area protection, roof insulation, and protective coatings across Dubai and the UAE.",
  keywords: [
    "waterproofing Dubai",
    "waterproofing UAE",
    "PU waterproofing Dubai",
    "membrane waterproofing UAE",
    "epoxy flooring Dubai",
    "roof waterproofing Dubai",
    "wet area waterproofing UAE",
    "cementitious waterproofing",
    "waterproofing company Dubai",
    "waterproofing contractor UAE",
    "ISFS Technical Services",
    "waterproofing Abu Dhabi",
    "waterproofing Sharjah",
    "building waterproofing UAE",
    "roof insulation Dubai",
    "free site inspection Dubai waterproofing",
    "waterproofing quotation Dubai",
  ],
  openGraph: {
    title: "Dubai Waterproofing Contractor | ISFS Technical Services LLC",
    description:
      "Dubai waterproofing, roofing, PU, membrane, wet area, and protective coating systems across the UAE.",
    url: "https://isfs-website.vercel.app",
    siteName: "ISFS Technical Services LLC",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "ISFS Technical Services LLC logo",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dubai Waterproofing Contractor | ISFS Technical Services LLC",
    description:
      "Professional waterproofing and protective coating solutions across Dubai, Abu Dhabi, Sharjah and all UAE emirates.",
    images: ["/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://isfs-website.vercel.app",
    languages: {
      en: "https://isfs-website.vercel.app",
      ar: "https://isfs-website.vercel.app/ar",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
