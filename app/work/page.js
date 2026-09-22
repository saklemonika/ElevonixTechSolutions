import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { WORK } from "@/lib/data";

export const metadata = {
  title: "Our Work | Elevonix Solutions",
  description:
    "A selection of web platforms, mobile apps and cloud migrations delivered by Elevonix Solutions.",
};

export default function WorkPage() {
  return (
    <>
      <section className="border-b border-line circuit-line py-20 sm:py-24">
        <div className="container-x">
          <p className="eyebrow text-blue">// Our Work</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Projects we&apos;ve taken from sketch to production.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
            A sample of the platforms, apps and systems we&apos;ve built
            across fintech, logistics, retail, healthcare and manufacturing.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WORK.map((w) => (
              <div
                key={w.slug}
                className="card-hover group overflow-hidden rounded-xl border border-line bg-white"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={w.image}
                    alt={w.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-4 left-5">
                    <p className="eyebrow text-white/85 bg-black/50 px-2 py-1 rounded">
                      {w.category}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {w.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {w.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-slate">
            Case studies shown are illustrative summaries of representative
            project work. Full case studies with metrics are available on
            request.
          </p>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-paper-2 py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Where we work"
            title="Industries we serve"
            description="We stay agile enough to adapt to each domain's specific demands."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {[
              "FinTech",
              "Healthcare",
              "Retail & E-Commerce",
              "Logistics",
              "Manufacturing",
              "Education",
              "Travel & Hospitality",
              "SaaS & Startups",
            ].map((ind) => (
              <div
                key={ind}
                className="rounded-lg border border-line bg-white px-5 py-4 text-center text-sm font-medium text-ink"
              >
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-x">
          <div className="flex flex-col items-center gap-6 rounded-2xl bg-ink px-8 py-14 text-center text-white sm:px-16">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Have a project in mind? Let&apos;s see if we&apos;re a fit.
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-cyan"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
