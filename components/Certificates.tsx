import Image from "next/image";
import { certificates } from "@/lib/certificates";
import ExpandableGrid from "./ExpandableGrid";

export default function Certificates({ arabic = false }: { arabic?: boolean }) {
  return <>
    <ExpandableGrid arabic={arabic} tone="light" label={arabic ? "عرض الشهادات الست" : "View all 6 certificate records"} className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {certificates.map(cert => <article key={cert.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <a href={`/certificate${cert.id}.jpeg`} target="_blank" rel="noopener noreferrer" className="block" aria-label={`${arabic ? "فتح النسخة الأصلية" : "Open original scan"}: ${cert.issuer} — ${cert.title}`}>
          <Image src={`/certificate${cert.id}.jpeg`} alt={`${cert.issuer} — ${arabic ? cert.ar : cert.title}`} width={cert.width} height={cert.height} className="h-[220px] w-full object-contain p-4" sizes="(max-width: 768px) 90vw, 30vw" />
        </a>
        <div className="border-t border-slate-100 bg-slate-50 px-4 py-3 text-center">
          <p className="text-xs font-bold text-cyan-700" dir="ltr">{cert.issuer}</p>
          <h3 className="mt-2 text-base font-bold leading-6 text-slate-900">{arabic ? cert.ar : cert.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{arabic ? cert.typeAr : cert.type}</p>
          <a href={`/certificate${cert.id}.jpeg`} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex min-h-11 items-center text-sm font-bold text-cyan-700">{arabic ? "فتح النسخة بالحجم الكامل ↗" : "View full-size scan ↗"}</a>
        </div>
      </article>)}
    </ExpandableGrid>
  </>;
}
