import Image from "next/image";
import Link from "next/link";
import AboutReveal from "./AboutReveal";

// Faithful HTML adaptation of the original company profile. Company history and
// experience are supplied by ISFS; no new counts or independently verified status.
const copy = {
  en: {
    eyebrow: "Who we are · ISFS Technical Services LLC",
    title: "UAE roots. On-site expertise. Lasting protection.",
    intro: "ISFS Technical Services LLC is a UAE-based engineering and technical services company specializing in waterproofing and surface protection systems for residential, commercial and industrial projects.",
    expertise: "Our work brings together roof, membrane and PU waterproofing, wet-area protection, coatings, insulation, GRP, concrete treatment and technical maintenance across Dubai and the UAE.",
    caption: "Waterproofing work from the ISFS project portfolio.",
    photoAlts: ["Roof coating application shown in the ISFS project portfolio", "Waterproofing application at a wall-to-roof junction", "Surface finishing and coating detail from the ISFS project portfolio"],
    history: "From Ajman beginnings to Dubai growth",
    established: "Established in Ajman",
    establishedText: "The business began in 2005 as Al Hadaf General Maintenance LLC in Ajman, building its experience in maintenance and waterproofing-related technical works across the UAE.",
    rebrand: "Rebranded as ISFS in Dubai",
    rebrandText: "In 2023, the business rebranded as ISFS Technical Services LLC in Dubai, continuing its focus on waterproofing, roofing, coatings and technical project support.",
    experience: "Experience built on site",
    experienceText: "Rooted in the company’s 2005 beginnings, our experience spans residential, commercial and industrial work. Modern application methods and skilled teams support the delivery of waterproofing and protection systems.",
    quality: "Quality at every stage",
    qualityText: "Our approach combines site assessment, suitable system selection and quality control, with a commitment to reliable workmanship, durable protection and client satisfaction.",
    support: "A long-term working relationship",
    supportText: "From initial consultation and project planning to completion and after-service support, ISFS focuses on clear coordination and long-term client relationships.",
    quote: "Request a Quotation", more: "More about ISFS", details: "Experience across different project settings",
    sectors: ["Villas and private residences", "Residential towers and apartments", "Commercial buildings and malls", "Roofs, podiums, basements and wet areas", "Water tanks, swimming pools and service areas", "Industrial, warehouse and maintenance facilities"],
    documents: "Documentation & project support",
    credentials: ["Manufacturer applicator documentation", "Manufacturer training certificates", "Waterproofing system QA-QC records", "Flood test and handover support"],
    documentNote: "Review the published certificate scans and request current documentation for your proposed system.", certificates: "View certificate records",
  },
  ar: {
    eyebrow: "من نحن · ISFS Technical Services LLC",
    title: "جذور في الإمارات. خبرة في الموقع. حماية تدوم.",
    intro: "شركة ISFS Technical Services LLC هي شركة هندسية وخدمات فنية مقرها الإمارات، متخصصة في أنظمة العزل المائي وحماية الأسطح للمشاريع السكنية والتجارية والصناعية.",
    expertise: "تشمل أعمالنا عزل الأسطح والأغشية والبولي يوريثان والمناطق الرطبة، والطلاءات والعزل الحراري وتغليف الألياف الزجاجية ومعالجة الخرسانة والصيانة الفنية في دبي والإمارات.",
    caption: "صور أعمال العزل المائي من ملف مشاريع ISFS.",
    photoAlts: ["تطبيق طلاء عازل للأسطح من ملف مشاريع ISFS", "تطبيق العزل المائي عند التقاء الجدار بالسطح", "تفاصيل تشطيب السطح والطلاء من ملف مشاريع ISFS"],
    history: "من البداية في عجمان إلى النمو في دبي",
    established: "التأسيس في عجمان",
    establishedText: "بدأت الأعمال في عام 2005 باسم شركة الهدف للصيانة العامة ذ.م.م في عجمان، لتطوير الخبرة في أعمال الصيانة والخدمات الفنية المرتبطة بالعزل المائي في الإمارات.",
    rebrand: "إعادة إطلاق الهوية باسم ISFS في دبي",
    rebrandText: "في عام 2023، أعادت الشركة إطلاق هويتها باسم ISFS Technical Services LLC في دبي، مع مواصلة التركيز على العزل المائي والأسطح والطلاءات والدعم الفني للمشاريع.",
    experience: "خبرة تنمو في مواقع العمل",
    experienceText: "تمتد خبرة الشركة منذ بدايتها في عام 2005 إلى المشاريع السكنية والتجارية والصناعية. وتدعم أساليب التطبيق الحديثة والفرق الماهرة تنفيذ أنظمة العزل والحماية.",
    quality: "الجودة في كل مرحلة",
    qualityText: "يجمع نهجنا بين تقييم الموقع واختيار النظام المناسب وضبط الجودة، مع الالتزام بجودة التنفيذ والحماية طويلة الأمد ورضا العملاء.",
    support: "علاقة عمل طويلة الأمد",
    supportText: "من الاستشارة الأولى وتخطيط المشروع إلى الإنجاز ودعم ما بعد الخدمة، تركز ISFS على التنسيق الواضح وبناء علاقات مستمرة مع العملاء.",
    quote: "طلب عرض سعر", more: "المزيد عن ISFS", details: "خبرة في بيئات مشاريع متنوعة",
    sectors: ["الفلل والمساكن الخاصة", "الأبراج والشقق السكنية", "المباني التجارية والمراكز التجارية", "الأسطح والبوديوم والأقبية والمناطق الرطبة", "خزانات المياه وحمامات السباحة ومناطق الخدمات", "المرافق الصناعية والمستودعات وأعمال الصيانة"],
    documents: "المستندات ودعم المشاريع",
    credentials: ["وثائق تطبيق الأنظمة من المصنعين", "شهادات تدريب المصنعين", "سجلات ضبط جودة أنظمة العزل", "دعم اختبار الغمر والتسليم"],
    documentNote: "راجع نسخ الشهادات المنشورة واطلب المستندات الحالية الخاصة بالنظام المقترح لمشروعك.", certificates: "عرض نسخ الشهادات",
  },
};

function ProjectPhoto({ column, row, alt, className = "", eager = false }: { column: number; row: number; alt: string; className?: string; eager?: boolean }) {
  // Crop individual photographs using CSS only: preserve the original file and
  // its pixels, rather than generating or attributing new project photography.
  return <div className={`relative aspect-square overflow-hidden rounded-2xl bg-slate-100 ${className}`}>
    <Image src="/projects-collage.png" alt={alt} width={1536} height={1024} loading={eager ? "eager" : "lazy"} sizes="(max-width: 768px) 180vw, 110vw" className="absolute max-w-none" style={{ width: "308%", height: "205.333%", left: `${-1.6 - column * 102}%`, top: `${-1.6 - row * 102}%` }} />
  </div>;
}

export default function AboutSection({ arabic = false, fullPage = false }: { arabic?: boolean; fullPage?: boolean }) {
  const c = copy[arabic ? "ar" : "en"];
  const Heading = fullPage ? "h1" : "h2";
  const Subheading = fullPage ? "h2" : "h3";
  return <section id="about" data-about-section lang={arabic ? "ar" : "en"} dir={arabic ? "rtl" : "ltr"} className="scroll-mt-[90px] border-b border-slate-200 bg-white px-[5%] py-14 text-slate-900 md:py-20">
    <div className="mx-auto max-w-7xl">
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
        <AboutReveal>
          <p className="text-[11px] font-bold uppercase tracking-[2px] text-cyan-700">{c.eyebrow}</p>
          <Heading className="mt-5 max-w-xl text-3xl font-black leading-tight md:text-5xl">{c.title}</Heading>
          <p className="mt-6 text-base leading-8 text-slate-600">{c.intro}</p>
          <p className="mt-4 text-[15px] leading-7 text-slate-600">{c.expertise}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href={arabic ? "/ar#quote" : "/contact#quote"} className="animated-pill inline-flex min-h-12 items-center rounded-full bg-cyan-600 px-6 py-3 text-sm font-bold text-white hover:bg-cyan-700">{c.quote}</Link>
            {!fullPage && <Link href="/about" className="animated-link inline-flex min-h-12 items-center px-3 py-3 text-sm font-bold text-cyan-700">{c.more} →</Link>}
            {fullPage && <Link href="/ar#about" lang="ar" className="animated-link inline-flex min-h-12 items-center px-3 py-3 text-sm font-bold text-cyan-700">من نحن بالعربية</Link>}
          </div>
        </AboutReveal>
        <AboutReveal>
          <figure>
            <div className="grid grid-cols-3 items-start gap-3">
              <ProjectPhoto column={1} row={0} alt={c.photoAlts[0]} className="col-span-2" eager={fullPage} />
              <div className="grid gap-3"><ProjectPhoto column={2} row={0} alt={c.photoAlts[1]} /><ProjectPhoto column={1} row={1} alt={c.photoAlts[2]} /></div>
            </div>
            <figcaption className="mt-3 text-xs leading-6 text-slate-500">{c.caption}</figcaption>
          </figure>
        </AboutReveal>
      </div>
      <AboutReveal className="mt-10 rounded-3xl bg-[#071521] p-6 text-white md:mt-12 md:p-9">
        <Subheading className="text-2xl font-black md:text-3xl">{c.history}</Subheading>
        <ol className="mt-7 grid gap-7 md:grid-cols-2 md:gap-10">
          {[{ year: "2005", title: c.established, text: c.establishedText }, { year: "2023", title: c.rebrand, text: c.rebrandText }].map(item => <li key={item.year} className="relative border-s-2 border-cyan-400/40 ps-6">
            <span className="absolute -start-[6px] top-1 h-2.5 w-2.5 rounded-full bg-cyan-400" />
            <time dateTime={item.year} className="text-3xl font-black text-cyan-400" dir="ltr">{item.year}</time>
            <p className="mt-2 text-base font-bold">{item.title}</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
          </li>)}
        </ol>
      </AboutReveal>
      <div className="mt-9 grid gap-7 md:grid-cols-3 md:gap-8">
        {[{ title: c.experience, text: c.experienceText }, { title: c.quality, text: c.qualityText }, { title: c.support, text: c.supportText }].map(item => <AboutReveal key={item.title} className="border-t-2 border-cyan-100 pt-5"><Subheading className="text-lg font-black">{item.title}</Subheading><p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p></AboutReveal>)}
      </div>
      {fullPage && <div className="mt-10 grid gap-8 border-t border-slate-200 pt-8 lg:grid-cols-2">
        <AboutReveal><Subheading className="text-2xl font-black">{c.details}</Subheading><ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-600 sm:grid-cols-2">{c.sectors.map(item => <li key={item}>{item}</li>)}</ul></AboutReveal>
        <AboutReveal><Subheading className="text-2xl font-black">{c.documents}</Subheading><ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-600">{c.credentials.map(item => <li key={item}>{item}</li>)}</ul><p className="mt-4 text-sm leading-7 text-slate-600">{c.documentNote}</p><Link href="/#certifications" className="animated-link mt-3 inline-flex min-h-11 items-center font-bold text-cyan-700">{c.certificates} →</Link></AboutReveal>
      </div>}
    </div>
  </section>;
}
