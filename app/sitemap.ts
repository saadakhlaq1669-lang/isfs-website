import type { MetadataRoute } from "next";
import { homeLanguages, siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // Omit lastModified until an actual content-update date is maintained.
  // Rebuilding alone does not mean the content changed.
  return ["", "/about", "/services", "/contact", "/ar"].map((path) => ({
    url: `${siteUrl}${path}`,
    ...(path === "" || path === "/ar"
      ? { alternates: { languages: homeLanguages } }
      : {}),
  }));
}
