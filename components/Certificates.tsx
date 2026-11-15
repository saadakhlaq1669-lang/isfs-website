import Image from "next/image";
import { certificates } from "@/lib/certificates";
import ExpandableGrid from "./ExpandableGrid";

export default function Certificates({ arabic = false }: { arabic?: boolean }) {
  return <>
    <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600">{arabic ? "نسخ شهادات المصنعين والتدريب وإدارة الجودة. التواريخ أدناه كما تظهر في النسخ؛ يرجى طلب المستندات الحالية للتأكد من حالة الاعتماد." : "Manufacturer, training and quality-management records. Dates below are transcribed from the scans; request current documentation to confirm approval status."}</p>
    <ExpandableGrid arabic={arabic} label={arabic ? "عرض الشهادات الست" : "View all 6 certificate records"} className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {certificates.map(cert => <article key={cert.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
        <a href={`/certificate${cert.id}.jpeg`} target="_blank" rel="noopener noreferrer" className="block" aria-label={`${arabic ? "فتح النسخة الأصلية" : "Open original scan"}: ${cert.issuer} — ${cert.title}`}>
          <Image src={`/certificate${cert.id}.jpeg`} alt={`${cert.issuer} — ${arabic ? cert.ar : cert.title}`} width={cert.width} height={cert.height} className="h-44 w-full object-contain p-4" sizes="(max-width: 768px) 90vw, 30vw" />
        </a>
        <div className="border-t border-slate-100 p-5">
          <p className="text-xs font-bold text-cyan-700" dir="ltr">{cert.issuer}</p>
          <h3 className="mt-2 text-base font-bold leading-6 text-slate-900">{arabic ? cert.ar : cert.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{arabic ? cert.typeAr : cert.type}</p>
          <p className="mt-3 text-xs leading-6 text-slate-600">{arabic ? cert.datesAr : cert.dates}</p>
          <a href={`/certificate${cert.id}.jpeg`} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex min-h-11 items-center text-sm font-bold text-cyan-700">{arabic ? "فتح النسخة بالحجم الكامل ↗" : "View full-size scan ↗"}</a>
        </div>
      </article>)}
    </ExpandableGrid>
  </>;
}
