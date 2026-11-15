import { projects } from "@/lib/portfolio";
import ExpandableGrid from "./ExpandableGrid";

export default function ProjectPortfolio({ arabic = false }: { arabic?: boolean }) {
  const locale = arabic ? "ar" : "en";
  return <>
    <p className="mt-5 max-w-3xl leading-7 text-slate-400">{arabic ? "مشاريع مختارة من ملف الشركة. تواصل معنا للحصول على مستندات المشروع ومناقشة نطاق أعمال مشابه." : "Selected entries from our company portfolio. Ask us for project-specific documentation and a quotation for similar work."}</p>
    <ExpandableGrid arabic={arabic} label={arabic ? `عرض جميع المشاريع (${projects.length})` : `View all ${projects.length} project briefs`} className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map(project => <article key={project.name} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-cyan-300">{project.location[locale]}</p>
        <h3 className="text-lg font-bold" dir="ltr">{project.name}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">{project.service[locale]}</p>
        <details className="mt-5 border-t border-white/10 pt-4">
          <summary className="cursor-pointer py-2 text-sm font-bold text-cyan-300">{arabic ? "نطاق المشروع" : "View project scope"}</summary>
          <dl className="my-4 space-y-3 text-sm"><div><dt className="text-slate-400">{arabic ? "الموقع" : "Location"}</dt><dd>{project.location[locale]}</dd></div><div><dt className="text-slate-400">{arabic ? "الأعمال المدرجة في ملف الشركة" : "Scope listed in the company portfolio"}</dt><dd>{project.service[locale]}</dd></div></dl>
          <a href={`https://wa.me/971506752786?text=${encodeURIComponent(arabic ? `مرحباً ISFS، أحتاج عرض سعر لأعمال ${project.service.ar}. موقع مشروعي: ` : `Hello ISFS, I need a quotation for ${project.service.en}. My project location: `)}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-sm font-bold text-cyan-300">{arabic ? "ناقش مشروعاً مشابهاً ←" : "Discuss similar work →"}</a>
        </details>
      </article>)}
    </ExpandableGrid>
  </>;
}
