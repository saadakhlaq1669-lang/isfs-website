export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#071521] text-white">

      {/* HERO */}
      <section className="border-b border-white/[0.08] px-[6%] py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[3px] text-cyan-400">
            About ISFS
          </p>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            Building Trust Through
            <br />
            Technical Excellence
          </h1>

          <p className="mt-8 max-w-3xl text-[17px] leading-8 text-slate-400">
            ISFS Technical Services LLC is a UAE-based engineering and
            waterproofing company specializing in advanced membrane systems,
            roof waterproofing, wet area protection, GRP lining, insulation,
            and technical construction solutions across residential,
            commercial, and industrial developments.
          </p>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="px-[6%] py-24">
        <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2">

          <div>
            <h2 className="text-3xl font-black">
              Nearly Two Decades
              <br />
              of Experience
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              Established in 2005, ISFS Technical Services LLC has built a
              strong reputation for delivering reliable waterproofing and
              technical contracting solutions throughout the UAE.
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              Our company combines skilled manpower, modern technologies,
              strict quality standards, and professional project management
              to ensure every project is delivered with precision,
              durability, and long-term performance.
            </p>
          </div>

          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-10">
            <div className="grid grid-cols-2 gap-8">

              <div>
                <p className="text-5xl font-black text-cyan-400">19+</p>
                <p className="mt-2 text-slate-400">
                  Years Experience
                </p>
              </div>

              <div>
                <p className="text-5xl font-black text-cyan-400">100+</p>
                <p className="mt-2 text-slate-400">
                  Completed Projects
                </p>
              </div>

              <div>
                <p className="text-5xl font-black text-cyan-400">UAE</p>
                <p className="mt-2 text-slate-400">
                  Nationwide Coverage
                </p>
              </div>

              <div>
                <p className="text-5xl font-black text-cyan-400">24/7</p>
                <p className="mt-2 text-slate-400">
                  Technical Support
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-[#0b1d2c] px-[6%] py-24">
        <div className="mx-auto max-w-6xl">

          <h2 className="text-center text-4xl font-black">
            Our Core Principles
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {[
              "Integrity & Transparency",
              "Quality Excellence",
              "Safety First",
              "Customer Commitment",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-8 text-center"
              >
                <p className="font-semibold text-white">
                  {item}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

    </main>
  );
}
