import type { Metadata } from "next";

export const siteUrl = "https://www.isfsuae.com";
export const companyName = "ISFS Technical Services LLC";
export const homeLanguages = {
  en: siteUrl,
  ar: `${siteUrl}/ar`,
  "x-default": siteUrl,
};

type PageSeo = {
  title: string;
  description: string;
  path: string;
  arabic?: boolean;
  translatedHome?: boolean;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
};

export function pageMetadata({
  title,
  description,
  path,
  arabic = false,
  translatedHome = false,
  image = "/logo.jpg",
  imageAlt = `${companyName} logo`,
  imageWidth = 1179,
  imageHeight = 594,
}: PageSeo): Metadata {
  const url = `${siteUrl}${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      ...(translatedHome ? { languages: homeLanguages } : {}),
    },
    openGraph: {
      title: `${title} | ${companyName}`,
      description,
      url,
      siteName: companyName,
      type: "website",
      locale: arabic ? "ar_AE" : "en_AE",
      ...(translatedHome ? { alternateLocale: arabic ? "en_AE" : "ar_AE" } : {}),
      images: [{ url: image, width: imageWidth, height: imageHeight, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${companyName}`,
      description,
      images: [{ url: image, alt: imageAlt }],
    },
  };
}

// Only details published on the original site's company/contact pages.
// No unverified street address, opening hours, reviews, or registration details.
export const companyStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: companyName,
  url: siteUrl,
  logo: `${siteUrl}/logo.jpg`,
  telephone: "+971506752786",
  email: "info@isfstechnicalservices.com",
  areaServed: { "@type": "Country", name: "United Arab Emirates" },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+971506752786",
      contactType: "customer service",
    },
    {
      "@type": "ContactPoint",
      telephone: "+971559004510",
      contactType: "customer service",
    },
  ],
};
