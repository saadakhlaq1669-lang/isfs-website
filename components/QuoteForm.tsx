"use client";

import { useState, type FormEvent } from "react";

export default function QuoteForm({ arabic = false, serviceOptions }: { arabic?: boolean; serviceOptions?: string[] }) {
  const [status, setStatus] = useState("");
  const services = serviceOptions ?? (arabic ? ["العزل المائي", "عزل الأسطح", "أرضيات الإيبوكسي", "حقن الشقوق", "تغليف GRP", "صيانة المباني", "خدمة أخرى"] : ["Waterproofing", "Roof insulation", "Epoxy flooring", "Crack injection", "GRP lamination", "Building maintenance", "Other"]);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [arabic ? "طلب عرض سعر — ISFS" : "ISFS quotation request", ...["name", "phone", "location", "service", "message", "email"].map((key, i) => `${(arabic ? ["الاسم", "الهاتف", "الموقع", "الخدمة", "التفاصيل", "البريد الإلكتروني"] : ["Name", "Phone", "Location", "Service", "Details", "Email"])[i]}: ${data.get(key) || "—"}`)].join("\n");
    const intent = ((event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null)?.value;
    if (intent === "email") {
      window.location.href = `mailto:info@isfstechnicalservices.com?subject=${encodeURIComponent("ISFS quotation request")}&body=${encodeURIComponent(body)}`;
      setStatus(arabic ? "أكمل إرسال الطلب في تطبيق البريد الإلكتروني." : "Complete and send your request in your email app.");
    } else {
      window.open(`https://wa.me/971506752786?text=${encodeURIComponent(body)}`, "_blank", "noopener,noreferrer");
      setStatus(arabic ? "راجع الطلب واضغط إرسال في واتساب. لم يتم إرسال الطلب من الموقع." : "Review your request and press Send in WhatsApp. Nothing has been sent by this website.");
    }
  }
  const input = "mt-2 min-h-12 w-full rounded-xl border border-white/20 bg-[#0a1929] px-4 py-3 text-base text-white outline-none focus:border-cyan-300";
  return <form onSubmit={submit} className="quote-form rounded-3xl border border-white/15 bg-[#071521] p-5 text-start text-white sm:p-8" dir={arabic ? "rtl" : "ltr"}>
    <h3 className="text-2xl font-bold">{arabic ? "أخبرنا عن مشروعك" : "Tell us about your project"}</h3>
    <p className="mt-3 text-sm leading-6 text-slate-300">{arabic ? "أضف موقع المشروع ونوع العمل. يمكنك مشاركة الصور والمخططات في واتساب بعد فتح المحادثة." : "Include the site location and work required. You can share photographs and drawings in WhatsApp after opening the chat."}</p>
    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      <label className="text-sm font-semibold">{arabic ? "الاسم *" : "Name *"}<input name="name" autoComplete="name" required maxLength={120} className={input} /></label>
      <label className="text-sm font-semibold">{arabic ? "رقم الهاتف *" : "Phone *"}<input name="phone" type="tel" autoComplete="tel" dir="ltr" required maxLength={40} className={input} /></label>
      <label className="text-sm font-semibold">{arabic ? "موقع المشروع" : "Project location"}<input name="location" autoComplete="address-level2" maxLength={180} placeholder={arabic ? "المنطقة / الإمارة" : "Area / emirate"} className={input} /></label>
      <label className="text-sm font-semibold">{arabic ? "الخدمة المطلوبة *" : "Service required *"}<select name="service" required defaultValue="" className={input}><option value="" disabled>{arabic ? "اختر الخدمة" : "Choose a service"}</option>{services.map(service => <option key={service}>{service}</option>)}</select></label>
      <label className="text-sm font-semibold sm:col-span-2">{arabic ? "تفاصيل العمل *" : "Work required *"}<textarea name="message" required maxLength={3000} rows={3} className={input} /></label>
      <label className="text-sm font-semibold sm:col-span-2">{arabic ? "البريد الإلكتروني (اختياري)" : "Email (optional)"}<input name="email" type="email" autoComplete="email" maxLength={180} className={input} /></label>
    </div>
    <div className="mt-6 flex flex-wrap gap-3">
      <button type="submit" value="whatsapp" className="min-h-12 flex-1 rounded-full bg-green-500 px-5 py-3 text-sm font-bold text-[#052015]">{arabic ? "متابعة في واتساب" : "Continue in WhatsApp"}</button>
      <button type="submit" value="email" className="min-h-12 rounded-full border border-white/30 px-5 py-3 text-sm font-bold">{arabic ? "استخدام البريد الإلكتروني" : "Use email instead"}</button>
    </div>
    <p className="mt-4 text-xs leading-6 text-slate-400">{arabic ? "يفتح تطبيق واتساب أو البريد للمراجعة والإرسال. لا يتم تخزين النموذج على هذا الموقع." : "Opens WhatsApp or your email app for review and sending. This form is not stored on this website."}</p>
    <p role="status" className="mt-3 text-sm leading-6 text-cyan-300">{status}</p>
  </form>;
}
