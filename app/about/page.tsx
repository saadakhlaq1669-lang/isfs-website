import SiteHeader from "@/components/SiteHeader";
import { pageMetadata } from "@/lib/seo";
import AboutSection from "@/components/AboutSection";

export const metadata = pageMetadata({
  title: "About ISFS | Dubai Waterproofing Specialists",
  description: "Discover ISFS Technical Services LLC's waterproofing experience, applicator certifications and work across residential, commercial and industrial projects in the UAE.",
  path: "/about",
  image: "/projects-collage.png",
  imageAlt: "ISFS waterproofing project photographs",
  imageWidth: 1536,
  imageHeight: 1024,
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#060f1e] text-white">
      <SiteHeader />
      <AboutSection fullPage />
    </main>
  );
}
