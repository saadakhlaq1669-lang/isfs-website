import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Building2, CheckCircle2, MapPin, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About ISFS",
  description:
    "Learn about ISFS Technical Services LLC, founded in Ajman in 2005 and rebranded in Dubai in 2023, with UAE waterproofing experience, certifications, and project sectors.",
  alternates: {
    canonical: "https://isfs-website.vercel.app/about",
  },
  openGraph: {
    title: "About ISFS Technical Services LLC",
    description:
      "Dubai waterproofing contractor with history from 2005 Ajman to 2023 Dubai rebrand, certified applicator experience, and UAE project sectors.",
    images: [{ url: "/about-us.png", width: 1080, height: 1456, alt: "ISFS Technical Services team on site" }],
  },
};

const whatsAppQuoteUrl =
  "https://wa.me/971506752786?text=Hello%20ISFS%2C%20I%20need%20a%20quotation%20for%20waterproofing%20works.";

const sectors = [
  "Villas and private residences",
  "Residential towers and apartments",
  "Commercial buildings and malls",
  "Roofs, podiums, basements, and wet areas",
  "Water tanks, swimming pools, and service areas",
  "Industrial, warehouse, and maintenance facilities",
];

const credentials = [
  "Approved applicator documentation",
  "Manufacturer training certificates",
  "Waterproofing system QA-QC records",
  "Flood test and handover support",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#060f1e] text-white">
      <header className="site-header sticky top-0 z-50 flex h-[70px] items-center justify-between border-b border-white/[0.08] bg-[#060f1e]/90 px-[5%] backdrop-blur-xl">
        <Link href="/" transitionTypes={["nav-back"]} className="animated-link flex items-center gap-3">
          <Image src="/logo.jpg" alt="ISFS Logo" width={80} height={40} className="h-10 w-auto rounded-xl" />
          <div>
            <p className="text-[15px] font-black leading-none tracking-wide">ISFS</p>
            <p className="mt-0.5 text-[10px] tracking-wide text-slate-400">Technical Services LLC</p>
          </div>
        </Link>
        <nav className="flex items-center gap-4 text-[13px] font-semibold text-slate-300">
          <Link href="/services" transitionTypes={["nav-forward"]} className="animated-link hidden hover:text-cyan-400 sm:inline">Services</Link>
          <Link href="/#projects" transitionTypes={["nav-back"]} className="animated-link hidden hover:text-cyan-400 sm:inline">Projects</Link>
          <Link href="/contact" transitionTypes={["nav-forward"]} className="animated-pill rounded-full bg-cyan-400 px-5 py-2.5 font-bold text-[#060f1e] hover:opacity-85">
            Contact
          </Link>
        </nav>
      </header>

      <section className="relative overflow-hidden px-[5%] py-24">
        <div className="pointer-events-none absolute -right-48 -top-48 h-[620px] w-[620px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[2px] text-cyan-400">About ISFS</p>
            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              From Ajman Roots
              <br />
              to Dubai Growth
            </h1>
            <p className="mt-7 max-w-2xl text-[17px] leading-8 text-slate-400">
              ISFS Technical Services LLC is a UAE waterproofing and technical services contractor focused on durable roof, membrane, PU, wet area, coating, and building maintenance solutions.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={whatsAppQuoteUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-green-500 px-7 py-3.5 text-[14px] font-bold text-white hover:opacity-85">
                Request Free Site Inspection
              </a>
              <Link href="/ar" transitionTypes={["nav-forward"]} className="animated-pill rounded-full border border-white/20 px-7 py-3.5 text-[14px] font-semibold text-white hover:border-cyan-400 hover:text-cyan-400">
                عربي
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.04]">
            <Image src="/about-us.png" alt="ISFS waterproofing team on site" width={1080} height={1456} className="w-full object-cover" priority />
          </div>
        </div>
      </section>

      <section className="bg-white px-[5%] py-24 text-slate-900">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[2px] text-cyan-700">Company history</p>
            <h2 className="text-4xl font-black leading-tight md:text-5xl">2005 Ajman to 2023 Dubai rebrand</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
              <MapPin className="h-8 w-8 text-cyan-700" />
              <p className="mt-5 text-3xl font-black">2005</p>
              <p className="mt-3 text-[15px] leading-7 text-slate-600">
                The company began in Ajman as Al Hadaf General Maintenance LLC, serving UAE clients with maintenance and waterproofing-related technical works.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
              <Building2 className="h-8 w-8 text-cyan-700" />
              <p className="mt-5 text-3xl font-black">2023</p>
              <p className="mt-3 text-[15px] leading-7 text-slate-600">
                The business rebranded in Dubai as ISFS Technical Services LLC, expanding its focus on waterproofing, roofing, coating, and project support services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-[5%] py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.04] p-8">
            <ShieldCheck className="h-8 w-8 text-cyan-400" />
            <h3 className="mt-5 text-2xl font-black">Experience</h3>
            <p className="mt-4 text-[15px] leading-7 text-slate-400">
              More than two decades of UAE site experience across waterproofing, membrane, PU, wet areas, roofing, insulation, GRP, concrete treatment, and maintenance works.
            </p>
          </div>
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.04] p-8">
            <CheckCircle2 className="h-8 w-8 text-cyan-400" />
            <h3 className="mt-5 text-2xl font-black">Certifications</h3>
            <div className="mt-5 grid gap-3">
              {credentials.map((item) => (
                <p key={item} className="text-[14px] text-slate-400">{item}</p>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.04] p-8">
            <Building2 className="h-8 w-8 text-cyan-400" />
            <h3 className="mt-5 text-2xl font-black">Project sectors</h3>
            <div className="mt-5 grid gap-3">
              {sectors.map((item) => (
                <p key={item} className="text-[14px] text-slate-400">{item}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
