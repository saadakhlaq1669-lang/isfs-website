"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

export default function SiteHeader({ arabic = false }: { arabic?: boolean }) {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLElement>(null);
  const id = useId();
  const pathname = usePathname();
  const home = arabic ? "/ar" : "/";
  const quote = arabic ? "/ar#quote" : "/contact#quote";
  const links = arabic
    ? [["الرئيسية", "/ar"], ["من نحن", "/about"], ["الخدمات", "/ar#services"], ["المشاريع", "/ar#projects"], ["الشهادات", "/ar#certifications"]]
    : [["About", "/about"], ["Services", "/services"], ["Projects", "/#projects"], ["Certifications", "/#certifications"], ["Contact", "/contact"]];

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const close = () => { setOpen(false); trigger.current?.focus(); };
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "Tab") {
        const items = [trigger.current, ...Array.from(panel.current?.querySelectorAll<HTMLAnchorElement>("a") ?? [])].filter(Boolean) as HTMLElement[];
        const index = items.indexOf(document.activeElement as HTMLElement);
        if (event.shiftKey && index === 0) { event.preventDefault(); items.at(-1)?.focus(); }
        if (!event.shiftKey && index === items.length - 1) { event.preventDefault(); items[0]?.focus(); }
      }
    };
    const media = window.matchMedia("(min-width: 1024px)");
    const resize = () => { if (media.matches) setOpen(false); };
    document.addEventListener("keydown", keydown);
    media.addEventListener("change", resize);
    return () => { document.body.style.overflow = previous; document.removeEventListener("keydown", keydown); media.removeEventListener("change", resize); };
  }, [open]);

  return (
    <header className="site-header sticky top-0 z-50 border-b border-white/[0.08] bg-[#060f1e]/90 text-white backdrop-blur-xl" dir={arabic ? "rtl" : "ltr"}>
      <div className="flex h-[70px] items-center justify-between gap-3 px-[5%]">
        <Link href={home} onClick={() => setOpen(false)} className="flex shrink-0 items-center gap-2 sm:gap-3" aria-label={arabic ? "ISFS — الرئيسية" : "ISFS — Home"}>
          <Image src="/logo.jpg" alt="ISFS Technical Services LLC logo" width={80} height={40} className="h-10 w-16 rounded-xl object-contain sm:w-20" />
          <span className="text-[15px] font-black leading-none tracking-wide">ISFS<span className="mt-0.5 hidden text-[10px] font-normal tracking-wide text-slate-400 sm:block">Technical Services LLC</span></span>
        </Link>
        <nav aria-label={arabic ? "التنقل الرئيسي" : "Main navigation"} className="hidden items-center gap-8 text-[13px] font-medium text-slate-400 lg:flex">
          {links.map(([label, href]) => <Link key={href} href={href} className="animated-link py-3 hover:text-cyan-400" aria-current={pathname === href ? "page" : undefined}>{label}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <Link href={arabic ? "/" : "/ar"} onClick={() => setOpen(false)} className="animated-pill hidden rounded-full border border-white/15 px-4 py-2 text-[13px] font-bold text-slate-300 hover:border-cyan-400 hover:text-cyan-400 lg:inline-flex" lang={arabic ? "en" : "ar"}>{arabic ? "English" : "عربي"}</Link>
          <Link href={quote} onClick={() => setOpen(false)} aria-label={arabic ? "طلب عرض سعر" : "Request a Quotation"} className="animated-pill rounded-full bg-cyan-400 px-3 py-3 text-[12px] font-bold text-[#060f1e] sm:px-5 sm:text-[13px]"><span className="lg:hidden">{arabic ? "عرض سعر" : "Quotation"}</span><span className="hidden lg:inline">{arabic ? "طلب عرض سعر" : "Request a Quotation"}</span></Link>
          <button ref={trigger} type="button" aria-label={arabic ? (open ? "إغلاق القائمة" : "فتح القائمة") : (open ? "Close menu" : "Open menu")} aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)} className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 lg:hidden">{open ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </div>
      {open && <nav ref={panel} id={id} aria-label={arabic ? "قائمة الهاتف" : "Mobile navigation"} className="fixed inset-x-0 top-[70px] h-[calc(100dvh-70px)] overflow-y-auto bg-[#060f1e] px-[5%] py-6 lg:hidden">
        {[...links, [arabic ? "التواصل وطلب عرض سعر" : "Contact & quotation", quote], [arabic ? "English" : "عربي", arabic ? "/" : "/ar"]].map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-4 text-lg font-semibold">{label}</Link>)}
        <a className="mt-6 inline-flex min-h-11 items-center text-cyan-300" href="tel:+971506752786" dir="ltr">+971 50 675 2786</a>
      </nav>}
    </header>
  );
}
