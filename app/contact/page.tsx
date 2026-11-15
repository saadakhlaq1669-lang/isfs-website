import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export const metadata = pageMetadata({
  title: "Contact ISFS | Waterproofing Quotes in Dubai",
  description: "Contact ISFS Technical Services LLC for a waterproofing quote or free site inspection in Dubai and the UAE. Call +971 50 675 2786 or send a WhatsApp inquiry.",
  path: "/contact",
});

const whatsAppQuoteUrl =
  "https://wa.me/971506752786?text=Hello%20ISFS%2C%20I%20need%20a%20quotation%20for%20waterproofing%20works.";

const contactMethods = [
  {
    icon: Phone,
    label: "Primary Phone",
    value: "+971 50 675 2786",
    href: "tel:+971506752786",
  },
  {
    icon: Phone,
    label: "Secondary Phone",
    value: "+971 55 900 4510",
    href: "tel:+971559004510",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@isfstechnicalservices.com",
    href: "mailto:info@isfstechnicalservices.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Request a quotation",
    href: whatsAppQuoteUrl,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#060f1e] text-white">
      <header className="site-header sticky top-0 z-50 flex h-[70px] items-center justify-between border-b border-white/[0.08] bg-[#060f1e]/90 px-[5%] backdrop-blur-xl">
        <Link href="/" transitionTypes={["nav-back"]} className="animated-link text-[15px] font-black tracking-wide">
          ISFS <span className="text-slate-400">Technical Services LLC</span>
        </Link>
        <nav className="flex items-center gap-4 text-[13px] font-semibold text-slate-300">
          <Link href="/about" transitionTypes={["nav-back"]} className="animated-link hidden hover:text-cyan-400 sm:inline">About</Link>
          <Link href="/services" transitionTypes={["nav-back"]} className="animated-link hidden hover:text-cyan-400 sm:inline">Services</Link>
          <Link href="/ar" transitionTypes={["nav-forward"]} className="animated-pill rounded-full border border-white/15 px-4 py-2 font-bold text-slate-300 hover:border-cyan-400 hover:text-cyan-400">
            عربي
          </Link>
        </nav>
      </header>

      <section className="px-[5%] py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[2px] text-cyan-400">Contact ISFS</p>
            <h1 className="mt-5 text-5xl font-black leading-tight md:text-7xl">
              Request a Waterproofing Quote
            </h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-8 text-slate-400">
              Speak with ISFS Technical Services LLC for waterproofing, roof insulation, membrane, PU, epoxy flooring, crack injection, GRP, and maintenance works across Dubai and the UAE.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={whatsAppQuoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="animated-pill inline-flex items-center gap-2 rounded-full bg-green-500 px-7 py-3.5 text-[14px] font-bold text-white hover:opacity-85"
              >
                <MessageCircle className="h-4 w-4" />
                Request Free Site Inspection
              </a>
              <a href="tel:+971506752786" className="animated-pill inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 text-[14px] font-bold text-[#060f1e] hover:opacity-85">
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("https://") ? "_blank" : undefined}
                  rel={method.href.startsWith("https://") ? "noopener noreferrer" : undefined}
                  className="animated-pill rounded-3xl border border-white/[0.08] bg-white/[0.04] p-7 hover:border-cyan-400/40 hover:bg-white/[0.07]"
                >
                  <Icon className="h-8 w-8 text-cyan-400" />
                  <p className="mt-5 text-[13px] font-semibold text-slate-400">{method.label}</p>
                  <p className="mt-2 break-words text-[18px] font-black text-white">{method.value}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-[5%] py-24 text-slate-900">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50">
              <MapPin className="h-6 w-6 text-cyan-700" />
            </div>
            <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">Location and service area</h2>
            <p className="mt-5 text-[16px] leading-8 text-slate-600">
              ISFS Technical Services LLC is based in Dubai and supports waterproofing, roof, flooring, coating, and maintenance projects throughout the UAE, including Dubai, Sharjah, Ajman, Abu Dhabi, Ras Al Khaimah, Fujairah, and Umm Al Quwain.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
            <iframe
              title="ISFS Technical Services LLC Dubai UAE service area map"
              src="https://www.google.com/maps?q=Dubai%2C%20UAE&output=embed"
              className="h-[380px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="px-5 py-4 text-center text-[13px] font-semibold text-slate-500">
              Dubai, UAE - serving all UAE emirates.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
