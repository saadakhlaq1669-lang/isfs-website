import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  CheckCircle2,
  Droplets,
  Home as HomeIcon,
  Layers,
  MessageCircle,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Waterproofing Services in Dubai and UAE",
  description:
    "Explore ISFS Technical Services LLC waterproofing services in Dubai and the UAE, including PU waterproofing, membrane waterproofing, wet area protection, roof insulation, epoxy flooring, GRP lamination, crack injection, and building maintenance.",
  alternates: {
    canonical: "https://isfs-website.vercel.app/services",
  },
  openGraph: {
    title: "Waterproofing Services in Dubai and UAE",
    description:
      "PU waterproofing, membrane systems, roof waterproofing, epoxy flooring, GRP lamination, crack injection, protective coatings, and technical maintenance across the UAE.",
    url: "https://isfs-website.vercel.app/services",
    images: [{ url: "/projects-collage.png", width: 1536, height: 1024, alt: "ISFS waterproofing projects in the UAE" }],
  },
};

const whatsAppQuoteUrl =
  "https://wa.me/971506752786?text=Hello%20ISFS%2C%20I%20need%20a%20quotation%20for%20waterproofing%20works.";

const services = [
  {
    icon: Droplets,
    title: "PU Waterproofing",
    desc: "Liquid-applied polyurethane waterproofing for roofs, balconies, terraces, podiums, and exposed concrete surfaces.",
  },
  {
    icon: Layers,
    title: "Cementitious Waterproofing",
    desc: "Cement-based rigid and flexible waterproofing systems for water tanks, basements, wet areas, and concrete structures.",
  },
  {
    icon: ShieldCheck,
    title: "Membrane Waterproofing",
    desc: "Torch-applied and self-adhesive bituminous membrane waterproofing for foundations, slabs, podiums, and retaining walls.",
  },
  {
    icon: HomeIcon,
    title: "Wet Area Waterproofing",
    desc: "Bathroom, kitchen, laundry, and service area waterproofing designed to prevent leakage and moisture damage.",
  },
  {
    icon: Building2,
    title: "Roof Waterproofing",
    desc: "Roof waterproofing systems for villas, buildings, warehouses, service blocks, and commercial facilities in UAE weather.",
  },
  {
    icon: Zap,
    title: "Epoxy Flooring",
    desc: "Durable epoxy floor coatings for warehouses, parking areas, plants, workshops, and commercial floors.",
  },
  {
    icon: ShieldCheck,
    title: "Roof Combo Waterproofing",
    desc: "Multi-layer roof systems combining insulation, waterproofing membranes, protective coatings, and drainage detailing.",
  },
  {
    icon: Layers,
    title: "Resin Flooring",
    desc: "Heavy-duty resin flooring for industrial and commercial environments needing abrasion and chemical resistance.",
  },
  {
    icon: Droplets,
    title: "GRP Lamination",
    desc: "Glass Reinforced Plastic lamination for water tanks, wet areas, lining works, and protective waterproofing applications.",
  },
  {
    icon: Zap,
    title: "Crack Injection Works",
    desc: "Concrete crack repair and injection systems for basements, retaining walls, slabs, tanks, and leakage points.",
  },
  {
    icon: ShieldCheck,
    title: "Pile Head Treatment",
    desc: "Waterproofing and protection treatment for pile heads, pile caps, and foundation interfaces where below-grade water ingress control is critical.",
  },
  {
    icon: Layers,
    title: "Concrete Treatment",
    desc: "Surface preparation, concrete repair, sealers, protection systems, and substrate treatment before waterproofing.",
  },
  {
    icon: ShieldCheck,
    title: "Protective Coatings",
    desc: "Weather-resistant and chemical-resistant coatings for roofs, floors, tanks, basements, and exposed concrete.",
  },
  {
    icon: Building2,
    title: "Roof Insulation",
    desc: "Thermal insulation and roof build-up works to support waterproofing performance and energy efficiency.",
  },
  {
    icon: Wrench,
    title: "Plumbing & Sanitary",
    desc: "Plumbing, sanitary, drainage, and wet area support works coordinated with waterproofing requirements.",
  },
  {
    icon: Wrench,
    title: "Air Conditioning Support",
    desc: "Protection and detailing around AC openings, roof penetrations, drain lines, and service equipment.",
  },
  {
    icon: HomeIcon,
    title: "Tile & Plaster Works",
    desc: "Tile, screed, plaster, and repair works delivered with proper waterproofing layer coordination.",
  },
  {
    icon: Layers,
    title: "False Ceiling Installation",
    desc: "False ceiling installation and repair support for villas, offices, maintenance works, and interiors.",
  },
  {
    icon: Building2,
    title: "Building Maintenance",
    desc: "Leak repair, civil maintenance, coatings, waterproofing rectification, and technical service support across UAE sites.",
  },
];

const process = [
  "Free site inspection and leakage assessment",
  "System recommendation based on substrate and exposure",
  "Surface preparation, application, and detailing",
  "Flood test or QA checks where required",
  "Handover support and warranty documentation",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#060f1e] text-white">
      <header className="site-header sticky top-0 z-50 flex h-[70px] items-center justify-between border-b border-white/[0.08] bg-[#060f1e]/90 px-[5%] backdrop-blur-xl">
        <Link href="/" transitionTypes={["nav-back"]} className="animated-link text-[15px] font-black tracking-wide">
          ISFS <span className="text-slate-400">Technical Services LLC</span>
        </Link>
        <nav className="flex items-center gap-4 text-[13px] font-semibold text-slate-300">
          <Link href="/about" transitionTypes={["nav-back"]} className="animated-link hidden hover:text-cyan-400 sm:inline">About</Link>
          <Link href="/contact" transitionTypes={["nav-forward"]} className="animated-pill rounded-full bg-cyan-400 px-5 py-2.5 font-bold text-[#060f1e] hover:opacity-85">
            Contact
          </Link>
        </nav>
      </header>

      <section className="px-[5%] py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-bold uppercase tracking-[2px] text-cyan-400">Waterproofing services Dubai</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <h1 className="text-5xl font-black leading-tight md:text-7xl">
                Waterproofing, Roofing
                <br />
                and Protection Works
              </h1>
              <p className="mt-6 max-w-3xl text-[17px] leading-8 text-slate-400">
                ISFS Technical Services LLC provides specialist waterproofing, protective coatings, flooring, insulation, and maintenance services for villas, towers, commercial buildings, water tanks, basements, wet areas, and industrial facilities across Dubai and the UAE.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href={whatsAppQuoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="animated-pill inline-flex items-center gap-2 rounded-full bg-green-500 px-7 py-3.5 text-[14px] font-bold text-white hover:opacity-85"
              >
                <MessageCircle className="h-4 w-4" />
                Request Free Site Inspection
              </a>
              <a href="tel:+971506752786" className="animated-pill rounded-full border border-white/20 px-7 py-3.5 text-[14px] font-semibold text-white hover:border-cyan-400 hover:text-cyan-400">
                Call +971 50 675 2786
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-[5%] py-24 text-slate-900">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50">
                  <Icon className="h-6 w-6 text-cyan-700" />
                </div>
                <h2 className="mt-5 text-xl font-black">{service.title}</h2>
                <p className="mt-3 text-[14px] leading-7 text-slate-600">{service.desc}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="px-[5%] py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[2px] text-cyan-400">How we work</p>
            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">Site-led waterproofing decisions</h2>
            <p className="mt-5 text-[16px] leading-8 text-slate-400">
              Every project starts with the site condition, leakage source, concrete quality, movement risk, and exposure level. That keeps the selected system practical for UAE climate and real building use.
            </p>
          </div>
          <div className="grid gap-4">
            {process.map((item) => (
              <div key={item} className="flex gap-4 rounded-3xl border border-white/[0.08] bg-white/[0.04] p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                <p className="text-[15px] font-semibold text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
