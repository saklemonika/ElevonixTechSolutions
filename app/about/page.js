import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import PixelTrail from "@/components/PixelTrail";
import { VALUES, STATS } from "@/lib/data";

export const metadata = {
  title: "About | Elevonix Solutions",
  description:
    "Elevonix Solutions is a team of engineers, designers and strategists helping businesses ship durable software.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line circuit-line py-20 sm:py-24">
        <div className="container-x">
          <p className="eyebrow text-blue">// About Us</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            We help organisations turn ideas into working software.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
            Elevonix Solutions is a team of engineers, designers and
            strategists dedicated to solving real business problems with
            durable technology &mdash; not the flashiest tools, the right ones.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20 sm:py-24">
        <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow text-blue">Our story</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Founded on a simple frustration.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate">
              <p>
                Too many software projects fail quietly &mdash; not with a
                dramatic collapse, but with a slow drift away from what the
                business actually needed. Elevonix started as a reaction to
                that pattern: a small team that insisted on staying close to
                the problem, all the way through delivery.
              </p>
              <p>
                Today we work with startups building their first product and
                established companies modernising decades-old systems. The
                scale changes; our approach doesn&apos;t. We listen closely,
                design deliberately, build in the open, and stay involved
                long after launch day.
              </p>
              <p>
                We&apos;re technology enthusiasts, but we don&apos;t chase
                trends for their own sake. Every recommendation we make is
                grounded in what will actually move your business forward.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-md bg-ink px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue"
            >
              Work with us
            </Link>
          </div>

          <div className="rounded-2xl border border-line bg-ink p-8 sm:p-10">
            <p className="eyebrow text-cyan">Elevonix, in numbers</p>
            <div className="mt-8 grid grid-cols-2 gap-8">
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-semibold text-white">
                    {s.value}
                  </p>
                  <p className="mt-1 text-sm text-white/55">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <PixelTrail count={36} />
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-paper-2 py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="How we work"
            title="What makes us different"
            description="At Elevonix, our approach is grounded in being useful, not just busy. Four principles guide every engagement."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className="card-hover rounded-xl border border-line bg-white p-7"
              >
                <span className="eyebrow text-blue">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                  {v.title}
                </h3>
                <p
                  className="mt-3 text-sm leading-relaxed text-slate"
                  dangerouslySetInnerHTML={{ __html: v.description }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM STRIP */}
      <section className="py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our team"
            title="Engineers, designers, strategists"
            description="A cross-functional team that sits close to the work &mdash; small enough to move fast, experienced enough to know when not to."
          />
          <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {[
              "Product Engineering",
              "Cloud & Platform",
              "AI & Data",
              "Design & Research",
            ].map((dept) => (
              <div
                key={dept}
                className="rounded-xl border border-line bg-white p-6 text-center"
              >
                <p className="font-display text-sm font-semibold text-ink">
                  {dept}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container-x">
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-line bg-white px-8 py-14 text-center sm:px-16">
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              Curious how we&apos;d approach your project?
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-ink px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
