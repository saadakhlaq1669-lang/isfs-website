import AboutSection from "@/components/AboutSection";
import SiteHeader from "@/components/SiteHeader";
import ExpandableGrid from "@/components/ExpandableGrid";
import Certificates from "@/components/Certificates";
import QuoteForm from "@/components/QuoteForm";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
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
  MapPin,
} from "lucide-react";
import { Reveal } from "./Reveal";

export const metadata = pageMetadata({
  title: "مقاول عزل مائي في دبي والإمارات",
  description: "تقدم ISFS Technical Services LLC خدمات العزل المائي للأسطح والبولي يوريثان والأغشية وأرضيات الإيبوكسي في دبي والإمارات. تواصل معنا لطلب عرض سعر ومعاينة الموقع.",
  path: "/ar",
  arabic: true,
  translatedHome: true,
  imageAlt: "شعار شركة ISFS للخدمات الفنية",
});

const services = [
  {
    icon: Droplets,
    title: "العزل البولي يوريثان",
    desc: "أغشية سائلة مطبقة مثالية للأسطح والشرفات والبودويم. سلسة ومرنة ومقاومة للأشعة فوق البنفسجية.",
    tag: "الأكثر طلباً",
  },
  {
    icon: Layers,
    title: "العزل الإسمنتي",
    desc: "أنظمة بلورية صلبة ومرنة لخزانات المياه والأقبية والهياكل تحت الأرض التي تتطلب تغلغلاً عميقاً.",
    tag: "هيكلي",
  },
  {
    icon: ShieldCheck,
    title: "العزل بالأغشية",
    desc: "أغشية بيتومينية ملصقة ذاتياً ومطبقة بالشعلة للحماية الثقيلة تحت البلاط وللأساسات.",
    tag: "الأساسات",
  },
  {
    icon: HomeIcon,
    title: "عزل المناطق الرطبة",
    desc: "عزل الحمامات والمطابخ ومغاسل الملابس بطلاءات مرنة تمنع تسرب الرطوبة ونمو العفن.",
    tag: "داخلي",
  },
  {
    icon: Building2,
    title: "عزل الأسطح",
    desc: "أنظمة حماية كاملة للأسطح تشمل العزل الحراري والصرف والعزل متعدد الطبقات المناسب لمناخ الإمارات.",
    tag: "خارجي",
  },
  {
    icon: Zap,
    title: "أرضيات الإيبوكسي",
    desc: "طلاءات أرضيات إيبوكسية صناعية للمستودعات ومواقف السيارات والأرضيات التجارية — متينة ومقاومة للمواد الكيميائية.",
    tag: "صناعي",
  },
  {
    icon: ShieldCheck,
    title: "عزل الأسطح المركب",
    desc: "أنظمة عزل أسطح متعددة الطبقات تجمع بين العزل الحراري والأغشية الواقية والطلاءات المقاومة للعوامل الجوية.",
    tag: "أنظمة الأسطح",
  },
  {
    icon: Layers,
    title: "أرضيات الراتنج",
    desc: "أنظمة أرضيات راتنج ثقيلة للبيئات الصناعية والمستودعات والأماكن التجارية التي تتطلب مقاومة للمواد الكيميائية.",
    tag: "صناعي",
  },
  {
    icon: Droplets,
    title: "التغليف بالألياف الزجاجية",
    desc: "أنظمة تغليف بالبلاستيك المقوى بالألياف الزجاجية لخزانات المياه والمناطق الرطبة وتطبيقات العزل المائي الواقية.",
    tag: "خزانات المياه",
  },
  {
    icon: Zap,
    title: "أعمال حقن الشقوق",
    desc: "أنظمة احترافية لإصلاح وحقن الشقوق في الهياكل الخرسانية وجدران الاستناد والأقبية.",
    tag: "إصلاح هيكلي",
  },
  {
    icon: Layers,
    title: "معالجة الخرسانة",
    desc: "تحضير ومعالجة وحماية الأسطح الخرسانية قبل أعمال العزل والتشطيبات لضمان الأداء طويل الأمد.",
    tag: "إصلاح",
  },
  {
    icon: ShieldCheck,
    title: "الطلاءات الواقية",
    desc: "طلاءات مقاومة للعوامل الجوية والمواد الكيميائية للأسطح والأرضيات والخزانات والخرسانة المكشوفة.",
    tag: "حماية",
  },
  {
    icon: Building2,
    title: "عزل الأسطح الحراري",
    desc: "حلول عزل حراري للأسطح مناسبة لحرارة دبي وتدعم كفاءة الطاقة وأداء أنظمة العزل المائي.",
    tag: "عزل حراري",
  },
  {
    icon: Droplets,
    title: "السباكة والصرف الصحي",
    desc: "أعمال دعم للسباكة والصرف وتفاصيل المناطق الرطبة بما يتوافق مع طبقات العزل المائي.",
    tag: "دعم فني",
  },
  {
    icon: Zap,
    title: "دعم تكييف الهواء",
    desc: "دعم فني حول فتحات ومخارج أجهزة التكييف وتصريف المياه والاختراقات في الأسطح.",
    tag: "دعم فني",
  },
  {
    icon: HomeIcon,
    title: "أعمال البلاط والجص",
    desc: "أعمال البلاط واللياسة والإصلاحات المرتبطة بطبقات العزل في الحمامات والمطابخ والأسطح.",
    tag: "تشطيبات",
  },
  {
    icon: Layers,
    title: "تركيب الأسقف المستعارة",
    desc: "تركيب وإصلاح الأسقف المستعارة للفلل والمكاتب والمناطق الداخلية ومشاريع الصيانة.",
    tag: "داخلي",
  },
  {
    icon: Building2,
    title: "صيانة المباني",
    desc: "دعم صيانة عملي لإصلاح التسربات والعزل والطلاءات والأعمال المدنية والتشطيبات.",
    tag: "صيانة",
  },
];

const whyUs = [
  {
    icon: ShieldCheck,
    title: "وثائق تطبيق الأنظمة",
    desc: "نسخ شهادات التطبيق والتدريب لأنظمة العزل المائي والحماية. اطلب المستندات الحالية لمشروعك.",
  },
  {
    icon: Building2,
    title: "دعم الضمان",
    desc: "اختيار الأنظمة وتوثيق التنفيذ ودعم متطلبات الضمان حسب أنظمة الموردين.",
  },
  {
    icon: Clock,
    title: "اختبار الغمر / QA-QC",
    desc: "فحوصات الموقع وتنسيق اختبار الغمر وإجراءات ضبط الجودة قبل التسليم.",
  },
  {
    icon: MapPin,
    title: "خبرة مشاريع دبي والإمارات",
    desc: "تنفيذ مشاريع في الفلل والمناطق الرطبة والأسطح والخزانات والبودويم والمباني التجارية.",
  },
];

const deliveredProjects = [
  { name: "Twin Tower – Deira Islands", service: "العزل بالأغشية", location: "دبي" },
  { name: "Prestige One Apartments – Deira Islands", service: "العزل بالأغشية", location: "دبي" },
  { name: "Jumeirah Garden City – Al Satwa", service: "العزل بالأغشية", location: "دبي" },
  { name: "Majid Al Futtaim – Deira City Centre", service: "أعمال العزل المائي", location: "دبي" },
  { name: "CGGC China Energy", service: "العزل الكيميائي وخنادق الكابلات", location: "أم القيوين" },
  { name: "Dubai Airport CMT Roof", service: "عزل الأسطح", location: "دبي" },
  { name: "Strong Wall Construction", service: "عزل الأسطح المركب والمناطق الرطبة", location: "دبي" },
  { name: "Hillite Building Contracting", service: "العزل بالأغشية ومعالجة الشقوق", location: "دبي" },
  { name: "Al Fareej Al Sharqi", service: "تغليف خزانات المياه بالألياف الزجاجية", location: "الإمارات" },
  { name: "Dubai Deira Islands", service: "أنظمة العزل المائي المتقدمة", location: "دبي" },
];

const whatsAppQuoteUrl =
  "https://wa.me/971506752786?text=Hello%20ISFS%2C%20I%20need%20a%20quotation%20for%20waterproofing%20works.";

const sectionLinks = [
  { label: "من نحن", href: "#about", count: "01" },
  { label: "الخدمات", href: "#services", count: "02" },
  { label: "المشاريع", href: "#projects", count: "03" },
  { label: "الشهادات", href: "#certifications", count: "04" },
  { label: "التواصل", href: "#contact", count: "05" },
];

export default function ArabicPage() {
  return (
    <main lang="ar" dir="rtl" className="min-h-screen scroll-smooth overflow-x-hidden bg-[#060f1e] font-sans text-white">

      {/* ── NAVBAR ── */}
      <SiteHeader arabic />

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
        <div className="pointer-events-none absolute -left-48 -top-48 h-[700px] w-[700px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-72 -right-24 h-[500px] w-[500px] rounded-full bg-cyan-600/10 blur-3xl" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-1.5 text-[12px] font-semibold text-cyan-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
              الحماية الهندسية منذ عام 2005
            </div>

            <h1 className="text-5xl font-black leading-[1.2] tracking-tight md:text-6xl">
              خبراء العزل المائي
              <br />
              <span className="text-cyan-400">الموثوقون في دبي</span>
            </h1>

            <p className="mt-6 max-w-[480px] text-[16px] leading-[1.75] text-slate-400">
              تطبيقات عزل مائي احترافية وأنظمة عزل أسطح وطلاءات واقية
              يتم تنفيذها في جميع أنحاء الإمارات للمشاريع السكنية والتجارية والصناعية.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={whatsAppQuoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="animated-pill flex items-center gap-2 rounded-full bg-green-500 px-7 py-3.5 text-[14px] font-bold text-white hover:-translate-y-0.5 hover:opacity-85"
              >
                <MessageCircle className="h-4 w-4" />
                طلب معاينة مجانية للموقع
              </a>
              <a
                href="tel:+971506752786"
                className="animated-pill flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-[14px] font-semibold text-white hover:border-cyan-400 hover:text-cyan-400"
              >
                <Phone className="h-4 w-4" /> اتصل الآن
              </a>
              <a
                href="#services"
                className="animated-pill flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-[14px] font-semibold text-white hover:border-cyan-400 hover:text-cyan-400"
              >
                ← عرض الخدمات
              </a>
            </div>
          </Reveal>

          <Reveal className="relative" delay={0.05} scale>
            <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.04]">
              <Image src="/projects-collage.png" alt="صور أعمال العزل المائي لشركة ISFS" loading="eager" fetchPriority="high" width={1536} height={1024} className="block w-full" sizes="(max-width: 1024px) 90vw, 45vw" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-y border-white/[0.08] bg-[#0a1929] px-[5%] py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { num: "20+", label: "سنوات الخبرة" },
            // Preview claim: requires owner factual confirmation before production.
            { num: "500+", label: "مشاريع مكتملة" },
            { num: "18+", label: "خدمات أساسية" },
            { num: "UAE", label: "تغطية شاملة" },
          ].map((s, i) => (
            <Reveal key={s.label} className="text-center" delay={Math.min(i * 0.03, 0.09)}>
              <p className="text-4xl font-black text-cyan-400" dir="ltr">{s.num}</p>
              <p className="mt-1 text-[12px] tracking-wide text-slate-400">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-b border-white/[0.08] bg-[#071521] px-[5%] py-5">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-[11px] font-bold uppercase tracking-[2px] text-slate-400">
            أقسام الصفحة
          </p>
          <nav className="grid gap-2 sm:grid-cols-2 md:flex md:flex-wrap">
            {sectionLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="animated-pill flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-[13px] font-bold text-slate-200 hover:border-cyan-400/60 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                <span className="text-[11px] text-cyan-400" dir="ltr">{item.count}</span>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <AboutSection arabic />

      {/* ── SERVICES ── */}
      <section id="services" className="scroll-mt-[90px] border-b border-slate-200 bg-slate-50 px-[5%] py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 inline-flex items-center gap-3 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[2px] text-cyan-700">
            <span dir="ltr">02</span>
            ما نقدمه
          </p>
          <h2 className="text-4xl font-black leading-tight text-slate-900 md:text-5xl">
            خدمات العزل المائي<br />والحماية
          </h2>
          <p className="mt-5 max-w-lg text-[16px] leading-[1.75] text-slate-500">
            أنظمة رائدة في الصناعة لكل ركيزة وحالة، باستخدام مواد معتمدة من شركات مصنعة موثوقة.
          </p>

          <ExpandableGrid arabic tone="light" label="عرض جميع الخدمات" className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <Reveal
                  key={svc.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-2xl hover:shadow-cyan-200/40"
                  delay={(i % 3) * 0.02}
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50">
                    <Icon className="h-6 w-6 text-cyan-700" />
                  </div>
                  <h3 className="text-[18px] font-black text-slate-900">{svc.title}</h3>
                  <p className="mt-3 text-[13px] leading-[1.75] text-slate-500">{svc.desc}</p>
                  <span className="mt-5 inline-block rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-[11px] font-semibold text-cyan-700">
                    {svc.tag}
                  </span>
                </Reveal>
              );
            })}
          </ExpandableGrid>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="border-b border-white/[0.08] bg-[#060f1e] px-[5%] py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 inline-flex items-center gap-3 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[2px] text-cyan-300">
            <span dir="ltr">QA</span>
            الثقة والجودة
          </p>
          <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
            أنظمة معتمدة،<br />وفحص في الموقع
          </h2>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal
                  key={item.title}
                  className="rounded-3xl border border-white/[0.08] bg-white/[0.04] p-9"
                  delay={(i % 4) * 0.02}
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                    <Icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-[18px] font-black text-white">{item.title}</h3>
                  <p className="mt-3 text-[13px] leading-[1.75] text-slate-400">{item.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="scroll-mt-[90px] border-b border-white/[0.08] bg-[#0a1929] px-[5%] py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 inline-flex items-center gap-3 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[2px] text-cyan-300">
            <span dir="ltr">03</span>
            أعمالنا
          </p>
          <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
            مشاريع العزل المائي<br />في جميع أنحاء الإمارات
          </h2>
          <p className="mt-5 max-w-3xl text-[16px] leading-[1.8] text-slate-400">
            نفّذت ISFS أعمال العزل المائي والأسطح والأغشية وتغليف الألياف الزجاجية وحماية المناطق الرطبة
            للفلل والأبراج والمراكز التجارية وحمامات السباحة وخزانات المياه والمشاريع التجارية في جميع أنحاء الإمارات.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              // Preview claim: requires owner factual confirmation before production.
              ["100+", "أعمال منجزة"],
              ["20+", "سنوات الخبرة"],
              ["UAE", "تغطية المشاريع"],
              ["18+", "خدمات أساسية"],
            ].map((item) => (
              <div key={item[1]} className="rounded-3xl border border-white/[0.08] bg-white/[0.04] p-6 text-center">
                <p className="text-3xl font-black text-cyan-400" dir="ltr">{item[0]}</p>
                <p className="mt-2 text-[12px] text-slate-400">{item[1]}</p>
              </div>
            ))}
          </div>

          <ExpandableGrid arabic label="عرض جميع المشاريع" className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {deliveredProjects.map((project, i) => (
              <Reveal
                key={project.name}
                className="rounded-3xl border border-white/[0.08] bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.07]"
                delay={(i % 3) * 0.02}
              >
                <p className="text-[17px] font-black text-white" dir="ltr">{project.name}</p>
                <p className="mt-3 text-[13px] font-semibold text-cyan-400">{project.service}</p>
                <p className="mt-2 flex items-center gap-1.5 text-[12px] text-slate-400">
                  <MapPin className="h-3 w-3" /> {project.location}
                </p>
              </Reveal>
            ))}
          </ExpandableGrid>

          <div className="mt-12 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6 text-center">
            <p className="text-[15px] leading-7 text-slate-300">
              محفظة المشاريع الكاملة متاحة عند الطلب — تشمل الفلل والمباني السكنية وخزانات المياه وحمامات السباحة
              ومحطات الخدمة ومخيمات العمال والمشاريع التجارية في دبي والشارقة وعجمان ورأس الخيمة والفجيرة وأم القيوين.
            </p>
            <a href={whatsAppQuoteUrl} target="_blank" rel="noopener noreferrer" className="animated-link mt-4 inline-flex min-h-11 items-center text-[14px] font-bold text-cyan-300">طلب ملف المشاريع وعرض سعر</a>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section id="certifications" className="scroll-mt-[90px] border-b border-slate-200 bg-slate-50 px-[5%] py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 inline-flex items-center gap-3 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[2px] text-cyan-700">
            <span dir="ltr">04</span>
            الشهادات
          </p>
          <h2 className="text-4xl font-black leading-tight text-slate-900 md:text-5xl">شهادات المصنعين والتدريب</h2>
          <p className="mt-5 max-w-lg text-[16px] leading-[1.75] text-slate-500">
            نسخ شهادات المصنعين وإدارة الجودة والتدريب. التواريخ كما تظهر في النسخ؛ يرجى طلب المستندات الحالية للتأكد من الحالة.
          </p>

          <Certificates arabic />
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="scroll-mt-[90px] bg-[#060f1e] px-[5%] py-24">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.04] px-8 py-16 md:px-14">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative z-10 text-center">
              <p className="mx-auto mb-5 inline-flex items-center gap-3 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[2px] text-cyan-300">
                <span dir="ltr">05</span>
                التواصل
              </p>
              <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
                لنحمي
                <br />
                <span className="text-cyan-400">مشروعك معًا</span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-[1.8] text-slate-400">
                تقدم ISFS Technical Services LLC أنظمة العزل المائي والأغشية والعزل الحراري
                وأرضيات الإيبوكسي وأنظمة الحماية التقنية في دبي وجميع أنحاء الإمارات.
              </p>

              <div className="mt-12 grid gap-5 md:grid-cols-3">
                <div className="rounded-3xl border border-white/[0.08] bg-white/[0.04] p-6">
                  <Phone className="mx-auto h-8 w-8 text-cyan-400" />
                  <p className="mt-4 text-[13px] text-slate-400">جهة الاتصال الرئيسية</p>
                  <a
                    href="tel:+971506752786"
                    className="mt-2 block text-[20px] font-black text-white hover:text-cyan-400"
                    dir="ltr"
                  >
                    +971 50 675 2786
                  </a>
                </div>

                <div className="rounded-3xl border border-white/[0.08] bg-white/[0.04] p-6">
                  <Phone className="mx-auto h-8 w-8 text-cyan-400" />
                  <p className="mt-4 text-[13px] text-slate-400">جهة الاتصال الثانوية</p>
                  <a
                    href="tel:+971559004510"
                    className="mt-2 block text-[20px] font-black text-white hover:text-cyan-400"
                    dir="ltr"
                  >
                    +971 55 900 4510
                  </a>
                </div>

                <div className="rounded-3xl border border-white/[0.08] bg-white/[0.04] p-6">
                  <Mail className="mx-auto h-8 w-8 text-cyan-400" />
                  <p className="mt-4 text-[13px] text-slate-400">البريد الإلكتروني</p>
                  <a
                    href="mailto:info@isfstechnicalservices.com"
                    className="mt-2 block break-all text-[15px] font-bold text-white hover:text-cyan-400"
                    dir="ltr"
                  >
                    info@isfstechnicalservices.com
                  </a>
                </div>
              </div>

              <div className="mt-14 rounded-3xl border border-cyan-400/10 bg-cyan-400/5 p-8">
                <h3 className="text-2xl font-black text-white">خدمات تقنية إضافية</h3>
                <div className="mt-6 grid gap-3 text-right sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    "معالجة الخرسانة",
                    "حقن الشقوق",
                    "أعمال البلاط والجص",
                    "تركيب الأسقف المستعارة",
                    "السباكة والصرف الصحي",
                    "عزل الأسطح الحراري",
                    "دعم تكييف الهواء",
                    "الطلاءات الواقية",
                    "صيانة المباني",
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

              <div id="quote" className="mt-14 scroll-mt-[90px]"><QuoteForm arabic serviceOptions={services.map(service => service.title)} /></div>

              <div className="mt-14 overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.04]">
                <iframe
                  title="خريطة منطقة خدمة ISFS في دبي والإمارات"
                  src="https://www.google.com/maps?q=Dubai%2C%20UAE&output=embed"
                  className="h-[320px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="px-5 py-4 text-center text-[13px] text-slate-400">
                  منطقة الخدمة: دبي وجميع إمارات الدولة.
                </div>
              </div>

              <div className="mt-12 flex flex-wrap justify-center gap-3">
                <a
                  href={whatsAppQuoteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-green-500 px-7 py-3.5 text-[14px] font-bold text-white transition-all hover:-translate-y-0.5 hover:opacity-85"
                >
                  <MessageCircle className="h-4 w-4" />
                  واتساب
                </a>
                <a
                  href="tel:+971506752786"
                  className="flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 text-[14px] font-bold text-[#060f1e] transition-all hover:-translate-y-0.5 hover:opacity-85"
                >
                  <Phone className="h-4 w-4" />
                  اتصل الآن
                </a>
              </div>

              <p className="mt-10 text-[13px] text-slate-500">
                ISFS Technical Services LLC • دبي، الإمارات العربية المتحدة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.08] bg-[#020913] px-[5%] py-10">
        <div className="mx-auto grid max-w-7xl gap-8 text-center md:grid-cols-[1.2fr_2fr] md:text-right">
          <div>
            <p className="text-[18px] font-black text-white">ISFS Technical Services LLC</p>
            <p className="mt-2 text-[13px] leading-6 text-slate-500">
              خدمات العزل المائي والأسطح وPU والأغشية والمناطق الرطبة والصيانة الفنية في دبي والإمارات.
            </p>
          </div>
          <div className="grid gap-3 text-[13px] font-semibold text-slate-400 sm:grid-cols-3 md:text-left">
            <a href="#services" className="hover:text-cyan-400">الخدمات</a>
            <a href="#projects" className="hover:text-cyan-400">المشاريع</a>
            <a href="#contact" className="hover:text-cyan-400">التواصل</a>
            <a href="mailto:info@isfstechnicalservices.com" className="break-words hover:text-cyan-400">
              البريد الإلكتروني
            </a>
            <a href="tel:+971506752786" className="hover:text-cyan-400">الهاتف</a>
            <a href={whatsAppQuoteUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
              واتساب
            </a>
          </div>
        </div>
        <p className="mt-8 text-center text-[12px] text-slate-500">
          © {new Date().getFullYear()} <span className="text-cyan-400">ISFS Technical Services LLC</span> — جميع الحقوق محفوظة | دبي، الإمارات
        </p>
      </footer>

      {/* ── FLOATING WHATSAPP ── */}
      <a
        href={whatsAppQuoteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-7 left-7 z-50 flex items-center gap-2.5 rounded-full bg-green-500 px-5 py-3.5 text-[14px] font-bold text-white shadow-2xl shadow-green-500/30 transition-transform hover:scale-105"
      >
        <MessageCircle className="h-5 w-5" />
        واتساب
      </a>
    </main>
  );
}
