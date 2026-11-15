import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import PortfolioStats from "@/components/PortfolioStats";

export const metadata = pageMetadata({
  title: "About ISFS | Dubai Waterproofing Specialists",
  description: "Discover ISFS Technical Services LLC's waterproofing experience, applicator certifications and work across residential, commercial and industrial projects in the UAE.",
  path: "/about",
  image: "/about-us.png",
  imageAlt: "ISFS Technical Services LLC company profile",
  imageWidth: 1080,
  imageHeight: 1456,
});

const sectors = ["Villas and private residences", "Residential towers and apartments", "Commercial buildings and malls", "Roofs, podiums, basements, and wet areas", "Water tanks, swimming pools, and service areas", "Industrial, warehouse, and maintenance facilities"];
const credentials = ["Approved applicator documentation", "Manufacturer training certificates", "Waterproofing system QA-QC records", "Flood test and handover support"];

export default function AboutPage() {
  return <main className="min-h-screen bg-[#060f1e] text-white">
    <SiteHeader />
    <section className="px-[5%] py-12 md:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="text-xs font-bold uppercase tracking-[2px] text-cyan-300">About ISFS · Dubai & UAE</p>
          <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">Practical expertise.<br /><span className="text-cyan-300">Protection that starts on site.</span></h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">ISFS Technical Services LLC is a UAE waterproofing and technical services contractor focused on durable roof, membrane, PU, wet area, coating, and building maintenance solutions.</p>
          <div className="mt-7 flex flex-wrap gap-3"><Link href="/contact#quote" className="inline-flex min-h-12 items-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-[#060f1e]">Discuss your project</Link><Link href="/ar#about" className="inline-flex min-h-12 items-center rounded-full border border-white/25 px-6 py-3 text-sm font-bold" lang="ar">من نحن بالعربية</Link></div>
        </div>
        <figure className="overflow-hidden rounded-3xl border border-white/15 bg-white/[0.04]">
          <Image src="/projects-collage.png" alt="A collage of the waterproofing work shown in the ISFS company portfolio" width={1536} height={1024} sizes="(max-width: 1024px) 90vw, 45vw" preload className="aspect-[3/2] w-full object-cover" />
          <figcaption className="px-5 py-4 text-sm text-slate-300">Waterproofing, roofing and technical services across the UAE.</figcaption>
        </figure>
      </div>
      <div className="mx-auto mt-10 max-w-7xl"><PortfolioStats /></div>
    </section>
    <section className="bg-white px-[5%] py-12 text-slate-900 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[2px] text-cyan-700">Our story</p><h2 className="mt-4 text-3xl font-black md:text-4xl">From Ajman roots to Dubai growth</h2><p className="mt-4 text-sm leading-7 text-slate-600">The following history is company-provided information from the ISFS profile.</p></div>
        <ol className="mt-8 grid gap-5 md:grid-cols-2">
          <li className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8"><p className="text-3xl font-black text-cyan-700">2005</p><h3 className="mt-3 text-xl font-bold">Established in Ajman</h3><p className="mt-3 text-base leading-7 text-slate-600">The company began in Ajman as Al Hadaf General Maintenance LLC, serving UAE clients with maintenance and waterproofing-related technical works.</p></li>
          <li className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8"><p className="text-3xl font-black text-cyan-700">2023</p><h3 className="mt-3 text-xl font-bold">Rebranded in Dubai</h3><p className="mt-3 text-base leading-7 text-slate-600">The business rebranded in Dubai as ISFS Technical Services LLC, expanding its focus on waterproofing, roofing, coating, and project support services.</p></li>
        </ol>
        <details className="mt-6 rounded-2xl border border-slate-200 p-5"><summary className="cursor-pointer py-2 font-bold text-cyan-700">Read the original company profile</summary><a href="/about-us.png" target="_blank" rel="noopener noreferrer" className="mt-4 block"><Image src="/about-us.png" alt="Original ISFS company profile document" width={1080} height={1456} className="mx-auto max-h-[620px] w-auto max-w-full object-contain" sizes="(max-width: 768px) 90vw, 460px" /></a></details>
      </div>
    </section>
    <section className="px-[5%] py-12 md:py-20"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
      <div><h2 className="text-3xl font-black">Where we work</h2><p className="mt-4 leading-7 text-slate-300">UAE site experience across waterproofing, membrane, PU, wet areas, roofing, insulation, GRP, concrete treatment, and maintenance works.</p><ul className="mt-6 grid gap-3 sm:grid-cols-2">{sectors.map(item => <li key={item} className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-300">{item}</li>)}</ul></div>
      <div className="rounded-3xl border border-white/15 bg-white/[0.04] p-6 md:p-8"><h2 className="text-3xl font-black">Documentation & project support</h2><ul className="mt-6 space-y-3">{credentials.map(item => <li key={item} className="border-b border-white/10 pb-3 text-sm text-slate-300">{item}</li>)}</ul><p className="mt-5 text-sm leading-7 text-slate-400">View the published manufacturer and training records, including their printed dates. Ask for current documentation relevant to your proposed system.</p><Link href="/#certifications" className="mt-4 inline-flex min-h-11 items-center font-bold text-cyan-300">Review certificate records →</Link></div>
    </div></section>
    <section className="px-[5%] pb-12 md:pb-20"><div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6 md:flex-row md:items-center md:justify-between md:p-10"><div><h2 className="text-2xl font-black">Have a roof, leak or flooring project?</h2><p className="mt-3 text-sm leading-7 text-slate-300">Share the location, work required and photographs to start the quotation conversation.</p></div><Link href="/contact#quote" className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-cyan-400 px-6 py-3 font-bold text-[#060f1e]">Request a quotation</Link></div></section>
  </main>;
}
