import { projects } from "@/lib/portfolio";
import { certificates } from "@/lib/certificates";

export default function PortfolioStats({ arabic = false }: { arabic?: boolean }) {
  const items = arabic ? [[String(projects.length), "مشاريع في الملف المعروض"], [String(certificates.length), "نسخ شهادات متاحة"], ["UAE", "منطقة الخدمة"]] : [[String(projects.length), "Projects in this portfolio"], [String(certificates.length), "Certificate scans available"], ["UAE", "Service area"]];
  return <div className="grid grid-cols-3 gap-3">{items.map(([value, label]) => <div key={label} className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-center sm:p-5"><p className="text-2xl font-black text-cyan-500 sm:text-3xl" dir="ltr">{value}</p><p className="mt-2 text-xs leading-5 opacity-80">{label}</p></div>)}</div>;
}
