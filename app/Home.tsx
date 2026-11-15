"use client";

import AboutSection from "@/components/AboutSection";
import SiteHeader from "@/components/SiteHeader";
import ExpandableGrid from "@/components/ExpandableGrid";
import Certificates from "@/components/Certificates";
import QuoteForm from "@/components/QuoteForm";


import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { PointerEvent } from "react";
import { useEffect, useRef, useState } from "react";
import {
  Phone,
  ShieldCheck,
  Building2,
  Droplets,
  MessageCircle,
  Mail,
  Zap,
  Layers,
  Home as HomeIcon,
  Clock,
  Trophy,
  MapPin,
} from "lucide-react";

function useCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    let rafId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [inView, target, duration]);

  return { count, ref };
}

const services = [
  {
    icon: Droplets,
    title: "PU Waterproofing",
    desc: "Polyurethane liquid-applied membranes ideal for roof decks, balconies, and podiums. Seamless, flexible, UV-resistant.",
    tag: "Most Popular",
  },
  {
    icon: Layers,
    title: "Cementitious Waterproofing",
    desc: "Rigid and flexible crystalline systems for water tanks, basements, and below-grade structures requiring deep penetration.",
    tag: "Structural",
  },
  {
    icon: ShieldCheck,
    title: "Membrane Waterproofing",
    desc: "Torch-applied and self-adhesive bituminous membranes for heavy-duty below-slab and foundation protection.",
    tag: "Foundation",
  },
  {
    icon: HomeIcon,
    title: "Wet Area Waterproofing",
    desc: "Bathroom, kitchen, and laundry waterproofing with flexible coatings that prevent moisture ingress and mold growth.",
    tag: "Interior",
  },
  {
    icon: Building2,
    title: "Roof Waterproofing",
    desc: "Complete roof protection systems including insulation, drainage, and multi-layer waterproofing suited to UAE climate.",
    tag: "Exterior",
  },
  {
    icon: Zap,
    title: "Epoxy Flooring",
    desc: "Industrial-grade epoxy floor coatings for warehouses, car parks, and commercial floors — durable and chemical-resistant.",
    tag: "Industrial",
  },
  {
    icon: ShieldCheck,
    title: "Roof Combo Waterproofing",
    desc: "Multi-layer roof waterproofing systems combining insulation, membrane protection, and weather-resistant coatings for long-term durability in UAE conditions.",
    tag: "Roof Systems",
  },
  {
    icon: Layers,
    title: "Resin Flooring",
    desc: "Heavy-duty resin flooring systems for industrial, warehouse, and commercial environments requiring chemical and abrasion resistance.",
    tag: "Industrial",
  },
  {
    icon: Droplets,
    title: "GRP Lamination",
    desc: "Glass Reinforced Plastic lamination systems for water tanks, wet areas, and protective waterproofing applications.",
    tag: "Water Tanks",
  },
  {
    icon: Zap,
    title: "Crack Injection Works",
    desc: "Professional crack repair and injection systems for concrete structures, retaining walls, basements, and water-retaining structures.",
    tag: "Structural Repair",
  },
  {
    icon: ShieldCheck,
    title: "Pile Head Treatment",
    desc: "Waterproofing and protection treatment for pile heads, pile caps, and foundation interfaces to help prevent water ingress at critical structural junctions.",
    tag: "Foundations",
  },
  {
    icon: Layers,
    title: "Concrete Treatment",
    desc: "Surface preparation, repair mortars, sealers, and treatment systems for durable concrete protection before finishing works.",
    tag: "Repair",
  },
  {
    icon: ShieldCheck,
    title: "Protective Coatings",
    desc: "Chemical-resistant and weather-resistant coatings for roofs, floors, tanks, basements, and exposed concrete surfaces.",
    tag: "Coatings",
  },
  {
    icon: Building2,
    title: "Roof Insulation",
    desc: "Thermal insulation and roof build-up support designed for Dubai heat, waterproofing performance, and energy efficiency.",
    tag: "Insulation",
  },
  {
    icon: Droplets,
    title: "Plumbing & Sanitary",
    desc: "Support works for sanitary lines, wet area preparation, drainage coordination, and waterproofing-ready plumbing details.",
    tag: "MEP Support",
  },
  {
    icon: Zap,
    title: "Air Conditioning Support",
    desc: "Technical support for AC openings, roof penetrations, drain details, and protection works around service equipment.",
    tag: "MEP Support",
  },
  {
    icon: HomeIcon,
    title: "Tile & Plaster Works",
    desc: "Tile, screed, and plaster repair works coordinated with waterproofing layers for bathrooms, kitchens, roofs, and terraces.",
    tag: "Finishing",
  },
  {
    icon: Layers,
    title: "False Ceiling Installation",
    desc: "False ceiling installation and repair support for villas, offices, wet areas, and maintenance projects.",
    tag: "Interior",
  },
  {
    icon: Building2,
    title: "Building Maintenance",
    desc: "Practical maintenance support for waterproofing repairs, leak rectification, coatings, civil works, and fit-out touchpoints.",
    tag: "Maintenance",
  },
];

const whyUs = [
  {
    icon: ShieldCheck,
    title: "Applicator documentation",
    desc: "Manufacturer applicator and training records for waterproofing and protection systems. Request current documentation for your project.",
  },
  {
    icon: Building2,
    title: "Warranty support",
    desc: "System selection, installation documentation, and warranty support aligned with supplier requirements.",
  },
  {
    icon: Clock,
    title: "Flood test / QA-QC",
    desc: "Site checks, flood test coordination, and quality control practices before handover.",
  },
  {
    icon: MapPin,
    title: "Dubai & UAE project experience",
    desc: "Project execution across villas, wet areas, roofs, tanks, podiums, and commercial buildings throughout the UAE.",
  },
];

const deliveredProjects = [
  { name: "Twin Tower – Deira Islands", service: "Membrane Waterproofing", location: "Dubai" },
  { name: "Prestige One Apartments – Deira Islands", service: "Membrane Waterproofing", location: "Dubai" },
  { name: "Jumeirah Garden City – Al Satwa", service: "Membrane Waterproofing", location: "Dubai" },
  { name: "Majid Al Futtaim – Deira City Centre", service: "Waterproofing Works", location: "Dubai" },
  { name: "CGGC China Energy", service: "Chemical & Cable Trench Waterproofing", location: "Umm Al Quwain" },
  { name: "Dubai Airport CMT Roof", service: "Roof Waterproofing", location: "Dubai" },
  { name: "Strong Wall Construction", service: "Combo Roofing & Wet Area Waterproofing", location: "Dubai" },
  { name: "Hillite Building Contracting", service: "Membrane Waterproofing & Crack Treatment", location: "Dubai" },
  { name: "Al Fareej Al Sharqi", service: "GRP Lamination for Water Tanks", location: "UAE" },
  { name: "Dubai Deira Islands", service: "Advanced Membrane Waterproofing Systems", location: "Dubai" },
];

const whatsAppQuoteMessage = "Hello ISFS, I need a quotation for waterproofing works.";
const whatsAppQuoteUrl = `https://wa.me/971506752786?text=${encodeURIComponent(whatsAppQuoteMessage)}`;


const sectionLinks = [
  { label: "About", href: "#about", count: "01" },
  { label: "Services", href: "#services", count: "02" },
  { label: "Projects", href: "#projects", count: "03" },
  { label: "Certifications", href: "#certifications", count: "04" },
  { label: "Contact", href: "#contact", count: "05" },
];

function setPressPoint(event: PointerEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;

  event.currentTarget.style.setProperty("--press-x", `${x}%`);
  event.currentTarget.style.setProperty("--press-y", `${y}%`);
}

function StatItem({ num, label, index }: { num: string; label: string; index: number }) {
  const isNumeric = /\d+/.test(num) && num !== "2005";
  const numericValue = isNumeric ? parseInt(num.replace(/\D/g, "")) : 0;
  const suffix = num.replace(/\d+/g, "");
  const { count, ref } = useCounter(numericValue);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.09) }}
      viewport={{ once: true, amount: 0.12 }}
      className="text-center"
    >
      <p className="text-4xl font-black text-cyan-400">
        {isNumeric ? `${count}${suffix}` : num}
      </p>
      <p className="mt-1 text-[12px] tracking-wide text-slate-400">{label}</p>
    </motion.div>
  );
}

export default function Home() {

  return (
    <main className="min-h-screen scroll-smooth overflow-x-hidden bg-[#060f1e] font-sans text-white">

      {/* ── NAVBAR ── */}
      <SiteHeader />

      {/* ── HERO ── */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden px-[5%] py-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="pointer-events-none absolute -right-48 -top-48 h-[700px] w-[700px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-72 -left-24 h-[500px] w-[500px] rounded-full bg-cyan-600/10 blur-3xl" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-1.5 text-[12px] font-semibold text-cyan-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
              Engineering Protection Since 2005
            </div>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight md:text-6xl">
              Dubai&apos;s Trusted
              <br />
              <span className="text-cyan-400">Waterproofing</span>
              <br />
              Experts
            </h1>

            <p className="mt-6 max-w-[480px] text-[16px] leading-[1.75] text-slate-400">
              Professional waterproofing applications, roof insulation systems,
              and protective coatings delivered across the UAE for residential,
              commercial, and industrial projects.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={whatsAppQuoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                onPointerDown={setPressPoint}
                className="animated-pill flex items-center gap-2 rounded-full bg-green-500 px-7 py-3.5 text-[14px] font-bold text-white hover:-translate-y-0.5 hover:opacity-85"
              >
                <MessageCircle className="h-4 w-4" />
                Request Free Site Inspection
              </a>
              <a
                href="tel:+971506752786"
                onPointerDown={setPressPoint}
                className="animated-pill flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-[14px] font-semibold text-white hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-400"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a
                href="#services"
                onPointerDown={setPressPoint}
                className="animated-pill flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-[14px] font-semibold text-white hover:border-cyan-400 hover:text-cyan-400"
              >
                View Services →
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.04]">
              <Image src="/projects-collage.png" alt="ISFS waterproofing project collage" loading="eager" fetchPriority="high" width={1536} height={1024} className="block w-full" sizes="(max-width: 1024px) 90vw, 45vw" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#0a1929] px-5 py-4 shadow-2xl md:flex">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/15">
                <Trophy className="h-5 w-5 text-cyan-400" />
              </div>
              <div>
                <p className="text-[17px] font-black leading-none text-cyan-400">Since 2005</p>
                <p className="mt-1 text-[11px] text-slate-400">Company-provided history</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-y border-white/[0.08] bg-[#0a1929] px-[5%] py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { num: "20+", label: "Years of Experience" },
            // Preview claim: requires owner factual confirmation before production.
            { num: "500+", label: "Projects Completed" },
            { num: "18+", label: "Core Services" },
            { num: "UAE", label: "Wide Coverage" },
          ].map((s, i) => (
            <StatItem key={s.label} num={s.num} label={s.label} index={i} />
          ))}
        </div>
      </section>

      <section className="border-b border-white/[0.08] bg-[#071521] px-[5%] py-5">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-[11px] font-bold uppercase tracking-[2px] text-slate-400">
            Explore Sections
          </p>
          <nav className="grid gap-2 sm:grid-cols-2 md:flex md:flex-wrap">
            {sectionLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onPointerDown={setPressPoint}
                className="animated-pill group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-[13px] font-bold text-slate-200 hover:border-cyan-400/60 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                <span className="text-[11px] text-cyan-400">{item.count}</span>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <AboutSection />

      {/* ── SERVICES ── */}
      <section id="services" className="scroll-mt-[90px] border-b border-slate-200 bg-slate-50 px-[5%] py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 inline-flex items-center gap-3 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[2px] text-cyan-700">
            <span>02</span>
            What We Do
          </p>
          <h2 className="text-4xl font-black leading-tight text-slate-900 md:text-5xl">
            Waterproofing &<br />Protection Services
          </h2>
          <p className="mt-5 max-w-lg text-[16px] leading-[1.75] text-slate-500">
            Industry-leading systems for every substrate and condition, using approved materials from trusted manufacturers.
          </p>

          <ExpandableGrid tone="light" label="View All Services" className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: (i % 3) * 0.02 }}
                  viewport={{ once: true, amount: 0.08 }}
                  className="rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-2xl hover:shadow-cyan-200/40"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50">
                    <Icon className="h-6 w-6 text-cyan-700" />
                  </div>
                  <h3 className="text-[18px] font-black text-slate-900">{svc.title}</h3>
                  <p className="mt-3 text-[13px] leading-[1.75] text-slate-500">{svc.desc}</p>
                  <span className="mt-5 inline-block rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-[11px] font-semibold text-cyan-700">
                    {svc.tag}
                  </span>
                </motion.div>
              );
            })}
          </ExpandableGrid>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="border-b border-white/[0.08] bg-[#060f1e] px-[5%] py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 inline-flex items-center gap-3 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[2px] text-cyan-300">
            <span>QA</span>
            Trust & QA
          </p>
          <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
            Approved Systems,<br />Checked on Site
          </h2>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: (i % 4) * 0.02 }}
                  viewport={{ once: true, amount: 0.12 }}
                  className="rounded-3xl border border-white/[0.08] bg-white/[0.04] p-9"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                    <Icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-[18px] font-black text-white">{item.title}</h3>
                  <p className="mt-3 text-[13px] leading-[1.75] text-slate-400">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="scroll-mt-[90px] border-b border-white/[0.08] bg-[#0a1929] px-[5%] py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 inline-flex items-center gap-3 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[2px] text-cyan-300">
            <span>03</span>
            Our Work
          </p>
          <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
            Waterproofing Projects<br />Across the UAE
          </h2>
          <p className="mt-5 max-w-3xl text-[16px] leading-[1.8] text-slate-400">
            ISFS has delivered waterproofing, roofing, membrane, GRP lamination, wet area protection,
            and insulation works for villas, towers, malls, swimming pools, water tanks,
            and commercial developments across the UAE.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              // Preview claim: requires owner factual confirmation before production.
              ["100+", "Delivered Works"],
              ["20+", "Years of Experience"],
              ["UAE", "Project Coverage"],
              ["18+", "Core Services"],
            ].map((item) => (
              <div key={item[1]} className="rounded-3xl border border-white/[0.08] bg-white/[0.04] p-6 text-center">
                <p className="text-3xl font-black text-cyan-400">{item[0]}</p>
                <p className="mt-2 text-[12px] text-slate-400">{item[1]}</p>
              </div>
            ))}
          </div>

          <ExpandableGrid label="View All Projects" className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {deliveredProjects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
	                transition={{ duration: 0.3, delay: (i % 3) * 0.02 }}
	                viewport={{ once: true, amount: 0.08 }}
	                className="rounded-3xl border border-white/[0.08] bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.07]"
	              >
	                <p className="text-[17px] font-black text-white">{project.name}</p>
	                <p className="mt-3 text-[13px] font-semibold text-cyan-400">{project.service}</p>
	                <p className="mt-2 flex items-center gap-1.5 text-[12px] text-slate-400">
	                  <MapPin className="h-3 w-3" /> {project.location}
	                </p>
	              </motion.div>
            ))}
          </ExpandableGrid>

          <div className="mt-12 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6 text-center">
            <p className="text-[15px] leading-7 text-slate-300">
              Full project portfolio available upon request — including villas, residential buildings,
              water tanks, swimming pools, service stations, labour camps, and commercial developments
              across Dubai, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain.
            </p>
            <a href={whatsAppQuoteUrl} target="_blank" rel="noopener noreferrer" className="animated-link mt-4 inline-flex min-h-11 items-center text-[14px] font-bold text-cyan-300">Request portfolio details & a quotation</a>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section id="certifications" className="scroll-mt-[90px] border-b border-slate-200 bg-slate-50 px-[5%] py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 inline-flex items-center gap-3 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[2px] text-cyan-700">
            <span>04</span>
            Certifications
          </p>
          <h2 className="text-4xl font-black leading-tight text-slate-900 md:text-5xl">Manufacturer & Training Certificates</h2>
          <p className="mt-5 max-w-lg text-[16px] leading-[1.75] text-slate-500">
            Published manufacturer approvals, quality management documentation, and training records. Dates are shown as printed; please request current documentation to confirm status.
          </p>

          <Certificates />
        </div>
      </section>

      {/* ── CONTACT ── */}
<section id="contact" className="scroll-mt-[90px] bg-[#060f1e] px-[5%] py-24">
  <div className="mx-auto max-w-5xl">
    <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.04] px-8 py-16 md:px-14">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative z-10 text-center">
        <p className="mx-auto mb-5 inline-flex items-center gap-3 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[2px] text-cyan-300">
          <span>05</span>
          Contact
        </p>
        <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
          Let&apos;s Protect
          <br />
          <span className="text-cyan-400">Your Project</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-[1.8] text-slate-400">
          ISFS Technical Services LLC provides waterproofing, membrane,
          insulation, epoxy flooring, and technical protection systems across
          Dubai and the UAE for residential, commercial, and industrial
          developments.
        </p>

        {/* CONTACT CARDS */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">

          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.04] p-6">
            <Phone className="mx-auto h-8 w-8 text-cyan-400" />
            <p className="mt-4 text-[13px] text-slate-400">Primary Contact</p>
            <a
              href="tel:+971506752786"
              className="mt-2 block text-[20px] font-black text-white hover:text-cyan-400"
            >
              +971 50 675 2786
            </a>
          </div>

          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.04] p-6">
            <Phone className="mx-auto h-8 w-8 text-cyan-400" />
            <p className="mt-4 text-[13px] text-slate-400">Secondary Contact</p>
            <a
              href="tel:+971559004510"
              className="mt-2 block text-[20px] font-black text-white hover:text-cyan-400"
            >
              +971 55 900 4510
            </a>
          </div>

          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.04] p-6">
            <Mail className="mx-auto h-8 w-8 text-cyan-400" />
            <p className="mt-4 text-[13px] text-slate-400">Email Address</p>
            <a
              href="mailto:info@isfstechnicalservices.com"
              className="mt-2 block break-words text-[16px] font-bold text-white hover:text-cyan-400"
            >
              info@isfstechnicalservices.com
            </a>
          </div>

        </div>

        {/* EXTRA SERVICES */}
        <div className="mt-14 rounded-3xl border border-cyan-400/10 bg-cyan-400/5 p-8">
          <h3 className="text-2xl font-black text-white">
            Additional Technical Services
          </h3>

          <div className="mt-6 grid gap-3 text-left sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Concrete Treatment",
              "Crack Injection",
              "Tile & Plaster Works",
              "False Ceiling Installation",
              "Plumbing & Sanitary",
              "Roof Insulation",
              "Air Conditioning Support",
              "Protective Coatings",
              "Building Maintenance",
            ].map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-[14px] font-medium text-slate-300"
              >
                {service}
              </div>
            ))}
          </div>
        </div>

        <div id="quote" className="mt-14 scroll-mt-[90px]"><QuoteForm serviceOptions={services.map(service => service.title)} /></div>

        <div className="mt-14 overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.04]">
          <iframe
            title="ISFS Technical Services LLC Dubai UAE service area map"
            src="https://www.google.com/maps?q=Dubai%2C%20UAE&output=embed"
            className="h-[320px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="px-5 py-4 text-center text-[13px] text-slate-400">
            Service area: Dubai and all UAE emirates.
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <a
            href={whatsAppQuoteUrl}
            target="_blank"
            rel="noopener noreferrer"
            onPointerDown={setPressPoint}
            className="animated-pill flex items-center gap-2 rounded-full bg-green-500 px-7 py-3.5 text-[14px] font-bold text-white hover:-translate-y-0.5 hover:opacity-85"
          >
            <MessageCircle className="h-4 w-4" />
            Request Free Site Inspection
          </a>

          <a
            href="tel:+971506752786"
            onPointerDown={setPressPoint}
            className="animated-pill flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 text-[14px] font-bold text-[#060f1e] hover:-translate-y-0.5 hover:opacity-85"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>

        <p className="mt-10 text-[13px] text-slate-500">
          ISFS Technical Services LLC • Dubai, UAE
        </p>
      </div>
    </div>
  </div>
</section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.08] bg-[#020913] px-[5%] py-12">
        <div className="mx-auto grid max-w-7xl gap-9 text-center sm:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr_1fr_1fr] md:text-left">
          <div>
            <p className="text-[18px] font-black text-white">ISFS Technical Services LLC</p>
            <p className="mt-2 text-[13px] leading-6 text-slate-500">
              Dubai waterproofing, roofing, PU, membrane, wet area, and technical maintenance services.
            </p>
          </div>
          <div>
            <p className="text-[13px] font-black uppercase tracking-[1.5px] text-white">Services</p>
            <div className="mt-4 grid gap-3 text-[13px] font-semibold text-slate-400">
              <Link href="/services" transitionTypes={["nav-forward"]} className="animated-link hover:text-cyan-400">PU Waterproofing</Link>
              <Link href="/services" transitionTypes={["nav-forward"]} className="animated-link hover:text-cyan-400">Membrane Waterproofing</Link>
              <Link href="/services" transitionTypes={["nav-forward"]} className="animated-link hover:text-cyan-400">Roof Waterproofing</Link>
              <Link href="/services" transitionTypes={["nav-forward"]} className="animated-link hover:text-cyan-400">Epoxy Flooring</Link>
            </div>
          </div>
          <div>
            <p className="text-[13px] font-black uppercase tracking-[1.5px] text-white">Quick Links</p>
            <div className="mt-4 grid gap-3 text-[13px] font-semibold text-slate-400">
              <Link href="/about" transitionTypes={["nav-forward"]} className="animated-link hover:text-cyan-400">About</Link>
              <Link href="/services" transitionTypes={["nav-forward"]} className="animated-link hover:text-cyan-400">Services</Link>
              <a href="#projects" className="animated-link hover:text-cyan-400">Projects</a>
              <Link href="/contact" transitionTypes={["nav-forward"]} className="animated-link hover:text-cyan-400">Contact</Link>
              <Link href="/ar" transitionTypes={["nav-forward"]} className="animated-link hover:text-cyan-400">Arabic</Link>
            </div>
          </div>
          <div>
            <p className="text-[13px] font-black uppercase tracking-[1.5px] text-white">Contact</p>
            <div className="mt-4 grid gap-3 text-[13px] font-semibold text-slate-400">
              <a href="tel:+971506752786" className="hover:text-cyan-400">+971 50 675 2786</a>
              <a href="tel:+971559004510" className="hover:text-cyan-400">+971 55 900 4510</a>
              <a href="mailto:info@isfstechnicalservices.com" className="break-words hover:text-cyan-400">
                info@isfstechnicalservices.com
              </a>
              <a href={whatsAppQuoteUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
                WhatsApp Quote
              </a>
            </div>
          </div>
          <div>
            <p className="text-[13px] font-black uppercase tracking-[1.5px] text-white">Location</p>
            <div className="mt-4 grid gap-3 text-[13px] font-semibold text-slate-400">
              <p>Dubai, UAE</p>
              <p>Serving all UAE emirates</p>
              <a href="https://www.google.com/maps?q=Dubai%2C%20UAE" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
                View Map
              </a>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-[12px] text-slate-500">
          © {new Date().getFullYear()} <span className="text-cyan-400">ISFS Technical Services LLC</span> — All Rights Reserved | Dubai, UAE
        </p>
      </footer>

      {/* ── FLOATING WHATSAPP ── */}
      <a
        href={whatsAppQuoteUrl}
        target="_blank"
        rel="noopener noreferrer"
        onPointerDown={setPressPoint}
        className="animated-pill fixed bottom-7 right-7 z-50 flex items-center gap-2.5 rounded-full bg-green-500 px-5 py-3.5 text-[14px] font-bold text-white shadow-2xl shadow-green-500/30 hover:scale-105"
      >
        <MessageCircle className="h-5 w-5" />
        WhatsApp
      </a>
    </main>
  );
}
