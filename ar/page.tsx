import Image from "next/image";
import Link from "next/link";
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
];

const whyUs = [
  {
    icon: ShieldCheck,
    title: "مطبقون معتمدون",
    desc: "مطبقون معتمدون من الشركة المصنعة مع توثيق التدريب لأنظمة العزل المائي والحماية.",
  },
  {
    icon: Building2,
    title: "خبرة واسعة في الإمارات",
    desc: "سنوات من تنفيذ المشاريع عبر الفلل والمناطق الرطبة والأسطح والخزانات والبودويم والمباني التجارية.",
  },
  {
    icon: Clock,
    title: "التسليم في الوقت المحدد",
    desc: "جدولة موثوقة وفرق موقع سريعة الاستجابة وتواصل واضح للإبقاء على سير العمل بشكل صحيح.",
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

export default function ArabicPage() {
  return (
    <main dir="rtl" className="min-h-screen scroll-smooth overflow-x-hidden bg-[#060f1e] font-sans text-white">

      {/* ── NAVBAR ── */}
      <header className="sticky top-0 z-50 flex h-[70px] items-center justify-between border-b border-white/[0.08] bg-[#060f1e]/90 px-[5%] backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <Image src="/logo.jpg" alt="ISFS Logo" width={80} height={40} className="h-10 w-auto rounded-xl" />
          <div>
            <p className="text-[15px] font-black leading-none tracking-wide">ISFS</p>
            <p className="mt-0.5 text-[10px] tracking-wide text-slate-400">Technical Services LLC</p>
          </div>
        </div>

        <nav className="hidden gap-8 md:flex">
          {[
            ["من نحن", "#about"],
            ["خدماتنا", "#services"],
            ["مشاريعنا", "#projects"],
            ["الشهادات", "#certifications"],
            ["تواصل معنا", "#contact"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-[13px] font-medium text-slate-400 transition-colors hover:text-cyan-400"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="hidden rounded-full border border-white/15 px-4 py-2 text-[13px] font-bold text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400 md:inline-flex"
          >
            English
          </Link>
          <a
            href="tel:+971506752786"
            className="flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-[13px] font-bold text-[#060f1e] transition-opacity hover:opacity-85"
          >
            <Phone className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">اتصل بنا</span>
          </a>
        </div>
      </header>

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
          <div>
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
                href="tel:+971506752786"
                className="flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 text-[14px] font-bold text-[#060f1e] transition-all hover:-translate-y-0.5 hover:opacity-85"
              >
                <Phone className="h-4 w-4" /> اتصل الآن
              </a>
              <a
                href="#services"
                className="flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-[14px] font-semibold text-white transition-all hover:border-cyan-400 hover:text-cyan-400"
              >
                ← عرض الخدمات
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.04]">
              <Image src="/projects-collage.png" alt="مشاريع ISFS" width={1536} height={1024} className="block w-full" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-y border-white/[0.08] bg-[#0a1929] px-[5%] py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { num: "+20", label: "سنوات الخبرة" },
            { num: "+500", label: "مشروع مكتمل" },
            { num: "+10", label: "خدمات أساسية" },
            { num: "UAE", label: "تغطية شاملة" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-black text-cyan-400" dir="ltr">{s.num}</p>
              <p className="mt-1 text-[12px] tracking-wide text-slate-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="bg-white px-[5%] py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[2px] text-cyan-700">من نحن</p>
            <h2 className="text-4xl font-black leading-tight text-slate-900 md:text-5xl">
              أكثر من 20 عامًا من<br />الخبرة التقنية الموثوقة
            </h2>
            <p className="mt-6 text-[16px] leading-[1.85] text-slate-600">
              شركة ISFS Technical Services LLC هي شركة هندسية وخدمات تقنية مقرها الإمارات،
              متخصصة في أنظمة العزل المائي المتقدمة وأنظمة الطلاء الواقي عبر القطاعات السكنية والتجارية والصناعية.
            </p>
            <p className="mt-5 text-[16px] leading-[1.85] text-slate-600">
              تأسست عام 2005 تحت اسم Al Hadaf General Maintenance LLC في عجمان،
              وأعيدت علامتها التجارية عام 2023 لتصبح ISFS Technical Services LLC في دبي،
              وقد بنت الشركة سمعة قوية في التنفيذ الموثوق عبر الإمارات.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="rounded-2xl border border-cyan-100 bg-cyan-50 px-5 py-4">
                <p className="text-3xl font-black text-cyan-700" dir="ltr">20+</p>
                <p className="text-[12px] font-medium text-slate-500">سنوات الخبرة</p>
              </div>
              <div className="rounded-2xl border border-cyan-100 bg-cyan-50 px-5 py-4">
                <p className="text-3xl font-black text-cyan-700" dir="ltr">500+</p>
                <p className="text-[12px] font-medium text-slate-500">مشروع مكتمل</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-slate-200 shadow-2xl">
            <Image src="/about-us.png" alt="فريق ISFS في الموقع" width={1080} height={1456} className="w-full object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="bg-slate-50 px-[5%] py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[2px] text-cyan-700">ما نقدمه</p>
          <h2 className="text-4xl font-black leading-tight text-slate-900 md:text-5xl">
            خدمات العزل المائي<br />والحماية
          </h2>
          <p className="mt-5 max-w-lg text-[16px] leading-[1.75] text-slate-500">
            أنظمة رائدة في الصناعة لكل ركيزة وحالة، باستخدام مواد معتمدة من شركات مصنعة موثوقة.
          </p>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="bg-[#060f1e] px-[5%] py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[2px] text-cyan-400">لماذا ISFS</p>
          <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
            مبني على الخبرة،<br />مدعوم بالشهادات
          </h2>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {whyUs.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/[0.08] bg-white/[0.04] p-9"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                    <Icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-[18px] font-black text-white">{item.title}</h3>
                  <p className="mt-3 text-[13px] leading-[1.75] text-slate-400">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="bg-[#0a1929] px-[5%] py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[2px] text-cyan-400">أعمالنا</p>
          <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
            أكثر من 20 عامًا من المشاريع<br />في جميع أنحاء الإمارات
          </h2>
          <p className="mt-5 max-w-3xl text-[16px] leading-[1.8] text-slate-400">
            نفّذت ISFS أعمال العزل المائي والأسطح والأغشية وتغليف الألياف الزجاجية وحماية المناطق الرطبة
            للفلل والأبراج والمراكز التجارية وحمامات السباحة وخزانات المياه والمشاريع التجارية في جميع أنحاء الإمارات.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              ["+100", "عمل منجز"],
              ["+20", "سنوات الخبرة"],
              ["UAE", "تغطية المشاريع"],
              ["+10", "خدمات أساسية"],
            ].map((item) => (
              <div key={item[1]} className="rounded-3xl border border-white/[0.08] bg-white/[0.04] p-6 text-center">
                <p className="text-3xl font-black text-cyan-400" dir="ltr">{item[0]}</p>
                <p className="mt-2 text-[12px] text-slate-400">{item[1]}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {deliveredProjects.map((project) => (
              <div
                key={project.name}
                className="rounded-3xl border border-white/[0.08] bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.07]"
              >
                <p className="text-[17px] font-black text-white" dir="ltr">{project.name}</p>
                <p className="mt-3 text-[13px] font-semibold text-cyan-400">{project.service}</p>
                <p className="mt-2 flex items-center gap-1.5 text-[12px] text-slate-400">
                  <MapPin className="h-3 w-3" /> {project.location}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6 text-center">
            <p className="text-[15px] leading-7 text-slate-300">
              محفظة المشاريع الكاملة متاحة عند الطلب — تشمل الفلل والمباني السكنية وخزانات المياه وحمامات السباحة
              ومحطات الخدمة ومخيمات العمال والمشاريع التجارية في دبي والشارقة وعجمان ورأس الخيمة والفجيرة وأم القيوين.
            </p>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section id="certifications" className="bg-slate-50 px-[5%] py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[2px] text-cyan-700">الشهادات</p>
          <h2 className="text-4xl font-black leading-tight text-slate-900 md:text-5xl">معتمدون ومعترف بنا</h2>
          <p className="mt-5 max-w-lg text-[16px] leading-[1.75] text-slate-500">
            اعتمادات الشركات المصنعة ووثائق إدارة الجودة وشهادات التدريب التي تمنحك الثقة الكاملة.
          </p>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div
                key={num}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <Image
                  src={`/certificate${num}.jpeg`}
                  alt={`شهادة ISFS ${num}`}
                  width={881}
                  height={842}
                  className="h-[220px] w-full object-contain p-4"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="border-t border-slate-100 bg-slate-50 px-4 py-3 text-center text-[12px] font-semibold text-cyan-700">
                  شهادة تطبيق {num}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="bg-[#060f1e] px-[5%] py-24">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.04] px-8 py-16 md:px-14">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative z-10 text-center">
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

              <div className="mt-12 flex flex-wrap justify-center gap-3">
                <a
                  href="https://wa.me/971506752786"
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
      <footer className="border-t border-white/[0.08] bg-[#020913] px-[5%] py-8 text-center">
        <p className="text-[12px] text-slate-500">
          © {new Date().getFullYear()} <span className="text-cyan-400">ISFS Technical Services LLC</span> — جميع الحقوق محفوظة | دبي، الإمارات
        </p>
      </footer>

      {/* ── FLOATING WHATSAPP ── */}
      <a
        href="https://wa.me/971506752786"
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
